from workspaces.deep_research_workspace.deep_research_state import GraphState
from workspaces.deep_research_workspace.deep_research_chains import deep_research_planner_chain


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
