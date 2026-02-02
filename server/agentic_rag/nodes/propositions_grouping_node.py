from agentic_rag.chains import propositions_chunk_grouping_chain
from typing import List


def get_propositions_grouping(chunks: str) -> List:
    try:
        print("Grouping the Propositions")
        groups = propositions_chunk_grouping_chain.invoke({"propositions": chunks})
        return groups["groups"]
    except Exception as e:
        print(f"Error: {e}")
