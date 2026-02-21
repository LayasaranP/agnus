from pydantic import BaseModel, Field
from typing import List, Optional, Literal


class Retrieval_State(BaseModel):
    user_query: str = Field(..., description="The original query from the user.")
    decomposed_query: Optional[List[str]] = Field(default=None, description="The breakdown of the original user query.")
    total_number_of_chunks: int = Field(default=None, description="Total number of chunks stored in the vector "
                                                                  "database.")
    retrieve_chunks: int = Field(default=5, description="The current number of chunks to retrieve.")
    response: Optional[str] = Field(default=None, description="The synthesized response from the retrieved chunks.")
    goto: Optional[Literal['END', 'Retriever']] = Field(default=None,
                                                        description="Routing instruction for the workflow.")
    error: str = Field(default=None, description="error in the nodes")
    suggestions: str = Field(default=None, description="Gives suggestions to the synthesizer agent to improve the "
                                                       "response.")
    iterations: int = Field(default=0, description="counts the loop of the graph")
