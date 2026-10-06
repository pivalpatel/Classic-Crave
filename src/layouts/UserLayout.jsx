import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Home, ListOrdered, BarChart2, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AIChatWidget from '../components/AIChatWidget';

const UserLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/user/home', icon: <Home size={20} /> },
    { name: 'My Orders', path: '/user/orders', icon: <ListOrdered size={20} /> },
    { name: 'Analytics', path: '/user/analytics', icon: <BarChart2 size={20} /> },
    { name: 'Settings', path: '/user/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col z-20">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary tracking-tight">Classic Crave</h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">IT Park Delivery</p>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary font-bold shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 font-medium'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-semibold hover:bg-red-50 rounded-2xl transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        
        {/* Floating Chat */}
        <AIChatWidget />
      </main>
    </div>
  );
};

export default UserLayout;
