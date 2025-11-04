// app/earphones/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link
          href="/earphones"
          className="text-gray-500 hover:text-orange-500 text-sm"
        >
          ← Go Back
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="w-full">
            <Image
              src={`/assets/product-${product.slug}/desktop/image-product.jpg`}
              alt={product.name}
              width={540}
              height={560}
              className="rounded-lg w-full"
              priority
            />
          </div>

          <div>
            {product.new && (
              <p className="text-orange-500 uppercase text-sm tracking-widest">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mt-4">{product.name}</h1>
            <p className="mt-6 text-gray-600">{product.description}</p>
            <p className="mt-6 text-2xl font-bold">$ {product.price.toLocaleString()}</p>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-500 hover:text-black"
                >
                  -
                </button>
                <span className="px-4 py-2 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-500 hover:text-black"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  setQuantity(1);
                }}
                className="bg-orange-500 text-white px-8 py-3 uppercase font-bold hover:bg-orange-400 transition"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}