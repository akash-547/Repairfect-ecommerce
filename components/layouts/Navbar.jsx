"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart(); // Cart Context se active items ka count

  return (
    <>
      {/* 1. Main Navbar Header Block (Original styles untouched) */}
      <nav className="w-full h-[100px] bg-transparent pt-6 z-50 flex items-center shadow-none select-none relative">
        <Container>
          <div className="max-w-[1200px] mx-auto flex items-center justify-between xl:justify-start px-5 w-full">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex  items-center transition-transform active:scale-98 shrink-0"
            >
              <Image
                src="/assets/logo.png"
                alt="RepairFect Logo"
                width={140}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop View Elements */}
            <div className="hidden xl:flex items-center gap-[22px] ml-auto xl:ml-[248px]">
              {/* Center Navigation Pill */}
              <div className="flex items-center bg-[#130620]/80 backdrop-blur-xl rounded-md border border-purple-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] pt-[15px] pb-[15px] pl-[28px] pr-[28px] gap-[46px]">
                <Link
                  href="/"
                  className="text-zinc-300 hover:text-[#A71EDB] font-normal transition-colors text-[16px] leading-[100%] tracking-[0%]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-[#A71EDB] font-normal transition-colors text-[16px] leading-[100%] tracking-[0%]"
                >
                  About Us
                </Link>

                <Link
                  href="/repair"
                  className="text-zinc-300 hover:text-[#A71EDB] font-normal transition-colors text-[16px] leading-[100%] tracking-[0%]"
                >
                  Repair & Services
                </Link>

                <Link
                  href="/products"
                  className="text-zinc-300 hover:text-[#A71EDB] font-normal transition-colors text-[16px] leading-[100%] tracking-[0%]"
                >
                  Products
                </Link>

                <Link
                  href="/blogs"
                  className="text-zinc-300 hover:text-[#A71EDB] font-normal transition-colors text-[16px] leading-[100%] tracking-[0%]"
                >
                  Blogs
                </Link>
              </div>

              {/* Cart Icon with Live Count Badge */}
              <Link
                href="/cart"
                className="relative text-zinc-300 hover:text-[#A71EDB] transition-all group shrink-0 p-1"
                aria-label="Shopping Cart"
              >
                <FiShoppingCart className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#A71EDB] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse border border-[#130620]">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Profile Sign In */}
              <Link
                href="/signin"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#A71EDB] text-[16px] font-normal leading-none transition-all group active:scale-95 shrink-0"
              >
                <div className="flex items-center justify-center transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <span className="tracking-wide">Sign In</span>
              </Link>
            </div>

            {/* Mobile / Tablet Right Controls (Cart + Hamburger) */}
            <div className="flex items-center gap-4 xl:hidden">
              {/* Mobile Cart Icon */}
              <Link
                href="/cart"
                className="relative text-zinc-300 hover:text-[#A71EDB] p-1"
                aria-label="Shopping Cart"
              >
                <FiShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#A71EDB] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse border border-[#130620]">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Hamburger Button Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none transition-colors duration-200 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* 2. Mobile / Tablet Responsive Dropdown Drawer */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Animated Dropdown Menu */}
        <div
          className={`absolute top-[100px] left-0 w-full bg-[#130620] border-b border-purple-500/20 p-6 flex flex-col gap-5 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-[#A71EDB] text-lg font-medium tracking-wide transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-[#A71EDB] text-lg font-normal tracking-wide transition-colors"
          >
            About Us
          </Link>

          <Link
            href="/repair"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-[#A71EDB] text-lg font-normal tracking-wide transition-colors"
          >
            Repair & Services
          </Link>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-[#A71EDB] text-lg font-normal tracking-wide transition-colors"
          >
            Products
          </Link>

          <Link
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="text-zinc-300 hover:text-[#A71EDB] text-lg font-normal tracking-wide transition-colors"
          >
            Blogs
          </Link>

          <div className="h-[1px] bg-zinc-800 my-1" />

          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-zinc-300 hover:text-[#A71EDB] text-lg font-normal transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}