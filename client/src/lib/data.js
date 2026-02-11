// ─── Dashboard Mock Data ─────────────────────────────────────────────
export const userProfile = {
  name: "Dr. Alex Rivera",
  avatar: "/avatar.png",
  plan: "PRO",
  streak: 12,
  sourcesAnalyzed: 42,
  pendingInsights: 3,
  researchProgress: 84,
};

export const aiInsights = [
  {
    id: 1,
    type: "AI INSIGHT",
    tags: ["SYNTHESIZED", "ON ADD"],
    title: "Transformer Efficiency Theme",
    description:
      'Based on your recent reads, there\'s a recurring theme regarding transformer efficiency in sparse attention models. These findings align with your previous inquiry into sub-quadratic scaling.',
    highlightTerms: ["transformer efficiency"],
    sourcesCount: 5,
    cta: "Explore Insight",
  },
  {
    id: 2,
    type: "AI INSIGHT",
    tags: ["PATTERN", "NEW"],
    title: "Emerging Quantum Computing Trends",
    description:
      "Multiple sources indicate a convergence in post-quantum cryptography research. Your recent reads suggest a focus on lattice-based approaches.",
    highlightTerms: ["post-quantum cryptography"],
    sourcesCount: 3,
    cta: "Explore Insight",
  },
];

export const quickActions = [
  {
    id: "deep-research",
    icon: "research",
    title: "Deep Research",
    description: "Trigger autonomous agent to crawl web and internal corpus for a specific topic.",
    href: "/research",
  },
  {
    id: "flashcards",
    icon: "flashcards",
    title: "Flashcards",
    description: "Review 24 generated cards from your latest annotated sources.",
    href: "/decks",
  },
];

export const recentSources = [
  {
    id: 1,
    type: "PDF",
    color: "#ef4444",
    title: "Quantum Neural Networks...",
    accessedAgo: "12h ago",
    saves: 4,
  },
  {
    id: 2,
    type: "WIKI",
    color: "#10b981",
    title: "Market Analysis Q3 Tech",
    accessedAgo: "2d ago",
    saves: 12,
  },
  {
    id: 3,
    type: "YOUTUBE",
    color: "#ef4444",
    title: "Stanford CS231n Lecture 4",
    accessedAgo: "yesterday",
    saves: null,
  },
  {
    id: 5,
    type: "PDF",
    color: "#3b82f6",
    title: "Understanding Transformers",
    accessedAgo: "2 days ago",
    saves: 8,
  },
];

// ─── Source Library Mock Data ────────────────────────────────────────
export const libraryStats = {
  totalSources: 14,
  tokensProcessed: "4.2M",
  avgTrustScore: "98%",
};

export const libraryFilters = [
  { id: "all", label: "All Sources", icon: "grid" },
  { id: "papers", label: "Papers", icon: "paper" },
  { id: "web", label: "Web", icon: "globe" },
  { id: "video", label: "Video", icon: "play" },
  { id: "tags", label: "Tags", icon: "tag" },
];

export const librarySources = [
  {
    id: 1,
    title: "Neural Mechanisms of Ra...",
    source: "Nature Neuroscience",
    year: 2024,
    format: "PDF",
    trustBadge: "High Trust",
    trustColor: "#f59e0b",
    tags: ["Neuroscience", "Core", "Coding"],
    grounded: "Grounded in 3 agents",
    icon: "📄",
  },
  {
    id: 2,
    title: "Stanford Encyclopedia of ...",
    source: "plato.stanford.edu",
    format: "Web Article",
    trustBadge: "Verified",
    trustColor: "#10b981",
    tags: ["Philosophy", "AI"],
    grounded: "Grounded in 1 agent",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Lecture 4: Hebbian Learni...",
    source: "YouTube",
    duration: "45m",
    format: null,
    trustBadge: "Processing",
    trustColor: "#f59e0b",
    tags: ["Lecture", "Video"],
    grounded: null,
    status: "Generating transcript...",
    icon: "🎬",
  },
  {
    id: 4,
    title: "Spiking Neural Networks: ...",
    source: "IEEE",
    year: 2025,
    format: "PDF",
    trustBadge: "High Trust",
    trustColor: "#f59e0b",
    tags: ["SNN", "Review"],
    grounded: null,
    status: "Unused",
    icon: "📄",
  },
];

// ─── Deep Research Mock Data ────────────────────────────────────────
export const researchNavItems = [
  { id: "active", label: "Active Research", icon: "zap", active: true },
  { id: "history", label: "History", icon: "clock" },
  { id: "datasources", label: "Data Sources", icon: "database" },
  { id: "collaborators", label: "Collaborators", icon: "users" },
];

