"use client";
import { useState } from "react";

export default function ProductDetails({ product }) {
  const defaultColor = product?.colors?.[0] || "Black";
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <div className="space-y-6 select-none">
      <div>
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
          {product?.category || "ACCESSORY"}
        </span>
        <div className="flex items-center justify-between gap-2 mt-1">
          <h1 className="text-2xl md:text-3xl font-bold">{product?.title}</h1>
          <span className="text-xs text-emerald-400 shrink-0 font-medium">
            {product?.availability || "In Stock"}
          </span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-1">
          Description
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {product?.detailedDescription || product?.description}
        </p>
      </div>

      {/* Color Selection */}
      {product?.colors?.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">Color</h3>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-6 py-2 text-sm rounded-md border transition-all cursor-pointer ${
                  selectedColor === color
                    ? "border-[#A71EDB] bg-[#A71EDB]/10 text-white font-medium"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Specifications */}
      {product?.specifications?.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">
            Product Specifications
          </h3>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
            {product.specifications.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Product Features */}
      {product?.features?.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">
            Product Features
          </h3>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <button className="w-full bg-[#A71EDB] hover:bg-[#9333ea] text-white py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20 active:scale-[0.99] mt-4 cursor-pointer">
        Go To Checkout &rarr;
      </button>
    </div>
  );
}