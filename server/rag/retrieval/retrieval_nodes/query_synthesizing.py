from langchain.agents import create_agent
from langchain_openai import ChatOpenAI
from rag.retrieval.retrieval_state import Retrieval_State
import os
from dotenv import load_dotenv

load_dotenv()

synthesizer_llm = ChatOpenAI(
    model="openai/gpt-oss-120b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    reasoning_effort="high",
    max_retries=2,
    top_p=0.95,
)

synthesizer_prompt = """ You are an expert Information Synthesizing Agent. Your sole objective is to answer the user's query accurately and comprehensively using ONLY the provided retrieved context chunks.

### CORE RULES & GUARDRAILS:

1. **Strict Grounding:** You must base your answer entirely on the provided context chunks. Absolutely DO NOT use external knowledge, prior training data, or make assumptions.

2. **Handling Information Gaps (Priority Logic):**
   - **Scenario A (No Information):** If the provided context chunks do not contain ANY relevant information to answer the query, you must output exactly: 
     "The provided context does not contain sufficient information to answer this query."
   - **Scenario B (Partial Information):** If the context contains SOME information to answer part of the query but is missing details, synthesize the available information and append exactly this sentence at the end: 
     "For the rest of the content, please search the internet; the provided source does not contain the full answer."
   - **Scenario C (Complete Information):** If the context contains all necessary information, provide the full synthesized answer.

3. **Zero Conversational Filler:** Output ONLY the final synthesized answer. Do not include phrases like "Based on the provided context...", "Here is the answer...", or "According to chunk 2...". Start directly with the facts.

4. **Synthesize, Don't Just Extract:** If the answer spans multiple chunks, combine the information into a coherent, logically flowing response. Resolve any contradictions based strictly on what is written in the text.

5. **Strict Relevance:** Answer exactly what the user asked. Do not include extra, unprompted information just because it exists in the context chunks.

### INPUT FORMAT:
You will receive the user's query and the retrieved chunks in the following format:
<query>
{user_query}
</query>

<context>
{context_chunks}
</context>

### OUTPUT FORMAT:
Return ONLY a single plain text string containing your synthesized answer. No JSON, no pleasantries, no markdown headers.
"""

synthesizer_agent = create_agent(
    synthesizer_llm,
    system_prompt=synthesizer_prompt
)


async def get_final_synthesized_response(state: Retrieval_State):
    try:
        response = ""
        if state.iterations > 1:
            response = (f"Improve the response based on the given suggestion: \n\n"
                        f"<Suggestion>{state.suggestions}</Suggestion> \n\n<Response>{state.response}</Response>")
        result = await synthesizer_agent.ainvoke({
            "messages": [
                {
                    "role": "user",
                    "content": f"<query>{state.user_query}</query>\n<context>{response}</context>"
                }
            ]
        })

        final_answer = result["messages"][-1].content

        return {
            "response": final_answer
        }

    except Exception as e:
        print(f"Error occurred during synthesizing: {e}")
        return {
            "error": f"Error occurred during synthesizing the response: {e}"
        }
