import { QuantitySelector } from "@/components/modules/product/QuantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";
import FotoMock from "../../images/card/example-photo.avif";
import Image from "next/image";
import { Input } from "antd";
import { IoLocationOutline } from "react-icons/io5";

export default function CartPage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
      <h1 className="text-3xl font-serif font-bold text-[#2D5A27] mb-8">
        Meu Carrinho
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:shadow-md transition-shadow">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src={FotoMock} alt="" className="w-full h-full" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Suculentas
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                Arranjo Especial de Suculentas
              </h3>
              <div className="mt-2 flex items-center justify-center md:justify-start gap-3">
                <span className="text-[#2D5A27] font-bold text-xl">R$ 160</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <QuantitySelector />
              <div className="flex gap-2 items-center cursor-pointer">
                <button className="text-gray-400 flex items-center gap-1 text-xs font-medium uppercase tracking-tight">
                  <FaRegTrashAlt color="#99a1af" />
                  Remover
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:shadow-md transition-shadow">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src={FotoMock} alt="" className="w-full h-full" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Suculentas
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                Arranjo Especial de Suculentas
              </h3>
              <div className="mt-2 flex items-center justify-center md:justify-start gap-3">
                <span className="text-[#2D5A27] font-bold text-xl">R$ 160</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <QuantitySelector />
              <div className="flex gap-2 items-center cursor-pointer">
                <button className="text-gray-400 flex items-center gap-1 text-xs font-medium uppercase tracking-tight">
                  <FaRegTrashAlt color="#99a1af" />
                  Remover
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-50">
              Resumo do Pedido
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <p>Subtotal (2 itens)</p>
                <span className="font-medium text-gray-800">R$ 289,90</span>
              </div>
              <div className="flex justify-between">
                <p>Entrega</p>
                <span className="font-medium text-gray-800">R$ 15,00</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label
                  htmlFor=""
                  className="text-xs font-bold text-gray-400 uppercase mb-2 block"
                >
                  Calcular Frete
                </label>
                <Input
                  placeholder="00000-000"
                  prefix={<IoLocationOutline color="#9ca3af" size={18} />}
                  style={{
                    borderRadius: "9999px",
                    padding: "8px 16px",
                    borderColor: "#e5e7eb",
                  }}
                />
              </div>
              <button className="px-4 py-2 text-[#2D5A27] font-bold text-sm bg-[#E8F5E9] rounded-2xl hover:bg-[#d0e9d3] transition-colors">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
