import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function BlogDetailContent({ blog }) {
  return (
    <section className="w-full bg-[#050505] text-white py-12 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* 1. Left Social Share (2 Cols on Large Screen) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <span className="text-xs font-light text-zinc-500 uppercase tracking-wider mb-1">
            Share
          </span>
          <div className="flex lg:flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-3 text-zinc-400 hover:text-white text-xs transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center">
                <FaFacebookF className="text-xs" />
              </div>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-zinc-400 hover:text-white text-xs transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center">
                <FaTwitter className="text-xs" />
              </div>
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-zinc-400 hover:text-white text-xs transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center">
                <FaInstagram className="text-xs" />
              </div>
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>

        {/* 2. Middle Article Content Body (7 Cols on Large Screen) */}
        <div className="lg:col-span-7 flex flex-col gap-10 text-zinc-300">
          {/* Content Block 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-normal text-white">
              Figma ipsum component variant main
            </h2>
            <p className="text-sm leading-[170%] font-light text-zinc-400">
              {blog?.contentParagraph1 ||
                "Figma ipsum component variant main layer. Pixel overflow resizing selection editor overflow. Bold project plugin undo union italic. Inspect auto content stroke connection line arrow flows share. Fill overflow pixel pen component. Vertical move outline duplicate project selection."}
            </p>
            <p className="text-sm leading-[170%] font-light text-zinc-400">
              Select horizontal device draft rotate text edit list. Figjam edit distribute pixel bold duplicate library invite image. Strikethrough pixel inspect device layout scrolling union. Rotate flows pencil component share.
            </p>
          </div>

          {/* Content Block 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-normal text-white">
              Figma ipsum component variant main layer. Prototype mask library move follower.
            </h2>
            <p className="text-sm leading-[170%] font-light text-zinc-400">
              {blog?.contentParagraph2 ||
                "Figma ipsum component variant main layer. Fill bullet flows inspect editor hand layout subtract. Export connection list rectangle stroke. Group text arrow effect distribute. Main group asset opacity editor group bold boolean font effect."}
            </p>
          </div>
        </div>

        {/* 3. Right Details Card (3 Cols on Large Screen) */}
        <div className="lg:col-span-3">
          <div className="p-5 bg-[#0a0a0a] rounded-xl border border-zinc-900 flex flex-col gap-4 sticky top-24">
            <h4 className="text-sm font-medium text-white pb-2 border-b border-zinc-900/50">
              Details
            </h4>

            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500">Date</span>
              <span className="text-zinc-300">{blog?.date || "28 July, 2026"}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500">Category</span>
              <span className="text-zinc-300">{blog?.category || "Controllers"}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500">Reading</span>
              <span className="text-zinc-300">{blog?.readTime || "10 min"}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}