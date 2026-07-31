import React from "react";

export default function BlogDetailContent({ id }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          Yeh Blog ID: <strong className="text-red-600">{id}</strong> ka main content area hai.
          Yahan aap text, images, aur controller repair instructions add kar sakte hain.
        </p>
      </div>
    </section>
  );
}