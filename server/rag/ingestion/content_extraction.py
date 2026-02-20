from langchain_community.document_loaders import PyMuPDFLoader


def get_extracted_content_from_source(source_path: str) -> str:
    loader = PyMuPDFLoader(source_path)
    docs = loader.load()
    return docs[0].page_content
