from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

deep_research_planner_llm = ChatOpenAI(
    model="openai/gpt-oss-120b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    reasoning_effort="high",
    max_retries=2,
    top_p=0.95,
)

deep_research_decomposer_llm = ChatOpenAI(
    model="openai/gpt-oss-20b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    reasoning_effort="medium",
    max_retries=2,
    top_p=0.95
)

deep_research_structuring_llm = ChatOpenAI(
    model="llama-3.1-8b-instant",
    temperature=0.1,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)

deep_research_synthesizer_llm = ChatOpenAI(
    model="llama-3.3-70b-versatile",
    temperature=0.1,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)

deep_research_reflection_llm = ChatOpenAI(
    model="openai/gpt-oss-120b",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)
