import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  // Stagger animation for the list
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const skills = [
    "Strong understanding of React.js & state management",
    "Experience in Node.js + Express.js API development",
    "Handled real-time features using Firebase",
    "Efficient problem-solver with strong debugging skills",
    "Focused on performance, clean code & responsive design",
    "Quick learner and team player"
  ];

  return (
    <div className="max-w-7xl m-auto flex flex-col md:flex-row py-20 px-5 gap-10">
      {/* Left Side: Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-5 md:w-1/2"
      >
        <p className="text-4xl font-bold">About Me!!</p>
        <p className="text-gray-600 leading-relaxed">
          I’m a final-year B.Tech (IT) student from Chameli Devi Group of
          Institutions, Indore. I specialize in building modern web
          applications using the MERN stack, React.js UI development,
          real-time features with Firebase, and backend API development. I
          enjoy creating clean UI, solving problems, and building applications
          that provide real user value.
        </p>
      </motion.div>

      {/* Right Side: Staggered Grid */}
      <div className="md:w-1/2">
        <div className="rounded-2xl p-6 mt-6 bg-white shadow-sm border border-gray-100">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                className="flex gap-3 bg-gray-50 items-start p-4 rounded-xl cursor-default transition-colors"
              >
                <span className="text-blue-600 text-xl font-bold">✔</span>
                <p className="text-gray-700 text-sm">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About