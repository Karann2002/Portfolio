import React from "react";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./../Frame Motion/utils"; // Assuming you saved the utility above, or copy the function here.

const Hero = () => {
  return (
    <div className="mt-20 overflow-hidden">
      {/* Top Hero Section */}
      <div className="max-w-7xl m-auto flex flex-col md:flex-row gap-10 py-20 px-5 items-center">
        
        {/* Text Content */}
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5 md:w-1/2"
        >
          <h1 className="font-bold text-5xl md:text-7xl leading-tight">
            Hello, I'm <br />
            <span className="text-gray-500">Karan Kushwah</span>
          </h1>
          <p className="text-lg text-gray-600">
            Aspiring Full-Stack Developer | ReactJs · Node.js · ExpressJs · MongoDB
            <br />
            Passionate MERN stack developer building fast, scalable web applications.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black rounded px-10 py-3 bg-black text-white w-fit"
          >
            Say Hello!!
          </motion.button>
        </motion.div>

        {/* Hero Image with Float Animation */}
        <motion.div 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-auto object-cover shadow-xl rounded-2xl"
            src="./the.shadoows-20251109-0007.jpg"
            alt="Profile"
          />
        </motion.div>
      </div>

      {/* Secondary "Professional Designer" Section */}
      <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl m-auto flex flex-col md:flex-row justify-center bg-white rounded-2xl p-10 md:p-20 shadow-sm mt-10"
      >
        <div className="relative mb-10 md:mb-0">
          <img
            className="w-full md:w-[500px] h-[350px] object-cover shadow-lg rounded-2xl"
            src="./the.shadoows-20251109-0007.jpg"
            alt=""
          />

          {/* Floating Social Icons */}
          <div className="absolute bg-white px-5 py-3 rounded-xl -bottom-5 left-10 shadow-lg flex justify-center gap-3">
            {[Github, Linkedin, Phone, Mail].map((Icon, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.2, rotate: 10, color: "#2563EB" }}
                className="p-2 cursor-pointer text-gray-700"
              >
                <Icon size={20} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:px-20 justify-center">
          <h2 className="text-4xl font-bold">Professional UX Designer</h2>
          <p className="text-gray-600">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services and online stores.
          </p>
          
          <div className="flex flex-wrap gap-5 items-center">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB", color: "#fff", borderColor: "#2563EB" }}
              className="border-2 border-black rounded px-8 py-2 bg-transparent text-black transition-colors"
            >
              My Projects
            </motion.button>
            <motion.button 
               whileHover={{ scale: 1.05 }}
               className="flex justify-center items-center gap-2 border-2 border-black rounded px-8 py-2 text-black"
            >
              <Download size={18} />
              Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;