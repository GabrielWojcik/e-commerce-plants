import { LoginBtn } from "@/components/LoginBtn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LuLeaf } from "react-icons/lu";

export default async function LoginPage() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="bg-[#E4F1DC] flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 p-4 rounded-full bg-[#2F5E3C] ">
            <LuLeaf size={48} color="#E4F1DC" />
          </div>
          <h1 className="text-2xl text-[#2F5E3C]">Meu Jardim</h1>
          <p className="text-center md:text-start">
            Entre na sua conta para continuar suas compras
          </p>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col items-center gap-4">
          <p className="text-2xl text-[#2F5E3C]">Bem-vindo de volta</p>
          <p className="text-sm text-center md:text-start">
            Faça login com sua conta Google para acessar o Meu Jardim.
          </p>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
}
