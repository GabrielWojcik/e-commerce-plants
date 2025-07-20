"use client";

import Link from "next/link";
import Image1 from "../images/card/example-photo.avif";
import Image from "next/image";
export function ProductCard() {
  const id = "123";
  const name = "Suculenta Echveria";
  const price = 129.9;
  const originalPrice = 199.9;
  const discount = 35;
  const rating = 4.2;
  const reviews = 87;
  const category = "Suculentas";
  const inStock = true;

  return (
    <div className="bg-white rounded-lg shadow group cursor-pointer flex flex-col max-w-[300px]">
      <Link href={`/produto/${id}`} className="flex-1">
        <div className="relative">
          <div className="aspect-square bg-plantBeige rounded-t-lg overflow-hidden">
            <Image
              src={Image1}
              alt={name}
              layout="fill"
              quality={100}
              //   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </div>
          )}

          <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364 4.318 12.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>

          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                Fora de estoque
              </span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <span className="text-xs text-plantGreen border border-plantGreen px-2 py-0.5 rounded">
            {category}
          </span>

          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-plantGreen transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.169L12 18.896l-7.335 3.865 1.401-8.169L.132 9.21l8.2-1.192z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-plantGreen">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-sm text-gray-500 line-through">
              R$ {originalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 pt-0">
        {inStock ? (
          <Link
            href={`/produto/${id}`}
            className="block w-full text-center bg-plantGreen hover:bg-plantGreen-dark text-white py-2 px-4 rounded transition"
          >
            Ver detalhes
          </Link>
        ) : (
          <button
            disabled
            className="block w-full bg-gray-300 text-white py-2 px-4 rounded cursor-not-allowed"
          >
            Indisponível
          </button>
        )}
      </div>
    </div>
  );
}
