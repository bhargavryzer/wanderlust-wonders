import { motion } from "framer-motion";

const Header = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          <motion.a 
            href="/" 
            className="font-serif text-lg font-normal tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Praxis<sup className="text-[10px]">®</sup>
          </motion.a>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-24">
              <motion.a 
                href="#why" 
                onClick={(e) => handleSmoothScroll(e, "why")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -1 }}
              >
                Why Praxis
              </motion.a>
              <motion.a 
                href="#architecture" 
                onClick={(e) => handleSmoothScroll(e, "architecture")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -1 }}
              >
                Architecture
              </motion.a>
            </div>
          </div>
          
          <motion.a 
            href="#demo" 
            onClick={(e) => handleSmoothScroll(e, "demo")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            Request Demo
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
