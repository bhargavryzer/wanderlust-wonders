import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import networkHero from "@/assets/network-hero.jpg";

const CantonNetwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${networkHero})` }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="container mx-auto text-center max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="font-serif text-3xl md:text-4xl font-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Built on the Canton Network
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Privacy, interoperability, and production-grade performance for institutional digital asset workflows.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CantonNetwork;
