from workspaces.fast_research_workspace.fast_research_agent import planner_agent
from workspaces.fast_research_workspace.state import Fast_Research_Graph_State


def get_plan_fast_research(state: Fast_Research_Graph_State) -> dict:
    try:
        plan = planner_agent.invoke({"messages": [{"role": "user", "content": state.user_query}]})
        return {
            "user_query": state.user_query,
            "response": plan["messages"][-1].content
        }
    except Exception as e:
        print(e)
