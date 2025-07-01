// src/App.jsx

import React, { Suspense } from 'react'; // Suspense import edilir
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import Layout from './components/Layout';
// import HomePage from './pages/HomePage'; // Statik importlar silinir
// import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

// DƏYİŞİKLİK: Səhifələr React.lazy ilə import edilir
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

const App = () => {
  useLenis();
  
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <BrowserRouter>
        {/* DƏYİŞİKLİK: Routes komponenti Suspense ilə əhatə olunur */}
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} /> 
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;