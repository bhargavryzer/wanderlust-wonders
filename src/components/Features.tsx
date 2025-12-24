import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Native regulatory alignment.",
    description: "Praxis ensures compliance, governance, privacy, and interoperability are built-in by default—essential for institutional adoption.",
  },
  {
    title: "On-chain governance.",
    description: "Embedded controls provide on-chain governance and off-chain legal enforceability, bridging digital assets with real-world trust.",
  },
  {
    title: "Atomic settlement.",
    description: "Enables instant, atomic settlement across assets and cash, ensuring privacy, control, and full lifecycle management.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="p-8 rounded-lg bg-card hover:bg-secondary/50 transition-all duration-300 h-full border border-border/50 hover:border-border hover:shadow-lg">
        <h3 className="font-serif text-xl md:text-2xl font-normal mb-4 group-hover:text-foreground transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="why" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
