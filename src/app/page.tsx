import { Banner } from "@/components/Banner";
import { Card } from "@/components/Card";
import { cardMocks } from "@/mocks/cards";
import { LuLeaf } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-5xl text-[#2f5e3c]">Nossas Categorias</h1>
        <p>
          Explore nossa variedade de plantas e acessórios para todos os espaços
          e níveis de experiência.
        </p>
        <div className="flex flex-co flex-wrap justify-center md:flex-row">
          {cardMocks.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
              />
            );
          })}
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-4 bg-[#E4F1DC] w-full justify-center p-4 items-center">
            <div className="flex flex-col items-center gap-2 p-4 text-[#3C6F4D] max-w-[300px] border-[#E4F1DC] rounded-2xl border-2 bg-white">
              <div className="p-4 rounded-full bg-[#E4F1DC]">
                <LuLeaf size={48} color="#3F6212" />
              </div>
              <div>
                <h1 className="font-bold text-xl my-2">Plantas Saudáveis</h1>
                <p className="text-center">
                  Todas as nossas plantas são cultivadas com cuidado e amor para
                  garantir qualidade.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 text-[#3C6F4D] max-w-[300px] border-[#E4F1DC] rounded-2xl border-2 bg-white">
              <div className="p-4 rounded-full bg-[#E4F1DC]">
                <FiShoppingBag size={48} color="#3F6212" />
              </div>
              <div>
                <h1 className="font-bold text-xl my-2">Entrega Segura</h1>
                <p className="text-center">
                  Entregamos suas plantas com embalagens especiais para garantir
                  que cheguem intactas.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 text-[#3C6F4D] max-w-[300px] border-[#E4F1DC] rounded-2xl border-2 bg-white">
              <div className="p-4 rounded-full bg-[#E4F1DC]">
                <CiCircleCheck size={48} color="#3F6212" />
              </div>
              <div>
                <h1 className="font-bold text-xl my-2">
                  Garantia de Satisfação
                </h1>
                <p className="text-center">
                  Se você não estiver satisfeito com sua compra, nós garantimos
                  a troca ou reembolso.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#3C6F4D] w-full text-white py-6">
            <h1 className="text-5xl mb-4 pt-10">
              Fique por dentro das novidades
            </h1>
            <p className="text-center mb-4">
              Inscreva-se na nossa newsletter e receba dicas de cuidados com
              plantas, notícias sobre novos produtos e ofertas exclusivas.
            </p>
            <div className="flex gap-2 justify-center mb-4">
              <input
                placeholder="Seu melhor email"
                className="rounded outline-none p-2 text-gray-300 border border-gray-300"
              />
              <button className="bg-white rounded text-[#2f5e3c] p-2 cursor-pointer">
                Inscrever
              </button>
            </div>
            <p className="text-sm text-gray-300">
              Nós respeitamos sua privacidade. Cancele a inscrição a qualquer
              momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
