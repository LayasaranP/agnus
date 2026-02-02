from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template("""Decompose the "Content" into clear and simple propositions, ensuring they are interpretable out of
context.
1. Split compound sentence into simple sentences. Maintain the original phrasing from the input
whenever possible.
2. For any named entity that is accompanied by additional descriptive information, separate this
information into its own distinct proposition.
3. Decontextualize the proposition by adding necessary modifier to nouns or entire sentences
and replacing pronouns (e.g., "it", "he", "she", "they", "this", "that") with the full name of the
entities they refer to.
4. Present the results as a list of strings., formatted in JSON.

Example:

Input: Title: ¯Eostre. Section: Theories and interpretations, Connection to Easter Hares. Content:
The earliest evidence for the Easter Hare (Osterhase) was recorded in south-west Germany in
1678 by the professor of medicine Georg Franck von Franckenau, but it remained unknown in
other parts of Germany until the 18th century. Scholar Richard Sermon writes that "hares were
frequently seen in gardens in spring, and thus may have served as a convenient explanation for the
origin of the colored eggs hidden there for children. Alternatively, there is a European tradition
that hares laid eggs, since a hare’s scratch or form and a lapwing’s nest look very similar, and
both occur on grassland and are first seen in the spring. In the nineteenth century the influence
of Easter cards, toys, and books was to make the Easter Hare/Rabbit popular throughout Europe.
German immigrants then exported the custom to Britain and America where it evolved into the
Easter Bunny."
Output: [ "The earliest evidence for the Easter Hare was recorded in south-west Germany in
1678 by Georg Franck von Franckenau.", "Georg Franck von Franckenau was a professor of
medicine.", "The evidence for the Easter Hare remained unknown in other parts of Germany until
the 18th century.", "Richard Sermon was a scholar.", "Richard Sermon writes a hypothesis about
the possible explanation for the connection between hares and the tradition during Easter", "Hares
were frequently seen in gardens in spring.", "Hares may have served as a convenient explanation
for the origin of the colored eggs hidden in gardens for children.", "There is a European tradition
that hares laid eggs.", "A hare’s scratch or form and a lapwing’s nest look very similar.", "Both
hares and lapwing’s nests occur on grassland and are first seen in the spring.", "In the nineteenth
century the influence of Easter cards, toys, and books was to make the Easter Hare/Rabbit popular
throughout Europe.", "German immigrants exported the custom of the Easter Hare/Rabbit to
Britain and America.", "The custom of the Easter Hare/Rabbit evolved into the Easter Bunny in
Britain and America."]

Decompose the following:
{input}""")

grouping_prompt = ChatPromptTemplate.from_template("""
        You are an expert at semantic clustering of atomic propositions.

Task:
Given a list of small text chunks (each is a single proposition / fact / claim / event / statement),
group them so that each group contains **only** propositions that express **exactly the same underlying atomic fact/entity/relationship/event**
(allowing for paraphrasing, minor rewording, added minor detail, different perspective — but still referring to the **identical core claim**).

Very strict rules:
• Only group items that are **semantically equivalent** (almost interchangeable)
• Do NOT group items that are only topically related / similar topic / same domain
• Do NOT group items that add meaningfully new information
• Prefer **more smaller clusters** over loose merging → be conservative
• Singleton groups are very common — that is normal and expected

Output format — **JSON array of arrays only** — nothing else.
No summaries, no titles, no canonical sentences, no explanations, no extra text, no outer object.

Output structure = pure groups:

[
  [                                           // group 1 — largest / most duplicated
    "Elon Musk announced Starship Flight 9 on March 15, 2025.",
    "On March 15th 2025 Elon posted that IFT-9 is scheduled.",
    "Starship IFT-9 targeting mid-March 2025 per Musk statement",
    "Musk: IFT-9 launch window opens March 15"
  ],
  [                                           // group 2 – singleton
    "Raptor 3 engine achieves 280 tons-force thrust"
  ],
  [
    "Flight test hardware stacked on pad 1B",
    "Starship + Booster now stacked for IFT-9"
  ],
  …
]

Rules for ordering & content:
• Each inner array contains **only original input propositions** (verbatim)
• **Do not create or add any new summary sentence**
• **Do not change or shorten any proposition**
• Sort clusters **roughly by size** (largest groups first)
• For clusters of same size → sort by the order the **first** item of the group appeared in the input
• Within each group → keep propositions in the **exact order** they appeared in the input list

Output **only** the JSON array — nothing before, nothing after.

CHUNKS TO GROUP:
{propositions}
        """)

