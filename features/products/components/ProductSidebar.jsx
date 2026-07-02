"use client";
import React from "react";

const FilterGroup = ({ title, items, hasMore }) => {
  return (
    <div className="w-full border-b border-zinc-900/60 pb-5 mb-5 last:border-0">
      <div className="flex items-center justify-between w-full text-zinc-200 mb-4 cursor-pointer">
        <span className="font-inter text-[15px] font-medium tracking-wide">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-zinc-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      
      <div className="flex flex-col gap-3 pl-1">
        {items.map((item, idx) => (
          <label key={idx} className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 rounded accent-[#A71EDB] bg-zinc-900 border-zinc-800 focus:ring-0 cursor-pointer" />
              <span className="text-zinc-400 group-hover:text-zinc-200 font-inter text-[14px] font-extralight antialiased transition-colors">
                {item.name}
              </span>
            </div>
            <span className="text-zinc-600 font-inter text-[13px] font-light">({item.count})</span>
          </label>
        ))}
        {hasMore && (
          <button className="flex items-center gap-2 text-zinc-400 hover:text-[#A71EDB] font-inter text-[13px] font-light mt-2 transition-colors">
            <span>+</span> See more
          </button>
        )}
      </div>
    </div>
  );
};

const ProductSidebar = () => {
  return (
    <aside className="w-full pr-2 select-none">
      <FilterGroup
        title="Product type"
        items={[
          { name: "Lorem", count: 41 },
          { name: "Ipsum", count: 23 },
          { name: "Component", count: 3 },
        ]}
      />
      <FilterGroup
        title="Color"
        items={[
          { name: "Lorem", count: 41 },
          { name: "Ipsum", count: 23 },
          { name: "Component", count: 3 },
          { name: "Black", count: 3 },
        ]}
        hasMore
      />
      <FilterGroup
        title="Interest"
        items={[
          { name: "Lorem", count: 23 },
          { name: "Component", count: 41 },
        ]}
        hasMore
      />
    </aside>
  );
};

export default ProductSidebar;