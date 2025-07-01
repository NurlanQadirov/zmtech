import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const processSteps = [
  { icon: Search, title: "1. Discovery & Planning", description: "We start by understanding your goals, audience, and project requirements through in-depth analysis." },
  { icon: PenTool, title: "2. Design & Prototyping", description: "Our team creates intuitive and engaging user interfaces, focusing on a seamless user experience." },
  { icon: Code, title: "3. Development", description: "Using modern technologies, we build robust, scalable, and high-performance applications." },
  { icon: Rocket, title: "4. Deployment & Support", description: "After rigorous testing, we deploy your project and provide ongoing support to ensure success." }
];

// Mərhələlərin mətnini göstərən komponent
const StepContent = ({ step }) => { // DƏYİŞİKLİK: 'alignment' prop-u silindi
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      // DƏYİŞİKLİK: Bütün mətnlər həmişə soldan sağa (text-left) olacaq
      className="text-left max-w-sm" // max-w-sm əlavə etdik ki, mətnlər çox uzanmasın
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
    <section ref={targetRef} className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-space bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Our Process
          </h2>
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 md:gap-x-12">
          
          {/* SÜTUN 1: SOL TƏRƏFDƏKİ MƏTNLƏR */}
          {/* DƏYİŞİKLİK: Mətn bloklarını sütunun sağına sıxışdırmaq üçün "items-end" istifadə olunur */}
          <div className="space-y-48 flex flex-col items-end pt-4">
            <StepContent step={processSteps[0]} />
            <StepContent step={processSteps[2]} />
          </div>

          {/* SÜTUN 2: MƏRKƏZİ XƏTT VƏ İKONLAR */}
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

          {/* SÜTUN 3: SAĞ TƏRƏFDƏKİ MƏTNLƏR */}
          {/* İZAH: Buradakı mətnlər onsuz da solda olduğu üçün dəyişikliyə ehtiyac yoxdur */}
          <div className="space-y-48 pt-64 text-left">
             <StepContent step={processSteps[1]} />
             <StepContent step={processSteps[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;