from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from rag.retrieval.retrieval_state import Retrieval_State
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

# ---------------------------
# LLM
# ---------------------------
llm = ChatOpenAI(
    model="openai/gpt-oss-20b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    max_retries=2,
    top_p=0.95,
)


# ---------------------------
# Structured Output Schema
# ---------------------------
class DecompositionOutput(BaseModel):
    queries: List[str]


structured_llm = llm.with_structured_output(DecompositionOutput)

# ---------------------------
# CLEAN SYSTEM PROMPT
# ---------------------------
decomposer_system_prompt = """ You are an expert Query Decomposition Agent.

Your task is to transform a user query into a list of one or more
independent, self-contained sub-queries.

DECOMPOSITION GUIDELINES:

1. If the query mentions multiple distinct entities, topics, or attributes
   joined by words like "and", "or", "as well as", or commas,
   you MUST split them into separate sub-queries — even if they appear
   in a single sentence.

2. If the query contains multiple questions, comparisons,
   or sequential reasoning steps, break it into independent sub-queries.

3. If the query truly represents a single atomic intent
   (one subject + one action), return it unchanged as a single-item list.

4. Each sub-query must:
   - Be fully self-contained
   - Contain no pronouns or ambiguous references
   - Preserve the exact meaning of the original query

5. Never merge multiple topics into one query.
   Prefer splitting when in doubt.

Return only a list of strings.
"""

# ---------------------------
# Prompt
# ---------------------------
prompt = ChatPromptTemplate.from_messages([
    ("system", decomposer_system_prompt),
    ("human", "{user_query}")
])

# ---------------------------
# Chain
# ---------------------------
decomposer_chain = prompt | structured_llm


async def get_decomposed_user_query(state: Retrieval_State):
    try:
        result: DecompositionOutput = await decomposer_chain.ainvoke({
            "user_query": state.user_query
        })

        return {
            "decomposed_query": result.queries
        }

    except Exception as e:
        print(f"Error occurred during decomposition: {e}")
        return {}
