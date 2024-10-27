import { Code, Language } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function getCodeforLanguage(codesArray: Code[], lang: Language) {
  let indx = codesArray.findIndex((code) => code.language == lang);
  return (indx === -1) ? "" : codesArray[indx].code;
}

export function setCodeforLanguage(
  codesArray: Code[],
  lang: Language,
  code: string
) {
  let indx = codesArray.findIndex((code) => code.language == lang);

  if (indx === -1) {
    const codeObj: Code = {
      id: "",
      language: lang,
      code: code,
    };
    codesArray.push(codeObj);
  } else {
    codesArray[indx].code = code;
  }
}
