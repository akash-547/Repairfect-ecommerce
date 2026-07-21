"use client";
import React from "react";
import Image from "next/image";

export default function BlogBanner() {
  return (
    <div className="w-full h-[260px] sm:h-[320px] md:h-[350px] relative overflow-hidden bg-black -mt-[70px] sm:-mt-[80px] md:-mt-[96px] z-0 select-none">
      {/* Background Controller Graphic */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/heroSectionBg.png"
          alt="Blogs Banner Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Smooth Dark Gradient Blur Mask */}
      <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
    </div>
  );
}