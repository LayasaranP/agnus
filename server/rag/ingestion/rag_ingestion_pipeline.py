from rag.ingestion.content_extraction import get_extracted_content_from_source
from rag.ingestion.text_splitter import get_text_splitter
from rag.ingestion.vectordb import add_vectors


def rag_pipeline(file_path: str):
    extracted_content = get_extracted_content_from_source(file_path)
    chunks = get_text_splitter(extracted_content)
    return add_vectors(chunks)
