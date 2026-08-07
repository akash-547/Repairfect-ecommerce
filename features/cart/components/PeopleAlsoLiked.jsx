"use client";

import ProductCard from "@/components/ui/ProductCard";

const LIKED_PRODUCTS = [
  {
    id: 101,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: "$100",
    imageSrc: "/assets/logo.png",
  },
  {
    id: 102,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: "$90",
    imageSrc: "/assets/logo.png",
  },
  {
    id: 103,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: "$100",
    imageSrc: "/assets/logo.png",
  },
  {
    id: 104,
    title: "XBOX Controller Cover",
    description: "Figma ipsum component variant main layer. shadow opacity.",
    price: "$120",
    imageSrc: "/assets/logo.png",
  },
];

export default function PeopleAlsoLiked() {
  return (
    <div className="w-full mt-20 pt-10 border-t border-zinc-900/80">
      <h2 className="text-2xl font-bold mb-8 text-white">People Also Liked</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LIKED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}