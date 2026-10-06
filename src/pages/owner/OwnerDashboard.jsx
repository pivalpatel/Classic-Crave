import React from 'react';
import { TrendingUp, Users, PieChart, CheckCircle } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

const OwnerDashboard = () => {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Dashboard Overview</h1>
      <p className="text-gray-500 mb-8">Quick glance at your business performance today.</p>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 bg-orange-100 text-primary rounded-2xl flex items-center justify-center mb-4"><TrendingUp size={24} /></div>
          <div>
            <p className="text-gray-500 font-medium">Total Revenue (Today)</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">₹8,450</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4"><Users size={24} /></div>
          <div>
            <p className="text-gray-500 font-medium">Active Subscriptions</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">112</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4"><PieChart size={24} /></div>
          <div>
            <p className="text-gray-500 font-medium">Cake Cross-sell Rate</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">22%</h3>
          </div>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-between">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4"><CheckCircle size={24} /></div>
          <div>
            <p className="text-gray-400 font-medium">Zero-Waste Accuracy</p>
            <h3 className="text-3xl font-bold mt-1">99.8%</h3>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-100">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition">
                  <td className="py-4 font-semibold text-gray-900">{order.id}</td>
                  <td className="py-4 text-gray-600">{order.customer || 'Corporate User'}</td>
                  <td className="py-4 text-gray-600">{order.items}</td>
                  <td className="py-4 font-bold text-gray-900">₹{order.totalAmount}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OwnerDashboard;
