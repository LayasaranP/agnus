from pydantic import BaseModel, Field
from typing import List


class Retrieval_State(BaseModel):
    user_query: str = Field(..., description="The query from the user")
    decomposed_query: List[str] = Field(..., description="It is breakdown of original user query")
    response: str = Field(..., description="It is final response from the retrieved chunks")
