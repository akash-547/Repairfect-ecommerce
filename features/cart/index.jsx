"use client";

import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import Container from "@/components/shared/Container";
import CartSection from "./components/CartSection";
import PeopleAlsoLiked from "./components/PeopleAlsoLiked";

export default function CartView() {
  return (
    <main className="w-full min-h-screen bg-[#050505] pt-6 pb-24 text-white overflow-x-hidden">
      <Container>
        <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col gap-8 lg:gap-10">
          {/* HEADER SECTION - NO EXTRA PADDING NEEDED NOW */}
          <div className="space-y-3 w-full">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 transition-colors hover:text-white group cursor-pointer"
            >
              <FiChevronLeft className="text-base transition-transform group-hover:-translate-x-1" />
              <span>Back to Shopping</span>
            </Link>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Your <span className="text-[#A71EDB]">Cart</span>
            </h1>
          </div>

          {/* MAIN CART CONTENT */}
          <CartSection />

          {/* RECOMMENDATION SECTION */}
          <PeopleAlsoLiked />
        </div>
      </Container>
    </main>
  );
}