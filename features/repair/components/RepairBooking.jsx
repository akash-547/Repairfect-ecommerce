"use client";

import React, { useState } from 'react';

export default function RepairBooking() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className=" text-white relative py-4 flex items-center justify-center w-full max-w-[1440px] mx-auto">
      {/* Subtle ambient purple glow in the background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#A71EDB]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center z-10">
        
        {/* Top Tag */}
        <span className="bg-[#A71EDB]/10 text-[#c084fc] border border-[#A71EDB]/20 text-xs tracking-wider px-4 py-1 rounded-full font-medium mb-6">
          All Products
        </span>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-xl leading-tight mb-12">
          Book an Appointment For Your Repair Now
        </h2>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col space-y-6">
          
          <div className="border border-zinc-800 bg-zinc-950/40 rounded-xl p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold tracking-wide mb-1">Send Us</h3>
              <p className="text-zinc-400 text-xs">Fill out your contact information to book an appointment</p>
            </div>

            {/* Email Input */}
            <div className="relative flex items-center border-b border-zinc-700 focus-within:border-[#A71EDB] pb-2 transition-colors">
              <svg className="w-5 h-5 text-zinc-400 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input 
                type="email" 
                name="email"
                placeholder="alex_manager@gmail.com" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent text-zinc-300 placeholder-zinc-600 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="relative flex items-center border-b border-zinc-700 focus-within:border-[#A71EDB] pb-2 transition-colors">
              <svg className="w-5 h-5 text-zinc-400 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.73.73 0 00.58.45l2.42.5a1 1 0 01.73.66l1.4 3.5a1 1 0 01-.45 1.11l-2.13 1.28a16 16 0 006.29 6.29l1.28-2.13a1 1 0 011.11-.45l3.5 1.4a1 1 0 01.66.73l.5 2.42a.73.73 0 00.45.58 1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <input 
                type="tel" 
                name="phone"
                placeholder="+1 555 555-1234" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent text-zinc-300 placeholder-zinc-600 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            {/* Message Input */}
            <div className="relative flex items-center border-b border-zinc-700 focus-within:border-[#A71EDB] pb-2 transition-colors">
              <svg className="w-5 h-5 text-zinc-400 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <input 
                type="text" 
                name="message"
                placeholder="I had something ...." 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent text-zinc-300 placeholder-zinc-600 focus:outline-none text-sm md:text-base"
              />
            </div>

          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-[#A71EDB] hover:bg-[#9333ea] text-white font-medium py-3.5 rounded-md flex items-center justify-center space-x-2 transition-all duration-200 active:scale-[0.99] shadow-lg shadow-purple-900/40"
          >
            <span>Go Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </form>

      </div>
    </section>
  );
}