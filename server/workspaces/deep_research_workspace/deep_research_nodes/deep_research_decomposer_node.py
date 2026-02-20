from workspaces.deep_research_workspace.deep_research_chains import deep_research_decomposer_chain
from workspaces.deep_research_workspace.deep_research_state import GraphState


async def get_deep_research_decomposer_chain(state: GraphState) -> dict:
    try:
        search_queries = []

        for i, query in enumerate(state["plan"]):
            queries = await deep_research_decomposer_chain.ainvoke(query["search_query"])
            # search_queries.append({
            #     "search_query": query["search_query"],
            #     "sub_queries": queries["plan"]
            # })
            print(queries)
            # search_queries.append({
            #     "objective": query["objective"],
            #     "search_query": query["search_query"],
            #     "sub_queries": queries,
            #     "assigned_to": query["assigned_to"]
            # })
            #
            # return {
            #     **state,
            #     "search_queries": search_queries,
            #     "task_percentage": "30%"
            # }

    except Exception as e:
        print(f"Decomposer Error: {e}")
        return state
