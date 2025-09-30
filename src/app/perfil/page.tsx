"use client";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlinePayment } from "react-icons/md";

import { Favorites } from "./components/favorites";
import { Requested } from "./components/requested";

export default function Perfil() {
  const { data: session } = useSession();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Pedidos",
      children: <Requested />,
    },
    {
      key: "2",
      label: "Favoritos",
      children: <Favorites />,
    },
    {
      key: "3",
      label: "Endereços",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Configurações",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className="p-4 h-screen flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {session?.user?.image && (
          <div className="flex items-center gap-2">
            <Image
              src={session.user.image}
              alt="Foto do usuário"
              width={64}
              height={64}
              className="rounded-full"
            />
            <p className="text-2xl text-[#23432F]">
              {session?.user?.name ?? "Nome não disponível"}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-3 md:flex-row">
          <button
            className="border border-[#CDE4D6] py-2 px-4 rounded-md flex gap-2 items-center text-[#23432F] cursor-pointer 
             hover:bg-[#CDE4D6] transition-colors duration-200"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <CiLogout color="#23432F" />
            <span>Sair</span>
          </button>

          <button
            className="border border-[#CDE4D6] py-2 px-4 rounded-md flex gap-2 items-center text-[#23432F] cursor-pointer
             hover:bg-[#CDE4D6] transition-colors duration-200"
            onClick={() => console.log("Editar Perfil")}
          >
            <GoGear color="#23432F" />
            <span>Editar Perfil</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="p-4 border border-[#CDE4D6] rounded-md flex flex-col items-center gap-2 w-[300px]">
          <FiBox color="#3D7150" size={32} />
          <span className="font-bold text-2xl">12</span>
          <span>Pedidos</span>
        </div>
        <div className="p-4 border border-[#CDE4D6] rounded-md flex flex-col items-center gap-2 w-[300px]">
          <MdFavoriteBorder color="#3D7150" size={32} />
          <span className="font-bold text-2xl">12</span>
          <span>Favoritos</span>
        </div>
        <div className="p-4 border border-[#CDE4D6] rounded-md flex flex-col items-center gap-2 w-[300px]">
          <MdOutlinePayment color="#3D7150" size={32} />
          <span className="font-bold text-2xl">R$ 12,00</span>
          <span>Total Gastos</span>
        </div>
        <div className="p-4 border border-[#CDE4D6] rounded-md flex flex-col items-center gap-2 w-[300px]">
          <IoLocationOutline color="#3D7150" size={32} />
          <span className="font-bold text-2xl">1</span>
          <span>Endereços</span>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
}
