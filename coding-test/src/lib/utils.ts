import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}