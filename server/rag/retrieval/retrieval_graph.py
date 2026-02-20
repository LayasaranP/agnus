from langgraph.graph import StateGraph, START, END
from rag.retrieval.retrieval_nodes.vector_search import get_chunks
from rag.retrieval.retrieval_nodes.query_synthesizing import get_final_synthesized_response
from rag.retrieval.retrieval_nodes.query_decompositon import get_decomposed_user_query
from rag.retrieval.retrieval_state import Retrieval_State

retrieval_graph = StateGraph(Retrieval_State)

retrieval_graph.add_node("Decomposer", get_decomposed_user_query)
retrieval_graph.add_node("Retriever", get_chunks)
retrieval_graph.add_node("Synthesizer", get_final_synthesized_response)

retrieval_graph.add_edge(START, "Decomposer")
retrieval_graph.add_edge("Decomposer", "Retriever")
retrieval_graph.add_edge("Retriever", "Synthesizer")
retrieval_graph.add_edge("Synthesizer", END)

retrieval_graph_builder = retrieval_graph.compile()


async def get_response(user_query: str):
    try:
        answer = await retrieval_graph_builder.ainvoke(Retrieval_State(
            user_query=user_query,
            decomposed_query=[],
            response=""
        ))
        return answer
    except Exception as e:
        print(f"Error: {e}")
