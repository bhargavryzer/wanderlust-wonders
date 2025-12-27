import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    "Trusted by Global Institutions",
    "Securing Digital Markets",
    "Partnerships for Innovation"
  ];

  const carouselSlides = [
    {
      title: "Global Markets",
      subtitle: "Real-time data synchronization",
      stat: "50+",
      statLabel: "Markets Connected"
    },
    {
      title: "Canton Network",
      subtitle: "Enterprise-grade infrastructure",
      stat: "1.2M+",
      statLabel: "Transactions"
    },
    {
      title: "Secure Assets",
      subtitle: "Privacy-first design",
      stat: "99.9%",
      statLabel: "Uptime"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main Gradient Background */}
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
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl" />

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

          {/* Right Section - Simple Carousel */}
          <motion.div 
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Carousel Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 overflow-hidden min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="text-white/60 text-sm uppercase tracking-wider mb-2">
                      {carouselSlides[currentSlide].subtitle}
                    </div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">
                      {carouselSlides[currentSlide].title}
                    </h3>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                      <div className="text-white text-5xl md:text-6xl font-bold mb-2">
                        {carouselSlides[currentSlide].stat}
                      </div>
                      <div className="text-white/70 text-sm">
                        {carouselSlides[currentSlide].statLabel}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
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
