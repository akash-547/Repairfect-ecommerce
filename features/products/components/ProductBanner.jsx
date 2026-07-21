"use client";
import React from "react";
import Image from "next/image";

const ProductBanner = () => {
  return (
    <div className="w-full h-[302px] relative overflow-hidden bg-black -mt-[15px] z-0 select-none">
      {/* Background Controller Graphic */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/heroSectionBg.png"
          alt="Products Banner Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProductBanner;