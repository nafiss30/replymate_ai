"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3, Boxes, ChevronDown, CircleHelp, CloudSun, CreditCard, FileText, Inbox,
  LayoutDashboard, Menu, MessageCircleMore, PackageCheck, Search, Settings, Sparkles, X, Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "AI Inbox", href: "/inbox", icon: Inbox, badge: "14" },
  { label: "Chat simulator", href: "/simulator", icon: MessageCircleMore },
  { label: "Products", href: "/products", icon: Boxes },
  { label: "Policies", href: "/policies", icon: FileText },
  { label: "Orders", href: "/orders", icon: PackageCheck },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Weather guide", href: "/weather", icon: CloudSun },
  { label: "Settings", href: "/settings", icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col bg-[#171717] text-white">
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F97316] shadow-lg shadow-orange-950/30"><Sparkles size={21} /></div>
        <div><p className="text-lg font-black leading-none">ReplyMate</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDBA74]">AI Commerce Desk</p></div>
      </div>
      <div className="mx-4 mt-5 rounded-xl border border-white/10 bg-white/[0.06] p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0"><p className="truncate text-sm font-bold">Thread &amp; Tone</p><p className="mt-0.5 text-xs text-[#A8A29E]">Clothing shop</p></div>
          <ChevronDown size={16} className="text-[#FDBA74]" />
        </div>
      </div>
      <nav aria-label="Dashboard navigation" className="mt-4 flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {navigation.map((item) => {
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));
          return (
            <Link key={item.href} href={item.href} onClick={onNavigate} className={cn("focus-ring flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition", active ? "bg-[#F97316] text-white" : "text-[#D6D3D1] hover:bg-white/[0.07] hover:text-white")}>
              <item.icon size={18} strokeWidth={2.1} />
              <span className="flex-1">{item.label}</span>
              {item.badge ? <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-black", active ? "bg-white text-[#C2410C]" : "bg-[#7C2D12] text-[#FFEDD5]")}>{item.badge}</span> : null}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 p-4">
        <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#292524] px-3 py-2.5 text-xs text-[#D6D3D1]"><CircleHelp size={16} className="text-[#FDBA74]" /><span>Demo mode · Mock data</span></div>
        <p className="text-[10px] uppercase tracking-wider text-[#78716C]">ReplyMate AI · v0.1</p>
      </div>
    </div>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block"><SidebarContent /></aside>
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close navigation overlay" className="absolute inset-0 bg-black/45" onClick={() => setMobileOpen(false)} />
          <aside className="relative h-full w-[min(85vw,288px)] shadow-2xl"><SidebarContent onNavigate={() => setMobileOpen(false)} /><button aria-label="Close navigation" onClick={() => setMobileOpen(false)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-white/10"><X size={19} /></button></aside>
        </div>
      ) : null}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-[#FED7AA]/80 bg-[#FFF7ED]/95 px-4 backdrop-blur sm:px-6 lg:h-20 lg:px-8">
          <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={19} /></Button>
          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" />
            <input aria-label="Search dashboard" placeholder="Search conversations, orders, products…" className="focus-ring h-11 w-full rounded-xl border border-[#FED7AA] bg-white pl-10 pr-4 text-sm placeholder:text-[#A8A29E]" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="secondary" size="icon" aria-label="Notifications" className="relative"><Bell size={18} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#F97316] ring-2 ring-white" /></Button>
            <div className="ml-1 flex items-center gap-2 rounded-xl px-1.5 py-1">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#171717] text-xs font-black text-white">NS</div>
              <div className="hidden md:block"><p className="text-sm font-bold leading-none">Nafis Al Sami</p><p className="mt-1 text-xs text-[#78716C]">Shop owner</p></div>
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
