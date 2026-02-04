from langchain.agents import create_agent
from workspaces.fast_research_workspace.fast_research_llm import fast_research_planner_llm
from workspaces.fast_research_workspace.fast_research_prompts import fast_research_planner_prompt

agent = create_agent(
    fast_research_planner_llm,
    system_prompt=fast_research_planner_prompt
)

print(agent.invoke("do research on langchain"))
