from workspaces.deep_research_workspace.deep_research_chains import deep_research_decomposer_chain
from workspaces.deep_research_workspace.deep_research_state import GraphState


def get_deep_research_decomposer_chain(state: GraphState) -> dict:
    try:
        inputs = [{"input": step["search_query"]} for step in state["plan"]]
        results = deep_research_decomposer_chain.batch(inputs)

        return {
            **state,
            "search_queries": results,
            "task_percentage": "30%"
        }

    except Exception as e:
        print(f"Decomposer Error: {e}")
        return state
