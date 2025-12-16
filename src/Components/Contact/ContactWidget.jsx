import React, { useState } from 'react';
import { MessageCircle, X, Mail, Linkedin, Github, ExternalLink, Copy, Check } from 'lucide-react';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // REPLACE THESE WITH YOUR ACTUAL DETAILS
  const contactInfo = {
    email: "karankush2312@gmail.com",
    linkedin: "https://www.linkedin.com/in/karan-kushwah-6848b3250/",
    github: "https://github.com/Karann2002"
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-10 sm:right-10">
      
      {/* Contact Card (Popup) */}
      <div 
        className={`
          mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'}
        `}
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
          <h3 className="text-white font-bold text-lg">Let's Connect!</h3>
          <p className="text-blue-100 text-xs mt-1">
            Reply time: within 24 hours
          </p>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-4">
          
          {/* Email Section */}
          <div className="group relative">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
            <div className="flex items-center justify-between mt-1 p-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Mail size={16} />
                </div>
                <span className="text-sm text-gray-700 truncate font-medium">
                  {contactInfo.email}
                </span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="text-gray-400 hover:text-green-600 transition-colors p-1"
                title="Copy Email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Socials</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all group"
              >
                <Linkedin size={18} className="text-blue-700 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">LinkedIn</span>
              </a>
              
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:text-black transition-all group"
              >
                <Github size={18} className="text-gray-800 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-black">GitHub</span>
              </a>
            </div>
          </div>

          {/* Action Button */}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
          >
            <span>Send a Message</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center
          ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'}
        `}
      >
        {isOpen ? (
          <X className="text-white" size={28} />
        ) : (
          <MessageCircle className="text-white" size={28} />
        )}
      </button>

    </div>
  );
};

export default ContactWidget;