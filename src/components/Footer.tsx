import { motion } from "framer-motion";

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer 
      className="py-16 px-6 border-t border-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Logo */}
          <div>
            <a href="/" className="font-serif text-xl font-bold tracking-tight">
              Praxis<sup className="text-xs">®</sup>
            </a>
          </div>
          
          {/* Product links */}
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#why" 
                  onClick={(e) => handleSmoothScroll(e, "why")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Why Praxis
                </a>
              </li>
              <li>
                <a 
                  href="#architecture" 
                  onClick={(e) => handleSmoothScroll(e, "architecture")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  onClick={(e) => handleSmoothScroll(e, "demo")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources links */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
