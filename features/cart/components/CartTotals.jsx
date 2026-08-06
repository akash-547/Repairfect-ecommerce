"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function CartTotals() {
  const { totalPrice = 0 } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const safeTotalPrice = Number(totalPrice) || 0;
  const isCartEmpty = safeTotalPrice <= 0;

  return (
    <div className="w-full max-w-[427px] min-h-[664px] bg-[#000000] border border-zinc-800/90 rounded-[28px] p-8 flex flex-col justify-between shadow-2xl select-none">
      <div className="space-y-6">
        <h2 className="text-base font-bold tracking-wider text-white uppercase border-b border-zinc-800/80 pb-5">
          CART TOTALS
        </h2>

        <div className="flex justify-between items-center text-sm text-zinc-400">
          <span className="font-light">Shipping (Within 48 Hours)</span>
          <span className="text-white font-semibold">Free</span>
        </div>

        <div className="flex justify-between items-center text-sm text-zinc-400 border-b border-zinc-800/80 pb-6">
          <span className="font-light">Subtotal</span>
          <span className="text-white font-bold tracking-wide">{safeTotalPrice} JOD</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-white">Total</span>
          <span className="text-2xl font-bold text-white tracking-wide">
            {safeTotalPrice} JOD
          </span>
        </div>

        <div className="pt-4 space-y-2.5">
          <label className="text-sm font-semibold text-white block">
            Promotion Code
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full h-14 bg-[#0a0a0d] border border-zinc-800 rounded-2xl px-5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#A71EDB] transition-all"
            />
          </div>
        </div>

        <div className="flex items-start gap-2.5 text-xs text-zinc-300 pt-2 leading-relaxed">
          <span className="text-base leading-none">🎉</span>
          <span>You&apos;ll receive 300 points from our loyalty program.</span>
        </div>
      </div>

      <div className="space-y-4 pt-6">
        <button
          disabled={isCartEmpty}
          className={`w-full h-14 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98] shadow-lg shadow-purple-950/30 ${
            isCartEmpty
              ? "cursor-not-allowed bg-zinc-800 text-zinc-500 shadow-none"
              : "bg-[#A71EDB] hover:bg-[#8B00CC] text-white cursor-pointer"
          }`}
        >
          <span>Checkout</span>
          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors py-1"
          >
            <FiChevronLeft className="text-xs" />
            <span>Continue shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}