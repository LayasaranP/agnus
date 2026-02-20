from langchain_text_splitters import RecursiveCharacterTextSplitter
from typing import List
import uuid
from upstash_vector import Vector

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=400,
    chunk_overlap=100,
    separators=["\n\n", "\n", " ", ""]
)


def get_text_splitter(text: str) -> List:
    chunks = text_splitter.split_text(text)
    docs = []
    for i in chunks:
        docs.append(
            Vector(
                id=str(uuid.uuid4()),
                data=i,
                metadata={"text": i}
            )
        )
    return docs
