"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function RepairSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data Submitted:", formData);
  };

  return (
    /* 🎨 RE-ENGINEERED BOTTOM-TO-TOP GLOW:
       Yahan ellipse ko 'at bottom' rakha hai aur opacity 0.98 hai. Isse color niche sabse tez hoga aur upar ki taraf smoothly disappear ho jayega. */
    <section className="w-full bg-[#000000] bg-[radial-gradient(ellipse_at_bottom,rgba(64,0,88,0.98)_0%,rgba(64,0,88,0.45)_50%,transparent_100%)] text-white py-24 select-none overflow-hidden relative">
      {/* Smooth transition overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Pill Header Badge */}
          <div className="mb-4">
            <SectionBadge text="All Products" />
          </div>

          {/* Main Large Headline */}
          <h2 className="max-w-[700px] font-inter font-normal text-3xl sm:text-4xl lg:text-[44px] leading-[120%] tracking-normal text-white mb-10">
            Book an Appointment For Your Repair Now
          </h2>

          {/* ─── CENTRALIZED FORM BLOCK ─── */}
          <form 
            onSubmit={handleFormSubmit}
            style={{ borderColor: "#E2E4E5" }}
            className="w-full max-w-[456px] h-auto md:h-[334px] bg-[#050505]/50 backdrop-blur-md rounded-[8px] border p-[32px] flex flex-col items-start text-left mb-6 justify-between"
          >
            {/* Header Content Info Box */}
            <div className="w-full">
              <h3 className="font-inter font-semibold text-[18px] text-white leading-none mb-1">
                Send Us
              </h3>
              <p className="font-inter font-light text-[12px] text-zinc-500">
                Fill out your contact information to book an appointment
              </p>
            </div>

            {/* ─── INPUTS CONTAINER ROW ─── */}
            <div className="w-full flex flex-col gap-[32px] mt-[32px]">
              
              {/* Input Row: Email */}
              <div 
                style={{ borderColor: "#E2E4E5" }} 
                className="w-full flex items-center gap-3 border-b pb-2 focus-within:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E2E4E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none font-inter font-light text-[14px] text-zinc-300 placeholder-zinc-600"
                  placeholder="alex_manager@gmail.com"
                  required
                />
              </div>

              {/* Input Row: Phone Number */}
              <div 
                style={{ borderColor: "#E2E4E5" }} 
                className="w-full flex items-center gap-3 border-b pb-2 focus-within:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E2E4E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none font-inter font-light text-[14px] text-zinc-300 placeholder-zinc-600"
                  placeholder="+1 555 555-1234"
                  required
                />
              </div>

              {/* Input Row: Note */}
              <div 
                style={{ borderColor: "#E2E4E5" }} 
                className="w-full flex items-center gap-3 border-b pb-2 focus-within:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E2E4E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <input
                  type="text"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none font-inter font-light text-[14px] text-zinc-300 placeholder-zinc-600"
                  placeholder="I had something ..."
                />
              </div>

            </div>
          </form>

          {/* Action Button */}
          <div className="w-full max-w-[456px]">
            <PrimaryButton 
              onClick={handleFormSubmit}
              className="w-full h-[46px] rounded-[6px] gap-2"
            >
              <span>Go Next</span>
              <span className="text-[16px] font-medium leading-none select-none">➔</span>
            </PrimaryButton>
          </div>

        </div>
      </Container>
    </section>
  );
}