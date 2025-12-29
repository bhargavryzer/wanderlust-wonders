import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Funds",
    title: "Tokenised Funds & Securities",
    image: "/tokenised-funds.png",
  },
  {
    label: "Real Estate",
    title: "Infrastructure & Property",
    image: "/real-estate.png",
  },
  {
    label: "Alternatives",
    title: "Private Markets & Capital",
    image: "/private-markets.png",
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
            <div key={category.label} className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-card rounded-2xl overflow-hidden transition-all duration-300 min-h-[300px] group"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Subtle overlay for image enhancement */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl" />
              </motion.div>
              
              {/* Text outside card */}
              <div className="text-center">
                <span className="text-sm text-muted-foreground mb-2 font-medium block font-['Inter'] tracking-wide uppercase">
                  {category.label}
                </span>
                <h3 className="font-['Poppins'] text-xl md:text-2xl text-foreground font-semibold leading-tight">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
