import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSction from './components/HeroSction';
import Features24 from './components/Features24';
import CallToAction from './components/CallToAction';
import Features25 from './components/Features25';
import PricingPlan from './components/PricingPlan';
import DPOP from './components/DPOP';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import LogoIntro from './components/LogoIntro';
import TestimonialForm from './components/TestimonialForm';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    }
  }, []);

  const handleAddTestimonial = (newTestimonial) => {
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated)); // Save to localStorage
  };

  return (
    <div className="inter font-serif">
      {!showContent && (
        <LogoIntro onFinish={() => setShowContent(true)} />
      )}

      {showContent && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSction />
                  <Features24 />
                  <CallToAction />
                  <Features25 />
                  <PricingPlan />
                  <DPOP />
                  <Testimonials testimonials={testimonials} />
                  <Location />
                  <Footer />
                </>
              }
            />
            <Route
              path="/addtestimonial"
              element={<TestimonialForm onAddTestimonial={handleAddTestimonial} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