export const researchData = {
  protocolId: "#721",
  synthesizedAgo: "14.2s ago",
  title: "Post-Quantum Cryptography:\nFinancial Sector Vulnerabilities",
  confidenceScore: 99.4,
  documentCitations: 214,
  agentStatus: "Agent Reasoning...",
  crawling: ["IEEE Xplore", "Reuters"],
  executiveSummary: {
    stepId: "STEP_REASONING_81",
    heading: "The Quantum Threat Landscape (2025-2030)",
    body: 'The transition to quantum-resistant encryption is no longer speculative. Current financial infrastructure relies on RSA-2048, which agentic simulations suggest will be vulnerable within the next 48-60 months. Our research identifies three primary vectors for state-sponsored "Harvest Now, Decrypt Later" operations targeting transaction ledgers.',
    metrics: [
      { label: "METRIC A", value: "42.1%", description: "Projected risk increase by Q4" },
      { label: "METRIC B", value: "1.2ms", description: "Average lattice-based verification" },
    ],
  },
  technicalDive: {
    stepId: 62,
    processingTag: "PROCESSING_DATA_SET_X",
    title: "Post-Quantum Algorithm Comparison",
  },
};

export const researchCitations = [
  {
    id: 1,
    title: "NIST Special Publication 800-208",
    subtitle: "Recommendation for Stateful Hash-Based Si...",
    match: "98% Match",
    matchColor: "#ef4444",
    format: "PDF",
    size: "14208",
  },
  {
    id: 2,
    title: "Quantum Readiness in Global Banking",
    subtitle: "Reuters Business Analysis • July 2024",
    match: "Direct Quote",
    matchColor: "#f59e0b",
    format: "WEB",
    size: "12.4k",
  },
  {
    id: 3,
    title: "IEEE Journal of Cryptography",
    subtitle: "Lattice-based architectures for high-frequen...",
    match: "82% Match",
    matchColor: "#10b981",
    format: "PDF",
    size: "2.3MB",
  },
];

// ─── Knowledge Graph Mock Data ──────────────────────────────────────
export const graphNodes = [
  { id: "quantum", label: "Quantum Computing", type: "core", x: 35, y: 50 },
  { id: "qubits", label: "Qubits", type: "node", subtitle: "Superposition &...", nodeId: "NODE_01", x: 58, y: 38 },
  { id: "entanglement", label: "Entanglement", type: "node", subtitle: "Non-local correlation", nodeId: "NODE_02", x: 62, y: 62 },
  { id: "algorithms", label: "Algorithms", type: "leaf", x: 22, y: 72 },
  { id: "classical", label: "Classical Bits", type: "leaf", x: 22, y: 35 },
];

export const graphEdges = [
  { from: "quantum", to: "qubits" },
  { from: "quantum", to: "entanglement" },
  { from: "quantum", to: "algorithms" },
  { from: "quantum", to: "classical" },
];

export const graphInsights = {
  connections: [
    { title: "Quantum Supremacy", description: "Connects to Entanglement via recent Sycamore benchmarks." },
    { title: "Decoherence", description: "Relevant constraint for Qubits stability." },
  ],
  references: [
    { title: "MIT Tech Review 2024", subtitle: 'Source: "The Next Qubit"', color: "#3b82f6" },
    { title: "Lecture 04: Superposition", subtitle: "Video — 05:20", color: "#ef4444" },
  ],
};

// ─── Flashcards / Decks Mock Data ───────────────────────────────────
export const deckData = {
  breadcrumb: ["Library", "Computer Science", "System Architecture"],
  title: "Distributed Systems & Consensus",
  agentActive: true,
  session: {
    minutes: 45,
    change: "+12% vs avg",
    focusLabel: "Focus: High",
    goal: "Goal: 60m",
  },
  mastery: [
    { label: "System Design", value: 85 },
    { label: "Databases", value: 60 },
  ],
  retentionHeatmap: [
    [3, 2, 4, 1, 3, 2, 4],
    [2, 4, 3, 2, 1, 3, 2],
    [4, 3, 2, 4, 3, 2, 1],
    [1, 2, 3, 4, 2, 3, 4],
  ],
  currentCard: {
    tags: ["Architecture", "Databases"],
    category: "QUESTION",
    question: "Explain the CAP Theorem and its implications for distributed database design in high-availability systems.",
    subtext: "Focus specifically on the trade-offs between consistency and availability during network partitions.",
    highlightTerms: ["CAP Theorem"],
  },
  knowledgeGap: {
    topic: "Distributed Consensus",
    recommendation: "The AI agent recommends a 5-minute deep dive.",
    cta: "Start Deep Dive →",
  },
};
