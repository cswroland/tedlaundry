import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import SloganMarquee from './components/SloganMarquee';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <SloganMarquee />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 6 seconds timer for preloader as requested
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;