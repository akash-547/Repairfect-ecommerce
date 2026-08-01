import React from "react";
import BlogDetailHero from "./components/details/BlogDetailHero";
import BlogDetailContent from "./components/details/BlogDetailContent";

export default function BlogDetails({ id }) {
  // Filhal dummy data hai (Jab API banayein ge toh id se fetch ho jayega)
  const mockBlog = {
    id: id,
    title: "Figma ipsum component variant main layer. Comment scale list.",
    description: "Figma ipsum component variant main layer. Asset frame arrange effect figma. Vector community pen horizontal variant.",
    image: "/assets/blog-detail-banner.png",
    category: "Blog",
    date: "28 July, 2026",
    readTime: "10 min"
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      <BlogDetailHero blog={mockBlog} />
      <BlogDetailContent blog={mockBlog} />
    </main>
  );
}