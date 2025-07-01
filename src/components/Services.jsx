// src/components/Services.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Code, Shield, Users, Settings, Database, FileText } from 'lucide-react';

const servicesData = [
  { id: 1, icon: Code, title: "Website Development", description: "Modern, responsive, and high-performance websites tailored to your brand.", color: "#38bdf8" },
  { id: 2, icon: Shield, title: "Cybersecurity", description: "Protecting your digital assets with advanced security protocols and consulting.", color: "#4ade80" },
  { id: 3, icon: Database, title: "1C Optimization", description: "Enhancing the performance and efficiency of your 1C enterprise systems.", color: "#c084fc" },
  { id: 4, icon: Server, title: "Hosting & Testing", description: "Reliable hosting solutions and rigorous testing to ensure seamless operation.", color: "#f87171" },
  // Digər xidmətləri də bu formatda əlavə edə bilərsiniz
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section id="services" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter font-space">Our Services</h2>
          <p className="text-lg text-gray-400 mt-2">What we can do for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                onHoverStart={() => setActiveService(service)}
                className="p-6 rounded-lg cursor-pointer transition-colors relative"
                style={{ backgroundColor: activeService.id === service.id ? '#1A1A1A' : 'transparent' }}
              >
                <div className="flex items-center gap-4">
                  <service.icon className="w-8 h-8" style={{color: service.color}} />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                {activeService.id === service.id && (
                  <motion.div className="h-0.5 mt-2" layoutId="underline" style={{backgroundColor: activeService.color}} />
                )}
              </motion.div>
            ))}
          </div>

          <div className="sticky top-32 p-8 bg-gray-900/50 border border-gray-800 rounded-xl h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-center items-center text-center h-full"
              >
                <activeService.icon className="w-24 h-24 mb-6" style={{color: activeService.color}}/>
                <h3 className="text-3xl font-bold mb-4 font-space">{activeService.title}</h3>
                <p className="text-lg text-gray-400">{activeService.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;