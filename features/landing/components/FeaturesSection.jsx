"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/ProductCard"; 
import FeaturedVideo from "@/components/ui/FeaturedVideo"; 
import { PRODUCTS_DATA } from "@/constants";
import SectionBadge from "@/components/ui/SectionBadge";

export default function FeaturesSection() {
  // Line ki click position ko tracking ke liye state (Pehle card se initialize)
  const [clickedCardId, setClickedCardId] = useState(PRODUCTS_DATA[0]?.id || 1);
  // Hover tracking ke liye state (shuru mein null taaki koi automatic active color na ho)
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Line kis position par dikhegi: Agar hover ho raha hai toh hover wale par, warna clicked wale par
  const activeLineId = hoveredCardId !== null ? hoveredCardId : clickedCardId;

  // Progress line ki position calculate karne ka logic
  const activeIndex = PRODUCTS_DATA.findIndex(p => p.id === activeLineId);
  const totalProducts = PRODUCTS_DATA.length || 4;
  const lineLeftPosition = `${(activeIndex >= 0 ? activeIndex : 0) * (100 / totalProducts)}%`;
  const lineWidth = `${100 / totalProducts}%`;

  return (
    <section className="w-full py-16 select-none bg-[#000000] text-white">
      <Container>
        {/* Main Header Container */}
        <div className="w-full flex flex-col items-center text-center mb-14">
          
          {/* 1. Featured Products Small Pill Badge */}
          <div className="mb-4">
            <SectionBadge text="Featured Products" />
          </div>

          {/* 2. Main Large Headline Title */}
          <h2 className="font-inter font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[120%] text-white tracking-wide">
            Our most popular Mods
          </h2>
          
        </div>

        {/* 3. Grid Container - 4 Columns layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center max-w-[1200px] mx-auto px-4">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              // Hover and Leave events wrapper taaki card temporary active behavior show kare
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="w-full"
            >
              {/* 🛠️ FIX: 'isActive' property ab sirf hover hone par true hogi, click ke baad card colorful nahi rahega */}
              <ProductCard 
                product={product} 
                isActive={hoveredCardId === product.id}
                onCardClick={() => setClickedCardId(product.id)}
              />
            </div>
          ))}
        </div>

        {/* 4. Bottom Slider Progress Indicator Line */}
        {/* 🛠️ FIX: Line hover karne par bhi dynamic chalegi aur click karne par fixed position update karegi */}
        <div className="w-full max-w-[400px] h-[1px] bg-zinc-800 mx-auto mt-14 relative overflow-hidden rounded-full">
          <div 
            style={{ 
              left: lineLeftPosition, 
              width: lineWidth 
            }}
            className="absolute top-0 h-full bg-[#A71EDB] transition-all duration-500 ease-in-out shadow-[0_0_8px_rgba(167,30,219,0.5)]" 
          />
        </div>
      </Container>

      {/* 5. Video Section Component Layout */}
      <div className="w-full mt-20">
        <FeaturedVideo />
      </div>
    </section>
  );
}