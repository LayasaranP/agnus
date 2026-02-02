from pinecone import Pinecone
from pinecone import ServerlessSpec
import os
from dotenv import load_dotenv

load_dotenv()

pc = Pinecone(api_key=os.getenv("pinecone"))

index_name = "agentic-study"
if not pc.has_index(index_name):
    pc.create_index(
        name=index_name,
        metric="cosine",
        dimension=768,
        vector_type="dense",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        ),
        deletion_protection="disabled",
        tags={
            "environment": "development"
        }
    )
