from agentic_rag.chains import propositions_chunk_chain


def get_propositions(text: str) -> str:
    try:
        print("Chunking")
        chunks = propositions_chunk_chain.invoke({"input": text}).content
        return chunks[chunks.find("[")+1:chunks.find("]")]
    except Exception as e:
        print(f"Error: {e}")
