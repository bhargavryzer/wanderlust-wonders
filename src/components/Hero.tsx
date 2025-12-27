import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Trusted by Global Institutions",
    "Securing Digital Markets",
    "Partnerships for Innovation"
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
      
      {/* City Skyline */}
      <div className="absolute bottom-24 left-0 right-0 h-48 opacity-20">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <path fill="currentColor" className="text-purple-900" d="M0,200 L0,120 L40,120 L40,100 L60,100 L60,120 L80,120 L80,80 L100,80 L100,60 L120,60 L120,80 L140,80 L140,120 L180,120 L180,90 L200,90 L200,70 L220,70 L220,90 L240,90 L240,120 L280,120 L280,100 L320,100 L320,50 L340,50 L340,30 L360,30 L360,50 L380,50 L380,100 L420,100 L420,120 L460,120 L460,80 L480,80 L480,40 L500,40 L500,80 L520,80 L520,120 L560,120 L560,90 L600,90 L600,120 L640,120 L640,70 L660,70 L660,40 L680,40 L680,70 L700,70 L700,120 L740,120 L740,100 L780,100 L780,60 L800,60 L800,100 L820,100 L820,120 L860,120 L860,80 L900,80 L900,50 L920,50 L920,80 L940,80 L940,120 L980,120 L980,90 L1020,90 L1020,120 L1060,120 L1060,70 L1100,70 L1100,40 L1120,40 L1120,70 L1140,70 L1140,120 L1180,120 L1180,100 L1220,100 L1220,120 L1260,120 L1260,80 L1300,80 L1300,120 L1340,120 L1340,90 L1380,90 L1380,120 L1440,120 L1440,200 Z" />
        </svg>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-28 pb-8 relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Section - Text Content */}
          <motion.div 
            className="flex-1 text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The Infrastructure Layer for Regulated Digital Assets
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-serif italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Programmable, compliant, and built for trust.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-purple-500/20"
                asChild
              >
                <a href="#demo" onClick={(e) => handleSmoothScroll(e, "demo")}>
                  Get Started Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
                asChild
              >
                <a href="#architecture" onClick={(e) => handleSmoothScroll(e, "architecture")}>
                  See How It Works
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Device Mockups */}
          <motion.div 
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[480px]">
              {/* Phone 1 - Left */}
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-36 lg:w-44 h-64 lg:h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl shadow-purple-500/30 border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute bottom-4 left-3 right-3">
                      <div className="text-white text-xs font-semibold mb-1">Global Markets</div>
                      <div className="text-white/70 text-[10px]">Real-time data sync</div>
                    </div>
                    <div className="absolute top-4 right-3 w-7 h-7 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Center */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-44 lg:w-52 h-80 lg:h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl shadow-purple-500/40 border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute top-6 left-3 right-3">
                      <div className="text-white/60 text-[10px] uppercase tracking-wider mb-1">Network Status</div>
                      <div className="text-white text-base font-bold">Canton Network</div>
                    </div>
                    <div className="absolute bottom-6 left-3 right-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/70 text-xs">Transactions</span>
                          <span className="text-green-400 text-xs">● Live</span>
                        </div>
                        <div className="text-white text-xl font-bold">1.2M+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Right */}
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-36 lg:w-44 h-64 lg:h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl shadow-purple-500/30 border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute bottom-4 left-3 right-3">
                      <div className="text-white text-xs font-semibold mb-1">Secure Assets</div>
                      <div className="text-white/70 text-[10px]">Privacy-first design</div>
                    </div>
                    <div className="absolute top-4 left-3 w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white rounded-md" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tab Bar */}
        <motion.div 
          className="mt-auto pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-2 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-4 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-[#2d1b4e] shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
