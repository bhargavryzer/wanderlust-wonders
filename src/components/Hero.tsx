import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    "Trusted by Global Institutions",
    "Securing Digital Markets",
    "Partnerships for Innovation"
  ];

  const carouselSlides = [
    {
      title: "Property Tokenization",
      subtitle: "Fractional ownership of premium real estate",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    },
    {
      title: "Blockchain Infrastructure",
      subtitle: "Secure digital asset management platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    },
    {
      title: "Smart Contracts",
      subtitle: "Automated property transactions and compliance",
      image: "https://images.unsplash.com/photo-1639762681055-ee8a3906b8f9?w=800&h=600&fit=crop"
    },
    {
      title: "Digital Assets",
      subtitle: "Tokenized property portfolios and investments",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    },
    {
      title: "Compliance Framework",
      subtitle: "Regulatory-compliant tokenization standards",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Global Markets",
      subtitle: "International real estate investment access",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
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
    <section className="relative min-h-screen overflow-hidden rounded-t-3xl sm:rounded-t-4xl lg:rounded-t-5xl rounded-b-3xl sm:rounded-b-4xl lg:rounded-b-5xl">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 xl:gap-32">
          {/* Left Section - Text Content */}
          <motion.div 
            className="flex-1 text-left w-full lg:max-w-xl xl:max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6 sm:mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The Infrastructure Layer for Regulated Digital Assets
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed font-serif italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Programmable, compliant, and built for trust.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-[#2d1b4e] hover:bg-white/90 font-semibold px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base rounded-full shadow-lg shadow-purple-500/20 w-full sm:w-auto"
                asChild
              >
                <a href="#cta" onClick={(e) => handleSmoothScroll(e, "cta")}>
                  Get Started Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base rounded-full backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <a href="/discover-praxis#demo">
                  See How It Works
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Vertical Normal Carousel */}
          <motion.div 
            className="flex-1 relative flex justify-center items-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Normal Vertical Carousel Container */}
              <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl sm:rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Card Container */}
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-900/30 via-violet-900/30 to-indigo-900/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 rounded-2xl sm:rounded-3xl" />
                      
                      {/* Image Container */}
                      <div className="relative w-full h-full aspect-[3/4]">
                        <img 
                          src={carouselSlides[currentSlide].image}
                          alt={carouselSlides[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                          <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2">
                            {carouselSlides[currentSlide].subtitle}
                          </div>
                          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                            {carouselSlides[currentSlide].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      currentSlide === index
                        ? 'bg-white w-10 shadow-lg shadow-white/30'
                        : 'bg-white/40 hover:bg-white/60 w-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tab Bar - Enhanced Design with Glassmorphism */}
        <motion.div 
          className="mt-auto pt-8 sm:pt-12 md:pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 p-2 sm:p-3 max-w-6xl mx-auto shadow-2xl">
            {/* Glassmorphism gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl" />
            
            <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className="flex-1 py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium text-white/80 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{tab}</span>
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