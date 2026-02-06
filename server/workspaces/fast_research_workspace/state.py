from pydantic import BaseModel
from typing import Any


class Fast_Research_Graph_State(BaseModel):
    user_query: str
    response: Any
