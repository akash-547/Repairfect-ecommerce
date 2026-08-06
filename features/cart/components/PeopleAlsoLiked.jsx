"use client";

import Image from "next/image";

const LIKED_PRODUCTS = [
  {
    id: 101,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: 100,
    image: "/assets/logo.png",
  },
  {
    id: 102,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: 90,
    image: "/assets/logo.png",
  },
  {
    id: 103,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: 100,
    image: "/assets/logo.png",
  },
  {
    id: 104,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: 120,
    image: "/assets/logo.png",
  },
];

export default function PeopleAlsoLiked() {
  return (
    <div className="mt-20 pt-10 border-t border-zinc-900">
      <h2 className="text-2xl font-bold mb-8 text-white">People Also Liked</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LIKED_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#08050e] border border-purple-900/20 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
          >
            <div className="absolute top-3 right-3 bg-zinc-900/80 border border-zinc-800 text-[11px] font-medium text-zinc-300 px-2.5 py-0.5 rounded-full">
              ${product.price}
            </div>

            <div className="w-full h-44 flex items-center justify-center my-2 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={140}
                height={140}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                {product.title}
              </h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}