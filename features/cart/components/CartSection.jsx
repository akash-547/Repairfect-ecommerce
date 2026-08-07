"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiX,
  FiMinus,
  FiPlus,
  FiRotateCw,
  FiArrowRight,
  FiChevronLeft,
} from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function CartSection() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, totalPrice } =
    useCart();
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:gap-12">
      {/* LEFT COLUMN: CART ITEMS LIST */}
      <div className="w-full min-w-0 lg:flex-1">
        <div className="rounded-[24px] border border-zinc-800/80 bg-[#080808]/80 p-4 sm:p-6">
          <div className="divide-y divide-zinc-800/80 border-b border-zinc-800/80">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                const itemPrice = item.price || 60;
                const totalItemPrice = itemPrice * item.quantity;
                const imageSrc = item.image || item.imageSrc || "/assets/logo.png";

                return (
                  <div
                    key={`${item.id || index}-${item.selectedColor || index}`}
                    className="flex items-center justify-between gap-4 py-6 sm:gap-6"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedColor)}
                      className="text-zinc-500 hover:text-white transition-colors cursor-pointer p-1 shrink-0"
                      aria-label="Remove item"
                    >
                      <FiX className="text-xl sm:text-2xl" />
                    </button>

                    {/* Thumbnail */}
                    <div className="w-20 h-20 sm:w-28 sm:h-24 bg-gradient-to-br from-zinc-900 via-black to-purple-950/20 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-zinc-800/60 p-2">
                      <Image
                        src={imageSrc}
                        alt={item.title || "Product Image"}
                        width={100}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Title & Options */}
                    <div className="flex-1 min-w-0 px-2">
                      <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                        {item.title || "The X-Force Elite Controller"}
                      </h3>
                      {item.selectedColor && (
                        <span className="text-xs text-zinc-400 block mt-1">
                          Color:{" "}
                          <span className="text-purple-400">
                            {item.selectedColor}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* Quantity Controller */}
                    <div className="flex items-center gap-3 bg-[#111115] border border-zinc-800/90 rounded-full px-3 py-1.5 shrink-0">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id, item.selectedColor)
                        }
                        className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <FiMinus className="text-xs" />
                      </button>
                      <span className="text-sm font-semibold w-5 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <FiPlus className="text-xs" />
                      </button>
                    </div>

                    {/* Item Total Price */}
                    <div className="text-right shrink-0 min-w-[90px]">
                      <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                        {totalItemPrice} JOD
                      </div>
                      <div className="text-xs text-zinc-500 font-light mt-0.5">
                        {itemPrice} JOD
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-zinc-400">
                Your cart is empty.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-5">
          <button className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group">
            <FiRotateCw className="text-sm transition-transform duration-300 group-hover:rotate-180" />
            <span>Update Cart</span>
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: CART TOTALS SIDEBAR */}
      <div className="sticky top-28 flex min-h-[550px] w-full flex-col justify-between rounded-[28px] border border-zinc-800/90 bg-[#090909] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] select-none lg:w-[380px] xl:w-[420px]">
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
            <span className="text-white font-bold tracking-wide">
              {totalPrice || 0} JOD
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-2xl font-bold text-white tracking-wide">
              {totalPrice || 0} JOD
            </span>
          </div>

          <div className="pt-4 space-y-2.5">
            <label className="text-sm font-semibold text-white block">
              Promotion Code
            </label>
            <input
              type="text"
              placeholder="Enter Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full h-14 bg-[#0a0a0d] border border-zinc-800 rounded-2xl px-5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#A71EDB] transition-all"
            />
          </div>

          <div className="flex items-start gap-2.5 text-xs text-zinc-300 pt-2 leading-relaxed">
            <span className="text-base leading-none">🎉</span>
            <span>You will receive 300 points from our loyalty program.</span>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <button className="w-full h-14 bg-[#A71EDB] hover:bg-[#8B00CC] text-white rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group active:scale-[0.98] shadow-lg shadow-purple-950/30">
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
    </div>
  );
}