import React from "react";
// 🛠️ Paths adjusted according to your exact folder structure
import BlogDetailHero from "./components/details/BlogDetailHero";
import BlogDetailContent from "./components/details/BlogDetailContent";

export default function BlogDetails({ id }) {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Detail Section 1: Hero / Banner / Title */}
      <BlogDetailHero id={id} />

      {/* Detail Section 2: Main Content / Article Body */}
      <BlogDetailContent id={id} />
    </main>
  );
}