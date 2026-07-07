"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product, isActive, onCardClick }) {
  return (
    <div 
      onClick={onCardClick}
      className={`group w-full max-w-[270px] min-h-[385px] border rounded-[24px] p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer mx-auto select-none
        ${isActive 
          ? "bg-gradient-to-b from-[#130620] to-[#5A1282] border-purple-500/40 shadow-[0_10px_25px_rgba(90,18,130,0.25)]" 
          : "bg-[#050505] border-zinc-900/80 hover:bg-gradient-to-b hover:from-[#130620] hover:to-[#5A1282] hover:border-purple-500/20"
        }`}
    >
      <div className="w-full flex flex-col relative">
        <div className="self-end rounded-full bg-zinc-800/50 backdrop-blur-md px-2.5 py-1 text-[11px] font-thin tracking-wide text-zinc-300">
          {product.price}
        </div>
        <div className="w-full h-[160px] relative flex items-center justify-center mt-2 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={180}
            height={140}
            className="object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)]"
            priority={product.id <= 6} 
          />
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        <h3 className="font-inter font-normal text-[16px] text-white tracking-wide mb-1.5">
          {product.title}
        </h3>
        <p className="font-inter font-thin antialiased text-[12px] leading-[16px] text-zinc-400 opacity-70 line-clamp-2">
          {product.description}
        </p>
        <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100"}`}>
          <div className="w-full h-[1px] bg-white/10 my-3" />
          <Link 
            href={`/products/${product.id}`} 
            className="w-full block text-center font-poppins font-normal text-[12px] tracking-widest text-white/90 hover:text-white pt-0.5 pb-1 transition-colors"
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

const ProductGrid = ({ products = [] }) => {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-16">
          {products.map((product) => (
            <ProductCard
              key={product.id} 
              product={product}
              isActive={activeCardId === product.id}
              onCardClick={() => setActiveCardId(product.id)}
            />
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