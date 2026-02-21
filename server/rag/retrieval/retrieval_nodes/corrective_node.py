from langchain_core.prompts import ChatPromptTemplate
from rag.retrieval.retrieval_state import Retrieval_State
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field
from typing import Literal
import os
from dotenv import load_dotenv

load_dotenv()

corrective_llm = ChatOpenAI(
    model="openai/gpt-oss-120b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    reasoning_effort="high",
    max_retries=2,
    top_p=0.95,
)

corrective_agent_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are an expert Corrective RAG (CRAG) Evaluator Agent in a production system. Your primary 
    responsibility is to analyze a synthesized response against a user's query to determine if the response is 
    complete, accurate, and adequately supported by the retrieved context.

If the response lacks sufficient information or states that the context is insufficient, your job is to instruct the 
system to retrieve more information by increasing the chunk number, provided it does not exceed the total chunks 
available in the VectorDB.

### [EVALUATION GUIDELINES]
1. Analyze Completeness: Does the synthesized response fully answer the user query? 
2. Detect Missing Context: Look for key phrases like "I don't know," "The provided context does not mention."
3. Assess Constraints: Check if current_chunk_number is less than total_chunks_in_vectordb.

### [DECISION LOGIC] - Scenario A (Success): Response answers the query. -> goto: "END", chunk_number stays same. - 
Scenario B (Needs More Context): Response is incomplete AND current_chunk_number < total_chunks_in_vectordb. -> goto: 
"Retriever", increase chunk_number by 2-5. - Scenario C (Max Context Reached): Response incomplete BUT 
current_chunk_number >= total_chunks_in_vectordb. -> goto: "END", chunk_number stays same."""),

    ("user", """
    total_chunks_in_vectordb: {total_chunks_in_vectordb}
    current_chunk_number: {current_chunk_number}
    user_query: {user_query}
    synthesized_response: {synthesized_response}
    """)
])


class Corrective_Agent_Output_Structure(BaseModel):
    chunk_number: int = Field(description="The updated number of chunks to retrieve.")
    suggestions: str = Field(description="Explanation of what is missing and what context to look for.")
    goto: Literal["END", "Retriever"] = Field(description="Routing instruction. Must be END or Retriever.")


corrective_llm_with_structured_output = corrective_llm.with_structured_output(Corrective_Agent_Output_Structure)
corrective_agent_chain = corrective_agent_prompt | corrective_llm_with_structured_output


async def get_response_suggestions(state: Retrieval_State) -> dict:
    try:
        error = ""

        if state.error:
            error = state.error

        result = await corrective_agent_chain.ainvoke({
            "error": {error},
            "total_chunks_in_vectordb": state.total_number_of_chunks,
            "current_chunk_number": state.retrieve_chunks,
            "user_query": state.user_query,
            "synthesized_response": state.response
        })

        return {
            "retrieve_chunks": result.chunk_number,
            "response": state.response,
            "goto": result.goto,
            "suggestions": result.suggestions,
            "iterations": state.iterations+1
        }

    except Exception as e:
        print(f"Corrective Error: {e}")
        return {
            "goto": "END",
            "error": f"Error occurred during correcting the response: {e}"
        }
