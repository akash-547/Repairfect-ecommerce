"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Thumbnails Sidebar */}
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all bg-[#130620] cursor-pointer ${
              selectedImage === img
                ? "border-[#A71EDB]"
                : "border-purple-900/30 hover:border-purple-500/50 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Main Preview Box */}
      <div className="flex-1 bg-[#130620] border border-purple-500/10 rounded-2xl p-8 flex items-center justify-center min-h-[450px]">
        <Image
          src={selectedImage || images[0]}
          alt="Selected Product Preview"
          width={400}
          height={400}
          className="object-contain max-h-[400px]"
          priority
        />
      </div>
    </div>
  );
}