from workspaces.deep_research_workspace.deep_research_state import GraphState
from langgraph.types import Send


def router_node(state: GraphState):
    try:
        tasks = []

        for i in state["plan"]:
            if i.get("assigned_to") == "web_Search":
                tasks.append(
                    Send("fast_research_web_search", {"search_queries": i["search_query"]})
                )

        if not tasks:
            return []

        return tasks

    except Exception as e:
        print(f"Router Error: {e}")
        return []