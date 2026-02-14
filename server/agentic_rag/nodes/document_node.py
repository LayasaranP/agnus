from agentic_rag.nodes.propositions_chunk_node import get_propositions
from agentic_rag.nodes.propositions_grouping_node import get_propositions_grouping
from agentic_rag.nodes.propositions_chunk_summary_node import get_summary
from agentic_rag.nodes.propositions_summary_title_node import get_title
from agentic_rag.nodes.embedding_node import embeddings
from agentic_rag.nodes.vectordb_node import add_records
from typing import List
import uuid

documents = []


def create_document_and_metadata(text: str) -> List:
    try:
        propositions = get_propositions(text)
        grouping = get_propositions_grouping(propositions)
        for i, group in enumerate(grouping):
            page_content = "".join(group)
            metadata = {
                "chunk_id": str(uuid.uuid4()),
                "propositions": group
            }
            documents.append(
                {
                    "id": str(uuid.uuid4()),
                    "values": (embeddings(page_content)).tolist(),
                    "metadata": metadata
                })
        return documents
    except Exception as e:
        print(f"Error: {e}")
