import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Native regulatory alignment.",
    description: "Praxis ensures compliance, governance, privacy, and interoperability are built-in by default—essential for institutional adoption.",
    shape: "square",
  },
  {
    title: "On-chain governance.",
    description: "Embedded controls provide on-chain governance and off-chain legal enforceability, bridging digital assets with real-world trust.",
    shape: "circle",
  },
  {
    title: "Atomic settlement.",
    description: "Enables instant, atomic settlement across assets and cash, ensuring privacy, control, and full lifecycle management.",
    shape: "triangle",
  },
];

const ShapeCard = ({ shape }: { shape: string }) => (
  <div className="bg-card rounded-2xl aspect-[4/3] flex items-center justify-center">
    {shape === "square" && (
      <div className="w-20 h-20 bg-background rounded-md shadow-sm" />
    )}
    {shape === "circle" && (
      <div className="w-24 h-24 bg-background rounded-full shadow-sm" />
    )}
    {shape === "triangle" && (
      <div 
        className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[87px] border-b-background"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))' }}
      />
    )}
  </div>
);

const FeatureRow = ({ 
  feature, 
  index, 
  isReversed 
}: { 
  feature: typeof features[0]; 
  index: number;
  isReversed: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isReversed ? '' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Text content */}
      <div className={`${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="font-serif text-2xl md:text-3xl font-normal mb-4">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {feature.description}
        </p>
      </div>
      
      {/* Shape card */}
      <motion.div 
        className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ShapeCard shape={feature.shape} />
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="why" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureRow 
              key={feature.title} 
              feature={feature} 
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