summary_prompt = ChatPromptTemplate.from_template(""" You are a concise, factual, neutral summarizer for atomic knowledge chunks. 
Your sole purpose is to synthesize the given propositions into a short, coherent paragraph that captures their shared or collective meaning without distortion.

Input:
The chunk contains the following propositions:

{propositions_list}

Strict requirements — you MUST follow ALL of these exactly:
- Output length: exactly 1–3 sentences (aim for 30–80 words total; never exceed 100 words)
- Tone & style: neutral, factual, third-person, encyclopedic (like a Wikipedia sentence or encyclopedia entry)
- Content rules:
  - Synthesize — combine the propositions into a unified meaning
  - Paraphrase naturally; NEVER quote or repeat any proposition verbatim
  - Cover ALL propositions without omission or prioritization
  - Stay 100% faithful to the given propositions — do NOT add, infer, speculate, explain benefits, give examples, or introduce any external knowledge/facts/opinions
- Forbidden:
  - No lists, bullets, headings, or enumeration
  - No creative language, metaphors, or rhetorical flourishes
  - No evaluation (“important”, “powerful”, “effective”, “significant” unless explicitly in input)
  - No elaboration beyond what the propositions directly state
  - Do NOT output JSON, do NOT use any code blocks, do NOT add keys like "summary"
  - Return ONLY the plain summary text — nothing else before or after

Examples of correct behavior:

Input propositions:
- Exercise improves cardiovascular health.
- Regular exercise strengthens the heart muscle.
- Physical activity reduces risk of heart disease.

Correct output:
Regular exercise improves cardiovascular health by strengthening the heart muscle and reducing the risk of heart disease.

Input propositions:
- Photosynthesis requires sunlight.
- Plants use sunlight to convert CO2 and water into glucose and oxygen.

Correct output:
Photosynthesis in plants uses sunlight to convert carbon dioxide and water into glucose and oxygen.

Now generate the summary for the provided propositions.
""")


propositions_summary_title_prompt = ChatPromptTemplate.from_template(""" You are a precise title generator for semantic knowledge chunks.

Given a text chunk (summary):

{text_chunk}

Your only task:
Create a new, standalone TITLE for this chunk.

Requirements:
- Length: 4–10 words maximum
- Style: Informative, specific noun phrase (example: "Transformer Attention Mechanism Core Components")
- Must be descriptive and precise
- Must NOT be:
  - a full sentence
  - a question
  - vague or generic ("Overview", "Introduction", "Key Points")
  - promotional, subjective, or clickbait ("Amazing", "Revolutionary", "Best Practices", "You Need to Know")
  - starting with articles like "The" or "A" unless absolutely necessary for natural phrasing

Examples:

Input text chunk:
Exercise improves cardiovascular health. Regular exercise strengthens the heart muscle and reduces the risk of heart disease through better blood flow and lower blood pressure.

Correct title:
Cardiovascular Benefits of Regular Exercise

Input text chunk:
Photosynthesis requires sunlight, carbon dioxide, and water. Plants use chlorophyll to convert these into glucose and oxygen, releasing energy for growth.

Correct title:
Plant Photosynthesis Process and Requirements

Input text chunk:
The Transformer model relies on self-attention mechanisms to process input sequences in parallel, unlike recurrent networks.

Correct title:
Transformer Model Self-Attention Mechanism

Now generate the TITLE for the provided text chunk.
    """)
