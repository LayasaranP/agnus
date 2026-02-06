from tavily import AsyncTavilyClient
from workspaces.fast_research_workspace.state import Fast_Research_Graph_State
import os
from dotenv import load_dotenv

load_dotenv()


async def fast_research_web_search(state: Fast_Research_Graph_State):
    if not state.user_query:
        return "no user query"

    api_key = os.getenv("tavily1")
    if not api_key:
        raise ValueError("API Key not configured")

    client = AsyncTavilyClient(api_key)

    try:
        response = await client.search(
            state.user_query,
            auto_parameters=True,
            max_results=6,
            include_images=False,
            include_favicon=True
        )

        results = response.get('results', [])
        formatted_result = []
        for i, result in enumerate(results):
            formatted_result.append({
                "id": i + 1,
                "url": result["url"],
                "title": result["title"],
                "content": result["content"],
                "website_logo": result["favicon"],
            })
        return Fast_Research_Graph_State(
            user_query=state.user_query,
            response=formatted_result
        )

    except Exception as e:
        print(e)
        return []
