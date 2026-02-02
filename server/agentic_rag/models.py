from pydantic import BaseModel
from typing import List


class PrepositionsChunks(BaseModel):
    chunks: List[str]


class PrepositionsGroups(BaseModel):
    groups: List[PrepositionsChunks]