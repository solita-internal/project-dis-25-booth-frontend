
import React from 'react';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { Insight } from '@/data/mockData';
import InsightCard from './InsightCard';

interface InsightSectionProps {
  title: string;
  insights: Insight[];
  type: 'blocker' | 'opportunity';
}

const InsightSection: React.FC<InsightSectionProps> = ({ title, insights, type }) => {
  const isBlocker = type === 'blocker';
  
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {isBlocker ? (
          <AlertTriangle className="h-6 w-6 text-ai-red" />
        ) : (
          <Lightbulb className="h-6 w-6 text-ai-green" />
        )}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {insights.map((insight, index) => (
          <InsightCard 
            key={insight.id}
            insight={insight}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default InsightSection;
