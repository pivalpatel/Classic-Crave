import React, { useState } from 'react';
import { fetchGeminiResponse } from '../services/aiService';
import { MessageCircle, X, Send } from 'lucide-react';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Smart Craving Assistant. What are you in the mood for?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const prompt = `You are Classic Crave AI. The user is asking for food recommendations. Suggest 1 tiffin and 1 dessert from our menu based on typical Indian corporate worker cravings. User Input: ${input}`;
    
    const reply = await fetchGeminiResponse(prompt);
    
    setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-orange-500 transition"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <h3 className="font-bold">Smart Assistant</h3>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 rounded-2xl max-w-[85%] text-sm ${m.sender === 'user' ? 'bg-primary text-white self-end rounded-tr-none' : 'bg-white shadow-sm border border-gray-100 self-start rounded-tl-none text-gray-800'}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-xs self-start ml-2">Typing...</div>}
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border-none bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Ask for recommendations..."
            />
            <button onClick={handleSend} disabled={loading} className="text-primary hover:text-orange-500 disabled:opacity-50">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
