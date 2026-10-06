import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { mockReviews } from '../../data/mockData';
import { fetchGeminiResponse } from '../../services/aiService';

const OwnerReviews = () => {
  const [reviews, setReviews] = useState(mockReviews.slice(0, 15));
  const [generatingFor, setGeneratingFor] = useState(null);

  const handleAIReply = async (reviewId, reviewText) => {
    setGeneratingFor(reviewId);
    const prompt = `Act as a polite restaurant owner. Reply professionally and warmly to this customer review: "${reviewText}". Keep it under 2 sentences.`;
    const reply = await fetchGeminiResponse(prompt);
    
    setReviews(prev => prev.map(r => r.id === reviewId ? { ...r, reply } : r));
    setGeneratingFor(null);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Customer Reviews</h1>
      <p className="text-gray-500 mb-8">Manage feedback and use AI to generate professional responses instantly.</p>

      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{review.user}</h3>
                  <div className="flex gap-1 text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} className={i >= review.rating ? 'text-gray-300' : ''} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-400">{review.date}</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">"{review.text}"</p>
            
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              {review.reply ? (
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wide mb-1 block">Your Reply</span>
                  <p className="text-sm text-gray-700">{review.reply}</p>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <input type="text" placeholder="Type your reply..." className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                  <button 
                    onClick={() => handleAIReply(review.id, review.text)}
                    disabled={generatingFor === review.id}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition disabled:opacity-50"
                  >
                    <MessageSquare size={16} />
                    {generatingFor === review.id ? 'Generating...' : 'AI Reply'}
                  </button>
                  <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-gray-800 transition">
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerReviews;
