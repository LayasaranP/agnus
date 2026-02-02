from agentic_rag.prompts import *
from agentic_rag.llm import llm, llm2, llm1
from agentic_rag.models import *
from langchain_core.output_parsers import JsonOutputParser

propositions_chunk_chain = prompt | llm2

structured_llm_output = llm2.with_structured_output(PrepositionsGroups)
propositions_chunk_grouping_chain = grouping_prompt | llm.bind(
    response_format={"type": "json_object"}) | JsonOutputParser()

propositions_chunk_summary_chain = summary_prompt | llm1

propositions_chunk_summary_title_chain = propositions_summary_title_prompt | llm1
