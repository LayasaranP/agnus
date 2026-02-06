# from workspaces.quiz_workspace.quiz_chain import generate_quiz_questions
# from workspaces.flashcard_workspace.flashcard_chains import generate_flashcards

# text1 = """ The Transformer architecture, introduced in the 2017 paper "Attention is All You Need" by Vaswani et al.,
# fundamentally changed the landscape of natural language processing. Unlike previous recurrent and convolutional
# approaches that processed sequences sequentially or with limited context windows, Transformers rely entirely on
# attention mechanisms to capture relationships between tokens regardless of their distance in the sequence. The
# self-attention mechanism allows each token to attend to every other token in parallel, while multi-head attention
# enables the model to jointly attend to information from different representation subspaces. This design not only
# dramatically improved performance on many language tasks but also made training much more efficient on modern GPU/TPU
# hardware due to its highly parallelizable nature.
#
# Retrieval-Augmented Generation (RAG) combines the strengths of
# parametric memory (the knowledge stored in the weights of a large language model) with non-parametric memory (an
# external knowledge base accessed via a retriever). In a typical RAG setup, a dense retriever such as DPR or ColBERT
# first encodes both the query and a large corpus of documents into dense vector representations, retrieves the top-k
# most relevant passages according to inner-product similarity, and then feeds these retrieved documents together with
# the original question into a seq2seq language model (often BART or T5 variants). This hybrid approach allows the
# system to produce more factually accurate, up-to-date, and verifiable answers compared to purely parametric models,
# especially when dealing with knowledge-intensive tasks or when information has changed after the model's last
# training cut-off.
#
# Modern RAG systems have evolved far beyond the original 2020 formulation. Researchers and
# practitioners now commonly use techniques such as iterative retrieval, recursive retrieval, HyDE (hypothetical
# document embeddings), re-ranking with cross-encoders, context compression, chunking strategies optimized for semantic
# units rather than fixed token counts, and fusion-in-decoder architectures. Additionally, many production deployments
# incorporate metadata filtering, query rewriting, hypothetical question generation for better retrieval,
# and self-reflection loops where the model critiques its own retrieved context before generation. These advances have
# made RAG one of the most practical and widely adopted methods for giving large language models access to private,
# domain-specific, or continuously updated knowledge without constant full-model retraining."""

# print(len(generate_flashcards(text1)))
# print(generate_flashcards(text1))
# print(len(generate_quiz_questions(text1)))
# print(generate_quiz_questions(text1))


# from langchain.agents import create_agent
# from workspaces.fast_research_workspace.fast_research_llm import fast_research_planner_llm
# from workspaces.fast_research_workspace.fast_research_prompts import fast_research_planner_prompt
# from workspaces.fast_research_workspace.fast_research_state import Planner
#
# agent = create_agent(
#     fast_research_planner_llm,
#     system_prompt=fast_research_planner_prompt,
#     response_format=Planner
# )
#
# response = agent.invoke({"messages": [{"role": "user", "content": "WHat is AGI?"}]})
#
# print(response['messages'][-1].content)

# from workspaces.fast_research_workspace.fast_research_nodes.tools import fast_research_web_search
# import asyncio
# from workspaces.fast_research_workspace.fast_research_nodes.fast_research_synthesizer import get_research_output
#
# results = asyncio.run(fast_research_web_search("Social media’s effect on attention span and memory"))
#
# print(get_research_output(str(results)))

# from fastapi import FastAPI

# from api.V1.routers.document import document_router
# from agentic_rag.nodes.vectordb_node import dense_index
# # from agentic_rag.nodes.embedding_node import embeddings
# from agentic_rag.nodes.synthesizer_node import synthesizer

# app = FastAPI(
#     title="DocMind API",
#     description="API for DocMind application",
#     version="0.1",
# )

# app.include_router(document_router)
#
# print(create_document_and_metadata(text1))


# result = dense_index.query(
#     namespace="example",
#     vector=embeddings("How to design the transformer architecture").tolist(),
#     top_k=2,
#     include_metadata=True,
#     include_values=False
# )
#
#
# for i in result['matches']:
#     for j in i['metadata']['propositions']:
#         print("".join(j))

# synthesizer(f"""You are SynthMaster AI, an elite sound designer and preset engineer with 20+ years of experience in analog, digital, modular, and hybrid synthesis.
#
# Your only task: Create one extremely high-quality, immediately usable synthesizer preset based on the user's description.
#
# Rules you MUST strictly follow:
# 1. Always stay in character as a professional, precise, slightly perfectionist sound designer.
# 2. Output ONLY the preset — no chit-chat, no explanations unless the user explicitly asks "explain" or "why".
# 3. Structure your response clearly using markdown sections: Preset Name, Type/Category, Oscillators, Filter, Envelopes, Modulation, Effects, Character/Notes.
# 4. Use natural-language parameters that work well in prompt-to-preset systems (Vital, Phase Plant, Pigments, Serum, etc.) or that can be directly translated to synth settings.
# 5. When helpful, suggest 1–2 small macro / performance controls (e.g. "Macro 1: Brightness", "Mod Wheel → Vibrato depth").
# 6. Prioritize emotional, expensive, polished, cinematic or modern electronic character unless user specifies otherwise.
# 7. Avoid: harsh digital artifacts, cheap clichés (supersaw abuse, basic detune), generic descriptions without movement or depth.
# 8. Make presets feel alive — include subtle evolution, breathing LFOs, slow sweeps, micro-modulations, stereo width tricks.
#
# Use the following retrieved sound design knowledge, preset examples, parameter ranges, and synthesis theory to inform and ground your preset creation:
#
# {con}
#
# User request: {query}
#
# Now design ONE beautiful, production-ready preset that perfectly matches the request.
# Respond only with the formatted preset description.""")


from workspaces.fast_research_workspace.fast_research_graph import fast_research_grpah, Fast_Research_Graph_State
import asyncio


async def main():
    async for r in fast_research_grpah.astream(
            Fast_Research_Graph_State(
                user_query="Do research on langchain?",
                response=""
            ),
            stream_mode="values",
    ):
        print(r)


asyncio.run(main())
