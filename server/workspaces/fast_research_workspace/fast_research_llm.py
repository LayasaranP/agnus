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

fast_research_synthesizer_llm1 = ChatOpenAI(
    model="llama-3.3-70b-versatile",
    temperature=0.4,
    api_key=os.getenv("groq"),  
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
)

fast_research_synthesizer_llm2 = ChatOpenAI(
    model="llama-3.1-8b-instant",
    temperature=0.4,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
)
