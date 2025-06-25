"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import Logo from "../../images/logo-2-meu-jardim.png";

export function NavBarMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mx-4 mb-4">
      <Image
        src={Logo}
        alt=""
        width={100}
        height={100}
        className="rounded-full"
      />
      <RxHamburgerMenu size={24} onClick={() => setIsOpenMenu(true)} />

      {isOpenMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white">
          <div className="flex justify-end m-4">
            <IoClose size={24} onClick={() => setIsOpenMenu(false)} />
          </div>
          <div className="flex justify-center items-center h-full">
            <ul className="flex flex-col h-full gap-4">
              <li>Início</li>
              <li>Plantas</li>
              <li>Vasos</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
