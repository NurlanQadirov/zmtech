import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 font-space bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              About ZM Tech
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              We are a team of passionate developers, designers, and strategists dedicated to delivering high-quality digital solutions. Our mission is to help businesses thrive by leveraging the power of modern technology.
            </p>
            <p className="text-lg text-gray-400">
              With a focus on innovation and client success, we build custom software, dynamic websites, and provide expert IT consulting to navigate the complexities of the digital world.
            </p>
          </motion.div>
          
          {/* DƏYİŞİKLİK BURADADIR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-xl overflow-hidden"
          >
             <picture>
                <source srcSet="/office.webp" type="image/webp" />
                <img
                    src="/office.jpg"
                    alt="Our Office"
                    className="w-full h-full object-cover"
                    loading="lazy" 
                />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;