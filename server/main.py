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

# from agentic_rag.nodes.document_node import create_document_and_metadata
# from rag.ingestion.content_extraction import get_extracted_content_from_source
#
# content = get_extracted_content_from_source("1706.03762v7.pdf")
# print(create_document_and_metadata(content))
