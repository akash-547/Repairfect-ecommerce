"use client";
import React from "react";
import Image from "next/image";

const ProductBanner = () => {
  return (
    /* -mt-[70px] sm:-mt-[80px] md:-mt-[96px]: Yeh negative margins global header ke gap ko pure layout sizes par perfectly overlap karke zero kar dengi.
      pt-0 aur top-0 spaces ko lock rakhenge.
    */
    <div className="w-full h-[260px] sm:h-[320px] md:h-[350px] relative overflow-hidden bg-[#000000] -mt-[70px] sm:-mt-[80px] md:-mt-[96px] top-0 pt-0 z-0 select-none">
      
      {/* 1. Background Zoomed-In Dimmed Controller Image */}
      <div className="absolute inset-0 w-full h-full top-0 pt-0">
        <Image
          src="/assets/heroSectionBg.png" 
          alt="Products Banner Background"
          fill
          priority
          className="object-cover object-center pt-0 mt-0"
        />
      </div>

      {/* 2. Seamless Fade-To-Black Blur Matrix Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />
      
    </div>
  );
};

export default ProductBanner;