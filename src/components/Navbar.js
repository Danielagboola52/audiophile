// src/components/Navbar.js
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartModal from "@/components/CartModal";

export default function Navbar() {
  const { isOpen, setIsOpen, cart } = useCart();

  return (
    <>
      <header className="bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            audiophile
          </Link>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <Link href="/headphones" className="hover:text-orange-500 transition">Headphones</Link>
            <Link href="/speakers" className="hover:text-orange-500 transition">Speakers</Link>
            <Link href="/earphones" className="hover:text-orange-500 transition">Earphones</Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="relative hover:text-orange-500 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <CartModal />
    </>
  );
}