from agentic_rag.llm import llm2
from workspaces.flashcard_workspace.flashcard_prompt import flash_card_prompt
from workspaces.flashcard_workspace.flashcard_model import FlashcardCollection

structured_flashcard_output_chain = llm2.with_structured_output(FlashcardCollection)
flashcard_chain = flash_card_prompt | structured_flashcard_output_chain

def generate_flashcards(text_chunk: str) -> FlashcardCollection:
    try:
        response = flashcard_chain.invoke({"text_chunk": text_chunk})
        return response.cards
    except Exception as e:
        print(f"Error generating flashcards: {e}")
        return FlashcardCollection(cards=[])