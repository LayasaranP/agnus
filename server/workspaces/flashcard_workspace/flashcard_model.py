from pydantic import BaseModel, Field
from typing import List, Optional, Literal

class FlashcardPattern(BaseModel):
    question: str = Field(
        ..., 
        description="The prompt or question on the front of the card",
        min_length=5,
        max_length=500,
        examples=["What is the capital of France?"]
    )
    answer: str = Field(
        ..., 
        description="The correct answer on the back of the card",
        min_length=1
    )
    topic: Optional[str] = Field(
        None,
        description="The subject area or topic of the flashcard",
        min_length=2,
        max_length=50
    )
    card_difficulty: Literal['Hard', 'Medium', 'Easy']= Field(
        default='Medium',
        description="The perceived difficulty level of the card"
    )


class FlashcardCollection(BaseModel):
    cards: List[FlashcardPattern] = Field(
        ..., 
        description="A list of generated flashcards",
        min_items=1
    )