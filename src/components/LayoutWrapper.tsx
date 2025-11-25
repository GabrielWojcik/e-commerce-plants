"use client";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NavBarMobile } from "@/components/NavBar/Mobile";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login";

  return (
    <SessionProvider>
      {!hideLayout && (
        <>
          <div className="block md:hidden">
            <NavBarMobile />
          </div>
          <div className="hidden md:block">
            <NavBar />
          </div>
        </>
      )}

      <div className="flex-grow">{children}</div>

      {!hideLayout && <Footer />}
    </SessionProvider>
  );
}
