"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bot,
  Eye,
  EyeOff,
  House,
  Languages,
  LockKeyhole,
  Mail,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/field";

const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

const portalFeatures = [
  {
    icon: Languages,
    title: "Bangla-English inbox",
    description: "Mixed-language customer messages and AI drafts in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Owner approval",
    description: "Review complaints, payments, and uncertain replies before sending.",
  },
  {
    icon: PackageCheck,
    title: "Order workspace",
    description: "Track order, delivery, and payment status from the dashboard.",
  },
];

function PortalBrand() {
  return (
    <Link href="/" aria-label="Go to ReplyMate AI home" className="focus-ring inline-flex items-center gap-3 rounded-xl">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F97316] text-white">
        <Sparkles size={22} />
      </div>
      <div>
        <p className="text-xl font-black leading-none">ReplyMate AI</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#FDBA74]">Commerce support desk</p>
      </div>
    </Link>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "owner@replymate.demo",
      password: "demo123",
    },
  });

  const signIn = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    router.push("/dashboard");
  };

  return (
    <main className="grid min-h-screen bg-[#FFF7ED] lg:grid-cols-[1.05fr_.95fr]">
      <section className="relative hidden overflow-hidden bg-[#171717] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
        <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full border-[70px] border-[#F97316]/20" />
        <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full border-[90px] border-white/[0.04]" />

        <div className="relative">
          <PortalBrand />
        </div>

        <div className="relative max-w-xl py-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#7C2D12]/40 px-3 py-1.5 text-sm font-bold text-[#FED7AA]">
            <Bot size={15} />
            Owner workspace
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight xl:text-5xl">
            Reply, review, and manage every order with confidence.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-8 text-[#D6D3D1]">
            আপনার shop-এর conversations, AI drafts, products, orders এবং payments একটি secure owner portal থেকে manage করুন।
          </p>

          <div className="mt-8 space-y-3">
            {portalFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F97316]/20 text-[#FDBA74]">
                  <feature.icon size={18} />
                </div>
                <div>
                  <h2 className="text-base font-black">{feature.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#A8A29E]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-2 text-sm text-[#A8A29E]">
          <ShieldCheck size={17} className="text-[#FDBA74]" />
          Demo data only · No real customer information
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center p-5 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <div className="text-[#171717] [&_p:last-child]:text-[#C2410C]"><PortalBrand /></div>
            <Link href="/" aria-label="Back to home" className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[#FED7AA] bg-white text-[#57534E]">
              <House size={18} />
            </Link>
          </div>

          <Link href="/" className="focus-ring mb-8 hidden w-fit items-center gap-2 rounded-lg text-sm font-bold text-[#57534E] transition hover:text-[#C2410C] lg:inline-flex">
            <House size={16} />
            Back to home
          </Link>

          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#EA580C]">Owner login portal</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Welcome back</h2>
          <p className="mt-3 text-base leading-7 text-[#78716C]">
            Sign in to manage customer conversations, approvals, and orders.
          </p>

          <form onSubmit={handleSubmit(signIn)} className="mt-8 space-y-5" noValidate>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" />
                <Input id="email" type="email" autoComplete="email" className="pl-10" {...register("email")} />
              </div>
              {errors.email ? <p className="mt-2 text-sm font-semibold text-[#C2410C]">{errors.email.message}</p> : null}
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="password">Password</Label>
                <span className="mb-2 text-sm font-semibold text-[#78716C]">Demo access</span>
              </div>
              <div className="relative">
                <LockKeyhole size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="px-10"
                  {...register("password")}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((current) => !current)}
                  className="focus-ring absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-[#78716C] hover:bg-[#FFEDD5]"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password ? <p className="mt-2 text-sm font-semibold text-[#C2410C]">{errors.password.message}</p> : null}
            </div>

            <label className="flex items-center gap-2.5 text-sm font-medium text-[#57534E]">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#F97316]" />
              Keep me signed in on this device
            </label>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in to dashboard"}
            </Button>
          </form>

          <div className="mt-6 rounded-xl border border-[#FED7AA] bg-[#FFEDD5]/70 p-4 text-sm leading-6 text-[#9A3412]">
            <b>Demo login:</b> credentials are pre-filled. Secure authentication will be connected by the backend team.
          </div>
        </div>
      </section>
    </main>
  );
}
