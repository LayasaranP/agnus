from tavily import AsyncTavilyClient
from workspaces.deep_research_workspace.deep_research_state import GraphState
import os
from dotenv import load_dotenv

load_dotenv()


async def deep_research_web_search(state: GraphState):
    if not state["search_queries"]:
        return "no query to search"

    api_key = os.getenv("tavily1")
    if not api_key:
        raise ValueError("API Key not configured")

    client = AsyncTavilyClient(api_key)

    try:
        for i in state["search_queries"]:
            response = await client.search(
                i,
                auto_parameters=True,
                max_results=3,
                include_images=False,
                include_favicon=True
            )

            results = response.get('results', [])

    except Exception as e:
        print(e)
        return []
