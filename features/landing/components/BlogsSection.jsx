"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import PrimaryButton from "@/components/ui/PrimaryButton";
import BlogCard from "@/components/ui/BlogCard";
import { BLOGS_DATA } from "@/constants"; 

export default function BlogsSection() {
  const [activeBlogId, setActiveBlogId] = useState(2); 

  return (
    <section className="w-full bg-[#000000] text-white py-20 select-none overflow-hidden">
      <Container>
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* ─── TOP LAYER: INDEPENDENT BADGE ROW ─── */}
          {/* 🛠️ FIX: Alag independent div banaya jo grid se bilkul bahar hai aur niche exactly 13px ka layout margin drop karega */}
          <div className="w-full flex justify-start mb-[13px]">
            <SectionBadge text="Our Blogs" />
          </div>

          {/* ─── BOTTOM LAYER: MAIN CONTENT GRID ─── */}
          {/* 'items-start' ki wajah se ab heading aur right side ka pehla card automatic exact same horizon line se open honge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* ─── LEFT COLUMN: HEADING & CTA BUTTON ─── */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              
              {/* Heading: Right card ke sath exact straight natural horizontal line mein link ho gaya */}
              <h2 className="max-w-[450px] font-inter font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[115%] tracking-wide text-white mb-10">
                Exploring Innovation Through{" "}
                <span className="text-[#A71EDB]">High-Quality</span> Tech Insights
              </h2>

              <PrimaryButton className="w-full sm:w-auto min-w-[150px] h-[40px]">
                Read More
              </PrimaryButton>
            </div>

            {/* ─── RIGHT COLUMN: CARDS LIST ─── */}
            <div className="lg:col-span-7 flex flex-col gap-5 w-full items-end">
              {BLOGS_DATA.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  isActive={activeBlogId === blog.id}
                  onCardClick={() => setActiveBlogId(blog.id)}
                />
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}