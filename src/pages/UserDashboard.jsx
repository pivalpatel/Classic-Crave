import React, { useState } from 'react';
import { Home, ListOrdered, BarChart2, MessageSquare, Settings, LogOut, CheckCircle2, Clock, Truck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockTiffins, mockBakery } from '../data/mockData';
import AIChatWidget from '../components/AIChatWidget';

const UserDashboard = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('tiffin');

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">Classic Crave</h1>
          <p className="text-xs text-gray-500 mt-1">IT Park Delivery</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {['Home', 'My Orders', 'Analytics', 'Settings'].map((item, idx) => (
            <button key={idx} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${idx === 0 ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
              {idx === 0 && <Home size={20} />}
              {idx === 1 && <ListOrdered size={20} />}
              {idx === 2 && <BarChart2 size={20} />}
              {idx === 3 && <Settings size={20} />}
              {item}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header & Toggle */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 p-6 flex justify-between items-center shadow-sm">
          <div className="bg-gray-100 p-1 rounded-full flex gap-1">
            <button 
              onClick={() => setActiveTab('tiffin')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'tiffin' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Daily Meals
            </button>
            <button 
              onClick={() => setActiveTab('bakery')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'bakery' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Celebrations
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold shadow-inner">IT</div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* Analytics Widget */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Calories Saved</p>
                <h3 className="text-2xl font-bold text-gray-800">4,500 kcal</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600"><CheckCircle2 /></div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Money Saved</p>
                <h3 className="text-2xl font-bold text-gray-800">₹1,200</h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600"><BarChart2 /></div>
            </div>
            <div className="bg-gradient-to-br from-primary to-orange-400 p-6 rounded-3xl shadow-md text-white flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Zero-Waste Streak</p>
                <h3 className="text-2xl font-bold">14 Days! 🔥</h3>
              </div>
            </div>
          </section>

          {/* Live Order Tracker */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-6">Live Order Tracking</h2>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-primary -z-10 -translate-y-1/2"></div>
              
              <div className="flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md"><CheckCircle2 size={20} /></div>
                <span className="text-xs font-semibold text-gray-700">Order Placed</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md"><Clock size={20} /></div>
                <span className="text-xs font-semibold text-gray-700">Kitchen Preparing</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center"><Truck size={20} /></div>
                <span className="text-xs font-medium text-gray-400">Out for Delivery</span>
              </div>
            </div>
          </section>

          {/* Feed */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{activeTab === 'tiffin' ? 'Today\'s Fresh Tiffins' : 'Premium Bakes & Cakes'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'tiffin' ? mockTiffins : mockBakery).map(item => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-50 group">
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                      ★ {item.rating || '4.9'}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-primary">₹{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description || `${item.flavor} · Lead time: ${item.leadTime}`}</p>
                    <div className="flex justify-between items-center text-sm border-t pt-4">
                      <span className="font-medium text-gray-600">By {item.chefName || item.bakerName}</span>
                      <button className="bg-secondary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-xl font-semibold transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Floating Chat */}
      <AIChatWidget />
    </div>
  );
};

export default UserDashboard;
