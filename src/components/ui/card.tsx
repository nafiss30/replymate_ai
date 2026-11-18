import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-[#FED7AA]/80 bg-white shadow-[0_10px_35px_rgba(120,53,15,0.05)]", className)} {...props} />;
}
