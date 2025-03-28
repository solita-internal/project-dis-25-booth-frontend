
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import InsightSection from "@/components/InsightSection";
import { mockInsights } from "@/data/mockData";

const Index = () => {
  const blockers = mockInsights.filter((insight) => insight.category === "blocker");
  const opportunities = mockInsights.filter((insight) => insight.category === "opportunity");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">AI Discovery Portal</h1>
         
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <InsightSection 
            title="Top Blockers" 
            insights={blockers.slice(0, 5)} 
            type="blocker" 
          />
          <InsightSection 
            title="Top Opportunities" 
            insights={opportunities.slice(0, 5)} 
            type="opportunity" 
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
