import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Store, ArrowRight, Lock, Mail } from 'lucide-react';

const Login = () => {
  const { loginAsUser, loginAsOwner } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('USER'); // 'USER' or 'OWNER'

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigating to the correct layout routes established in the redesign
    if (role === 'USER') {
      loginAsUser();
      navigate('/user');
    } else {
      loginAsOwner();
      navigate('/owner');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" 
          alt="Delicious Food Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-12">
          <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white font-bold text-4xl mx-auto mb-8 shadow-2xl shadow-primary/40">CC</div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Welcome back.</h1>
          <p className="text-xl text-gray-300 font-medium">Your daily dose of fresh, zero-waste home cooked meals awaits.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Sign in to your account</h2>
            <p className="text-gray-500">Select your portal to continue</p>
          </div>

          {/* Role Toggle Switch */}
          <div className="flex p-1.5 bg-gray-100 rounded-2xl shadow-inner">
            <button 
              onClick={() => setRole('USER')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${role === 'USER' ? 'bg-white shadow-md text-gray-900 scale-[1.02]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center justify-center gap-2"><Building2 size={18}/> Corporate User</div>
            </button>
            <button 
              onClick={() => setRole('OWNER')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${role === 'OWNER' ? 'bg-white shadow-md text-gray-900 scale-[1.02]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center justify-center gap-2"><Store size={18}/> Chef Partner</div>
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="email" 
                  defaultValue={role === 'USER' ? 'user@techpark.com' : 'chef@kitchen.com'} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-800 font-medium focus:bg-white focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  type="password" 
                  defaultValue="••••••••" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-800 font-medium focus:bg-white focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-pointer">
                <input id="remember-me" type="checkbox" className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer accent-primary" defaultChecked />
                <label htmlFor="remember-me" className="text-sm font-medium text-gray-700 cursor-pointer">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-bold text-primary hover:text-orange-600 transition-colors">Forgot password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white p-4 rounded-2xl transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 font-extrabold text-lg mt-4 group"
            >
              Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
