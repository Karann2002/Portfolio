import { Github, Linkedin, Locate, Mail, Phone } from "lucide-react";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Service = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual IDs from EmailJS
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
          form.current.reset(); // Clear the form
        },
        (error) => {
          setIsSending(false);
          console.error('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div className="relative w-full bg-white py-24 px-5 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-14 border border-gray-100"
      >
        <p className="text-center text-4xl font-semibold mb-12">
          Let's Discuss Your Project
        </p>  
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col gap-6">
              {[
                { icon: Locate, label: "Address :", value: "Indore, Madhya Pradesh" },
                { icon: Mail, label: "My Email :", value: "karankush2312@gmail.com" },
                { icon: Phone, label: "Contact Number :", value: "8889172655" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-gray-50 flex rounded-xl p-4 items-center gap-5 transition-colors hover:bg-gray-100"
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm text-black">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="bg-white p-4 rounded-xl shadow-md inline-flex gap-4 justify-between lg:justify-start mt-4">
                {[Github, Linkedin, Phone, Mail].map((Icon, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 10, color: "#2563EB" }}
                    className="p-3 rounded-lg bg-gray-50 cursor-pointer"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
              
              {/* Name Input */}
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#000" }}
                type="text"
                name="user_name" // Required for EmailJS
                placeholder="Name*"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none transition-all bg-gray-50"
              />

              {/* Email Input */}
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#000" }}
                type="email"
                name="user_email" // Required for EmailJS
                placeholder="Email*"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none transition-all bg-gray-50"
              />

              {/* Location Input */}
               <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#000" }}
                type="text"
                name="user_location" // Required for EmailJS
                placeholder="Location*"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none transition-all bg-gray-50"
              />

              {/* Message Input */}
              <motion.textarea
                whileFocus={{ scale: 1.02, borderColor: "#000" }}
                name="message" // Required for EmailJS
                placeholder="Message*"
                rows="4"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none resize-none transition-all bg-gray-50"
              ></motion.textarea>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSending}
                className={`mt-2 w-full text-white py-4 rounded-xl text-lg font-medium shadow-lg ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'}`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Service