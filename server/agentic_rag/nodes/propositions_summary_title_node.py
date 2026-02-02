from agentic_rag.chains import propositions_chunk_summary_title_chain


def get_title(summary: str) -> str:
    try:
        print("Title")
        title = propositions_chunk_summary_title_chain.invoke({"text_chunk": summary}).content
        return title
    except Exception as e:
        print(f"Error: {e}")
