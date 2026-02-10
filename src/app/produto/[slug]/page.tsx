import { Button } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { LuDroplets } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdRemove } from "react-icons/md";

import Image from "next/image";
import Foto from "../../../images/flower/vaso-1.png";
import { CareAttribute } from "@/components/modules/product/CareAttribute";

export default function ProductPage() {
  return (
    <div className="flex flex-col h-full py-4 md:pr-4 md:flex-row gap-2">
      <div className="flex items-center justify-center md:pr-4 md:w-1/2">
        <Image
          src={Foto}
          alt=""
          className="h-auto w-full md:rounded-2xl md:max-h-[600px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 md:w-1/2 justify-around">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Arranjo Especial de Suculentas
          </h1>
          <span>R$160,00</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            <CareAttribute
              title="LUZ"
              subTitle="Luz Direta/Indireta"
              icon={GoSun}
              iconColor="#F59E0B"
            />
            <CareAttribute
              title="ÁGUA"
              subTitle="1x por semana"
              icon={LuDroplets}
              iconColor="#3B82F6"
            />
            <CareAttribute
              title="TAM."
              subTitle="15cm x 18cm"
              icon={SlSizeFullscreen}
              iconColor="#10B981"
            />
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
                <MdRemove />
              </button>
              <span className="font-bold text-slate-800 w-4 text-center">
                1
              </span>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-emerald-600 disabled:opacity-50">
                <HiOutlinePlusSm />
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

          <div className="flex gap-2 flex-col">
            <div className="flex flex-col gap-3">
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
