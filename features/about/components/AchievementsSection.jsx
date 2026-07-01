// AchievementsSection.jsx

"use client";

import React from "react";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const AchievementsSection = () => {
  const achievementsData = [
    {
      id: 1,
      title: "First to Introduce Magnetic Joysticks",
      description: "High-quality magnetic switch technology for smoother, longer-lasting joystick performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l0 0M12 12.75v9" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Pioneers in Controller Modding",
      description: "Among the first to offer professional-grade controller mods tailored for gamers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Battery Expansion Innovation",
      description: "First to deliver battery expansion solutions for extended controller playtime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "In-Depth Maintenance Expertise",
      description: "First to provide detailed, transparent maintenance and repair content for controllers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#010101] text-white py-10 lg:py-15 select-none overflow-hidden relative">
      
      {/* ─── FADE SPREAD UP TO THE TOP BADGE ─── */}
      {/* h-full se ab color bottom se tez hotay huay bilkul top badge tak seamlessly phailay ga */}
      <div 
        className="absolute inset-0 h-full w-full pointer-events-none z-0 mix-blend-screen opacity-95"
        style={{
          background: "linear-gradient(to top, #400058 0%, rgba(64, 0, 88, 0.45) 45%, rgba(64, 0, 88, 0.15) 75%, rgba(1, 1, 1, 0) 100%)"
        }}
      />
      
      {/* Ambient background soft radial aura base */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#400058]/40 blur-[150px] rounded-full pointer-events-none z-0" />

      <Container>
        <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center text-center relative z-10">
          
          {/* ─── TOP SECTION BADGE ─── */}
          <div className="mb-6">
            <SectionBadge text="Achievements" />
          </div>

          {/* ─── MAIN HEADING ─── */}
          <h1 className="font-inter font-normal text-[32px] sm:text-[38px] lg:text-[43.47px] lg:leading-[65.21px] tracking-normal text-white mb-6">
            Unique Achievements
          </h1>

          {/* ─── MAIN DESCRIPTION PARAGRAPH (Un-heading & Thinned) ─── */}
          <div className="w-full max-w-[562px] mx-auto mb-16">
            <p className="font-inter font-extralight text-[14px] sm:text-[15px] leading-[24px] tracking-wide text-zinc-400/80 antialiased">
              Leading the industry with innovation in controller modifications and repairs, setting new standards for quality and performance.
            </p>
          </div>

          {/* ─── TWO-COLUMN BALANCED CARD GRID ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-center max-w-[1144px] mx-auto text-left">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                style={{ borderRadius: "17.78px", borderWidth: "0.99px" }}
                className="w-full lg:max-w-[559.69px] min-h-[223.28px] border-purple-500/10 bg-[#130620]/20 backdrop-blur-md pt-[32.6px] px-[32.6px] pb-[32.6px] flex flex-col items-start transition-all hover:border-purple-500/30 group"
              >
                {/* Reusable Icon Box */}
                <div className="w-[42px] h-[42px] rounded-lg bg-purple-950/40 border border-purple-500/20 text-[#A71EDB] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-inter font-normal text-[18px] sm:text-[19.76px] lg:leading-[29.64px] tracking-normal text-white mb-3">
                  {item.title}
                </h3>

                {/* Card Content Description */}
                <p className="font-inter font-light text-[14px] sm:text-[14.5px] leading-[22px] text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AchievementsSection;