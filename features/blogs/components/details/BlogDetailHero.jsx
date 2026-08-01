import React from "react";
import Image from "next/image";

export default function BlogDetailHero({ blog }) {
  return (
    <section className="w-full bg-[#050505] text-white pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto text-center flex flex-col items-center">
        {/* Category Badge */}
        <div className="px-4 py-1 rounded-full bg-[#1e0f33] border border-[#5b21b6]/40 mb-6">
          <span className="text-[12px] font-medium text-[#c084fc]">
            {blog?.category || "Blog"}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-normal leading-[120%] tracking-tight max-w-[900px] mb-6">
          {blog?.title || "Figma ipsum component variant main layer. Comment scale list."}
        </h1>

        {/* Subtitle / Overview Description */}
        <p className="text-zinc-400 text-sm sm:text-base leading-[160%] max-w-[750px] font-light mb-12">
          {blog?.description ||
            "Figma ipsum component variant main layer. Asset frame arrange effect figma. Vector community pen horizontal variant. Content flows comment project polygon bullet. Subtract follower figjam scrolling arrange polygon."}
        </p>

        {/* Main Banner Image Container */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-900">
          <Image
            src={blog?.image || "/assets/heroSectionBg.png"}
            alt={blog?.title || "Blog detail banner"}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}