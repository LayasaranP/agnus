from pathlib import Path
from langchain_community.document_loaders import PyMuPDFLoader


def data_ingestion(file_path: str):
    """
    Load a PDF file using PyMuPDFLoader and return the documents.
    Returns: list of Document objects or error message string.
    """
    path = Path(file_path)

    if not path.is_file():
        return f"File not found: {path.resolve()}\nCurrent working directory: {Path.cwd()}"

    try:
        loader = PyMuPDFLoader(str(path))
        docs = loader.load()

        if not docs:
            return "No pages/content loaded from the PDF"

        print(f"Successfully loaded {len(docs)} document(s) (pages)")
        print("Metadata of first page:", docs[0].metadata)
        print("\nFirst 300 characters of first page content:\n")
        print(docs[0].page_content[:300] + "..." if len(docs[0].page_content) > 300 else docs[0].page_content)


    except ImportError as e:
        return f"Missing dependency: {e}\nRun: pip install langchain-community pymupdf"
    except Exception as e:
        return f"Error loading PDF: {type(e).__name__} - {str(e)}"


if __name__ == "__main__":
    result = data_ingestion("./text.pdf")

    print("\nResult type:", type(result))
    if isinstance(result, str):
        print("Error message:", result)
    else:
        print("Documents loaded successfully!")
