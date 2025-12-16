import React from "react";
import { Download, Github, Instagram, Linkedin, Mail, ArrowRight, Code2, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialLinks = [
    { icon: <Github size={22} />, href: "https://github.com/Karann2002", color: "hover:text-white" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/karan-kushwah-6848b3250/", color: "hover:text-blue-400" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/karan___kushwah/?hl=en", color: "hover:text-pink-500" },
    { icon: <Mail size={22} />, href: "mailto:karankush2312@email.com", color: "hover:text-yellow-400" },
  ];

  const techStack = [
    "ReactJs", "Node.js", "ExpressJs", "MongoDB", "Tailwind","Firebase"
  ];

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden flex items-center justify-center">
      
      {/* --- Background Effects --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl w-full mx-auto px-6 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Content --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="w-fit px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-sm text-cyan-400 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Freelance
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Experiences.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-lg">
            Hi, I'm <strong className="text-slate-200">Karan Kushwah</strong>. A passionate MERN Stack Developer crafting pixel-perfect, scalable web applications.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mt-4 items-start sm:items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              My Projects <ArrowRight size={18} />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 px-8 py-3 rounded-lg text-white font-medium flex items-center gap-2 hover:border-slate-400 transition-colors"
            >
              <Download size={18} /> Resume
            </motion.button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div variants={itemVariants} className="mt-8 flex gap-6 text-slate-400">
             {socialLinks.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`transition-colors ${item.color}`}
                >
                  {item.icon}
                </motion.a>
             ))}
          </motion.div>
        </motion.div>

        {/* --- Right Column: Image & Stats --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract Background Blob Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="relative w-full max-w-md">
            {/* Main Profile Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm z-10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20 opacity-60" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="MyImage.png" 
                  alt="Karan Kushwah"
                  className="w-full h-[450px] object-cover object-top"
                />
                
                {/* Floating Info inside Image */}
                <div className="absolute bottom-4 left-4 z-30">
                  <h3 className="text-xl font-bold text-white">Full Stack Dev</h3>
                  <p className="text-cyan-400 text-sm">@Karann2002</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;