import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(260 70% 50%) 0%, hsl(280 60% 45%) 50%, hsl(300 50% 40%) 100%)',
      }}
    >
      {/* City skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-30">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 200V120h40v-20h20v-30h30v30h20v-50h40v50h20v-40h30v-30h20v70h40v-20h20v20h30v-60h40v60h20v-30h30v30h40v-80h20v-20h30v100h40v-40h20v-30h30v70h40v-50h20v50h30v-20h40v20h20v-60h30v-30h20v90h40v-40h20v40h30v-70h40v70h20v-20h30v20h40v-50h20v-40h30v90h40v-30h20v30h30v-60h40v60h20v-20h30v20h40v-40h20v40h30V200H0z" fill="hsl(260 70% 30%)" />
        </svg>
      </div>

      {/* Floating particles/dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        {/* Geometric shapes */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-5 h-5 bg-white/80 rounded-sm"
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-5 h-5 bg-white/80 rounded-full"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[17px] border-b-white/80"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        
        {/* Main headline */}
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Infrastructure Layer for Regulated Digital Assets
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          className="font-serif text-xl md:text-2xl lg:text-3xl italic mb-10 text-white/70"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Programmable, compliant, and built for trust.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg"
            asChild
          >
            <a href="#demo" onClick={(e) => handleSmoothScroll(e, "demo")}>
              Get Started Now
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-full"
            asChild
          >
            <a href="#architecture" onClick={(e) => handleSmoothScroll(e, "architecture")}>
              See How It Works
            </a>
          </Button>
        </motion.div>

        {/* Floating device mockups */}
        <motion.div 
          className="relative flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left phone mockup */}
          <motion.div 
            className="relative w-48 md:w-56 lg:w-64 bg-white rounded-3xl shadow-2xl overflow-hidden"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-gradient-to-b from-gray-100 to-white p-3">
              <div className="bg-gray-200 rounded-2xl h-40 md:h-48 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-full h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mb-2" />
                  <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto mb-1" />
                  <div className="h-2 bg-gray-300 rounded w-1/2 mx-auto" />
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          </motion.div>

          {/* Right phone mockup */}
          <motion.div 
            className="relative w-48 md:w-56 lg:w-64 bg-white rounded-3xl shadow-2xl overflow-hidden -mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="bg-gradient-to-b from-gray-100 to-white p-3">
              <div className="bg-gray-200 rounded-2xl h-40 md:h-48 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-2" />
                  <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto mb-1" />
                  <div className="h-2 bg-gray-300 rounded w-1/2 mx-auto" />
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white/40 rounded-sm" />
            <span className="text-sm">Trusted by Global Institutions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
            <span className="text-sm">Securing Digital Markets</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white/40" />
            <span className="text-sm">Partnerships for Innovation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
