"use client";
import React from "react";
import Image from "next/image";

export default function BlogsCards({ blog, onCardClick }) {
  return (
    <div
      onClick={onCardClick}
      className="w-full max-w-[1200px] p-[14.61px] bg-[#050505] rounded-[36.52px] border border-zinc-900/80 hover:border-zinc-800/90 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center cursor-pointer select-none"
    >
      {/* 🖼️ Exact Figma Image Dimensions (317.7px x 303.1px, border-radius 36.52px) */}
      <div className="relative w-full md:w-[317.7px] h-[303.1px] rounded-[36.52px] overflow-hidden flex-shrink-0 bg-zinc-950">
        <Image
          src={blog.image || "/assets/blog.png"}
          alt={blog.title}
          fill
          className="object-cover pointer-events-none"
        />
      </div>

      {/* 📝 Typography & Details Container */}
      <div className="flex flex-col justify-between h-full w-full text-left py-2 pr-4">
        <div className="flex flex-col gap-4">
          
          {/* 🔤 Exact Figma Heading (Poppins, 34.69px, 132% line-height) */}
          <h3 className="font-poppins font-normal text-[22px] sm:text-[28px] md:text-[34.69px] leading-[132%] text-white tracking-normal line-clamp-2">
            {blog.title}
          </h3>

          {/* 🔤 Exact Figma Paragraph (Poppins Light, 25.56px, 132% line-height) */}
          <p className="font-poppins font-extralight text-[15px] sm:text-[20px] md:text-[25.56px] leading-[132%] text-zinc-400/80 antialiased tracking-wide line-clamp-2">
  {blog.description}
</p>
        </div>

        {/* 📅 Timeline Date Stamp Pill */}
        <div className="mt-6 md:mt-8 w-fit px-6 py-2 rounded-full bg-[#1A1A1A] border border-zinc-900 flex items-center justify-center">
          <span className="font-poppins font-normal text-[14px] md:text-[16px] text-zinc-400">
            {blog.date}
          </span>
        </div>
      </div>
    </div>
  );
}