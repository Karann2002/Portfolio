import React from 'react'
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="bg-gray-50 py-20">
        <div className="flex justify-center items-center mb-10">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Projects
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[1, 2, 3].map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  src="/the.shadoows-20251109-0007.jpg"
                  alt="Project Preview"
                />
              </div>
              <div className="flex flex-col gap-4 py-6 px-5 flex-grow">
                <p className="font-bold text-xl">Flipkart Clone – Ecommerce App</p>
                <p className="text-gray-500 text-sm">React.js | Node.js | MongoDB | Tailwind | Firebase</p>
                
                <div className="flex gap-4 mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-black rounded py-2 text-black font-medium transition-colors"
                  >
                    Case Study
                  </motion.button>
                  <motion.button 
                     whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                     whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-black rounded py-2 text-black font-medium transition-colors"
                  >
                    Visit
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
  )
}

export default Projects;