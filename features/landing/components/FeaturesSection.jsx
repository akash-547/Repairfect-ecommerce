"use client";
import { useState } from "react";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/ProductCard"; 
import FeaturedVideo from "@/components/ui/FeaturedVideo"; 
import { PRODUCTS_DATA } from "@/constants";
import SectionBadge from "@/components/ui/SectionBadge";

export default function FeaturesSection() {
  // Default pehle card ko active index set kiya hai (0)
  const [activeCardId, setActiveCardId] = useState(PRODUCTS_DATA[0]?.id || 1);

  // Line ki dynamic position nikalne ke liye calculation
  const activeIndex = PRODUCTS_DATA.findIndex(p => p.id === activeCardId);
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
            <ProductCard 
              key={product.id} 
              product={product} 
              isActive={activeCardId === product.id}
              onCardClick={() => setActiveCardId(product.id)}
            />
          ))}
        </div>

        {/* 4. Bottom Slider Progress Indicator Line - */}
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