"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cardMocks } from "@/mocks/cards";
import type { StaticImageData } from "next/image";

interface ProductCardProps {
  product: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    href: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => (
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

// Componente principal da página do catálogo
export default function CatalogoPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Nosso Catálogo</h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore nossa variedade de plantas e acessórios para todos os
            espaços.
          </p>
        </div>

        {/* Info */}
        <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="text-gray-600">
            Mostrando <span className="font-semibold">{cardMocks.length}</span>{" "}
            produtos
          </div>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cardMocks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      {/* Seção de Vantagens */}
      <section className="bg-lime-50/80 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-lime-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4l2 2" />
                  <path d="m15.82 4.18 1.44 1.44M6.74 6.74l1.44 1.44m-2.9 5.82h2.88m10.66 0h2.88M6.74 17.26l1.44-1.44m8.52 1.44 1.44 1.44" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Plantas Saudáveis
              </h3>
              <p className="text-gray-600">
                Todas as nossas plantas são cultivadas com cuidado e amor para
                garantir qualidade.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-lime-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700"
                >
                  <path d="M10.59 16.41 15.17 12l-4.58-4.41L12 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Entrega Segura
              </h3>
              <p className="text-gray-600">
                Entregamos suas plantas com embalagens especiais para garantir
                que cheguem intactas.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-lime-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-700"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Garantia de Satisfação
              </h3>
              <p className="text-gray-600">
                Se você não estiver satisfeito com sua compra, nós garantimos a
                troca ou reembolso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
