import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-2 block text-sm font-semibold text-[#292524]", className)} {...props} />;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("focus-ring h-11 w-full rounded-xl border border-[#FED7AA] bg-white px-3.5 text-sm text-[#171717] placeholder:text-[#A8A29E]", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("focus-ring h-11 w-full rounded-xl border border-[#FED7AA] bg-white px-3.5 text-sm text-[#171717]", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("focus-ring min-h-28 w-full resize-y rounded-xl border border-[#FED7AA] bg-white px-3.5 py-3 text-sm text-[#171717] placeholder:text-[#A8A29E]", className)} {...props} />;
}
