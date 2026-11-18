"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { orders as seedOrders } from "@/data/mock-data";
import type { OrderStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/field";
import { formatCurrency } from "@/lib/utils";

export const statusOptions: OrderStatus[] = ["Pending", "Confirmed", "Packed", "Shipped", "Delivered", "Cancelled", "Return Requested"];
const tone = (status: OrderStatus) => status === "Cancelled" || status === "Return Requested" ? "danger" : status === "Pending" ? "orange" : status === "Delivered" ? "muted" : "cream";

export function OrderTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filtered = useMemo(() => seedOrders.filter(order => (status === "All" || order.status === status) && `${order.id} ${order.customer} ${order.phone} ${order.items[0].product}`.toLowerCase().includes(query.toLowerCase())), [query, status]);
  return (
    <>
      <Card className="mb-5 p-3 sm:p-4"><div className="flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" /><Input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search order, customer, phone, or product…" className="pl-10" /></div><Select aria-label="Filter order status" value={status} onChange={event => setStatus(event.target.value)} className="sm:w-52"><option>All</option>{statusOptions.map(item => <option key={item}>{item}</option>)}</Select></div></Card>
      <Card className="overflow-x-auto"><table className="w-full min-w-[980px] text-left"><thead className="bg-[#FFF7ED] text-[10px] uppercase tracking-wider text-[#78716C]"><tr><th className="px-6 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Product / variant</th><th className="px-4 py-3">Delivery</th><th className="px-4 py-3">Payment</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Status</th><th className="px-6 py-3" /></tr></thead><tbody className="divide-y divide-[#FFEDD5]">{filtered.map(order => <tr key={order.id} className="group text-sm hover:bg-[#FFF7ED]"><td className="px-6 py-4"><Link href={`/orders/${order.id}`} className="font-black group-hover:text-[#C2410C]">{order.id}</Link><p className="mt-1 text-[10px] text-[#A8A29E]">{order.createdAt}</p></td><td className="px-4 py-4"><p className="font-bold">{order.customer}</p><p className="mt-1 text-xs text-[#78716C]">{order.phone}</p></td><td className="px-4 py-4"><p className="max-w-48 truncate font-semibold">{order.items[0].product}</p><p className="mt-1 text-xs text-[#78716C]">{order.items[0].colour} · {order.items[0].size} · ×{order.items[0].quantity}</p></td><td className="px-4 py-4"><p className="font-semibold">{order.zone}</p><p className="mt-1 max-w-44 truncate text-xs text-[#78716C]">{order.address}</p></td><td className="px-4 py-4 text-xs font-semibold">{order.paymentMethod}</td><td className="px-4 py-4 font-black">{formatCurrency(order.total)}</td><td className="px-4 py-4"><Badge tone={tone(order.status)}>{order.status}</Badge></td><td className="px-6 py-4 text-right"><Link href={`/orders/${order.id}`} aria-label={`View ${order.id}`} className="inline-grid h-9 w-9 place-items-center rounded-xl border border-[#FED7AA] bg-white text-[#C2410C]"><ChevronRight size={16} /></Link></td></tr>)}</tbody></table></Card>
    </>
  );
}
