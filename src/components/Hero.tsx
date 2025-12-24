import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import networkHero from "@/assets/network-hero.jpg";

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${networkHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* Geometric shapes */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-5 h-5 bg-foreground rounded-sm"
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-5 h-5 bg-foreground rounded-full"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-foreground"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        
        {/* Main headline */}
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Infrastructure Layer for Regulated Digital Assets
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          className="font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Programmable, compliant, and built for trust.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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
            <div className="w-3 h-3 bg-muted-foreground/60 rounded-sm" />
            <span className="text-sm">Trusted by Global Institutions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-muted-foreground/60 rounded-full" />
            <span className="text-sm">Securing Digital Markets</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-muted-foreground/60" />
            <span className="text-sm">Partnerships for Innovation</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
