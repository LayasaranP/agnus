from workspaces.fast_research_workspace.fast_research_agent import synthesizer_agent
from workspaces.fast_research_workspace.state import Fast_Research_Graph_State


def get_research_output(state: Fast_Research_Graph_State) -> Fast_Research_Graph_State:
    try:
        researched_content = synthesizer_agent.invoke({"messages": [{"role": "user", "content": state.user_query}]})
        return Fast_Research_Graph_State(
            user_query=state.user_query,
            response=researched_content["messages"][-1].content
        )
    except Exception as e:
        print(e)
