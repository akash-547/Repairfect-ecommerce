"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS_DATA } from "@/constants";

export default function FeaturedProductsSection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Exact 4 cards render karne ke liye
  const fourProducts = Array.from({ length: 4 }, (_, index) => {
    const originalProduct = PRODUCTS_DATA[index % PRODUCTS_DATA.length];
    return { ...originalProduct, id: index + 1 };
  });

  return (
    <section className="w-full py-20 relative overflow-hidden ">
      
      {/* 🛠️ FIX: Smooth Radial Glow jo kisi sharp box ki tarah nahi katega */}
     

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <h2 className="font-inter font-normal text-3xl sm:text-4xl text-white tracking-wide mb-10">
          Featured Products
        </h2>

        {/* Exactly 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {fourProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="w-full flex justify-center"
            >
              <ProductCard
                product={product}
                isActive={hoveredCardId === product.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}