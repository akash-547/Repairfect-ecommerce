"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionBadge from "@/components/ui/SectionBadge"; 
import PrimaryButton from "@/components/ui/PrimaryButton"; 
import { PRODUCTS_DATA } from "@/constants";

export default function DiscoverProductsSection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const router = useRouter();

  const fixedTwelveProducts = Array.from({ length: 12 }, (_, index) => {
    const originalProduct = PRODUCTS_DATA[index % PRODUCTS_DATA.length];
    return { ...originalProduct, id: index + 1 };
  });

  return (
    <section className="w-full py-20 select-none bg-[#000000] text-white">
      <Container>
        
        {/* 1. Top Header */}
        <div className="w-full flex flex-col items-center text-center mb-16">
          <div className="mb-4">
            <SectionBadge text="All Products" />
          </div>

          <h2 className="font-inter font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[120%] text-white tracking-wide">
            Discover Our Products
          </h2>
        </div>

        {/* 2. Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center max-w-[1200px] mx-auto px-4">
          {fixedTwelveProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="w-full"
            >
              <ProductCard 
                product={product} 
                isActive={hoveredCardId === product.id}
                onCardClick={() => {
                  router.push(`/products/${product.id}`);
                }}
              />
            </div>
          ))}
        </div>

        {/* 3. Bottom Button */}
        <div className="w-full flex justify-center mt-16">
          <PrimaryButton onClick={() => router.push("/products")}>
            Discover All products
          </PrimaryButton>
        </div>

      </Container>
    </section>
  );
}