"use client";

import React from "react";
import Image from "next/image";

const AboutCard = ({ title, description, imageSrc }) => {
  return (
    // Fixed Width (w-[340px] sm:w-[380px]) taaki card stretch na ho aur shrink-0 taaki width compress na ho
    <div className="w-[340px] sm:w-[380px] shrink-0 border border-zinc-800/60 bg-[#09090b]/40 backdrop-blur-sm rounded-[24px] p-8 flex flex-col items-start text-left transition-all duration-300 hover:border-zinc-700/50 shadow-2xl box-border">
      
      {/* ─── CARD HEADER: Icon + Title Row ─── */}
      <div className="flex items-center gap-4 mb-8 w-full justify-start">
        <div className="relative w-[40px] h-[40px] flex-shrink-0">
          <Image 
            src={imageSrc}
            alt={`${title} Icon`}
            width={40}
            height={40}
            priority
            className="object-contain"
          />
        </div>
        
        {/* Title: Screenshot jaisa perfect dynamic purple/pink color text */}
        <h2 className="font-inter font-normal text-[36px] leading-[100%] tracking-tight text-[#d946ef]">
          {title}
        </h2>
      </div>

      {/* ─── CARD PARAGRAPH: Pura text left-aligned bina slice kiye ─── */}
      <div className="w-full opacity-60">
        <p className="font-inter font-light text-[14px] leading-[22px] text-zinc-300 tracking-normal text-left">
          {description}
        </p>
      </div>

    </div>
  );
};

export default AboutCard;