"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [] }) {
  const galleryImages =
    images.length >= 5
      ? images.slice(0, 5)
      : Array.from({ length: 5 }, (_, i) => images[i % images.length] || "");

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0] || images[0]
  );

  return (
    <div className="flex gap-5 w-full h-[705px] items-stretch select-none">
      {/* 5 Thumbnails Column */}
      <div className="flex flex-col justify-between h-[705px] shrink-0">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all duration-300 bg-transparent flex items-center justify-center p-2 cursor-pointer backdrop-blur-sm relative group border border-transparent hover:border-purple-500/20 hover:bg-purple-950/20"
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={96}
              height={96}
              className="object-contain w-full h-full border border-zinc-800/80 group-hover:border-transparent rounded-[10px] transition-all duration-300 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {/* Main Preview Box */}
      <div className="flex-1 h-[705px] bg-transparent border border-zinc-800/80 hover:border-purple-500/20 hover:bg-purple-950/20 rounded-[28px] p-8 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group transition-all duration-300">
        <Image
          src={selectedImage || galleryImages[0]}
          alt="Selected Product Preview"
          width={600}
          height={600}
          className="object-contain max-h-[620px] w-auto h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}