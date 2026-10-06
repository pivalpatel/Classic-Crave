import React, { useState } from 'react';
import { Search, Filter, Star, Clock } from 'lucide-react';
import { mockTiffins, mockBakery } from '../../data/mockData';

const UserHome = () => {
  const [activeTab, setActiveTab] = useState('tiffin');

  return (
    <div className="flex flex-col min-h-full pb-20">
      {/* Header Area */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-8 py-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">What are you craving?</h1>
            <p className="text-gray-500 mt-1">Zero-waste meals delivered fresh to your desk.</p>
          </div>
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold shadow-inner border-2 border-primary/20">IT</div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for thalis, cakes, or chefs..." 
              className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="bg-gray-100 p-3 rounded-2xl text-gray-600 hover:bg-gray-200 transition"><Filter size={20}/></button>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('tiffin')}
            className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-sm ${activeTab === 'tiffin' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
          >
            Daily Meals
          </button>
          <button 
            onClick={() => setActiveTab('bakery')}
            className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-sm ${activeTab === 'bakery' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
          >
            Premium Celebrations
          </button>
        </div>
      </div>

      {/* Main Feed */}
      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {activeTab === 'tiffin' ? 'Freshly Prepared Tiffins' : 'Custom Cakes & Bakes'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {(activeTab === 'tiffin' ? mockTiffins : mockBakery).map(item => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-sm font-bold text-gray-800 shadow-lg flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> {item.rating}
                </div>
                {item.type && (
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-lg text-xs font-bold shadow-md ${item.type === 'veg' ? 'bg-green-100 text-green-700' : item.type === 'vegan' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {item.type.toUpperCase()}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-900 leading-tight">{item.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {item.description || `${item.flavor} · Lead time: ${item.leadTime}`}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-4">
                    <Clock size={14} /> {item.deliveryTime ? `Delivers at ${item.deliveryTime}` : `Lead time: ${item.leadTime}`}
                    <span className="mx-1">•</span>
                    <span>By Chef {item.chefName || item.bakerName}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-extrabold text-2xl text-gray-900">₹{item.price}</span>
                    <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-bold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
