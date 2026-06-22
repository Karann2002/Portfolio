import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  // Sample Data (Replace with your real data)
  const projects = [
    {
      title: "HRMS",
      category: "Productivity",
      image:
        "/hrms.png",
      tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Tailwind CSS', 'Redux', 'JWT'],
      description:
        "HRMS - Human Resource Management Software- Built a full-stack Human Resource Management System (HRMS) with secure JWT authentication and role-based access for administrators and employees.",
      links: {
        live: "https://vexelon-hrms.vercel.app/",
        github: "https://github.com/Karann2002/VexelonHRMS",
      },
    },
    {
      title: "ShopEasy - A Ecommerce Site",
      category: "E-Commerce",
      image:
        "shopeasy.png", 
      tech: ["React.js", "Firebase", "Tailwind", "Role Based Auth"],
      description:
        "A fully functional e-commerce platform with cart management, payment gateway integration, and user authentication.",
      links: {
        live: "https://shop-easy-two-lilac.vercel.app/",
        github: "https://github.com/Karann2002/ShopEasy",
      },
    },
    
    {
      title: "SnapLink – Social Media Platform",
      category: "Social",
      image:
        "snaplink.png",
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind CSS","Socket.io"],
      description:
        "An SnapLink-inspired social media web application where users can sign up, log in, share posts, like, comment, follow/unfollow, and chat in real-time. Built using the MERN stack with modern UI design.",
      links: {
        live: "snap-link-frontend-pi.vercel.app/",
        github: "https://github.com/Karann2002/SnapLink",
      },
    },
    {
      title: "KPZone Stays - Find Your Perfect Hostels",
      category: "Discover",
      image:
        "kpzonestays.png",
      tech: ["NextJS","Tailwind CSS",],
      description:
        "Discover premium hostels and luxury PGs loaded with top-tier amenities, situated directly around your university campus.",
      links: {
        live: "https://www.kpzonestays.com/",
        github: "https://github.com/Karann2002/KPZone",
      },
    },
    {
      title: "Ritzy Junior School - Daycare and Play School ",
      category: "Education",
      image:
        "ritzysch.png",
      tech: ["HTML","JS", "CSS","Email.JS"],
      description:
        "Nurturing curiosity and building foundations for a lifelong love of learning. Join our community of happy explorers today.",
      links: {
        live: "https://ritzyjuniorschool.com/",
        github: "https://github.com/Karann2002/RitzyJrSch",
      },
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background (Matches About Section) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-100"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Featured <span className="text-blue-600">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl"
          >
            A selection of projects that demonstrate my technical skills and
            problem-solving abilities.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white rounded-3xl cursor-pointer overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-50 text-gray-600  rounded-full hover:bg-gray-900 hover:text-white transition-all"
                      title="View Code"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.links.live}
                      className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                      title="Live Demo"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Tags - Pushed to bottom */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
