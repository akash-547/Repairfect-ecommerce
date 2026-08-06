"use client";

import Image from "next/image";
import { FiX, FiMinus, FiPlus, FiRotateCw } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function CartItemList() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const items = Array.isArray(cartItems) ? cartItems : [];

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800/80 bg-[#0a0a0a] p-8 text-center">
        <p className="text-zinc-400">Your cart is empty. Add a product to see it here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="divide-y divide-zinc-800/80 border-b border-zinc-800/80">
        {items.map((item, index) => {
          const safeQuantity = Number(item?.quantity ?? 1);
          const itemPrice = Number(item?.price ?? 60);
          const totalItemPrice = itemPrice * safeQuantity;
          const imageSrc = item?.image || "/assets/heroSectionBg.png";

          return (
            <div
              key={`${item?.id ?? index}-${item?.selectedColor ?? "default"}`}
              className="py-6 flex items-center justify-between gap-4 sm:gap-6"
            >
              <button
                onClick={() => removeFromCart(item?.id, item?.selectedColor)}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Remove item"
              >
                <FiX className="text-xl sm:text-2xl" />
              </button>

              <div className="w-20 h-20 sm:w-28 sm:h-24 bg-gradient-to-br from-zinc-900 via-black to-purple-950/20 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-zinc-800/60 p-2">
                <Image
                  src={imageSrc}
                  alt={item?.title || "Product"}
                  width={100}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex-1 min-w-0 px-2">
                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {item?.title || "Product"}
                </h3>
                {item?.selectedColor && (
                  <span className="text-xs text-zinc-400 block mt-1">
                    Color: <span className="text-purple-400">{item.selectedColor}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 bg-[#111115] border border-zinc-800/90 rounded-full px-3 py-1.5 shrink-0">
                <button
                  onClick={() => decreaseQuantity(item?.id, item?.selectedColor)}
                  className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FiMinus className="text-xs" />
                </button>
                <span className="text-sm font-semibold w-5 text-center text-white">
                  {safeQuantity}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FiPlus className="text-xs" />
                </button>
              </div>

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
        })}
      </div>

      <div className="flex justify-end pt-5">
        <button className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group">
          <FiRotateCw className="text-sm transition-transform duration-300 group-hover:rotate-180" />
          <span>Update Cart</span>
        </button>
      </div>
    </div>
  );
}