"use client";
import { useSession } from "next-auth/react";
import { GoGear } from "react-icons/go";
import Image from "next/image";

export default function Perfil() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="p-4 h-screen">
      <div className="flex  items-center justify-between">
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
        <div className="border border-[#CDE4D6] py-2 px-4 rounded-md flex gap-2 items-center text-[#23432F] cursor-pointer">
          <GoGear color="#23432F" />
          <p>Editar Perfil</p>
        </div>
      </div>
    </div>
  );
}
