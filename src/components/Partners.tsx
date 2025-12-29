import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Shield, Coins, RailSymbol, Lock, Server } from "lucide-react";

const partners = [
  { category: "Modernising Infrastructure", name: "Banks & Asset Managers", icon: Building2 },
  { category: "Regulatory Pilots", name: "Regulators", icon: Shield },
  { category: "Compliant Tokenisation", name: "Market Operators", icon: Coins },
  { category: "Institutional Rails", name: "Fund Administrators", icon: RailSymbol },
  { category: "Trust, Control, Longevity", name: "Institutions", icon: Lock },
  { category: "Digital Asset Platforms", name: "Custodians & Trustees", icon: Server },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Trusted by Leading Institutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Praxis serves as the foundational infrastructure layer for diverse financial institutions, enabling compliant digital asset operations at scale.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.article 
              key={partner.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                boxShadow: "0 12px 24px rgba(124, 58, 237, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 sm:p-8 hover:border-purple-300/60 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
              role="article"
              aria-label={`${partner.category}: ${partner.name}`}
            >
              {/* Icon/Visual Element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                <partner.icon className="w-6 h-6 text-purple-600" strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="relative z-10 pr-16">
                <div className="mb-4">
                  <span className="inline-block text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200/50">
                    {partner.category}
                  </span>
                </div>
                <h3 className="font-['Inter'] text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors duration-300 mb-3">
                  {partner.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Leading partner in {partner.category.toLowerCase()} for digital asset infrastructure.
                </p>
                
                {/* Decorative Line */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-violet-500/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Focus Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-focus:border-purple-500/50 transition-colors duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full border border-purple-200/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-purple-700">
              Active partnerships across 6+ institutional sectors
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
