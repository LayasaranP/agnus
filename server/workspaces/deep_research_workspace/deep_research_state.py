from typing import TypedDict, List, Optional, Annotated, Literal
import operator


class Search_Queries(TypedDict):
    objective: str
    original_query: str
    sub_query: List[dict]
    assigned_to: Literal["Web_Search", "Web_Scrape"]


class GraphState(TypedDict):
    topic: str
    plan: Optional[dict]

    current_task_node: Optional[str]
    search_queries: List[Search_Queries]
    urls_to_scrape: List[str]

    sources: Annotated[List[str], operator.add]

    iteration_count: int
    task_percentage: str
