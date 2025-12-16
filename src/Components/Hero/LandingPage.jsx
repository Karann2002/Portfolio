import React from 'react';
import { motion } from 'framer-motion';

// 1. Setup the animation variants
// These determine how the elements move
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each child animation by 0.1s
      delayChildren: 0.3,   // Waits 0.3s before starting
    },
  },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// 2. Reusable Component for revealing individual words
const RevealText = ({ text, className }) => {
  // Split text into words to animate them individually
  const words = text.split(" ");

  return (
    <motion.div 
      className={`overflow-hidden flex flex-wrap gap-2 ${className}`} // Tailwind classes for layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={textVariants}
          className="inline-block" // Essential for transform to work
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 3. Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#111] text-white flex flex-col justify-center items-center px-4">
      
      {/* Main Headline with Reveal Effect */}
      <RevealText 
        text="Design. Develop. Deploy." 
        className="text-4xl md:text-7xl font-bold mb-6 text-center" 
      />

      {/* Sub-headline / Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-gray-400 text-lg md:text-xl text-center max-w-lg"
      >
        I'm a Full Stack Developer Engineer crafting high-performance digital experiences.
      </motion.p>

      {/* Call to Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
      >
        View My Work
      </motion.button>

    </div>
  );
};

export default LandingPage;