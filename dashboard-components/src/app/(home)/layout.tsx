import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";
import MobileNav from "@/components/MobileNav";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
              src="/icons/logo.svg"
              alt="App logo"
              width={34}
              height={34}
            />
            <div>
              <MobileNav />
            </div>
        </div>
        {children}
      </div>
    </main>
  );
}
