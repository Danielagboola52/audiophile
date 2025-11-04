// src/components/CartModal.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartModal() {
  const { cart, isOpen, setIsOpen, updateQuantity, clearCart, total } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white w-full max-w-md h-full p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            CART ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </h2>
          <button onClick={clearCart} className="text-sm underline text-gray-500">
            Remove all
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.name.split(" ").slice(0, 2).join(" ")}</p>
                    <p className="text-sm text-gray-500">$ {item.price}</p>
                  </div>
                  <div className="flex items-center bg-gray-100 text-sm">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500 uppercase">Total</span>
                <span className="text-xl font-bold">$ {total.toLocaleString()}</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-orange-500 text-white py-3 uppercase font-bold hover:bg-orange-400"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}