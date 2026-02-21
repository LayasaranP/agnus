from typing import Any, Literal

from rag.retrieval.retrieval_state import Retrieval_State


async def routing(state: Retrieval_State) -> Literal['END', 'Retriever'] | str | None | dict[Any, Any]:
    try:
        if state.iterations > 4:
            state.goto = "END"
        return state.goto
    except Exception as e:
        print(f"Error in routing: {e}")
        return {}
