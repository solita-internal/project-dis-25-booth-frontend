
import React from 'react';
import Header from '@/components/Header';
import InsightSection from '@/components/InsightSection';
import { getTopInsightsByCategory } from '@/data/mockData';

const Index: React.FC = () => {
  const blockers = getTopInsightsByCategory('blocker');
  const opportunities = getTopInsightsByCategory('opportunity');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">AI Community Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the top challenges and opportunities in AI adoption based on feedback from our community.
            These insights are analyzed by our AI to identify key trends.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-red-100 bg-white p-6 shadow-sm">
            <InsightSection 
              title="Top 5 AI Blockers" 
              insights={blockers} 
              type="blocker" 
            />
          </div>
          
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <InsightSection 
              title="Top 5 AI Opportunities" 
              insights={opportunities} 
              type="opportunity" 
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 AI Discovery Portal. All insights are generated from community feedback.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
