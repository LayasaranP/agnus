from agentic_rag.chains import propositions_chunk_summary_chain
from typing import List


def get_summary(propositions: List) -> str:
    try:
        print("summary")
        summary = propositions_chunk_summary_chain.invoke({"propositions_list": propositions}).content
        return summary
    except Exception as e:
        print(f"Error: {e}")
