
import React from 'react';
import { cn } from '@/lib/utils';
import { Insight } from '@/data/mockData';
import { BarChart2, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';

interface InsightCardProps {
  insight: Insight;
  rank: number;
  className?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight, rank, className }) => {
  const isBlocker = insight.category === 'blocker';
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border p-4 shadow-sm transition-all hover:shadow-md",
        isBlocker ? "border-red-200 bg-white" : "border-green-200 bg-white",
        className
      )}
    >
      <div className={cn(
        "absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br opacity-10",
        isBlocker ? "from-red-300 to-red-500" : "from-green-300 to-green-500"
      )}>
        {isBlocker ? (
          <AlertTriangle className="h-8 w-8" />
        ) : (
          <Lightbulb className="h-8 w-8" />
        )}
      </div>
      
      <div className="flex items-start space-x-4">
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-white",
          isBlocker ? "bg-ai-red" : "bg-ai-green"
        )}>
          {rank}
        </div>
        
        <div className="space-y-2">
          <p className="text-md font-medium">{insight.content}</p>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BarChart2 className="h-4 w-4" />
            <span>{insight.votes} votes</span>
            
            <div className={cn(
              "flex items-center space-x-1",
              isBlocker ? "text-red-500" : "text-green-500"
            )}>
              <TrendingUp className="h-4 w-4" />
              <span>{isBlocker ? "Blocker" : "Opportunity"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
