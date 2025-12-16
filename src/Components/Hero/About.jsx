import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Stagger animation for the list
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Modernized Skills Data with Icons (SVGs)
  const skills = [
    {
      title: "React & State",
      desc: "Redux, Context API, Hooks",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      title: "Node.js & Express",
      desc: "RESTful APIs, Middleware",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Firebase",
      desc: "Auth, Firestore, Hosting",
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Optimization",
      desc: "Debugging & Performance",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-50">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          {/* Badge */}
          <span className="w-fit text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-100">
            Who I Am
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building digital <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              experiences that matter.
            </span>
          </h2>

          {/* Bio */}
          <p className="text-gray-600 leading-relaxed text-lg">
            I’m a <span className="text-gray-900 font-semibold">Full Stack Developer</span> with a B.Tech in IT from Chameli Devi Group of Institutions. I specialize in building robust web applications using the <span className="text-gray-900 font-semibold">MERN stack</span>.
            <br /><br />
            From designing pixel-perfect <span className="text-gray-900 font-semibold">React UIs</span> to architecting scalable <span className="text-gray-900 font-semibold">Node.js APIs</span>, I love solving complex problems and delivering real value to users.
          </p>

          {/* Mini Stats Row */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-3xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">B.Tech</p>
              <p className="text-sm text-gray-500">Degree in IT</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Modern Grid */}
        <div className="md:w-1/2 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="p-3 bg-gray-50 w-fit rounded-xl group-hover:bg-white group-hover:shadow-sm transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{skill.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;