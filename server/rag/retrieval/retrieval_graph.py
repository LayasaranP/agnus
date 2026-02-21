from langgraph.graph import StateGraph, START, END
from rag.retrieval.retrieval_nodes.vector_search import get_chunks
from rag.retrieval.retrieval_nodes.query_synthesizing import get_final_synthesized_response
from rag.retrieval.retrieval_nodes.query_decompositon import get_decomposed_user_query
from rag.retrieval.retrieval_nodes.corrective_node import get_response_suggestions
from rag.retrieval.retrieval_nodes.routing_node import routing
from rag.retrieval.retrieval_nodes.clear_state import clear_state
from rag.retrieval.retrieval_state import Retrieval_State

retrieval_graph = StateGraph(Retrieval_State)

retrieval_graph.add_node("Decomposer", get_decomposed_user_query)
retrieval_graph.add_node("Retriever", get_chunks)
retrieval_graph.add_node("Synthesizer", get_final_synthesized_response)
retrieval_graph.add_node("Corrective", get_response_suggestions)
retrieval_graph.add_node("Clear_State", clear_state)

retrieval_graph.add_edge(START, "Clear_State")
retrieval_graph.add_edge("Clear_State", "Decomposer")
retrieval_graph.add_edge("Decomposer", "Retriever")
retrieval_graph.add_edge("Retriever", "Synthesizer")
retrieval_graph.add_edge("Synthesizer", "Corrective")
retrieval_graph.add_conditional_edges(
    "Corrective",
    routing,
    {
        "Retriever": "Retriever",
        "END": END
    }
)

retrieval_graph_builder = retrieval_graph.compile()


async def get_response(user_query: str):
    try:
        answer = await retrieval_graph_builder.ainvoke(Retrieval_State(
            user_query=user_query,
            decomposed_query=[],
            total_number_of_chunks=None,
            retrieve_chunks=5,
            response="",
            goto=None,
            suggestions=None,
            error=None
        ))
        return answer
    except Exception as e:
        print(f"Error: {e}")
