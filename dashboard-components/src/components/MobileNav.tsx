"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="cursor-pointer w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <SheetClose asChild>
            <Link href="/" className="flex cursor-pointer gap-2">
              <Image src="/icons/logo.svg" alt="App logo" width={34} height={34} />
              <h1 className="mobilenav-logo">AppName</h1>
            </Link>
          </SheetClose>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <div className="relative size-6 flex">
                          <div
                            className={cn("w-5 h-5", {
                              "text-white": isActive,
                              "text-gray-400": !isActive,
                            })}
                          >
                            {item.icon}
                          </div>
                        </div>
                        <p
                          className={cn("mobilenav-label", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
