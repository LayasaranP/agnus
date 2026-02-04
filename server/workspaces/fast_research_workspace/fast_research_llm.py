from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

load_dotenv()


fast_research_planner_llm = ChatOpenAI(
    model="qwen/qwen3-32b",
    temperature=0.1,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
)

fast_research_query_expand_llm = ChatOpenAI(
    model="openai/gpt-oss-20b",
    temperature=0.4,
    api_key=os.getenv("groq"),  
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    reasoning_effort="high"
)
