from typing import List, Literal
from enum import Enum
from pydantic import BaseModel, Field


class ResearchTask(BaseModel):
    id: int = Field(..., description="A unique integer indicating execution order.")
    objective: str = Field(..., description="Description of the specific information to uncover.")
    search_query: str = Field(..., description="The optimized string for search or scraping.")
    assigned_to: Literal["web_search", "web_scrape"] = Field(
        ..., description="The tool assigned to this specific task."
    )


class ResearchBlueprint(BaseModel):
    goal: str = Field(..., description="A refined, professional restatement of the research objective.")
    plan: List[ResearchTask] = Field(
        ..., description="A sequential array of tasks for comprehensive research coverage."
    )


class Priority(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"


class SubTask(BaseModel):
    id: int = Field(..., description="Sequential ID starting from 1")
    query: str = Field(..., description="Precise search keywords with quoted phrases")
    depends_on: List[int] = Field(default_factory=list, description="List of previous task IDs this depends on")
    priority: Priority = Field(..., description="Task priority level")


class DecompositionPlan(BaseModel):
    plan: List[SubTask] = Field(..., description="Ordered list of decomposed search subtasks")
