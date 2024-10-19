"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer gap-2">
          <Image
            src="/icons/logo.svg"
            alt="App logo"
            width={34}
            height={34}
            className="size-[36px] max-xl:size-12"
          />
          <h1 className="sidebar-logo">AppName</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
            
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("sidebar-link", {"bg-bank-gradient" : isActive})}
              >
                <div className="relative size-6 flex">
                  <div className={cn("w-6 h-6", {"text-white" : isActive, "text-gray-400" : !isActive})}>
                    {item.icon}
                  </div>
                </div>
                <p className={cn("sidebar-label", {"!text-white" : isActive})}>{item.label}</p>
              </Link>
            );
        })}
      </nav>
      FOOT
    </section>
  );
}
