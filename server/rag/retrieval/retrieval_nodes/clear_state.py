from rag.retrieval.retrieval_state import Retrieval_State


def clear_state(state: Retrieval_State) -> dict:
    try:
        return {
            "user_query": state.user_query,
            "decomposed_query": [],
            "total_number_of_chunks": 0,
            "retrieve_chunks": 5,
            "response": "",
            "goto": None,
            "error": "",
            "suggestions": "",
            "iterations": 0
        }
    except Exception as e:
        return {
            "error": "error occurred during clearing the state: {e}"
        }
