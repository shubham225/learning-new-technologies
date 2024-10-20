import { cn } from "@/lib/utils";
import { AppLogoProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function AppLogo({ type = "sidebar" }: AppLogoProps) {
  let imgSize = 30;

  switch (type) {
    case "sidebar":
      imgSize = 34;
      break;
    case "mobileNav":
      imgSize = 30;
      break;
    case "authPage":
      imgSize = 24;
      break;
    default:
      imgSize = 30;
      break;
  }

  return (
    <div
      className={cn("flex mb-10 cursor-pointer item-center gap-1", {
        "max-xl:justify-center": type === "sidebar",
      })}
    >
      <Image
        src="/icons/logo.svg"
        alt="App logo"
        width={imgSize}
        height={imgSize}
      />
      <h1
        className={cn({
          "sidebar-logo": type === "sidebar",
          "mobilenav-logo": type === "mobileNav",
          "authpage-logo": type === "authPage",
        })}
      >
        AppName
      </h1>
    </div>
  );
}
