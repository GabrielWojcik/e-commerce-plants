"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export function LoginBtn() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="border px-4 py-2 rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-gray-100 hover:border-gray-400transition-colors duration-200 hover:border-gray-400"
    >
      <FcGoogle size={20} />
      Continuar com o Google
    </button>
  );
}
