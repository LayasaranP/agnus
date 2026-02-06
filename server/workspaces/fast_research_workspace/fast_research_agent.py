from langchain.agents import create_agent
from workspaces.fast_research_workspace.fast_research_llm import fast_research_planner_llm, \
    fast_research_synthesizer_llm1
from workspaces.fast_research_workspace.fast_research_prompts import fast_research_planner_prompt, \
    fast_research_synthesizer_prompt

planner_agent = create_agent(
    fast_research_planner_llm,
    system_prompt=fast_research_planner_prompt
)

synthesizer_agent = create_agent(
    fast_research_synthesizer_llm1,
    system_prompt=fast_research_synthesizer_prompt
)
