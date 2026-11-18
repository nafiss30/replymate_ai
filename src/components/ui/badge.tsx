import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const tones = {
  orange: "bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]",
  dark: "bg-[#171717] text-white border-[#171717]",
  cream: "bg-[#FFF7ED] text-[#57534E] border-[#FED7AA]",
  muted: "bg-[#F5F5F4] text-[#57534E] border-[#E7E5E4]",
  danger: "bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]",
} as const;

export function Badge({ className, tone = "cream", ...props }: HTMLAttributes<HTMLSpanElement> & { tone?: keyof typeof tones }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold", tones[tone], className)} {...props} />;
}
