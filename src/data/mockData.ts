
export type Insight = {
  id: string;
  content: string;
  votes: number;
  category: 'blocker' | 'opportunity';
};

export const mockInsights: Insight[] = [
  // Blockers
  {
    id: 'b1',
    content: 'Lack of technical expertise within organizations to implement AI solutions',
    votes: 78,
    category: 'blocker'
  },
  {
    id: 'b2',
    content: 'High costs associated with developing and deploying custom AI models',
    votes: 65,
    category: 'blocker'
  },
  {
    id: 'b3',
    content: 'Difficulties integrating AI systems with existing legacy infrastructure',
    votes: 54,
    category: 'blocker'
  },
  {
    id: 'b4',
    content: 'Concerns about data privacy and regulatory compliance',
    votes: 49,
    category: 'blocker'
  },
  {
    id: 'b5',
    content: 'Challenges in explaining AI decisions to stakeholders and customers',
    votes: 43,
    category: 'blocker'
  },
  
  // Opportunities
  {
    id: 'o1',
    content: 'Automating routine tasks to free up human workers for more creative endeavors',
    votes: 89,
    category: 'opportunity'
  },
  {
    id: 'o2',
    content: 'Enhancing customer experiences through personalized AI interactions',
    votes: 76,
    category: 'opportunity'
  },
  {
    id: 'o3',
    content: 'Improving decision making with data-driven AI insights',
    votes: 72,
    category: 'opportunity'
  },
  {
    id: 'o4',
    content: 'Developing new products and services powered by AI capabilities',
    votes: 68,
    category: 'opportunity'
  },
  {
    id: 'o5',
    content: 'Reducing operational costs through AI-driven process optimization',
    votes: 61,
    category: 'opportunity'
  },
];

export const getTopInsightsByCategory = (category: 'blocker' | 'opportunity', limit: number = 5): Insight[] => {
  return mockInsights
    .filter(insight => insight.category === category)
    .sort((a, b) => b.votes - a.votes)
    .slice(0, limit);
};
