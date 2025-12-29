import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Scale, Shield, CheckCircle, Coins, Lock, Building, Zap, Database, FileText, Link, Sparkles, Eye } from "lucide-react";

const layers = [
  { 
    title: "Asset Origination",
    description: "Source and verify digital assets with institutional-grade due diligence",
    color: "from-purple-500/20 to-pink-500/20",
    icon: Target
  },
  { 
    title: "Legal Frameworks",
    description: "Compliant legal structures for regulated digital asset operations",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: Scale
  },
  { 
    title: "IAM",
    description: "Identity and access management for enterprise security",
    color: "from-green-500/20 to-emerald-500/20",
    icon: Lock
  },
  { 
    title: "Compliance",
    description: "Automated regulatory compliance and reporting systems",
    color: "from-yellow-500/20 to-orange-500/20",
    icon: CheckCircle
  },
  { 
    title: "Tokenisation",
    description: "Convert real-world assets into compliant digital tokens",
    color: "from-red-500/20 to-rose-500/20",
    icon: Coins
  },
  { 
    title: "Privacy",
    description: "Advanced privacy controls and data protection mechanisms",
    color: "from-indigo-500/20 to-purple-500/20",
    icon: Shield
  },
  { 
    title: "Governance",
    description: "On-chain governance and off-chain legal enforceability",
    color: "from-teal-500/20 to-cyan-500/20",
    icon: Building
  },
  { 
    title: "Settlement",
    description: "Instant, atomic settlement across assets and cash",
    color: "from-orange-500/20 to-red-500/20",
    icon: Zap
  },
  { 
    title: "Custody",
    description: "Secure digital asset custody with institutional controls",
    color: "from-violet-500/20 to-purple-500/20",
    icon: Database
  },
  { 
    title: "Audit",
    description: "Comprehensive audit trails and regulatory reporting",
    color: "from-emerald-500/20 to-green-500/20",
    icon: FileText
  },
  { 
    title: "Integration",
    description: "Seamless integration with existing financial systems",
    color: "from-pink-500/20 to-rose-500/20",
    icon: Link
  },
  { 
    title: "User Experience",
    description: "Intuitive interfaces for institutional digital asset workflows",
    color: "from-amber-500/20 to-yellow-500/20",
    icon: Sparkles
  },
];

const CardSwapComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const visibleCards = 5;
  const getCardIndex = (offset) => {
    return (currentIndex + offset + layers.length) % layers.length;
  };

  const cardVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateX: direction > 0 ? -15 : 15,
    }),
    center: (position) => ({
      y: position * 40,
      opacity: 1 - Math.abs(position) * 0.15,
      scale: 1 - Math.abs(position) * 0.08,
      rotateX: position * 3,
      zIndex: visibleCards - Math.abs(position),
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1] as const,
      },
    }),
    exit: (direction) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      rotateX: direction > 0 ? 15 : -15,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div 
      className="relative w-full max-w-md mx-auto h-[600px] flex items-center justify-center"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-80 h-56">
        <AnimatePresence initial={false} custom={direction}>
          {Array.from({ length: visibleCards }).map((_, offset) => {
            const index = getCardIndex(offset);
            const layer = layers[index];
            const position = offset - Math.floor(visibleCards / 2);
            const IconComponent = layer.icon;

            return (
              <motion.div
                key={`${index}-${offset}`}
                custom={position}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${layer.color} backdrop-blur-xl rounded-2xl border border-white/30 p-6 flex flex-col justify-center items-center text-center shadow-2xl`}>
                  <div className="mb-4 opacity-80">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {layers.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Architecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="architecture" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div 
            ref={ref}
            className="text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 sm:mb-8 text-white">
              The Praxis 12-Layer Architecture
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed font-serif italic">
              Praxis delivers a complete institutional stack spanning legal, technical, and operational layers. From origination to settlement, every step is rigorously engineered for regulated markets.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Key layers include Asset Origination, Legal Frameworks, IAM, Compliance, Tokenisation, Privacy, Governance, Settlement, Custody, Audit, Integration, and User Experience. Each layer is purpose-built for secure, compliant operations.
            </p>
          </motion.div>

          {/* Right Section - Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CardSwapComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;