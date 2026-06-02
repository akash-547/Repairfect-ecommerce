"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Email Subscribed:", email);
  };

  return (
    /* 🛠️ FIX: 'border-t-[4px] border-[#a71edb]' ko remove kar diya hai taaki dono sections bina kisi line ke blend ho skein */
    <footer className="w-full bg-[#000000] text-white pt-20 pb-6 select-none relative">
      <Container>
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* ─── TOP LINKS & NEWSLETTER SECTION ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start mb-16">
            
            {/* Col 1: Navigation */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter font-medium text-[15px] text-zinc-400 tracking-wide">Navigation</h4>
              <ul className="flex flex-col gap-2 font-inter font-light text-[14px] text-zinc-500">
                <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                <li className="hover:text-white transition-colors cursor-pointer">Products</li>
                <li className="hover:text-white transition-colors cursor-pointer">Featured</li>
                <li className="hover:text-white transition-colors cursor-pointer">New Release</li>
              </ul>
            </div>

            {/* Col 2: Categories */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter font-medium text-[15px] text-zinc-400 tracking-wide">Categories</h4>
              <ul className="flex flex-col gap-2 font-inter font-light text-[14px] text-zinc-500">
                <li className="hover:text-white transition-colors cursor-pointer">Headphones</li>
                <li className="hover:text-white transition-colors cursor-pointer">Gaming Keyboards</li>
                <li className="hover:text-white transition-colors cursor-pointer">Gaming Mouse</li>
              </ul>
            </div>

            {/* Col 3: Social Media */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter font-medium text-[15px] text-zinc-400 tracking-wide">Social Media</h4>
              <ul className="flex flex-col gap-2 font-inter font-light text-[14px] text-zinc-500">
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">Facebook</li>
                <li className="hover:text-white transition-colors cursor-pointer">Whatsapp</li>
                <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
              </ul>
            </div>

            {/* Col 4: Newsletter Form */}
            <div className="flex flex-col gap-4">
              <h4 className="font-inter font-normal text-[15px] text-white leading-snug">
                Enter your email for our newsletter to stay up to date
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="w-full relative border-b border-zinc-700 pb-2 flex items-center justify-between">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email..."
                  className="w-full bg-transparent border-none outline-none font-inter font-light text-[14px] text-zinc-400 placeholder-zinc-600 pr-8"
                  required
                />
                <button type="submit" className="text-zinc-400 hover:text-white transition-colors absolute right-0 bottom-2">
                  <span className="text-[16px] cursor-pointer">➔</span>
                </button>
              </form>
            </div>

          </div>

          {/* ─── MIDDLE BRANDING LOGO DISPLAY ─── */}
          <div className="w-full overflow-hidden border-b border-zinc-800/60 pb-4 mb-6">
            <h1 className="font-inter font-bold text-[75px] sm:text-[110px] md:text-[140px] lg:text-[170px] leading-none tracking-tight text-white select-none">
              <span className="text-[#a71edb]">R</span>epair<span className="relative inline-block">f<span className="absolute top-[18%] left-[42%] w-[10%] h-[10%] bg-[#a71edb] rounded-full sm:top-[22%]"></span>e</span>ct
            </h1>
          </div>

          {/* ─── BOTTOM SUB-FOOTER BAR ─── */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-inter font-light text-[12px] text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse"></span>
              <span>All systems operational</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-zinc-300 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}