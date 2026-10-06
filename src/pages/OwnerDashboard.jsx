import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, TrendingUp, Users, PieChart, Star, CheckCircle, Package } from 'lucide-react';
import { mockOrders, mockReviews } from '../data/mockData';
import AIDemandPredictor from '../components/AIDemandPredictor';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 8900 }, // Peak Friday
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const OwnerDashboard = () => {
  const { logout } = useAuth();
  
  // Simple kanban state
  const [columns] = useState({
    new: mockOrders.filter(o => o.status === 'Pre-booked by 9PM'),
    prep: mockOrders.filter(o => o.status === 'Preparing'),
    ready: mockOrders.filter(o => o.status === 'Delivered')
  });

  return (
    <div className="min-h-screen bg-secondary/20 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">CC</div>
          <h1 className="text-xl font-bold text-gray-800">Chef Partner Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <AIDemandPredictor />
          <button onClick={logout} className="p-2 text-gray-400 hover:text-red-500 transition"><LogOut /></button>
        </div>
      </header>

      <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Analytics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-100 text-primary rounded-2xl"><TrendingUp size={24} /></div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-800">₹45,200</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><Users size={24} /></div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Active Subscriptions</p>
            <h3 className="text-2xl font-bold text-gray-800">84</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl"><PieChart size={24} /></div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Cake Cross-sell Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">18%</h3>
          </div>
          <div className="bg-gradient-to-br from-primary to-orange-400 p-6 rounded-3xl shadow-md text-white">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/20 rounded-2xl"><CheckCircle size={24} /></div>
            </div>
            <p className="text-orange-100 text-sm font-medium">Zero-Waste Accuracy</p>
            <h3 className="text-2xl font-bold">99.5%</h3>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <section className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-96 flex flex-col">
            <h2 className="text-lg font-bold mb-6">Weekly Sales Overview</h2>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="sales" stroke="#FF9933" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Review Manager */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-96">
            <h2 className="text-lg font-bold mb-6 flex justify-between items-center">
              Customer Reviews <span className="text-sm font-medium text-primary bg-orange-50 px-3 py-1 rounded-full">New (3)</span>
            </h2>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {mockReviews.map(review => (
                <div key={review.id} className="border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-sm">{review.user}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{review.text}</p>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Reply..." className="flex-1 text-xs border bg-gray-50 rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary" />
                    <button className="text-xs bg-secondary text-primary px-3 py-1.5 rounded-lg font-medium">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Kanban Board Simulation */}
        <section>
          <h2 className="text-xl font-bold mb-6">Live Kitchen Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div className="bg-gray-100 rounded-3xl p-4 flex flex-col">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                New Orders (Pre-booked 9PM)
                <span className="bg-white text-gray-500 px-2 py-0.5 rounded-full text-xs shadow-sm">{columns.new.length}</span>
              </h3>
              <div className="space-y-3">
                {columns.new.map(order => (
                  <div key={order.id} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-blue-400 cursor-pointer hover:shadow-md transition">
                    <div className="flex justify-between text-xs text-gray-500 mb-2"><span>{order.id}</span><span>{order.date}</span></div>
                    <p className="font-semibold text-gray-800">{order.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-100 rounded-3xl p-4 flex flex-col">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                Preparing
                <span className="bg-white text-gray-500 px-2 py-0.5 rounded-full text-xs shadow-sm">{columns.prep.length}</span>
              </h3>
              <div className="space-y-3">
                {columns.prep.map(order => (
                  <div key={order.id} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-yellow-400 cursor-pointer hover:shadow-md transition">
                    <div className="flex justify-between text-xs text-gray-500 mb-2"><span>{order.id}</span><span>{order.date}</span></div>
                    <p className="font-semibold text-gray-800">{order.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-100 rounded-3xl p-4 flex flex-col">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                Ready for Dispatch
                <span className="bg-white text-gray-500 px-2 py-0.5 rounded-full text-xs shadow-sm">{columns.ready.length}</span>
              </h3>
              <div className="space-y-3">
                {columns.ready.map(order => (
                  <div key={order.id} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-green-400 cursor-pointer hover:shadow-md transition">
                    <div className="flex justify-between text-xs text-gray-500 mb-2"><span>{order.id}</span><span>{order.date}</span></div>
                    <p className="font-semibold text-gray-800">{order.items}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default OwnerDashboard;
