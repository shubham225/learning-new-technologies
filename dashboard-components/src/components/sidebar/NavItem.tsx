import { cn } from "@/lib/utils";
import { NavItemProps } from "@/types";
import React from "react";

export default function NavItem({
  label,
  icon,
  isActive,
  isMobile = false,
}: NavItemProps) {
  return (
    <div
      className={cn({
        "mobilenav-sheet_close": isMobile,
        "sidebar-link": !isMobile,
        "bg-primary-gradient": isActive,
      })}
    >
      <div className="relative size-6 flex">
        <div
          className={cn("w-5 h-5", {
            "text-white": isActive,
            "text-gray-400": !isActive,
          })}
        >
          {icon}
        </div>
      </div>
      <p
        className={cn({
          "mobilenav-label": isMobile,
          "sidebar-label": !isMobile,
          "!text-white": isActive,
        })}
      >
        {label}
      </p>
    </div>
  );
}
