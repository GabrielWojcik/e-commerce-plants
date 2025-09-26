import Image from "next/image";
import { cardMocks } from "@/mocks/cards";

export function Card() {
  return (
    <section className="bg-[#F8FBF6] py-12 md:py-20 antialiased w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardMocks.map((card) => (
            <a key={card.id} href={card.href} className="block group">
              <div className="bg-white rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden h-full">
                <div className="overflow-hidden">
                  <Image
                    src={card.image}
                    alt={`[Imagem de ${card.title}]`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
