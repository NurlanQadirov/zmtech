import React from 'react';
import About from '../components/About'; // Mövcud About komponentini import edirik

const AboutPage = () => {
  return (
    <div className="pt-24"> {/* Header-in altından başlamaq üçün boşluq */}
      <About />
    </div>
  );
};

export default AboutPage;