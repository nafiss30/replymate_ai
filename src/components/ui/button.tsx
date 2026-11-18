import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "danger";
type Size = "sm" | "md" | "lg" | "icon";

const variants: Record<Variant, string> = {
  primary: "bg-[#F97316] text-white hover:bg-[#EA580C] shadow-sm",
  secondary: "border border-[#FED7AA] bg-white text-[#171717] hover:bg-[#FFF1E6]",
  dark: "bg-[#171717] text-white hover:bg-[#292524]",
  ghost: "text-[#57534E] hover:bg-[#FFEDD5] hover:text-[#171717]",
  danger: "border border-[#FDBA74] bg-[#FFF7ED] text-[#C2410C] hover:bg-[#FFEDD5]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ className, variant = "primary", size = "md", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("focus-ring inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
