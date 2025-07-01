import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  useLenis();
  
  return (
    // DƏYİŞİKLİK: "overflow-x-hidden" class-ı bura əlavə edildi.
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Ana səhifə */}
            <Route index element={<HomePage />} /> 
            {/* Digər səhifələr */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;