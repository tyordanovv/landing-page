import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine Tailwind CSS classes with merging and conditionals
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}