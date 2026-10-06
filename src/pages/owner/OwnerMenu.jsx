import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import { mockTiffins, mockBakery } from '../../data/mockData';

const OwnerMenu = () => {
  const [activeTab, setActiveTab] = useState('tiffin');
  const items = activeTab === 'tiffin' ? mockTiffins.slice(0, 10) : mockBakery.slice(0, 10);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Menu Manager</h1>
          <p className="text-gray-500">Add, edit, or remove items from your active menu.</p>
        </div>
        <button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition shadow-lg shadow-primary/30">
          <Plus size={20} /> Add New Item
        </button>
      </div>

      <div className="flex gap-2 border-b border-gray-200 pb-4">
        <button 
          onClick={() => setActiveTab('tiffin')}
          className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'tiffin' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Tiffins & Meals
        </button>
        <button 
          onClick={() => setActiveTab('bakery')}
          className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'bakery' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Bakery & Cakes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-40 relative bg-gray-100">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100"><Edit2 size={18} /></button>
                <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"><Trash2 size={18} /></button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{item.name}</h3>
              <p className="text-xs text-gray-500 mb-4">{item.type || item.category}</p>
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-xl text-gray-900">₹{item.price}</span>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-md">Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerMenu;
