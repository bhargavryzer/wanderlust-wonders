import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import architectureVisual from "@/assets/architecture-visual.jpg";

const layers = [
  "Asset Origination",
  "Legal Frameworks",
  "IAM",
  "Compliance",
  "Tokenisation",
  "Privacy",
  "Governance",
  "Settlement",
  "Custody",
  "Audit",
  "Integration",
  "User Experience",
];

const Architecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="architecture" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            The Praxis 12-Layer Architecture
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Praxis delivers a complete institutional stack spanning legal, technical, and operational layers. From origination to settlement, every step is rigorously engineered for regulated markets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Architecture image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={architectureVisual} 
                alt="Praxis 12-Layer Architecture visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Layers grid */}
          <div className="grid grid-cols-3 gap-3">
            {layers.map((layer, i) => (
              <motion.div 
                key={layer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="p-4 bg-card border border-border/50 rounded-lg flex items-center justify-center text-center hover:bg-secondary/50 hover:border-border transition-all duration-300 hover:shadow-md"
              >
                <span className="text-xs md:text-sm font-medium text-foreground/80">{layer}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
