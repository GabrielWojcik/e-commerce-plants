"use client";
import { signIn } from "next-auth/react";

export function LoginBtn() {
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/" })}>
      Login com o Google
    </button>
  );
}
