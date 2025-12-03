import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./Components/Hero/LandingPage";
import Hero from "./Components/Hero/Hero";
import About from "./Components/Hero/About";
import Projects from "./Components/Hero/Projects";
import Service from "./Components/Hero/Service";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import Home from "../Home";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds (adjust based on your LandingPage animation duration)
    const timer = setTimeout(() => setShowLanding(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            exit={{ opacity: 0, y: -50 }} // Slide up and fade out
            transition={{ duration: 0.5 }}
          >
            <LandingPage />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Portfolio Content */}
            <Navbar/>
            <Home/>
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;