"use client";

import { useCart } from "@/hooks/useCart";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const CartSummaryCard = () => {
  const { cart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const handleCheckout = () => {
    if (user) {
      router.push("/checkout");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sticky top-20 h-fit">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h3>

      <div className="flex justify-between items-center text-gray-600 mb-2">
        <span>Total Items:</span>
        <span>{cart.length}</span>
      </div>

      <div className="flex justify-between items-center text-gray-800 font-bold text-lg mt-4 border-t pt-4">
        <span>Subtotal:</span>
        <span>${subtotal.toLocaleString()}</span>
      </div>

      <div className="mt-6 w-full">
        {user ? (
          <button
            onClick={handleCheckout}
            className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-700 transition"
          >
            Proceed to Checkout
          </button>
        ) : (
          <SignInButton mode="modal">
            <button
              className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-700 transition"
            >
              Sign in to Proceed
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};
