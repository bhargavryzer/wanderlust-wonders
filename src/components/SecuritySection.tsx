import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Security/Compliance Image Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/security-compliance.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/80 to-slate-900/85" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 sm:mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Security & Compliance
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Audit-ready, jurisdiction-aware, and designed for the highest standards in financial markets.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
