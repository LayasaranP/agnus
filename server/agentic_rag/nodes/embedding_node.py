from google import genai
import numpy as np
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("gemini"))


def embeddings(text: str):
    try:
        result = client.models.embed_content(
            model="models/gemini-embedding-001",
            contents=text,
            config={
                'task_type': 'RETRIEVAL_DOCUMENT',
                'output_dimensionality': 768
            }
        )

        embedding = result.embeddings[0].values

        vec = np.array(embedding)

        if len(embedding) != 3072:
            normalized = vec / np.linalg.norm(vec)
            return normalized
        else:
            normalized = vec
            return normalized

    except Exception as e:
        print(f"Error: {e}")
