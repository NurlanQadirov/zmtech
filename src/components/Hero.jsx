import React from 'react';
import { motion } from 'framer-motion';
import DigitalCore from './DigitalCore';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const characterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    }
  },
};

const Hero = () => {
  const slogan = "Innovative IT Solutions for The Digital Future";
  const paragraph = "We build cutting-edge web applications and provide robust digital services to elevate your business.";

  const sloganWords = slogan.split(" ");
  const paragraphWords = paragraph.split(" ");
  
  const typingSpeed = 0.05;

  const sloganAnimationEndTime = 0.5 + slogan.length * typingSpeed;
  const paragraphAnimationEndTime = sloganAnimationEndTime + paragraph.length * typingSpeed + 0.5;

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <DigitalCore />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex">
          <div className="lg:w-1/2 text-center lg:text-left">
            
            <motion.h1 
              className="text-4xl md:text-6xl font-black tracking-tighter text-white font-space"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: typingSpeed, delayChildren: 0.5 }}
            >
              {sloganWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      variants={characterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: typingSpeed, delayChildren: sloganAnimationEndTime }}
            >
              {paragraphWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2 whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      variants={characterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: paragraphAnimationEndTime, duration: 0.5 }}
            >
              <Link
                to="/services"
                // DƏYİŞİKLİK: Düymənin eninin düzəlməsi üçün "inline-flex" class-ı əlavə edildi
                className="mt-8 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors inline-flex items-center gap-2 mx-auto lg:mx-0"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;