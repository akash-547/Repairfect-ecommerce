"use client";
import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import Container from "@/components/shared/Container"; // Aapka standard Navbar/Layout Container
import BlogBanner from "./components/BlogBanner";
import BlogsCards from "./components/BlogsCards";

const BLOGS_DATA = [
  {
    id: 1,
    title: "How Custom Controller Mods Transform Your Gameplay",
    description:
      "Figma ipsum component variant main layer. Share bold resizing style image star effect project...",
    date: "19 Mar 2026",
    image: "/assets/blog.png",
  },
  {
    id: 2,
    title: "How Custom Controller Mods Transform Your Gameplay",
    description:
      "Figma ipsum component variant main layer. Share bold resizing style image star effect project...",
    date: "19 Mar 2026",
    image: "/assets/blog.png",
  },
  {
    id: 3,
    title: "How Custom Controller Mods Transform Your Gameplay",
    description:
      "Figma ipsum component variant main layer. Share bold resizing style image star effect project...",
    date: "19 Mar 2026",
    image: "/assets/blog.png",
  },
  {
    id: 4,
    title: "How Custom Controller Mods Transform Your Gameplay",
    description:
      "Figma ipsum component variant main layer. Share bold resizing style image star effect project...",
    date: "19 Mar 2026",
    image: "/assets/blog.png",
  },
];

export default function BlogsFeature() {
  return (
    <div className="w-full min-h-screen bg-black text-white pb-24 select-none">
      {/* Hero Banner Layer */}
      <BlogBanner />

      {/* Shared Container with Navbar alignment setup */}
      <Container>
        <div className="max-w-[1200px] mx-auto px-4 w-full -mt-12 relative z-10 flex flex-col items-center text-center">
          
          {/* Section Badge */}
          <SectionBadge text="Blogs" />

          {/* Heading */}
          <h1 className="font-inter font-normal text-[28px] sm:text-[36px] tracking-tight text-zinc-100 mt-4 mb-2">
            Read From Our Blogs
          </h1>

          {/* Subtitle Paragraph */}
          <p className="font-inter font-light text-[12px] sm:text-[14px] leading-[150%] text-zinc-500 max-w-[680px] mb-10 opacity-80">
            Figma ipsum component variant main layer. Hand boolean edit share element
            main layout vertical boolean. Pen effect vertical rectangle distribute
            basic. Icon export frame undo continuity undo arrow.
          </p>

          {/* Dynamic Cards Stack - Full Width (1200px alignment) */}
          <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
            {BLOGS_DATA.map((blog) => (
              <BlogsCards
                key={blog.id}
                blog={blog}
                onCardClick={() => console.log(`Blog ${blog.id} clicked`)}
              />
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}