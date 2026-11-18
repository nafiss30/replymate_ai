import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Clock3, MessageSquareText, Package, Sparkles, TriangleAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { IntentChart, MessageVolumeChart, OrderStatusChart } from "@/components/charts/dashboard-charts";
import { conversations, dashboardStats, orderSummary, orders } from "@/data/mock-data";

const icons = [MessageSquareText, Clock3, Bot, TriangleAlert, Package, CheckCircle2, MessageSquareText];

export default function DashboardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader eyebrow="Wednesday · 19 November" title="Good morning, Nafis" description="Here’s what is happening across your conversations, approvals, and orders today." actions={<><Button variant="secondary"><Sparkles size={16} />AI health: 94%</Button><Link href="/inbox" className="focus-ring inline-flex h-11 items-center gap-2 rounded-xl bg-[#F97316] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#EA580C]">Review inbox <ArrowRight size={16} /></Link></>} />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => {
          const Icon = icons[index];
          const dark = stat.tone === "dark";
          return (
            <Card key={stat.label} className={`relative overflow-hidden p-5 ${dark ? "border-[#171717] bg-[#171717] text-white" : ""}`}>
              <div className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl ${dark ? "bg-white/10 text-[#FDBA74]" : "bg-[#FFEDD5] text-[#EA580C]"}`}><Icon size={18} /></div>
              <p className={`pr-10 text-xs font-bold uppercase tracking-wider ${dark ? "text-[#A8A29E]" : "text-[#78716C]"}`}>{stat.label}</p>
              <p className="mt-4 text-3xl font-black tracking-tight">{stat.value}</p>
              <p className={`mt-2 text-xs font-semibold ${dark ? "text-[#FDBA74]" : "text-[#C2410C]"}`}>{stat.change}</p>
            </Card>
          );
        })}
        <Card className="flex min-h-36 flex-col justify-between border-[#F97316] bg-[#F97316] p-5 text-white sm:col-span-1 xl:col-span-1">
          <div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wider text-[#FFEDD5]">Automation saved</p><Sparkles size={18} /></div>
          <div><p className="text-3xl font-black">18.6 hrs</p><p className="mt-2 text-xs font-semibold text-[#FFEDD5]">Estimated this week</p></div>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Card className="p-5 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-black">Message volume</h2><p className="mt-1 text-xs text-[#78716C]">Customer messages compared with AI-assisted replies</p></div><div className="flex gap-3 text-xs font-semibold"><span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#171717]" />Messages</span><span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#F97316]" />AI replies</span></div></div>
          <div className="h-72"><MessageVolumeChart /></div>
        </Card>
        <Card className="p-5 sm:p-6">
          <div><h2 className="font-black">Order status</h2><p className="mt-1 text-xs text-[#78716C]">Current fulfilment distribution</p></div>
          <div className="relative mt-2 h-52"><OrderStatusChart /><div className="pointer-events-none absolute inset-0 grid place-items-center pt-1"><div className="text-center"><p className="text-2xl font-black">149</p><p className="text-[10px] font-bold uppercase tracking-wider text-[#78716C]">Active</p></div></div></div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">{orderSummary.slice(0,4).map((item, i) => <div key={item.name} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-[#57534E]"><i className={`h-2 w-2 rounded-full ${["bg-[#F97316]","bg-[#171717]","bg-[#C2410C]","bg-[#FDBA74]"][i]}`} />{item.name}</span><b>{item.value}</b></div>)}</div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.2fr]">
        <Card className="p-5 sm:p-6"><div><h2 className="font-black">Common questions</h2><p className="mt-1 text-xs text-[#78716C]">Intent volume over the last 7 days</p></div><div className="mt-4 h-64"><IntentChart /></div></Card>
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#FFEDD5] px-5 py-4 sm:px-6"><div><h2 className="font-black">Priority conversations</h2><p className="mt-1 text-xs text-[#78716C]">Items that need an owner decision</p></div><Link href="/inbox" className="text-xs font-bold text-[#EA580C] hover:underline">View all</Link></div>
          <div className="divide-y divide-[#FFEDD5]">{conversations.slice(0,4).map((conversation) => <Link href={`/inbox/${conversation.id}`} key={conversation.id} className="flex items-center gap-3 px-5 py-4 transition hover:bg-[#FFF7ED] sm:px-6"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#171717] text-xs font-black text-white">{conversation.customer.initials}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="truncate text-sm font-bold">{conversation.customer.name}</p>{conversation.priority === "high" ? <span className="h-2 w-2 rounded-full bg-[#F97316]" /> : null}</div><p className="mt-1 truncate text-xs text-[#78716C]">{conversation.preview}</p></div><div className="hidden text-right sm:block"><Badge tone={conversation.status === "Complaint" ? "danger" : "cream"}>{conversation.status}</Badge><p className="mt-1.5 text-[10px] text-[#A8A29E]">{conversation.updatedAt}</p></div></Link>)}</div>
        </Card>
      </div>

      <Card className="mt-5 overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#FFEDD5] px-5 py-4 sm:px-6"><div><h2 className="font-black">Recent orders</h2><p className="mt-1 text-xs text-[#78716C]">Latest activity from conversations</p></div><Link href="/orders" className="text-xs font-bold text-[#EA580C] hover:underline">Manage orders</Link></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead className="bg-[#FFF7ED] text-[10px] uppercase tracking-wider text-[#78716C]"><tr><th className="px-6 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Item</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Status</th><th className="px-6 py-3 text-right">Created</th></tr></thead><tbody className="divide-y divide-[#FFEDD5]">{orders.slice(0,4).map(order => <tr key={order.id} className="text-sm hover:bg-[#FFF7ED]/70"><td className="px-6 py-4 font-black">{order.id}</td><td className="px-4 py-4 font-semibold">{order.customer}</td><td className="px-4 py-4 text-[#57534E]">{order.items[0].product}</td><td className="px-4 py-4 font-bold">৳{order.total.toLocaleString()}</td><td className="px-4 py-4"><Badge tone={order.status === "Pending" ? "orange" : "cream"}>{order.status}</Badge></td><td className="px-6 py-4 text-right text-xs text-[#78716C]">{order.createdAt}</td></tr>)}</tbody></table></div>
      </Card>
    </div>
  );
}
