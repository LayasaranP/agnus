from langchain_core.prompts import ChatPromptTemplate

flash_card_prompt = ChatPromptTemplate.from_template(""" Role: Expert Anki Flashcard Engineer.

Objective: 
Analyze the provided text chunk and extract high-quality, atomic flashcards. You must output valid JSON that strictly adheres to the schema provided below.

Core Flashcard Principles:
1. Atomic Ideas: Each card must test exactly one fact.
2. Question Format: Use direct questions or cloze deletions (e.g., "The {{c1::Capital}} of France is Paris"). Length: 5-500 chars.
3. Answer Format: Provide a clear answer + one brief sentence of context.
4. Difficulty Logic: 
   - Easy: Basic definitions.
   - Medium: Causal/Process questions.
   - Hard: Complex formulas or subtle technical contrasts.

Strict Constraints:
- Return ONLY raw JSON. No markdown formatting, no ```json tags.
- Use LaTeX for technical formulas (e.g., $O(n^2)$).
- Extract 3-10 cards per chunk depending on information density.

Text Chunk: {text_chunk}
""")
