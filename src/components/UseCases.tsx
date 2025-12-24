import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Funds",
    title: "Tokenised Funds & Securities",
    shape: "square",
  },
  {
    label: "Real Estate",
    title: "Infrastructure & Property",
    shape: "circle",
  },
  {
    label: "Alternatives",
    title: "Private Markets & Capital",
    shape: "triangle",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div 
              key={category.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl p-8 pt-12 pb-10 flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Shape container */}
              <div className="flex-1 flex items-center justify-center mb-8 min-h-[180px]">
                {category.shape === "square" && (
                  <div className="w-20 h-20 bg-background rounded-md shadow-sm" />
                )}
                {category.shape === "circle" && (
                  <div className="w-24 h-24 bg-background rounded-full shadow-sm" />
                )}
                {category.shape === "triangle" && (
                  <div 
                    className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[87px] border-b-background"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))' }}
                  />
                )}
              </div>
              
              {/* Text */}
              <span className="text-sm text-muted-foreground mb-2">
                {category.label}
              </span>
              <h3 className="font-serif text-xl md:text-2xl">
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
