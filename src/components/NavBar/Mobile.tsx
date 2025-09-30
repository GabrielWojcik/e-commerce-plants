"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../images/logo-2-meu-jardim.png";

export function NavBarMobile() {
  const { data: session } = useSession();
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
        <div className="absolute top-0 left-0 w-full h-screen bg-[#E4F1DC] text-green-800 z-10">
          <div className="flex justify-end m-4">
            <IoClose size={24} onClick={() => setIsOpenMenu(false)} />
          </div>
          <div className="flex justify-center items-center h-full">
            <ul className="flex flex-col h-full gap-4">
              {session?.user?.name && <Link href="/perfil">Perfil</Link>}
              <Link href="/">
                <li>Início</li>
              </Link>
              <Link href="/plantas">
                <li>Plantas</li>
              </Link>
              <Link href="/vasos">
                <li>Vasos</li>
              </Link>
              <Link href="/sobre">
                <li>Sobre</li>
              </Link>
              <Link href="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
