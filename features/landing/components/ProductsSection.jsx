"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionBadge from "@/components/ui/SectionBadge"; // 👈 Naya reusable component
import PrimaryButton from "@/components/ui/PrimaryButton"; // 👈 Naya reusable component
import { PRODUCTS_DATA } from "@/constants";

export default function DiscoverProductsSection() {
  const [activeCardId, setActiveCardId] = useState(11);

  const fixedTwelveProducts = Array.from({ length: 12 }, (_, index) => {
    const originalProduct = PRODUCTS_DATA[index % PRODUCTS_DATA.length];
    return { ...originalProduct, id: index + 1 };
  });

  return (
    <section className="w-full py-20 select-none bg-[#000000] text-white">
      <Container>
        
        {/* 1. Top Header using Reusable Badge */}
        <div className="w-full flex flex-col items-center text-center mb-16">
          <div className="mb-4">
            <SectionBadge text="All Products" /> {/* ◄ clean logic! */}
          </div>

          <h2 className="font-inter font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[120%] text-white tracking-wide">
            Discover Our Products
          </h2>
        </div>

        {/* 2. Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center max-w-[1200px] mx-auto px-4">
          {fixedTwelveProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isActive={activeCardId === product.id}
              onCardClick={() => setActiveCardId(product.id)}
            />
          ))}
        </div>

        {/* 3. Bottom Centered Reusable Button */}
        <div className="w-full flex justify-center mt-16">
          <PrimaryButton>
            Discover All products
          </PrimaryButton> {/* ◄ Clean logic! */}
        </div>

      </Container>
    </section>
  );
}