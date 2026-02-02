from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(
    model="llama-3.3-70b-versatile",
    temperature=0.1,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)

llm1 = ChatOpenAI(
    model="llama-3.1-8b-instant",
    temperature=0.0,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)


llm2 = ChatOpenAI(
    model="moonshotai/kimi-k2-instruct-0905",
    temperature=0.1,
    api_key=os.getenv("groq"),
    base_url="https://api.groq.com/openai/v1",
    stream_usage="False",
    max_retries=2,
    top_p=0.95
)
