from rag.retrieval.retrieval_graph import get_response
from rag.retrieval.retrieval_nodes.query_decompositon import get_decomposed_user_query
from rag.retrieval.retrieval_state import Retrieval_State
from rag.retrieval.retrieval_nodes.vector_search import get_chunks
import asyncio

r = asyncio.run(get_response("Check user did the courseworks or not and is it worth?"))
print(r["response"])

# from rag.retrieval.retrieval_nodes.vector_search import index
# d = index.query(
#                 data="List the skills",
#                 include_metadata=True,
#                 include_data=True,
#                 include_vectors=False,
#                 top_k=3
#             )
# for result in d:
#     print(result.metadata["text"])
# r = asyncio.run(get_chunks(Retrieval_State(
#     user_query="List all the skills and projects",
#     decomposed_query=[],
#     response=""
# )))
# for i in r.decomposed_query:
#     print(i)
# from workspaces.deep_research_workspace.deep_research_memory_tracking import *
# import uuid
#
# try:
#     create_table()
# except Exception as e:
#     print(f"DB Error: {e}")
# finally:
#     connection.close()
#     print("Connection closed.")

# from workspaces.deep_research_workspace.deep_research_nodes.deep_research_planning_node import \
#     get_deep_research_planner_chain, Search_Queries, GraphState
# from workspaces.deep_research_workspace.deep_research_nodes.deep_research_decomposer_node import \
#     get_deep_research_decomposer_chain
# import asyncio
#
#
# def create_initial_state(topic: str) -> GraphState:
#     return {
#         "topic": topic,
#         "plan": None,
#         "current_task_node": None,
#         "search_queries": [],
#         "urls_to_scrape": [],
#         "sources": [],
#         "iteration_count": 0,
#         "task_percentage": ""
#     }
#
#
# con = get_deep_research_planner_chain(create_initial_state("What is langchain?"))
# print("planning")
# print(con)
# print("decomposing")
# print(asyncio.run(get_deep_research_decomposer_chain(con)))
