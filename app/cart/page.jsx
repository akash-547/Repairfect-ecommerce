import { Suspense } from "react";
import CartView from "@/features/cart";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-center text-zinc-300">
            <p className="text-sm sm:text-base">Loading your cart...</p>
          </div>
        }
      >
        <CartView />
      </Suspense>
    </main>
  );
}