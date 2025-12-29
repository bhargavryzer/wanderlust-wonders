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

const ShapeCard = ({ shape, featureTitle }: { shape: string; featureTitle: string }) => (
  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl sm:rounded-3xl border border-purple-200 aspect-[4/3] flex items-center justify-center shadow-lg overflow-hidden">
    <div className="relative z-10 w-full h-full">
      {featureTitle === "Native regulatory alignment." ? (
        <img 
          src="/feat-1.png" 
          alt="Native regulatory alignment" 
          className="w-full h-full object-cover"
        />
      ) : featureTitle === "On-chain governance." ? (
        <img 
          src="/feat-2.png" 
          alt="On-chain governance" 
          className="w-full h-full object-cover"
        />
      ) : featureTitle === "Atomic settlement." ? (
        <img 
          src="/feat-3.png" 
          alt="Atomic settlement" 
          className="w-full h-full object-cover"
        />
      ) : shape === "square" && (
        <div className="w-20 h-20 bg-purple-200 rounded-md shadow-md mx-auto" />
      )}
      {featureTitle !== "Native regulatory alignment." && featureTitle !== "On-chain governance." && featureTitle !== "Atomic settlement." && shape === "circle" && (
        <div className="w-24 h-24 bg-purple-200 rounded-full shadow-md mx-auto" />
      )}
      {featureTitle !== "Native regulatory alignment." && featureTitle !== "On-chain governance." && featureTitle !== "Atomic settlement." && shape === "triangle" && (
        <div 
          className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[87px] border-b-purple-200 mx-auto"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
        />
      )}
    </div>
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
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-4 sm:mb-6 text-gray-900">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg sm:text-xl">
          {feature.description}
        </p>
      </div>
      
      {/* Shape card */}
      <motion.div 
        className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ShapeCard shape={feature.shape} featureTitle={feature.title} />
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 25%, #6d28d9 50%, #8b5cf6 75%, #a78bfa 100%)',
        }}
      />
      
      {/* Very Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.2) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Minimal Gradient Orbs for subtle depth */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-100/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-6xl mx-auto text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 sm:mb-8 text-gray-900">
            Built for Institutional Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed font-serif italic max-w-4xl mx-auto">
            Praxis delivers enterprise-grade features that ensure compliance, security, and scalability for regulated digital asset markets.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {features.map((feature, index) => (
            <FeatureRow 
              key={index}
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
