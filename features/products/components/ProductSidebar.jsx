"use client";
import React, { useMemo, useState } from "react";

// ==========================================
// 1. EXPANDABLE / COLLAPSIBLE FILTER GROUP COMPONENT
// ==========================================
const FilterGroup = ({ title, items, selectedValues, onToggle }) => {
  // Default state true hai taake folder pehle se open rahe
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border-b border-zinc-900/60 pb-5 mb-5 last:border-0">
      
      {/* Header Row: Ab ye bilkul click-free (static) hai, jisse text select ya drag karne par close nahi hoga */}
      <div className="flex items-center justify-between w-full text-zinc-200 mb-4 cursor-default select-none">
        
        {/* Main Folder Name (Title Text) */}
        <span className="font-inter text-[15px] font-medium tracking-wide">
          {title}
        </span>
        
        {/* ONLY THE VECTOR ARROW ACTS AS THE TRIGGER (Like a folder toggle button) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="p-1 -mr-1 cursor-pointer text-zinc-500 hover:text-zinc-200 focus:outline-none transition-colors duration-200"
          aria-label={isOpen ? "Collapse group" : "Expand group"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className={`w-4 h-4 transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-0" : "rotate-180"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>

      </div>
      
      {/* Dynamic CSS Grid Height Layer: Jab isOpen false hoga, pure sub-items zero-height par collapse ho kar chup jayenge */}
      <div 
        className={`grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        {/* Overflow hidden prevents contents from peeking out during high-speed transitions */}
        <div className="overflow-hidden w-full pl-1">
          <div className="flex flex-col gap-3 pt-1">
            {items.map((item, idx) => {
              const isChecked = selectedValues.includes(item.name);
              return (
                <label key={idx} className="flex items-center justify-between cursor-pointer group select-none">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={isChecked}
                      onChange={() => onToggle(item.name)}
                      className="w-4 h-4 rounded accent-[#A71EDB] bg-zinc-900 border-zinc-800 focus:ring-0 cursor-pointer" 
                    />
                    <span className={`font-inter text-[14px] antialiased transition-colors ${isChecked ? "text-[#A71EDB] font-normal" : "text-zinc-400 group-hover:text-zinc-200 font-extralight"}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-zinc-600 font-inter text-[13px] font-light">({item.count})</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// 2. MAIN PRODUCTS SIDEBAR CONTROLLER
// ==========================================
const ProductSidebar = ({
  productsList = [],
  selectedTypes = [],
  setSelectedTypes,
  selectedColors = [],
  setSelectedColors,
  selectedInterests = [],
  setSelectedInterests
}) => {

  // Real-time counter matrix engine based on current catalog distribution
  const groupStats = useMemo(() => {
    const stats = {
      types: { Lorem: 0, Ipsum: 0, Component: 0 },
      colors: { Lorem: 0, Ipsum: 0, Component: 0, Black: 0 },
      interests: { Lorem: 0, Component: 0 }
    };

    productsList.forEach((prod) => {
      if (stats.types[prod.productType] !== undefined) stats.types[prod.productType]++;
      if (stats.colors[prod.color] !== undefined) stats.colors[prod.color]++;
      if (stats.interests[prod.interest] !== undefined) stats.interests[prod.interest]++;
    });

    return stats;
  }, [productsList]);

  // Multiselect state synchronizer function
  const handleToggle = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <aside className="w-full pr-2 select-none">
      <FilterGroup
        title="Product type"
        items={[
          { name: "Lorem", count: groupStats.types.Lorem },
          { name: "Ipsum", count: groupStats.types.Ipsum },
          { name: "Component", count: groupStats.types.Component },
        ]}
        selectedValues={selectedTypes}
        onToggle={(val) => handleToggle(val, selectedTypes, setSelectedTypes)}
      />
      
      <FilterGroup
        title="Color"
        items={[
          { name: "Lorem", count: groupStats.colors.Lorem },
          { name: "Ipsum", count: groupStats.colors.Ipsum },
          { name: "Component", count: groupStats.colors.Component },
          { name: "Black", count: groupStats.colors.Black },
        ]}
        selectedValues={selectedColors}
        onToggle={(val) => handleToggle(val, selectedColors, setSelectedColors)}
      />
      
      <FilterGroup
        title="Interest"
        items={[
          { name: "Lorem", count: groupStats.interests.Lorem },
          { name: "Component", count: groupStats.interests.Component },
        ]}
        selectedValues={selectedInterests}
        onToggle={(val) => handleToggle(val, selectedInterests, setSelectedInterests)}
      />
    </aside>
  );
};

export default ProductSidebar;