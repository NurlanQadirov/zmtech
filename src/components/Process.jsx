import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const processSteps = [
  { icon: Search, title: "1. Discovery & Planning", description: "We start by understanding your goals, audience, and project requirements through in-depth analysis." },
  { icon: PenTool, title: "2. Design & Prototyping", description: "Our team creates intuitive and engaging user interfaces, focusing on a seamless user experience." },
  { icon: Code, title: "3. Development", description: "Using modern technologies, we build robust, scalable, and high-performance applications." },
  { icon: Rocket, title: "4. Deployment & Support", description: "After rigorous testing, we deploy your project and provide ongoing support to ensure success." }
];

const StepContent = ({ step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-left max-w-sm"
    >
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-400">{step.description}</p>
    </motion.div>
  );
};

const Process = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end end']
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-space bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Our Process
          </h2>
        </div>
        
        {/* Desktop View (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-8 md:gap-x-12">
          <div className="space-y-48 flex flex-col items-end pt-4">
            <StepContent step={processSteps[0]} />
            <StepContent step={processSteps[2]} />
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-0 bottom-0 w-0.5 bg-gray-800"></div>
            <motion.div style={{ height }} className="absolute top-0 w-0.5 bg-cyan-400"></motion.div>
            <div className="sticky top-1/3 flex flex-col gap-36">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  viewport={{ once: true, amount: 0.5, margin: "0px 0px -200px 0px" }}
                  className="p-3 bg-gray-900 border border-gray-800 rounded-full text-cyan-400 z-10"
                >
                  <step.icon className="w-8 h-8" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-48 pt-64 text-left">
             <StepContent step={processSteps[1]} />
             <StepContent step={processSteps[3]} />
          </div>
        </div>

        {/* Mobile View (visible only on mobile) */}
        <div className="md:hidden flex flex-col items-center space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-4 bg-gray-900 border border-gray-800 rounded-full text-cyan-400 mb-4">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;