import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Funds",
    title: "Tokenised Funds & Securities",
  },
  {
    label: "Real Estate",
    title: "Infrastructure & Property",
  },
  {
    label: "Alternatives",
    title: "Private Markets & Capital",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div 
              key={category.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-all duration-300 border border-border/30"
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {category.label}
              </span>
              <h3 className="font-serif text-xl md:text-2xl mt-3">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
