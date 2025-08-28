"use client";
import React, { useState } from "react";
import { ChevronDown, Heart, Star } from "lucide-react";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Suculenta Echeveria",
    category: "Suculentas",
    price: 129.9,
    originalPrice: 199.99,
    rating: 4,
    reviews: 87,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Suculenta",
    isNew: false,
    onSale: true,
  },
  {
    id: 2,
    name: "Cacto Mandacaru",
    category: "Cactos",
    price: 89.9,
    originalPrice: null,
    rating: 5,
    reviews: 120,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Cacto",
    isNew: true,
    onSale: false,
  },
  {
    id: 3,
    name: "Samambaia",
    category: "Folhagens",
    price: 75.5,
    originalPrice: null,
    rating: 4,
    reviews: 95,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Samambaia",
    isNew: false,
    onSale: false,
  },
  {
    id: 4,
    name: "Orquídea Phalaenopsis",
    category: "Flores",
    price: 159.9,
    originalPrice: 220.0,
    rating: 5,
    reviews: 210,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Orquídea",
    isNew: false,
    onSale: true,
  },
  {
    id: 5,
    name: "Vaso de Cerâmica",
    category: "Vasos",
    price: 45.0,
    originalPrice: null,
    rating: 4,
    reviews: 65,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Vaso",
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: "Kit Jardinagem",
    category: "Acessórios",
    price: 110.0,
    originalPrice: 150.0,
    rating: 5,
    reviews: 150,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Kit",
    isNew: true,
    onSale: true,
  },
  {
    id: 7,
    name: "Suculenta Sedum",
    category: "Suculentas",
    price: 35.9,
    originalPrice: null,
    rating: 4,
    reviews: 45,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Suculenta",
    isNew: false,
    onSale: false,
  },
  {
    id: 8,
    name: "Cacto Coroa de Frade",
    category: "Cactos",
    price: 99.9,
    originalPrice: null,
    rating: 5,
    reviews: 180,
    image: "https://placehold.co/300x300/f0f0f0/333?text=Cacto",
    isNew: false,
    onSale: false,
  },
];

// Componente para o card de produto
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      {product.onSale && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -
          {Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) *
              100
          )}
          %
        </span>
      )}
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          NOVO
        </span>
      )}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
        <Heart size={24} />
      </button>
    </div>
    <div className="p-4">
      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        {product.category}
      </span>
      <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-1 truncate">
        {product.name}
      </h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }
              fill="currentColor"
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
      </div>
      <div className="flex items-baseline space-x-2">
        <p className="text-2xl font-bold text-green-700">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        {product.originalPrice && (
          <p className="text-sm text-gray-400 line-through">
            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
          </p>
        )}
      </div>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
);

// Componente principal da página do catálogo
export default function App() {
  const [sortBy, setSortBy] = useState("featured");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default: // featured
        return b.reviews - a.reviews;
    }
  });

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

        {/* Filtros e Ordenação */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="text-gray-600 mb-4 md:mb-0">
            Mostrando <span className="font-semibold">{products.length}</span>{" "}
            produtos
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Ordenar por:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="featured">Destaque</option>
                <option value="price-asc">Preço: Menor para o Maior</option>
                <option value="price-desc">Preço: Maior para o Menor</option>
                <option value="name-asc">Nome: A-Z</option>
                <option value="name-desc">Nome: Z-A</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
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
