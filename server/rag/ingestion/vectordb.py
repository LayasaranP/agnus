from upstash_vector import Index
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

index = Index(url=os.getenv("UPSTASH_VECTOR_REST_URL"), token=os.getenv("UPSTASH_VECTOR_REST_TOKEN"))


def add_vectors(docs: List):
    return index.upsert(
        vectors=docs
    )
