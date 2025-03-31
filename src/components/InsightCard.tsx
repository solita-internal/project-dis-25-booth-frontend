
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
        "relative overflow-hidden rounded-md border p-6 shadow-sm transition-all hover:shadow-md",
        isBlocker ? "border-solita-red/20 bg-white" : "border-solita-blue-light/20 bg-white",
        className
      )}
    >
      <div className={cn(
        "absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-full opacity-10",
        isBlocker ? "bg-solita-red" : "bg-solita-blue-light"
      )}>
        {isBlocker ? (
          <AlertTriangle className="h-10 w-10" />
        ) : (
          <Lightbulb className="h-10 w-10" />
        )}
      </div>
      
      <div className="flex items-start space-x-4">
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-bold text-white",
          isBlocker ? "bg-solita-red" : "bg-solita-blue"
        )}>
          {rank}
        </div>
        
        <div className="space-y-3">
          <p className="text-lg font-medium text-solita-black">{insight.content}</p>
          
          <div className="flex items-center space-x-3 text-sm text-solita-gray-dark">
            <div className="flex items-center space-x-1">
              <BarChart2 className="h-4 w-4" />
              <span>{insight.votes} votes</span>
            </div>
            
            <div className={cn(
              "flex items-center space-x-1",
              isBlocker ? "text-solita-red" : "text-solita-blue"
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
