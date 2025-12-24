import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CantonNetwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-background">
      <motion.div 
        ref={ref}
        className="container mx-auto text-center max-w-3xl"
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
          className="text-lg md:text-xl font-serif italic"
          style={{
            background: 'linear-gradient(180deg, hsl(35 20% 55%) 0%, hsl(35 15% 75%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
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
