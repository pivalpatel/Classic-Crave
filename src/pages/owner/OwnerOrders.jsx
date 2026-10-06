import React, { useState } from 'react';
import { mockOrders } from '../../data/mockData';

const OwnerOrders = () => {
  const [columns] = useState({
    new: mockOrders.filter(o => o.status === 'Pre-booked by 9PM').slice(0, 10),
    prep: mockOrders.filter(o => o.status === 'Preparing').slice(0, 5),
    ready: mockOrders.filter(o => o.status === 'Delivered').slice(0, 5) // Mocking delivered as ready for demo
  });

  const renderCard = (order, borderClass) => (
    <div key={order.id} className={`bg-white p-5 rounded-2xl shadow-sm border-t-4 ${borderClass} hover:shadow-md transition cursor-grab active:cursor-grabbing`}>
      <div className="flex justify-between text-xs text-gray-400 font-bold mb-3">
        <span>{order.id}</span>
        <span>{order.date}</span>
      </div>
      <p className="font-bold text-gray-900 mb-4">{order.items}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{order.customer || 'Emp_101'}</span>
        <span className="font-extrabold text-gray-900">₹{order.totalAmount}</span>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Live Kitchen Board</h1>
      <p className="text-gray-500 mb-8">Drag and drop orders as they move through your kitchen.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* New Orders */}
        <div className="bg-gray-200/50 rounded-3xl p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">New Orders</h3>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">{columns.new.length}</span>
          </div>
          <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {columns.new.map(order => renderCard(order, 'border-blue-400'))}
          </div>
        </div>

        {/* Preparing */}
        <div className="bg-gray-200/50 rounded-3xl p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">Preparing</h3>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">{columns.prep.length}</span>
          </div>
          <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {columns.prep.map(order => renderCard(order, 'border-yellow-400'))}
          </div>
        </div>

        {/* Ready for Dispatch */}
        <div className="bg-gray-200/50 rounded-3xl p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">Ready for Dispatch</h3>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">{columns.ready.length}</span>
          </div>
          <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {columns.ready.map(order => renderCard(order, 'border-green-400'))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerOrders;
