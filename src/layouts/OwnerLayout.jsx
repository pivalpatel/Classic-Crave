import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Utensils, Star, LineChart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AIDemandPredictor from '../components/AIDemandPredictor';

const OwnerLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', path: '/owner/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Kitchen Board', path: '/owner/orders', icon: <ShoppingBag size={20} /> },
    { name: 'Menu Editor', path: '/owner/menu', icon: <Utensils size={20} /> },
    { name: 'Reviews', path: '/owner/reviews', icon: <Star size={20} /> },
    { name: 'Analytics', path: '/owner/analytics', icon: <LineChart size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] text-gray-800 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white shadow-2xl flex flex-col z-20">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">CC</div>
            <h1 className="text-2xl font-bold tracking-tight">Chef Partner</h1>
          </div>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold ml-13">Classic Crave Business</p>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white font-medium'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 font-semibold hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Topbar for Predictor */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-800">Welcome back, Chef!</h2>
          <AIDemandPredictor />
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerLayout;
