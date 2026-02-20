from workspaces.deep_research_workspace.deep_research_state import GraphState, Search_Queries
from workspaces.deep_research_workspace.deep_research_chains import deep_research_planner_chain
from langgraph.types import interrupt


def create_initial_state(topic: str) -> GraphState:
    return {
        "topic": topic,
        "plan": None,
        "routing": None,
        "current_task_node": None,
        "search_queries": Search_Queries,
        "urls_to_scrape": [],
        "sources": [],
        "iteration_count": 0,
        "task_percentage": ""
    }


def get_deep_research_planner_chain(state: GraphState) -> dict:
    try:
        res = deep_research_planner_chain.invoke({
            "input": state["topic"]
        })
        return {
            **state,
            "topic": state["topic"],
            "plan": res["plan"],
            "task_percentage": "10%"
        }
    except Exception as e:
        print(f"Planner Error: {e}")
        return {}
