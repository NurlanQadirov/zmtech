// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-space bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"></textarea>
              <button type="submit" className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
             <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">contact@zmtech.com</span>
             </div>
             <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">+994 (XX) XXX XX XX</span>
             </div>
             <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">Baku, Azerbaijan</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;