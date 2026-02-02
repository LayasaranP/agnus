from fastapi import FastAPI
from api.V1.routers.document import document_router
# from agentic_rag.nodes.vectordb_node import dense_index
# # from agentic_rag.nodes.embedding_node import embeddings
# from agentic_rag.nodes.synthesizer_node import synthesizer

app = FastAPI(
    title="DocMind API",
    description="API for DocMind application",
    version="0.1",
)

app.include_router(document_router)


