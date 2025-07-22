"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { propertyData } from "@/lib/data/properties";
import clsx from "clsx";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const { cart } = useCart();
  const [shake, setShake] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cart.length > 0) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const cartItems = propertyData.filter((item) => cart.includes(item.id as never));

  return (
    <nav className="bg-white border-b border-gray-200 z-50 fixed top-[30px] w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">VILLA</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium">Services</Link>
          <Link href="/contact" scroll={true} className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>

          {/* Auth Section */}
          <SignedOut>
          <SignInButton mode="modal">
              <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600">Sign In</button>
          </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-900">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Cart */}
          <div
            className="relative"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            <Link href="/cart">
              <ShoppingCart
                className={clsx(
                  "w-6 h-6 text-gray-700 hover:text-orange-600 transition-transform",
                  shake && "animate-shake"
                )}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {showPreview && cartItems.length > 0 && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-100 z-50">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Cart Preview</h4>
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex gap-3 items-center">
                      <div className="relative w-12 h-12 rounded overflow-hidden">
                        <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.title}</p>
                        <p className="text-xs text-gray-500">${item.price.toLocaleString()}/mo</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cart"
                  className="block mt-3 text-center text-sm text-orange-600 font-semibold hover:underline"
                >
                  View Full Cart
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Mobile Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="fixed inset-0 bg-black bg-opacity-40 z-40">
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50 flex flex-col gap-6 animate-slide-in">
            <button onClick={() => setMobileMenuOpen(false)} className="self-end">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-orange-600">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-orange-600">About</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-orange-600">Services</Link>
            <Link href="/contact" scroll={true} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-orange-600">Contact</Link>
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-orange-600">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
