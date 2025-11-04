// app/earphones/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Earphones() {
  const earphones = products.filter((p) => p.category === "earphones");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { addToCart } = useCart();

  const handleQuantity = (id: number, delta: number) => {
    const key = id.toString();
    setQuantities(prev => ({
      ...prev,
      [key]: Math.max(1, (prev[key] || 1) + delta)
    }));
  };

  return (
    <div className="min-h-screen">
      <header className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">EARPHONES</h1>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-40">
          {earphones.map((product, i) => {
            const key = product.id.toString();
            return (
              <div
                key={product.id}
                className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={`/assets/product-${product.slug}/desktop/image-product.jpg`}
                    alt={product.name}
                    width={540}
                    height={560}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  {product.new && (
                    <p className="text-orange-500 uppercase text-sm tracking-widest">NEW PRODUCT</p>
                  )}
                  <h2 className="text-4xl font-bold mt-2">{product.name}</h2>
                  <p className="mt-4 text-gray-600">{product.description}</p>
                  <p className="mt-4 text-2xl font-bold">$ {product.price.toLocaleString()}</p>

                  <div className="flex gap-4 mt-6 items-center">
                    <div className="flex items-center bg-gray-100">
                      <button onClick={() => handleQuantity(product.id, -1)} className="px-4 py-2 hover:bg-gray-200">-</button>
                      <span className="px-4 py-2 font-bold">{quantities[key] || 1}</span>
                      <button onClick={() => handleQuantity(product.id, 1)} className="px-4 py-2 hover:bg-gray-200">+</button>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(product, quantities[key] || 1);
                        setQuantities(prev => ({ ...prev, [key]: 1 }));
                      }}
                      className="bg-orange-500 text-white px-8 py-3 uppercase font-bold hover:bg-orange-400 transition"
                    >
                      ADD TO CART
                    </button>
                  </div>

                  <Link
                    href={`/earphones/${product.slug}`}
                    className="inline-block mt-4 text-orange-500 hover:text-orange-600 text-sm uppercase tracking-wider"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard title="HEADPHONES" image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" link="/headphones" />
          <ProductCard title="SPEAKERS" image="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" link="/speakers" />
          <ProductCard title="EARPHONES" image="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" link="/earphones" />
        </div>
      </section>
    </div>
  );
}