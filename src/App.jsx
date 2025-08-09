import React, { useState } from 'react';
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

const App = () => {
  const [showContent, setShowContent] = useState(false);

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
                  <Testimonials />
                  <Location />
                  <Footer />
                </>
              }
            />
            {/* Add other routes here if needed */}
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
