from workspaces.deep_research_workspace.deep_research_llm import *
from workspaces.deep_research_workspace.deep_research_prompts import *
from workspaces.deep_research_workspace.deep_research_response_format import *
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate

planner_parser = JsonOutputParser(pydantic_object=ResearchBlueprint)
planner_prompt = PromptTemplate(
    template="""{system_prompt}\n\n{input}\n\n{format_instructions}""",
    input_variables=["input"],
    partial_variables={
        "system_prompt": deep_research_planner_prompt,
        "format_instructions": planner_parser.get_format_instructions()
    }
)
deep_research_planner_chain = planner_prompt | deep_research_planner_llm | planner_parser

decomposer_parser = JsonOutputParser(pydantic_object=DecompositionPlan)
decomposer_prompt = PromptTemplate(
    template="""{system_prompt}\n\n{input}\n\n{format_instructions}""",
    input_variables=["input"],
    partial_variables={
        "system_prompt": deep_research_decomposer_prompt,
        "format_instructions": decomposer_parser.get_format_instructions()
    }
)
deep_research_decomposer_chain = decomposer_prompt | deep_research_decomposer_llm | decomposer_parser


deep_research_abstract_chain = deep_research_abstract_prompt | deep_research_structuring_llm
deep_research_introduction_chain = deep_research_introduction_prompt | deep_research_structuring_llm
deep_research_analysis_chain = deep_research_analysis_prompt | deep_research_structuring_llm
deep_research_conclusion_chain = deep_research_conclusion_prompt | deep_research_structuring_llm
deep_research_reference_chain = deep_research_reference_prompt | deep_research_structuring_llm



def generate_ieee_sections(research_data: dict):
    """
    Takes processed research data and generates individual paper components.
    research_data should contain context for each section.
    """
    results = {}
    try:
        results['abstract'] = deep_research_abstract_chain.invoke(research_data)
        results['introduction'] = deep_research_introduction_chain.invoke(research_data)
        results['analysis'] = deep_research_analysis_chain.invoke(research_data)
        results['conclusion'] = deep_research_conclusion_chain.invoke(research_data)
        results['references'] = deep_research_reference_chain.invoke(research_data)
        return results
    except Exception as e:
        print(f"Section Generation Error: {e}")
        return None
