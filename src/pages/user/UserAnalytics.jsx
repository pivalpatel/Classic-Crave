import React from 'react';
import { Leaf, TrendingDown, Award, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', wasteSaved: 120 },
  { name: 'Tue', wasteSaved: 150 },
  { name: 'Wed', wasteSaved: 180 },
  { name: 'Thu', wasteSaved: 190 },
  { name: 'Fri', wasteSaved: 220 },
];

const UserAnalytics = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">My Impact</h1>
      <p className="text-gray-500 mb-8">See how your choices are helping the planet and your wallet.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><Leaf size={24} /></div>
          <p className="text-green-100 font-medium mb-1">Plastic Saved</p>
          <h3 className="text-3xl font-bold">14.2 kg</h3>
          <p className="text-sm text-green-100 mt-2">↑ 12% this month</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl shadow-lg text-white">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><TrendingDown size={24} /></div>
          <p className="text-blue-100 font-medium mb-1">Money Saved</p>
          <h3 className="text-3xl font-bold">₹4,250</h3>
          <p className="text-sm text-blue-100 mt-2">vs standard delivery</p>
        </div>

        <div className="bg-gradient-to-br from-primary to-orange-500 p-6 rounded-3xl shadow-lg text-white">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><Zap size={24} /></div>
          <p className="text-orange-100 font-medium mb-1">Zero-Waste Streak</p>
          <h3 className="text-3xl font-bold">24 Days 🔥</h3>
          <p className="text-sm text-orange-100 mt-2">New personal record!</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Plastic Saved (grams)</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
              <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="wasteSaved" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
