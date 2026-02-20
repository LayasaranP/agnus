from pinecone import Pinecone
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

pc = Pinecone(api_key=os.getenv("pinecone"))

dense_index = pc.Index(host="https://agentic-study-q7lpsts.svc.aped-4627-b74a.pinecone.io")


def add_records(records: List):
    try:
        print("embedded")
        info = dense_index.upsert(vectors=records, namespace="example")
        return info

    except Exception as e:
        print(f"Failed to upload the records to vector DB: {e}")
