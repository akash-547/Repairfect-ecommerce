"use client";
import React from "react";

const ProductHeader = ({ searchQuery, setSearchQuery, sortBy, setSortBy }) => {
  return (
    <div className="w-full flex flex-col gap-4 mb-10 select-none">
      {/* Title */}
      <h1 className="text-white font-inter text-[32px] font-normal tracking-tight">
        Showing 40 Products
      </h1>

      {/* Control Row */}
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
        
        {/* Pure Tailwind Exact Figma Blueprint Search Input Box */}
        <div className="w-full max-w-[851.39px] h-[49.23px] pt-[14.43px] pb-[14.43px] pl-[21.22px] pr-[21.22px] gap-[13.58px] rounded-[33.95px] border-[0.85px] bg-[#050505] border-zinc-800/80 flex items-center relative transition-all focus-within:border-purple-500/40 focus-within:shadow-[0_0_15px_rgba(167,30,219,0.1)]">
          {/* Search Icon */}
          <span className="text-zinc-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[16px] h-[16px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
            </svg>
          </span>

          {/* Input Element */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchQuery === "" ? "Search Product" : ""}
            className="w-full bg-transparent text-white font-inter text-[14px] font-light placeholder-zinc-500 border-none outline-none focus:ring-0 p-0"
          />
        </div>

        {/* Pure Tailwind Figma Sync Sort Dropdown Element */}
        <div className="flex items-center gap-3 shrink-0 lg:ml-auto w-full sm:w-auto">
          <span className="text-zinc-500 font-inter text-[13px] font-normal whitespace-nowrap">Sort by</span>
          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:min-w-[200px] h-[49.23px] pt-[14.43px] pb-[14.43px] pl-[21.22px] pr-[46px] rounded-[33.95px] border-[0.85px] bg-[#050505] border-zinc-800/80 text-zinc-200 font-inter text-[14px] font-light outline-none cursor-pointer focus:border-purple-500/40 focus:ring-0 transition-colors appearance-none block"
            >
              <option value="recommendation" className="bg-[#0f0f12] text-zinc-300">Recommendation</option>
              <option value="price-low" className="bg-[#0f0f12] text-zinc-300">Price: Low to High</option>
              <option value="price-high" className="bg-[#0f0f12] text-zinc-300">Price: High to Low</option>
              <option value="newest" className="bg-[#0f0f12] text-zinc-300">Newest Arrivals</option>
            </select>
            
            {/* Custom Arrow Icon Matching Spacing */}
            <div className="absolute right-[21px] top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductHeader;