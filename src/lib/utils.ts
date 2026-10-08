import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateOrderId(): string {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `BRD-${new Date().getFullYear()}-${randomNum}`;
}
