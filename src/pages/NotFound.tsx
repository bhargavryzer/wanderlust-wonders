import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900">
      {/* Header */}
      <Header />
      
      {/* Main 404 Content */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 25%, #a78bfa 50%, #7c3aed 75%, #6d28d9 100%)',
          }}
        />
        
        {/* Dotted Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        
        {/* Gradient Orbs for depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/40 rounded-full blur-3xl" />

        {/* 404 Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* 404 Number */}
            <motion.h1 
              className="font-serif text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-normal leading-none text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6 text-white">
                Page Not Found
              </h2>
              <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-serif italic">
                The page you're looking for seems to have vanished into the digital ether. 
                Let's get you back to the Praxis platform.
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to="/"
              className="bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <Home size={20} />
              Return to Home
              <ArrowRight size={20} />
            </Link>
            
            <Link
              to="/discover-praxis"
              className="bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 border border-black text-black px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base rounded-full font-semibold hover:from-slate-200 hover:to-gray-200 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Search size={20} />
              Discover Praxis
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Looking for something specific?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/discover-praxis"
                  className="text-white/80 hover:text-white transition-colors text-left p-3 rounded-lg hover:bg-white/10"
                >
                  <div className="font-medium mb-1">Discover Praxis</div>
                  <div className="text-sm text-white/60">Learn about our platform</div>
                </Link>
                <Link
                  to="/explore-architecture"
                  className="text-white/80 hover:text-white transition-colors text-left p-3 rounded-lg hover:bg-white/10"
                >
                  <div className="font-medium mb-1">Architecture</div>
                  <div className="text-sm text-white/60">Explore our 12-layer system</div>
                </Link>
                <Link
                  to="/start-your-journey"
                  className="text-white/80 hover:text-white transition-colors text-left p-3 rounded-lg hover:bg-white/10"
                >
                  <div className="font-medium mb-1">Start Your Journey</div>
                  <div className="text-sm text-white/60">Begin your onboarding</div>
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="text-white/80 hover:text-white transition-colors text-left p-3 rounded-lg hover:bg-white/10"
                >
                  <div className="font-medium mb-1">Go Back</div>
                  <div className="text-sm text-white/60">Return to previous page</div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
