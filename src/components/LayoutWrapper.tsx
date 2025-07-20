"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { NavBarMobile } from "@/components/NavBar/Mobile";
import { Footer } from "@/components/Footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login";

  return (
    <>
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

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
