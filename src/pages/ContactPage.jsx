import React from 'react';
import Contact from '../components/Contact'; // Mövcud Contact komponentini import edirik

const ContactPage = () => {
  return (
    <div className="pt-24"> {/* Header-in altından başlamaq üçün boşluq */}
      <Contact />
    </div>
  );
};

export default ContactPage;