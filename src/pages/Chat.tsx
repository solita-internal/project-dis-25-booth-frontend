
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. What would you like to know about AI?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Create new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate API call to LLM
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for sharing your thoughts about AI. Your feedback is valuable and helps us understand the community's perspectives. Would you like to share more about your experiences with AI?`,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="solita-container flex-1 flex flex-col overflow-hidden">
        <div className="py-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="mr-2 text-solita-black hover:text-solita-blue hover:bg-solita-gray-light"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-solita-black">AI Discovery Chat</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto pb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={cn(
                  "p-4 rounded-md max-w-[85%]",
                  message.role === 'user' 
                    ? "bg-solita-blue text-white ml-auto" 
                    : "bg-solita-gray-light text-solita-black mr-auto"
                )}
              >
                <p>{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="p-4 rounded-md max-w-[85%] bg-solita-gray-light text-solita-black mr-auto">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-solita-gray animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-solita-gray animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-solita-gray animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="border-t border-solita-gray-light py-4">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 resize-none border-solita-gray-light focus-visible:ring-solita-blue"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={isLoading || !input.trim()}
              className="h-full bg-solita-blue hover:bg-solita-blue-light"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
