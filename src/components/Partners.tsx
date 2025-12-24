import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { category: "Modernising Infrastructure", name: "Banks & Asset Managers" },
  { category: "Regulatory Pilots", name: "Regulators" },
  { category: "Compliant Tokenisation", name: "Market Operators" },
  { category: "Institutional Rails", name: "Fund Administrators" },
  { category: "Trust, Control, Longevity", name: "Institutions" },
  { category: "Digital Asset Platforms", name: "Custodians & Trustees" },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-xl bg-card hover:shadow-md transition-all duration-300"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {partner.category}
              </span>
              <p className="font-medium mt-2 text-foreground/90">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
