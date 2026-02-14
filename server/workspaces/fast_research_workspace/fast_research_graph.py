from langgraph.graph import StateGraph, START, END
from workspaces.fast_research_workspace.fast_research_nodes.fast_research_synthesizer import get_research_output
from workspaces.fast_research_workspace.fast_research_nodes.tools import fast_research_web_search
from workspaces.fast_research_workspace.state import Fast_Research_Graph_State

fast_research_graph_builder = StateGraph(Fast_Research_Graph_State)

fast_research_graph_builder.add_node("Web_Search", fast_research_web_search)
fast_research_graph_builder.add_node("Synthesized_Response", get_research_output)

fast_research_graph_builder.add_edge(START, "Web_Search")
fast_research_graph_builder.add_edge("Web_Search", "Synthesized_Response")
fast_research_graph_builder.add_edge("Synthesized_Response", END)

fast_research_graph = fast_research_graph_builder.compile()


async def get_fast_research_response(research_topic: str):
    async for event in fast_research_graph.astream_events(
            Fast_Research_Graph_State(
                user_query=research_topic,
                response=""
            ), version="v2"
    ):
        if event["event"] == "on_chain_stream":
            data = event["data"]['chunk']
            if "Synthesized_Response" in data:
                yield
            elif "Web_Search" in data:
                for i in data["Web_Search"]["response"]:
                    print(f"logo-{i["website_logo"]}, title-{i["title"]}")
            else:
                for i in data.response:
                    print(f"url - {i["url"]}")
        elif event["event"] == "on_chat_model_stream":
            content = event["data"]["chunk"].content
            if content:
                yield content
