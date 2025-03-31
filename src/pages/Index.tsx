
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, PlusCircle } from "lucide-react";
import Header from "@/components/Header";
import InsightSection from "@/components/InsightSection";
import { mockInsights } from "@/data/mockData";

const Index = () => {
  const blockers = mockInsights.filter((insight) => insight.category === "blocker");
  const opportunities = mockInsights.filter((insight) => insight.category === "opportunity");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="solita-container solita-section">
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-solita-black">AI Discovery Portal</h1>
          <p className="text-xl text-solita-gray-dark">
            Explore insights from our AI community - discover what's blocking progress and what opportunities lie ahead.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
          <Link to="/chat">
            <Button 
              variant="outline" 
              className="border-solita-blue text-solita-blue hover:bg-solita-blue hover:text-white"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with our AI
            </Button>
          </Link>
          
          <Button 
            className="bg-solita-yellow hover:bg-solita-yellow/90 text-solita-black"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Share your feedback
          </Button>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2">
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
        
        <div className="mt-12 text-center">
          <Button 
            variant="link" 
            className="text-solita-blue hover:text-solita-blue-light text-lg"
          >
            View all insights
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
