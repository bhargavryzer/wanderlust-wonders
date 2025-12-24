import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-background">
      <motion.div 
        ref={ref}
        className="container mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
      >
        <blockquote>
          <motion.p 
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-8 text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Praxis embeds multi-party approvals and robust controls. Actions are always permissioned, visible to auditors, and legally accountable."
          </motion.p>
          <motion.footer 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <cite className="not-italic font-medium">Senior Compliance Officer</cite>
          </motion.footer>
        </blockquote>
      </motion.div>
    </section>
  );
};

export default Testimonial;
