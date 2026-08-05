"use client";

import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext"; // Path apne folder ke mutabiq adjust karein

export default function ProductDetails({ product }) {
  const defaultColor = product?.colors?.[0] || "White";
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const { addToCart } = useCart(); // Context se function liya

  const handleAddToCart = () => {
    const itemToCart = {
      ...product,
      selectedColor,
    };
    addToCart(itemToCart);
  };

  return (
    <div className="flex flex-col justify-between h-[705px] w-full select-none bg-transparent py-2 px-3">
      {/* Details Container */}
      <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
        {/* Title & Availability */}
        <div>
          <span className="text-xs uppercase tracking-widest text-purple-400/90 font-medium">
            {product?.category || "CONTROLLER"}
          </span>
          <div className="flex items-center justify-between gap-3 mt-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              {product?.title || "The X-Force Elite Controller"}
            </h1>
            <span className="text-xs text-emerald-400 shrink-0 font-medium px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20">
              {product?.availability || "Available in stock"}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-1.5">
            Description
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            {product?.detailedDescription ||
              product?.description ||
              "Engineered for precision, the X-Force Elite Controller is built for players who demand dominance, speed, and flawless control."}
          </p>
        </div>

        {/* Color Options */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">Color</h3>
          <div className="flex gap-3">
            {["White", "Black"].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-6 py-2 text-xs rounded-xl border transition-all duration-200 cursor-pointer ${
                  selectedColor === color
                    ? "border-purple-500/40 bg-purple-950/40 text-white font-medium"
                    : "border-zinc-800/80 text-zinc-400 hover:border-purple-500/20 hover:bg-purple-950/20 hover:text-white"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-1.5">
            Product Specifications
          </h3>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 font-light">
            <li>Type: Wireless gaming controller</li>
            <li>Design: Ergonomic, asymmetric grip layout</li>
            <li>Build: Matte black body with textured anti-slip grips</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-1.5">
            Product Features
          </h3>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 font-light">
            <li>Ergonomic Comfort</li>
            <li>Precision Control</li>
            <li>Modern Gaming Aesthetic</li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA Buttons Container */}
      <div className="pt-4 flex items-center gap-3">
        {/* 1. Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#A71EDB] hover:bg-[#8B00CC] text-white py-4 rounded-xl font-medium text-sm sm:text-base tracking-wide transition-all duration-300 border border-transparent hover:border-purple-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
        >
          <FiShoppingCart className="text-lg transition-transform duration-300 group-hover:scale-110" />
          <span>Add to Cart</span>
        </button>

        {/* 2. Go To Checkout Button */}
        <button className="flex-1 bg-[#A71EDB] hover:bg-[#8B00CC] text-white py-4 rounded-xl font-medium text-sm sm:text-base tracking-wide transition-all duration-300 border border-transparent hover:border-purple-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group">
          <span>Go To Checkout</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}