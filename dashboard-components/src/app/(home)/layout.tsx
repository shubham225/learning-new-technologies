import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import MobileNav from "@/components/sidebar/MobileNav";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex size-full flex-col">
        <MobileNav />
        {children}
      </div>
    </main>
  );
}
