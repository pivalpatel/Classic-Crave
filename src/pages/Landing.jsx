import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">CC</div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">Classic Crave</span>
          </div>
          <nav className="hidden md:flex gap-8 font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition">How it Works</a>
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#chefs" className="hover:text-primary transition">For Chefs</a>
          </nav>
          <button 
            onClick={() => navigate('/login')}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-primary transition-all hover:shadow-primary/30"
          >
            Sign In
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Ghar Ka Khana & <br />
              <span className="text-primary">Premium Bakes.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tired of corporate cafeteria food? Get zero-waste, hygienic, and incredibly delicious meals cooked by verified home chefs delivered directly to your office desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => navigate('/login')} className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/30 transition-all">
                Order Now <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 hover:border-gray-300 px-8 py-4 rounded-2xl font-extrabold text-lg transition-all shadow-sm">
                Explore Menu
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" 
              alt="Delicious Indian Thali" 
              className="absolute right-0 top-0 w-3/4 h-3/4 object-cover rounded-[3rem] shadow-2xl border-8 border-white z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Custom Cake" 
              className="absolute left-0 bottom-0 w-2/3 h-2/3 object-cover rounded-[3rem] shadow-2xl border-8 border-white z-20"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-1/4 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600"><ShieldCheck size={24} /></div>
              <div>
                <p className="font-bold text-gray-900">100% Hygienic</p>
                <p className="text-xs text-gray-500">Verified Home Kitchens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Why IT Professionals Love Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-100 text-primary rounded-3xl flex items-center justify-center mb-6 shadow-inner"><Heart size={40} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Health & Taste</h3>
                <p className="text-gray-500 leading-relaxed text-center max-w-sm">No excessive oil or artificial colors. Just pure, nutritious home-cooked meals tailored for everyday consumption.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner"><Leaf size={40} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero-Waste Promise</h3>
                <p className="text-gray-500 leading-relaxed text-center max-w-sm">We use 100% reusable stainless steel tiffins or certified compostable packaging. Order by 9 PM to help us prevent food waste.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner"><ShieldCheck size={40} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Chef Chat</h3>
                <p className="text-gray-500 leading-relaxed text-center max-w-sm">Have allergies or prefer less spice? Chat directly with your home chef through our platform before your meal is prepared.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">CC</div>
              <span className="text-2xl font-extrabold text-white">Classic Crave</span>
            </div>
            <p className="max-w-sm leading-relaxed">Revolutionizing corporate dining by connecting professionals with passionate home chefs. Great food, zero guilt.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Chef Partner Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-sm">
          <p>© 2026 Classic Crave Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Made with 🧡 for IT Parks</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
