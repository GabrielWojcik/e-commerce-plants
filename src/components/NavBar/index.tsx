import { FiShoppingBag } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";

import Logo from "../../images/logo-2-meu-jardim.png";

export function NavBar() {
  return (
    <div className="hidden md:flex text-green-800 items-center justify-between mx-8">
      <div>
        <Image
          className="rounded-full"
          src={Logo}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div>
        <ul className="flex gap-4 *:cursor-pointer">
          <li>Início</li>
          <li>Plantas</li>
          <li>Vasos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <IoIosSearch size={20} color="#3F6212" />
        </div>
        <div className="border p-2 border-lime-200 relative rounded-sm">
          <div className="m-1 cursor-pointer">
            <FaRegUser color="#3F6212" size={20} />
          </div>
        </div>
        <div className="border p-2 border-lime-200 relative rounded-sm">
          <div className="w-6 h-6 flex items-center justify-center text-white text-center absolute font-bold -top-2 -right-2 bg-lime-800 rounded-full z-10">
            0
          </div>
          <div className="m-1 cursor-pointer">
            <FiShoppingBag color="#3F6212" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
