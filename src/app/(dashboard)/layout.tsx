"use client";

import {useEffect} from "react";

import {usePathname} from "next/navigation";

import {Header, Sidebar} from "./components";

export default function SiteLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname.includes("/application")) {
      if (typeof window !== "undefined") {
        const authUser = localStorage.getItem("authUser");
        localStorage.clear();
        localStorage.setItem("authUser", authUser as string);
      }
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Sidebar />
      <main className="min-h-screen h-full p-4 screen-870:ml-64">
        <div className="mt-36 h-auto">{children}</div>
      </main>
    </>
  );
}
