"use client";

import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import Container from "@/components/shared/Container";
import CartItemList from "./components/CartItemList";
import CartTotals from "./components/CartTotals";
import PeopleAlsoLiked from "./components/PeopleAlsoLiked";

export default function CartView() {
  return (
    <main className="w-full bg-black min-h-screen pt-6 pb-24 text-white">
      <Container>
        <div className="mb-8 space-y-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <FiChevronLeft className="text-base transition-transform group-hover:-translate-x-1" />
            <span>Back to Shopping</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Your <span className="text-[#A71EDB]">Cart</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 w-full">
          <div className="w-full lg:flex-1 min-w-0">
            <CartItemList />
          </div>

          <div className="w-full lg:w-[28rem] shrink-0 sticky top-28 z-20">
            <CartTotals />
          </div>
        </div>

        <PeopleAlsoLiked />
      </Container>
    </main>
  );
}