"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// 1. REUSABLE PRODUCT CARD COMPONENT
// ==========================================
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
      {/* Top Section: Price Tag & Product Image */}
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

      {/* Bottom Section: Title, Description & Action Button */}
      <div className="w-full flex flex-col mt-4">
        <h3 className="font-inter font-normal text-[16px] text-white tracking-wide mb-1.5">
          {product.title}
        </h3>

        <p className="font-inter font-thin antialiased text-[12px] leading-[16px] text-zinc-400 opacity-70 line-clamp-2">
          {product.description}
        </p>

        {/* Dynamic Expandable BUY NOW Button Element */}
        <div 
          className={`w-full transition-all duration-300 ease-in-out overflow-hidden
            ${isActive 
              ? "max-h-[60px] opacity-100" 
              : "max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100"
            }`}
        >
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

// ==========================================
// 2. MAIN PRODUCTS GRID WRAPPER (WITH FILTER CODES)
// ==========================================
// FIXED: Ab grid parent se searchQuery aur sortBy filters directly accept karega
const ProductGrid = ({ searchQuery = "", sortBy = "recommendation" }) => {
  const [activeCardId, setActiveCardId] = useState(null);

  // Generates items dynamically with varied values to test search/sort properly
  const mockProducts = Array.from({ length: 40 }, (_, index) => {
    const id = index + 1;
    return {
      id: id,
      // Testing filters ke liye thode dynamic names aur values generate kiye hain
      title: id % 3 === 0 ? "PS5 Controller Grip" : id % 2 === 0 ? "Nintendo Switch Shell" : "XBOX Controller Cover",
      price: id % 2 === 0 ? "$140" : "$120",
      imageSrc: "/assets/cardimage.png", 
      description: "Figma ipsum component variant main layer. Shadow opacity.",
      dateAdded: id, // Sorting by newest check ke liye key
    };
  });

  // 1. Client-Side Realtime Search Filter Logic
  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Sorting Logic Block based on header select dropdown state
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace("$", ""));
    const priceB = parseInt(b.price.replace("$", ""));
    
    if (sortBy === "price-low") return priceA - priceB;
    if (sortBy === "price-high") return priceB - priceA;
    if (sortBy === "newest") return b.dateAdded - a.dateAdded; // Higher ID assumes fresh entry
    return 0; // Default order remains same for 'recommendation'
  });

  return (
    <div className="w-full">
      {sortedProducts.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-16">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id} 
              product={product}
              isActive={activeCardId === product.id}
              onCardClick={() => setActiveCardId(product.id)}
            />
          ))}
        </div>
      ) : (
        /* Empty Fallback Screen State */
        <div className="w-full text-center py-20 text-zinc-500 font-inter font-light text-[15px]">
          No products match your search query. Try another keyword.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;