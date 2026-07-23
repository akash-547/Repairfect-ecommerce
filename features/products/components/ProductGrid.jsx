"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";

const ProductGrid = ({ products = [] }) => {
  const [activeCardId, setActiveCardId] = useState(null);
  const router = useRouter();

  const handleCardClick = (id) => {
    setActiveCardId(id);
    router.push(`/products/${id}`);
  };

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-16">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setActiveCardId(product.id)}
              onMouseLeave={() => setActiveCardId(null)}
              className="w-full"
            >
              <ProductCard
                product={product}
                isActive={activeCardId === product.id}
                onCardClick={() => handleCardClick(product.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-center py-20 text-zinc-500 font-inter font-light text-[15px]">
          No products match your criteria. Try adjusting your sidebar filters.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;