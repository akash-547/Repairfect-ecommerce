"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, isActive, onCardClick }) {
  return (
    <Link
      href={`/products/${product.id}`}
      onClick={onCardClick}
      className={`group w-full max-w-[270px] min-h-[385px] border rounded-[24px] p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer mx-auto select-none block backdrop-blur-sm ${
        isActive
          ? "bg-purple-950/40 border-purple-500/40 shadow-[0_10px_25px_rgba(90,18,130,0.25)]"
          : "bg-transparent border-zinc-900/80 hover:bg-purple-950/20 hover:border-purple-500/20"
      }`}
    >
      {/* Top: Price & Image */}
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

      {/* Bottom: Title, Description & Action Button */}
      <div className="w-full flex flex-col mt-4">
        <h3 className="font-inter font-normal text-[16px] text-white tracking-wide mb-1.5">
          {product.title}
        </h3>

        <p className="font-inter font-thin antialiased text-[12px] leading-[16px] text-zinc-400 opacity-70 line-clamp-2">
          {product.description}
        </p>

        {/* Hover / Active State Action Button */}
        <div
          className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${
            isActive
              ? "max-h-[60px] opacity-100"
              : "max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100"
          }`}
        >
          <div className="w-full h-[1px] bg-white/10 my-3" />
          <span className="w-full block text-center font-poppins font-normal text-[12px] tracking-widest text-white/90 group-hover:text-white pt-0.5 pb-1 transition-colors">
            BUY NOW
          </span>
        </div>
      </div>
    </Link>
  );
}