import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden rounded-b-3xl sm:rounded-b-4xl lg:rounded-b-5xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      {/* Dark Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #1e1b4b 50%, #0f172a 75%, #1e293b 100%)',
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <a href="/" className="font-['Oxanium'] text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-white/90 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
              Praxis<sup className="text-xs sm:text-sm">®</sup>
            </a>
            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed mb-6">
              The Infrastructure Layer for Regulated Digital Assets
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Product links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-base sm:text-lg text-white">Product</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="#why" 
                  onClick={(e) => handleSmoothScroll(e, "why")}
                  className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md"
                >
                  Discover Praxis
                </a>
              </li>
              <li>
                <a 
                  href="#architecture" 
                  onClick={(e) => handleSmoothScroll(e, "architecture")}
                  className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md"
                >
                  Explore Architecture
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  onClick={(e) => handleSmoothScroll(e, "demo")}
                  className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md"
                >
                  Start Your Journey
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Use Cases
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-base sm:text-lg text-white">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Resources links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-6 text-base sm:text-lg text-white">Resources</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:drop-shadow-md">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Praxis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
