import { FaArrowRightLong } from "react-icons/fa6";
import Img1 from "../images/flower/vaso-1.png";
import Img2 from "../images/flower/vaso-2.png";
import Img3 from "../images/flower/vaso-3.png";
import Image from "next/image";
export function Banner() {
  return (
    <div className="bg-[#e4f1dc] text-[#2f5e3c] flex flex-col items-center h-full p-4 gap-2 md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl mb-2 text-balance">
          Traga a natureza para dentro de casa
        </h1>
        <p className="font-medium mb-8 text-balance">
          Descubra nossa coleção de plantas, suculentas, cactos e muito mais
          para transformar seu espaço em um oásis verde.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          <button className="bg-[#3c6f4d] text-white py-2 px-8 rounded font-bold flex items-center gap-4 cursor-pointer hover:bg-green-700">
            Comprar agora <FaArrowRightLong />
          </button>
          <button className="bg-white text-[#3c6f4d] py-2 px-8 border-[#3c6f4d] border rounded cursor-pointer hover:bg-[#3c6f4d] hover:text-white">
            Ver catálogo
          </button>
        </div>
      </div>
      <div className=" hidden  items-center justify-end h-96 w-full md:flex">
        <div className=" items-end flex pb-14 -mr-6 h-full">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image src={Img2} alt="" className="object-cover" />
          </div>
        </div>
        <div className="w-[280px] h-[280px] relative rounded-full overflow-hidden">
          <Image src={Img1} alt="" fill className="object-cover" />
        </div>
        <div className=" items-start flex pb-14 h-full">
          <div className="w-[180px] h-[180px] relative rounded-full overflow-hidden">
            <Image src={Img3} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
