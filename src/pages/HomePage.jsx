import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process'; // Yeni komponenti import edirik
import About from '../components/About'; // About-u da əlavə edirik

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
    </>
  );
};

export default HomePage;