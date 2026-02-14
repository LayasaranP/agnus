from langchain_text_splitters import RecursiveCharacterTextSplitter
from typing import List

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=650,
    chunk_overlap=100,
    separators=["\n\n", "\n", ". "]
)


def get_text_splitter(text: str) -> List:
    return text_splitter.split_text(text)
