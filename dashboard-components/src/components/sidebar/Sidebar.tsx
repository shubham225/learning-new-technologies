"use client";

import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import AppLogo from "../AppLogo";
import FooterCard from "../FooterCard";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-3">
        <Link href="/">
          <AppLogo type="sidebar" />
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label}>
              <NavItem
                isActive={isActive}
                icon={item.icon}
                label={item.label}
              />
            </Link>
          );
        })}
      </nav>
      <FooterCard />
    </section>
  );
}
