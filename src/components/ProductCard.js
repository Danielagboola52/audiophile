// src/components/ProductCard.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ title, image, link }) {
  return (
    <Link href={link} className="group text-center block">
      <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden transition-transform hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="mx-auto -mt-20 rounded-lg"
        />
        <h3 className="mt-8 font-bold text-lg uppercase">{title}</h3>
        <p className="mt-2 text-sm uppercase tracking-wider text-orange-500 group-hover:text-black transition flex items-center justify-center gap-1">
          Shop <span className="text-xl">→</span>
        </p>
      </div>
    </Link>
  );
}