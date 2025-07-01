import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import edildi

const Header = () => {
  return (
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
      </div>
    </motion.header>
  );
};

export default Header;