import React, { useState } from 'react';
import { fetchGeminiResponse } from '../services/aiService';
import { Sparkles, Loader2, X } from 'lucide-react';
import { mockOrders } from '../data/mockData';

const AIDemandPredictor = () => {
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePredict = async () => {
    setIsOpen(true);
    setLoading(true);
    const salesDataStr = JSON.stringify(mockOrders);
    const prompt = `Act as a business analyst for a home chef. Based on these recent sales data: ${salesDataStr}, what should the home chef prepare more of next week? Be concise and strategic.`;
    
    const reply = await fetchGeminiResponse(prompt);
    setPrediction(reply);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={handlePredict}
        className="flex items-center gap-2 bg-gradient-to-r from-primary to-orange-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition font-semibold"
      >
        <Sparkles size={20} />
        Predict Next Week
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
              <Sparkles className="text-primary" /> AI Demand Predictor
            </h2>
            
            <div className="bg-secondary/30 p-4 rounded-2xl min-h-[150px] border border-orange-100">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 py-8">
                  <Loader2 className="animate-spin mb-2" size={32} />
                  <p>Analyzing recent sales data...</p>
                </div>
              ) : (
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{prediction}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIDemandPredictor;
