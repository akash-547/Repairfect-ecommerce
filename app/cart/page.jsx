import { Suspense } from "react";
import CartView from "@/features/cart";

export default function CartPage() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-center text-zinc-300">
            <p className="text-sm sm:text-base">Loading your cart...</p>
          </div>
        }
      >
        <CartView />
      </Suspense>
    </div>
  );
}