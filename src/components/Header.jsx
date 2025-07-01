import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter">ZM Tech</Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-400">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
          <Link to="/contact" className="hidden md:inline-block px-4 py-2 text-sm font-medium border border-gray-700 rounded-full hover:bg-white hover:text-black transition-colors">
            Get in Touch
          </Link>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#0A0A0A] p-4 pt-6 pb-8"
          >
            <nav className="flex flex-col items-center space-y-4 text-gray-300">
              <motion.div variants={itemVariants}><Link to="/services" onClick={toggleMenu} className="hover:text-white transition-colors text-lg">Services</Link></motion.div>
              <motion.div variants={itemVariants}><Link to="/about" onClick={toggleMenu} className="hover:text-white transition-colors text-lg">About</Link></motion.div>
              <motion.div variants={itemVariants}><Link to="/contact" onClick={toggleMenu} className="hover:text-white transition-colors text-lg">Contact</Link></motion.div>
              <motion.div variants={itemVariants} className="pt-4 w-full max-w-xs">
                <Link to="/contact" onClick={toggleMenu} className="w-full inline-block text-center px-4 py-2 text-sm font-medium border border-gray-700 rounded-full hover:bg-white hover:text-black transition-colors">
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;