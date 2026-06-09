"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  category: string;
}

export function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <Link href={product.href}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-56">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
            <Heart size={24} />
          </button>
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-1 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
