import { Github, Linkedin, Locate, Mail, Phone, Send, MapPin, Twitter } from "lucide-react";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Service = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using your provided credentials
    const SERVICE_ID = "service_v41rjs4"; 
    const TEMPLATE_ID = "template_ph5wsio";
    const PUBLIC_KEY = "4_HkgnKs4Kal0U_bT";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          alert("Message sent successfully! I will contact you soon.");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          console.error('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Indore, Madhya Pradesh", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { icon: Mail, label: "Email", value: "karankush2312@gmail.com", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Phone, label: "Phone", value: "+91 8889172655", color: "text-yellow-400", bg: "bg-yellow-500/10" }
  ];

  return (
    <div className="relative w-full min-h-screen bg-slate-950 py-24 px-6 overflow-hidden flex items-center justify-center">
      
      {/* --- Background Effects (Matches Hero) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />

      <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Column: Text & Info --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
            <div>
                <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Get in touch</span>
                <h2 className="text-5xl font-bold text-white mt-2 leading-tight">
                    Let's Build Something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Awesome Together</span>
                </h2>
                <p className="text-slate-400 mt-4 text-lg">
                    Have a project in mind? Looking for a MERN stack expert? 
                    Fill out the form or reach out directly. I'm always open to discussing new projects.
                </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
                {contactInfo.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-5 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-colors hover:border-slate-600"
                    >
                        <div className={`p-4 rounded-lg ${item.bg} ${item.color}`}>
                            <item.icon size={24} />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">{item.label}</p>
                            <p className="text-white font-medium text-lg">{item.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

          
          
        </motion.div>

        {/* --- Right Column: The Form --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
            {/* Decorative gradient inside card */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 relative z-10">
                
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                    <div className="flex flex-col gap-2">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name*"
                            required
                            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email*"
                            required
                            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                {/* </div> */}

                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="user_location"
                        placeholder="Location*"
                        required
                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        rows="4"
                        required
                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none transition-all placeholder:text-slate-600"
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSending}
                    className={`mt-2 w-full py-4 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all ${
                        isSending 
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                        : 'bg-linear-to-r from-cyan-500 to-blue-600 text-white hover:shadow-cyan-500/40'
                    }`}
                >
                    {isSending ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message <Send size={20} />
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Service;