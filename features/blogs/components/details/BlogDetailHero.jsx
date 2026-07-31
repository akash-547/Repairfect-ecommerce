import React from "react";
import Link from "next/link";

export default function BlogDetailHero({ id }) {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs" className="text-red-500 text-sm hover:underline">
          &larr; Back to all blogs
        </Link>
        <span className="block text-xs uppercase font-semibold text-red-500 mt-4">
          Repair Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">
          How to Fix Controller Drift - Blog #{id}
        </h1>
        <p className="text-gray-400 text-sm mt-4">
          Published on July 28, 2026 • By Repairfect Team
        </p>
      </div>
    </section>
  );
}