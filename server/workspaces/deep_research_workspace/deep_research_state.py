from typing import TypedDict, List, Optional, Annotated, Literal
import operator


class GraphState(TypedDict):
    topic: str
    plan: Optional[dict]
    routing: Optional[Literal["web_search", "web_scrape"]]

    current_task_id: Optional[str]
    search_queries: List[dict]
    urls_to_scrape: List[str]

    sources: Annotated[List[str], operator.add]

    abstract: str
    introduction: str
    analysis: str
    conclusion: str
    references: List[str]

    iteration_count: int
    task_percentage: str
