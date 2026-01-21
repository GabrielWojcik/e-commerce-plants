import { Button } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import { RxHeight, RxWidth } from "react-icons/rx";

import Image from "next/image";
import Foto from "../../../images/flower/vaso-1.png";

export default function ProductPage() {
  return (
    <div className="flex h-full py-4">
      <div className="w-1/2 flex items-center justify-end pr-4">
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
      <div className="w-1/2 flex pl-4">
        <div className="flex flex-col gap-2 justify-around w-full">
          <div>
            <h1 className="font-semibold text-2xl">Kit Suculenta</h1>
            <h3 className="text-gray-400">Quantidade Disponível: 2</h3>
            <h2>R$ 45</h2>
          </div>

          <div>
            <h3 className="font-semibold">Composição</h3>
            <p>suculenta - 1 un.</p>
          </div>

          <div>
            <h3 className="font-semibold">Tamanho</h3>
            <span className="flex items-center gap-1">
              <RxWidth size={20} color="black" /> Largura - 1 cm
            </span>
            <span className="flex items-center gap-1">
              <RxHeight size={20} color="black" /> Altura - 1 cm
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
