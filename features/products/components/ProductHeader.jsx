"use client";
import React from "react";

const ProductHeader = () => {
  return (
    <div className="w-full flex flex-col gap-4 mb-10">
      {/* Title */}
      <h1 className="text-white font-inter text-[32px] font-normal tracking-tight">
        Showing 40 Products
      </h1>

      {/* Control Row */}
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Input Box */}
        <div className="relative w-full sm:max-w-[560px] flex items-center">
          <span className="absolute left-4 text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[18px] h-[18px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Product"
            className="w-full bg-[#0d0d0d] text-zinc-300 font-inter text-[14px] font-light pl-11 pr-4 py-[14px] rounded-md border border-zinc-900 focus:outline-none focus:border-purple-600/50 transition-colors"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto flex items-center bg-[#0d0d0d] border border-zinc-900 rounded-md px-4 py-[14px] min-w-[200px] justify-between cursor-pointer group">
          <span className="text-zinc-400 font-inter text-[14px] font-light">
            Sort by: <span className="text-zinc-200 ml-1">Recommendation</span>
          </span>
          <span className="text-zinc-500 group-hover:text-purple-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;