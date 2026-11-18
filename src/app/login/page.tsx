"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/field";

const loginSchema = z.object({ email: z.email("Enter a valid email address"), password: z.string().min(6, "Password must be at least 6 characters") });
type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues>({ resolver: zodResolver(loginSchema), defaultValues: { email: "owner@replymate.demo", password: "demo123" } });
  const onSubmit = async () => { await new Promise(resolve => setTimeout(resolve, 500)); router.push("/dashboard"); };
  return (
    <main className="grid min-h-screen bg-[#FFF7ED] lg:grid-cols-[1.05fr_.95fr]">
      <section className="relative hidden overflow-hidden bg-[#171717] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full border-[70px] border-[#F97316]/20" /><div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full border-[90px] border-white/[0.04]" />
        <div className="relative flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F97316]"><Sparkles size={22} /></div><div><p className="text-xl font-black">ReplyMate AI</p><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#FDBA74]">Commerce support desk</p></div></div>
        <div className="relative max-w-xl"><span className="inline-flex rounded-full border border-[#F97316]/40 bg-[#7C2D12]/40 px-3 py-1 text-xs font-bold text-[#FED7AA]">Built for Bangladeshi online shops</span><h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight">Every customer reply, order, and decision—together.</h1><p className="mt-6 max-w-lg text-base leading-7 text-[#D6D3D1]">Turn Bangla-English Messenger conversations into confident responses and organised orders, while keeping the owner in control.</p><div className="mt-10 grid grid-cols-3 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><p className="text-2xl font-black text-[#FDBA74]">94%</p><p className="mt-1 text-xs text-[#A8A29E]">AI confidence</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><p className="text-2xl font-black text-[#FDBA74]">18h</p><p className="mt-1 text-xs text-[#A8A29E]">Saved weekly</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><p className="text-2xl font-black text-[#FDBA74]">3×</p><p className="mt-1 text-xs text-[#A8A29E]">Faster replies</p></div></div></div>
        <div className="relative flex items-center gap-2 text-xs text-[#A8A29E]"><ShieldCheck size={16} className="text-[#FDBA74]" />Demo data only · No real customer information</div>
      </section>
      <section className="flex items-center justify-center p-5 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-9 flex items-center gap-3 lg:hidden"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F97316] text-white"><Sparkles size={20} /></div><p className="text-xl font-black">ReplyMate AI</p></div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#EA580C]">Owner portal</p><h2 className="mt-2 text-3xl font-black tracking-tight">Welcome back</h2><p className="mt-2 text-sm leading-6 text-[#78716C]">Sign in to manage your shop conversations and orders.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
            <div><Label htmlFor="email">Email address</Label><div className="relative"><Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" /><Input id="email" type="email" className="pl-10" {...register("email")} /></div>{errors.email ? <p className="mt-1.5 text-xs font-semibold text-[#C2410C]">{errors.email.message}</p> : null}</div>
            <div><div className="flex items-center justify-between"><Label htmlFor="password">Password</Label><button type="button" className="mb-2 text-xs font-bold text-[#C2410C]">Forgot password?</button></div><div className="relative"><LockKeyhole size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" /><Input id="password" type={showPassword ? "text" : "password"} className="px-10" {...register("password")} /><button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#78716C]"><Eye size={17} /></button></div>{errors.password ? <p className="mt-1.5 text-xs font-semibold text-[#C2410C]">{errors.password.message}</p> : null}</div>
            <label className="flex items-center gap-2 text-sm text-[#57534E]"><input type="checkbox" defaultChecked className="h-4 w-4 accent-[#F97316]" />Keep me signed in on this device</label>
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Signing in…" : <>Sign in to dashboard <ArrowRight size={17} /></>}</Button>
          </form>
          <div className="mt-6 rounded-xl border border-[#FED7AA] bg-[#FFEDD5]/70 p-3 text-center text-xs text-[#9A3412]"><b>Demo login:</b> credentials are pre-filled. Secure backend authentication will be connected by the backend team.</div>
        </div>
      </section>
    </main>
  );
}
