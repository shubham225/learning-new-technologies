import { cn } from "@/lib/utils";
import { NavItemProps } from "@/types";
import { ChevronDown, Icon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

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
        "hover:bg-primary-gradient bg-primary-gradient": isActive,
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
      {/* <a
      href="#"
      className={twMerge(
        'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50',
        'dark:hover:bg-zinc-800',
      )}
    >
      <div
          className={cn("w-5 h-5", {
            "text-white": isActive,
            "text-gray-400": !isActive,
          })}
        >
          {icon}
        </div>
      <span
        className={twMerge(
          'font-medium text-zinc-700 group-hover:text-violet-500',
          'dark:text-zinc-200 dark:group-hover:text-violet-300',
        )}
      >
        {label}
      </span>
    </a> */}
    </div>
    
  );
}
