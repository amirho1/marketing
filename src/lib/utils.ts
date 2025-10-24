import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import en from "../locales/en.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trans(key: keyof typeof en) {
  return en[key];
}

export default function formatCompact(num: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(num);
}
