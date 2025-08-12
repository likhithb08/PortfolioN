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
import Resume from './components/Resume';
import { FaXmark } from "react-icons/fa6";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [showResume, setShowResume] = useState(false);


  // Load testimonials from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    }
  }, []);

  // Add testimonial
  const handleAddTestimonial = (newTestimonial) => {
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated));
  };

  // Clear testimonials
  const handleClearTestimonials = () => {
    setTestimonials([]);
    localStorage.removeItem('testimonials');
  };

  return (
    <div className="inter font-serif">
      {!showContent && (
        <LogoIntro onFinish={() => setShowContent(true)} />
      )}


      {showContent && (
        <Router>
          <Navbar onResumeClick={() => setShowResume(true)} />

                  {showResume && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setShowResume(false)}
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300"
          >
            <FaXmark />
          </button>

          {/* Resume Viewer */}
            <Resume></Resume>
        </div>
      )}
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
                  
                  {/* Pass testimonials */}
                  <Testimonials testimonials={testimonials} />

                  {/* Test-only clear button
                  <div className="text-center my-4">
                    <button 
                      onClick={handleClearTestimonials}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Clear All Testimonials
                    </button>
                  </div> */}

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
