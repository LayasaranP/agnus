from pydantic import BaseModel, Field
from typing import List, Literal

class QuizQuestionPattern(BaseModel):
    question: str = Field(
        ..., 
        min_length=10, 
        max_length=1000,
        description="The actual quiz question text"
    )
    options: List[str] = Field(
        ..., 
        min_items=2, 
        max_items=4,
        description="List of possible answers. For True/False, use ['True', 'False']"
    )
    answer: str
    question_type: Literal['Multiple Choice', 'True/False'] = Field(...)

class QuizQuestionCollection(BaseModel):
    questions: List[QuizQuestionPattern] = Field(
        ..., 
        description="A list of generated quiz questions",
        min_items=1
    )