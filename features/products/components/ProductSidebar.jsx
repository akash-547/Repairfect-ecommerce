"use client";
import React, { useMemo } from "react";

const FilterGroup = ({ title, items, selectedValues, onToggle }) => {
  return (
    <div className="w-full border-b border-zinc-900/60 pb-5 mb-5 last:border-0">
      <div className="flex items-center justify-between w-full text-zinc-200 mb-4 cursor-default">
        <span className="font-inter text-[15px] font-medium tracking-wide">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-zinc-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      
      <div className="flex flex-col gap-3 pl-1">
        {items.map((item, idx) => {
          const isChecked = selectedValues.includes(item.name);
          return (
            <label key={idx} className="flex items-center justify-between cursor-pointer group">
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
  );
};

const ProductSidebar = ({
  productsList,
  selectedTypes,
  setSelectedTypes,
  selectedColors,
  setSelectedColors,
  selectedInterests,
  setSelectedInterests
}) => {

  // Dynamic calculation engines parsing standard metrics from total projects architecture
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

  // Handle individual input trigger toggles cleanly
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