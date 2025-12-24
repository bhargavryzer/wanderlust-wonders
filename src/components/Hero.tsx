import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-6 bg-background">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Geometric shapes */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-6 h-6 bg-foreground rounded-sm"
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-6 h-6 bg-foreground rounded-full"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[21px] border-b-foreground"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        
        {/* Main headline */}
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Infrastructure Layer for Regulated Digital Assets
        </motion.h1>
        
        {/* Subheadline - with gradient fade effect */}
        <motion.p 
          className="font-serif text-xl md:text-2xl lg:text-3xl italic mb-12"
          style={{
            background: 'linear-gradient(180deg, hsl(35 20% 55%) 0%, hsl(35 15% 75%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Programmable, compliant, and built for trust.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#demo" onClick={(e) => handleSmoothScroll(e, "demo")}>
              Get Started Now
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#architecture" onClick={(e) => handleSmoothScroll(e, "architecture")}>
              See How It Works
            </a>
          </Button>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-muted-foreground/50 rounded-sm" />
            <span className="text-sm">Trusted by Global Institutions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-muted-foreground/50 rounded-full" />
            <span className="text-sm">Securing Digital Markets</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-muted-foreground/50" />
            <span className="text-sm">Partnerships for Innovation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
