from langgraph.graph import StateGraph, START, END
from workspaces.fast_research_workspace.fast_research_nodes.fast_research_synthesizer import get_research_output
from workspaces.fast_research_workspace.fast_research_nodes.tools import fast_research_web_search
from workspaces.fast_research_workspace.fast_research_nodes.fast_research_planner import get_plan_fast_research
from workspaces.fast_research_workspace.state import Fast_Research_Graph_State


fast_research_grpah_builder = StateGraph(Fast_Research_Graph_State)

fast_research_grpah_builder.add_node("Planner", get_plan_fast_research)
fast_research_grpah_builder.add_node("Web_Search", fast_research_web_search)
fast_research_grpah_builder.add_node("Synthesized_Response", get_research_output)

fast_research_grpah_builder.add_edge(START, "Web_Search")
# fast_research_grpah_builder.add_edge("Planner", "Web_Search")
fast_research_grpah_builder.add_edge("Web_Search", "Synthesized_Response")
fast_research_grpah_builder.add_edge("Synthesized_Response", END)

fast_research_grpah = fast_research_grpah_builder.compile()
