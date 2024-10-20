"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppLogo from "../AppLogo";
import FooterCard from "../FooterCard";
import NavItem from "./NavItem";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="root-layout">
      <Image src="/icons/logo.svg" alt="App logo" width={34} height={34} />
      <div>
        <section>
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="cursor-pointer w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white w-4/6">
              <SheetClose asChild>
                <Link href="/">
                  <AppLogo type="mobileNav" />
                </Link>
              </SheetClose>
              <div className="mobilenav-sheet">
                <SheetClose asChild>
                  <nav className="flex h-full flex-col gap-2">
                    {sidebarLinks.map((item) => {
                      const isActive =
                        pathname === item.route ||
                        pathname.startsWith(`${item.route}/`);

                      return (
                        <SheetClose asChild key={item.label}>
                          <Link href={item.route} key={item.label}>
                            <NavItem
                              isActive={isActive}
                              icon={item.icon}
                              label={item.label}
                              isMobile
                            />
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                </SheetClose>
                <FooterCard />
              </div>
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </div>
  );
}
