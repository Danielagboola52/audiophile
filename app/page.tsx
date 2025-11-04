// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function Home() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const { addToCart } = useCart();

  const xx99 = products.find(p => p.slug === "xx99-mark-two-headphones");
  const zx9 = products.find(p => p.slug === "zx9-speaker");

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-sm uppercase tracking-widest opacity-50">NEW PRODUCT</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="mt-6 text-gray-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="flex gap-4 mt-8 items-center">
              <div className="flex items-center bg-gray-800">
                <button onClick={() => setQuantity1(Math.max(1, quantity1 - 1))} className="px-4 py-2 text-gray-400 hover:text-white">-</button>
                <span className="px-4 py-2 font-bold">{quantity1}</span>
                <button onClick={() => setQuantity1(quantity1 + 1)} className="px-4 py-2 text-gray-400 hover:text-white">+</button>
              </div>
              <button
                onClick={() => {
                  if (xx99) addToCart(xx99, quantity1);
                  setQuantity1(1);
                }}
                className="bg-orange-500 text-white px-8 py-3 uppercase font-bold hover:bg-orange-400 transition"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-full max-w-md">
            <Image
              src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              alt="XX99 Mark II Headphones"
              width={540}
              height={560}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard title="HEADPHONES" image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" link="/headphones" />
          <ProductCard title="SPEAKERS" image="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" link="/speakers" />
          <ProductCard title="EARPHONES" image="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" link="/earphones" />
        </div>
      </section>

      {/* ZX9 PROMO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-orange-500 rounded-lg p-12 flex flex-col md:flex-row items-center gap-10 text-white">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold">ZX9 SPEAKER</h2>
            <p className="mt-6 max-w-md">
              Upgrade to premium speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>
            <div className="flex gap-4 mt-8 items-center">
              <div className="flex items-center bg-white text-black">
                <button onClick={() => setQuantity2(Math.max(1, quantity2 - 1))} className="px-4 py-2 hover:bg-gray-200">-</button>
                <span className="px-4 py-2 font-bold">{quantity2}</span>
                <button onClick={() => setQuantity2(quantity2 + 1)} className="px-4 py-2 hover:bg-gray-200">+</button>
              </div>
              <button
                onClick={() => {
                  if (zx9) addToCart(zx9, quantity2);
                  setQuantity2(1);
                }}
                className="bg-black text-white px-8 py-3 uppercase font-bold hover:bg-gray-800 transition"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-full max-w-md">
            <Image
              src="/assets/product-zx9-speaker/desktop/image-product.jpg"
              alt="ZX9 Speaker"
              width={410}
              height={410}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}