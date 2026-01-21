import { Button } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { LuDroplets } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";

import Image from "next/image";
import Foto from "../../../images/flower/vaso-1.png";

export default function ProductPage() {
  return (
    <div className="flex h-full py-4">
      <div className="w-1/2 flex items-center justify-center pr-4">
        <div>
          <Image
            src={Foto}
            alt=""
            height={300}
            width={800}
            className="h-auto w-auto rounded-2xl"
          />
        </div>
      </div>
      <div className="w-1/2 flex pr-4">
        <div className="flex flex-col gap-2 justify-around w-full">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Arranjo Especial de Suculentas
            </h2>
            <h3 className="text-gray-400">Quantidade Disponível: 2</h3>
            <h2>R$ 45</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-1 shadow-sm">
              <GoSun color="#F59E0B" size={18} />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                LUZ
              </span>
              <span className="text-xs font-semibold text-slate-700 leading-tight">
                Luz Direta/Indireta
              </span>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-1 shadow-sm">
              <LuDroplets color="#3B82F6" size={18} />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                Água
              </span>
              <span className="text-xs font-semibold text-slate-700 leading-tight">
                1x por semana
              </span>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-1 shadow-sm">
              <SlSizeFullscreen color="#10B981" size={18} />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                TAM.
              </span>
              <span className="text-xs font-semibold text-slate-700 leading-tight">
                15cm x 18cm
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Quantidade
              </span>
              <p className="text-xs text-orange-600 font-medium">
                Apenas 2 disponíveis
              </p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-1 rounded-xl">
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-emerald-600 disabled:opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-minus"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <span className="font-bold text-slate-800 w-4 text-center">
                1
              </span>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-emerald-600 disabled:opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-plus"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Descrição</h3>
            <span className="text-slate-600 leading-relaxed text-sm">
              Um arranjo harmonioso composto por uma Echeveria central, mini
              cactos e suculentas variadas em vaso de cerâmica artesanal.
              Perfeito para decoração de interiores ou presente.
            </span>
          </div>

          <div className="flex gap-2 flex-col ">
            <div className="flex gap-3 flex-col w-1/2">
              <Button
                size="large"
                className="text-base font-semibold rounded-xl"
              >
                Adicione à sacola
              </Button>
              <Button
                size="large"
                className="text-base font-semibold rounded-xl !bg-[#25D366] !text-white !border-[#25D366] hover:!bg-[#20BA5A]"
              >
                <FaWhatsapp size={20} />
                Compre agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
