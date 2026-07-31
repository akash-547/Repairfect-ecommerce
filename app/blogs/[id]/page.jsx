import React from "react";
import BlogDetails from "@/features/blogs/blog"; // 👈 blog.jsx import hora hai

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Repairfect - Blog Details`,
  };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  return <BlogDetails id={id} />;
}