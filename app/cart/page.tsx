"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { CartSummaryCard } from "../components/cart/CartSummaryCard";


export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 items-center bg-white p-4 rounded shadow"
              >
                <div className="relative w-28 h-20 rounded overflow-hidden">
                  <Image
                    src={item.image || "/images/placeholder.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.location}</p>
                  <p className="text-orange-600 font-bold mt-1">${item.price}</p>
                </div>
                <Link
                  href={`/properties/${item.id}`}
                  className="text-sm text-orange-600 hover:underline"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cart Summary Card */}
      <CartSummaryCard />
    </div>
  );
}
