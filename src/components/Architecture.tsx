import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="architecture" className="py-24 px-6 bg-background">
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
          <p className="text-muted-foreground">
            Key layers include Asset Origination, Legal Frameworks, IAM, Compliance, Tokenisation, Privacy, Governance, Settlement, Custody, Audit, Integration, and User Experience. Each layer is purpose-built for secure, compliant operations.
          </p>
        </motion.div>

        {/* Layers grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {layers.map((layer, i) => (
            <motion.div 
              key={layer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="p-4 bg-card rounded-xl flex items-center justify-center text-center hover:shadow-md transition-all duration-300"
            >
              <span className="text-xs md:text-sm font-medium text-foreground/80">{layer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
