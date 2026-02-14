from workspaces.deep_research_workspace.deep_research_nodes.deep_research_planning_node import \
    get_deep_research_planner_chain
from workspaces.deep_research_workspace.deep_research_nodes.deep_research_decomposer_node import \
    get_deep_research_decomposer_chain
from workspaces.deep_research_workspace.deep_research_state import GraphState


def create_initial_state(topic: str) -> GraphState:
    return {
        "topic": topic,
        "plan": None,
        "routing": None,
        "current_task_id": None,
        "search_queries": [],
        "urls_to_scrape": [],
        "sources": [],
        "abstract": "",
        "introduction": "",
        "analysis": "",
        "conclusion": "",
        "references": [],
        "iteration_count": 0
    }


res = get_deep_research_planner_chain(create_initial_state("AI in share market"))
r = get_deep_research_decomposer_chain(res)

print(r)
