import React from 'react';
import { Package, CheckCircle2, Clock, Truck } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

const UserOrders = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">My Orders</h1>
      <p className="text-gray-500 mb-8">Track your zero-waste meals and past purchases.</p>

      {/* Live Tracker for most recent order */}
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Live Tracker</h2>
          <span className="bg-orange-100 text-primary px-3 py-1 rounded-full text-sm font-bold">Arriving in 15 mins</span>
        </div>
        
        <div className="flex items-center justify-between relative px-4">
          <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-gray-100 -z-10 -translate-y-1/2 rounded-full"></div>
          <div className="absolute top-1/2 left-8 w-[60%] h-1.5 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-1000"></div>
          
          <div className="flex flex-col items-center gap-3 bg-white px-2">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"><CheckCircle2 size={24} /></div>
            <span className="text-sm font-bold text-gray-800">Placed</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-white px-2">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"><Clock size={24} /></div>
            <span className="text-sm font-bold text-gray-800">Preparing</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-white px-2">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center border-2 border-gray-200"><Truck size={24} /></div>
            <span className="text-sm font-bold text-gray-400">Out for Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-white px-2">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center border-2 border-gray-200"><Package size={24} /></div>
            <span className="text-sm font-bold text-gray-400">Delivered</span>
          </div>
        </div>
      </section>

      {/* Order History */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Past Orders</h2>
        <div className="space-y-4">
          {mockOrders.map((order, idx) => (
            <div key={order.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-100">
                  <Package size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{order.items}</h3>
                  <div className="text-sm text-gray-500 mt-1 flex gap-3">
                    <span>{order.id}</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
                <span className="font-extrabold text-xl text-gray-900">₹{order.totalAmount}</span>
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                  order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserOrders;
