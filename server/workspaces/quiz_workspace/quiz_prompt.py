from langchain_core.prompts import ChatPromptTemplate

quiz_prompt = ChatPromptTemplate.from_template(""" Role: Expert Quiz Content Creator.

Objective: 
Generate a set of high-quality quiz questions based on the provided text chunk.

Rules:
1. Multiple Choice (MCQ): Provide exactly 4 options. Ensure only one is correct.
2. True/False (T/F): Provide exactly 2 options: ["True", "False"].
3. Question Quality: Avoid "all of the above" or "none of the above" answers. 
4. Answer Key: The "answer" field must contain the EXACT string from the "options" list.

Output JSON Schema:
{{
  "questions": [
    {{
      "question": "string",
      "options": ["string"],
      "answer": "string",
      "question_type": "Multiple Choice"
    }}
  ]
}}

Strict Constraints:
- Return ONLY raw JSON.
- No markdown code blocks.
- Ensure the answer exists within the options array.

Text Chunk: {text_chunk}
""")
