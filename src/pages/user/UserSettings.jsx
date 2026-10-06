import React from 'react';
import { User, Mail, Phone, MapPin, Bell, Shield } from 'lucide-react';

const UserSettings = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Account Settings</h1>
      <p className="text-gray-500 mb-8">Manage your profile, preferences, and delivery details.</p>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-tr from-primary to-orange-300 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">IT</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">IT Corporate User</h2>
            <p className="text-gray-500">Tech Park, Phase 1</p>
            <button className="mt-3 text-sm font-bold text-primary hover:text-orange-600 transition">Change Avatar</button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" defaultValue="IT Corporate User" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" defaultValue="user@techpark.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="tel" defaultValue="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Office Delivery Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" defaultValue="Tower B, 4th Floor" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
