from rag.ingestion.vectordb import index
from rag.retrieval.retrieval_state import Retrieval_State


def get_chunks(state: Retrieval_State):
    try:
        query_results = ""

        for i in state.decomposed_query:
            results = index.query(
                data=i,
                include_metadata=True,
                include_data=True,
                include_vectors=False,
                top_k=7,
            )
            for result in results:
                query_results += result.metadata["text"]

        return {
            "response": query_results
        }

    except Exception as e:
        print(f"Error occurred during query search: {e}")
        return {}
