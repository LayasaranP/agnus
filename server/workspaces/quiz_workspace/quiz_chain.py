from agentic_rag.llm import llm2
from workspaces.quiz_workspace.quiz_prompt import quiz_prompt
from workspaces.quiz_workspace.quiz_model import QuizQuestionCollection


structured_quiz_output_chain = llm2.with_structured_output(QuizQuestionCollection)
quiz_chain = quiz_prompt | structured_quiz_output_chain

def generate_quiz_questions(text_chunk: str) -> QuizQuestionCollection:
    try:
        response = quiz_chain.invoke({"text_chunk": text_chunk})
        return response.questions
    except Exception as e:
        print(f"Error generating quiz questions: {e}")
        return QuizQuestionCollection(questions=[])