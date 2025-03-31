
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-solita-white border-b border-solita-gray-light py-4 sticky top-0 z-50">
      <div className="solita-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-solita-blue tracking-tight">SOLITA</span>
            </Link>
            <div className="ml-6 hidden md:block">
              <h1 className="text-xl font-medium text-solita-black">AI Discovery Portal</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-solita-black hover:text-solita-blue font-medium transition-colors">
              Insights
            </Link>
            <Link to="/chat" className="text-solita-black hover:text-solita-blue font-medium transition-colors">
              Chat
            </Link>
            <Button 
              variant="default" 
              className="bg-solita-yellow hover:bg-solita-yellow/90 text-solita-black"
            >
              Share Feedback
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
