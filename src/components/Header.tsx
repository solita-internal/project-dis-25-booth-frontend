
import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-ai-blue to-ai-purple p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">AI Discovery Portal</h1>
        </div>
        <div className="hidden md:block">
          <p className="text-white/90 italic">Insights from our AI community</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
