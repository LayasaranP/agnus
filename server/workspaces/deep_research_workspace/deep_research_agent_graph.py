from langgraph.graph import StateGraph, START, END
from workspaces.deep_research_workspace.deep_research_state import GraphState
from workspaces.deep_research_workspace.deep_research_nodes.deep_research_planning_node import \
    get_deep_research_planner_chain
from workspaces.deep_research_workspace.deep_research_nodes.deep_research_decomposer_node import \
    get_deep_research_decomposer_chain


deep_graph = StateGraph(GraphState)

deep_graph.add_node("Planning", get_deep_research_planner_chain)
deep_graph.add_node("Decomposer", get_deep_research_decomposer_chain)

deep_graph.add_edge(START, "Planning")
deep_graph.add_edge("Planning", "Decomposer")
deep_graph.add_edge("Decomposer", END)

deep_research_graph = deep_graph.compile()
