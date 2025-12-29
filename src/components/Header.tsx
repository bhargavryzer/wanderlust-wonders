import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PlatformAccessModal from "./PlatformAccessModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 backdrop-blur-md border-b border-gray-300 rounded-t-3xl sm:rounded-t-4xl lg:rounded-t-5xl shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@600;700&display=swap" rel="stylesheet" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <motion.a 
            href="/" 
            className="font-['Oxanium'] text-2xl font-bold tracking-wide text-black hover:text-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Praxis<sup className="text-xs ml-1">®</sup>
          </motion.a>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-16">
              <motion.a 
                href="/discover-praxis"
                className="text-base font-semibold text-gray-800 hover:text-black transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
                whileHover={{ y: -2 }}
              >
                Discover Praxis
              </motion.a>
              <motion.a 
                href="/explore-architecture"
                className="text-base font-semibold text-gray-800 hover:text-black transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
                whileHover={{ y: -2 }}
              >
                Explore Architecture
              </motion.a>
              <motion.a 
                href="/start-your-journey"
                className="text-base font-semibold text-gray-800 hover:text-black transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
                whileHover={{ y: -2 }}
              >
                Start Your Journey
              </motion.a>
            </div>
          </div>

          {/* Get Platform Access Button */}
          <motion.button
            onClick={openModal}
            className="bg-gradient-to-r from-slate-100 via-gray-100 to-slate-100 border border-black text-black px-6 py-3 rounded-xl font-semibold hover:from-slate-200 hover:to-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Platform Access
            <ArrowRight size={18} />
          </motion.button>
        </nav>
      </div>
      
      {/* Platform Access Modal */}
      <PlatformAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </motion.header>
  );
};

export default Header;
