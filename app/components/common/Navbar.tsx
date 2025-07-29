'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { useEffect, useRef, useState } from 'react';
import { propertyData } from '@/lib/data/properties';
import clsx from 'clsx';
import { Menu, X, ShoppingCart } from 'lucide-react';
{/*import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';*/}

export default function Navbar() {
  const { cart } = useCart();
  const [shake, setShake] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const cartItems = propertyData.filter((item) => cart.includes(item.id as never));

  useEffect(() => {
    if (cart.length > 0) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handler);
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handler);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-10 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">VILLA</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>

          {/* Cart */}
          <div
  className="relative"
  onMouseEnter={() => setShowPreview(true)}
  onMouseLeave={() => setShowPreview(false)}
>
  <Link href="/cart" aria-label="Go to cart">
    <ShoppingCart
      className={clsx(
        "w-6 h-6 text-gray-700 hover:text-orange-600 transition-transform",
        shake && "animate-shake"
      )}
    />
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" suppressHydrationWarning>
        {cart.length}
        </span>
    )}
  </Link>

            {/* Cart Preview */}
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

        {/* Mobile Hamburger */}
        <button className="md:hidden"  onClick={() => setMobileMenuOpen(true)} aria-label="Toggle mobile menu">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Backdrop & Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu */}
          <div
            ref={menuRef}
            className="absolute left-0 top-0 w-[80vw] sm:w-[60vw]
 h-full bg-white/80 p-6 space-y-6 animate-slide-in overflow-y-auto"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-orange-600">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-orange-600">About</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-orange-600">Services</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-orange-600">Contact</Link>
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium hover:text-orange-600">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
