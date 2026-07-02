"use client";
import React from "react";
import Image from "next/image";

const ProductCard = ({ isActive }) => {
  return (
    <div className={`w-full rounded-[16px] overflow-hidden border transition-all duration-300 group flex flex-col justify-between p-6 h-full cursor-pointer relative ${
      isActive 
        ? "bg-[#130620]/40 border-purple-500/30 shadow-[0_0_40px_rgba(167,30,219,0.15)]" 
        : "bg-[#050505] border-zinc-900/80 hover:border-zinc-800"
    }`}>
      
      {/* Mesh Glow Background for active state */}
      {isActive && (
        <div className="absolute inset-0 bg-radial-[rgba(167,30,219,0.12)_40%,transparent_70%] pointer-events-none" />
      )}

      {/* Card Header Price Pill */}
      <div className="w-full flex justify-end mb-2 relative z-10">
        <span className="text-[12px] font-inter font-light text-zinc-400 bg-zinc-900/50 px-[10px] py-[3px] rounded-full border border-zinc-800/60">
          $120
        </span>
      </div>

      {/* Image Block */}
      <div className="w-full h-[180px] relative flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/assets/aboutPro.png" // Apni image path dalo
          alt="XBOX Controller Cover"
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Content Details */}
      <div className="w-full relative z-10 flex flex-col flex-grow justify-end">
        <h3 className="text-zinc-200 font-inter text-[16px] font-medium mb-2 group-hover:text-white transition-colors">
          XBOX Controller Cover
        </h3>
        <p className="font-inter font-extralight text-[13px] leading-[19px] text-zinc-500/80 antialiased mb-5">
          Figma ipsum component variant main layer. Shadow opacity.
        </p>

        {/* Dynamic Action Area */}
        {isActive ? (
          <button className="w-full py-3 bg-[#A71EDB] text-white font-inter text-[13px] font-normal tracking-wide rounded-md hover:bg-[#b82cd4] transition-all active:scale-[0.98]">
            BUY NOW
          </button>
        ) : (
          <div className="h-[1px] w-full bg-transparent" /> // Layout spacing lock
        )}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {/* Testing cards loop layout (1st active for testing design match) */}
      {[...Array(6)].map((_, i) => (
        <ProductCard key={i} isActive={i === 4} />
      ))}
    </div>
  );
};

export default ProductGrid;