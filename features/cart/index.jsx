"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

import CartItemList from "./components/CartItemList";
import CartTotals from "./components/CartTotals";
import PeopleAlsoLiked from "./components/PeopleAlsoLiked";

export default function CartView() {
  const router = useRouter();
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-[#050505] text-white py-8 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <button
        onClick={() => router.back()}
        className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors cursor-pointer mb-6"
        aria-label="Go Back"
      >
        <FiChevronLeft className="text-2xl" />
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">
        Your <span className="text-[#A71EDB]">Cart</span>
      </h1>

      {cartItems.length === 0 ? (
        <div className="py-20 text-center border border-zinc-900 rounded-2xl bg-[#0a0a0a]">
          <p className="text-zinc-400 mb-4">Your cart is currently empty.</p>
          <Link
            href="/products"
            className="inline-block bg-[#A71EDB] hover:bg-[#8B00CC] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <CartItemList />
          </div>

          <div className="lg:col-span-5">
            <CartTotals />
          </div>
        </div>
      )}

      <PeopleAlsoLiked />
    </div>
  );
}