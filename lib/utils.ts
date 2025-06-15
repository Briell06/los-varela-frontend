import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface footerLinkType {
  label: string;
  href: string;
}

export const footerLinks: footerLinkType[] = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Instrucciones", href: "/instrucciones" },
];
