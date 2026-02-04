from pydantic import BaseModel
from typing import List


class PlannerStages(BaseModel):
    title: str
    objective: str
    sources: List[str]
    validation_criteria: List[str]


class Planner(BaseModel):
    Multi_Stage_InvestigationPlan: str
    stage: List[PlannerStages]
    synthesis_readiness: List[str]
    final_description: str
