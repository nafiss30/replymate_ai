"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, MapPin, MessageSquareText, PackageCheck, Phone, ReceiptText, Truck } from "lucide-react";
import type { Order, OrderStatus } from "@/types";
import { statusOptions } from "@/components/orders/order-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label, Select } from "@/components/ui/field";
import { formatCurrency } from "@/lib/utils";

export function OrderDetail({ order }: { order: Order }) {
  const [status, setStatus] = useState<OrderStatus>(order.status);
  const [saved, setSaved] = useState(false);
  const progressIndex: Record<OrderStatus, number> = { Pending: 0, Confirmed: 0, Packed: 1, Shipped: 2, Delivered: 3, Cancelled: 0, "Return Requested": 3 };
  const update = () => { setSaved(true); window.setTimeout(() => setSaved(false), 2200); };
  return (
    <div className="animate-fade-in"><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><Link href="/orders" className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#57534E]"><ArrowLeft size={17} />Back to orders</Link><Badge tone="orange">{status}</Badge></div>{saved ? <div className="mb-4 flex items-center gap-2 rounded-xl border border-[#FDBA74] bg-[#FFEDD5] px-4 py-3 text-sm font-semibold text-[#9A3412]"><Check size={16} />Order status updated in demo mode.</div> : null}<div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#EA580C]">Order details</p><h1 className="mt-1 text-3xl font-black">{order.id}</h1><p className="mt-2 text-sm text-[#78716C]">Created {order.createdAt}</p></div><div className="flex gap-2"><Button variant="secondary"><ReceiptText size={16} />Invoice</Button>{order.conversationId ? <Link href={`/inbox/${order.conversationId}`} className="focus-ring inline-flex h-11 items-center gap-2 rounded-xl border border-[#FED7AA] bg-white px-4 text-sm font-semibold text-[#171717] transition hover:bg-[#FFF1E6]"><MessageSquareText size={16} />Conversation</Link> : null}</div></div>
      <div className="grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
        <div className="space-y-5"><Card className="overflow-hidden"><div className="border-b border-[#FFEDD5] px-5 py-4"><h2 className="font-black">Items</h2></div><div className="divide-y divide-[#FFEDD5]">{order.items.map((item,index) => <div key={`${item.product}-${index}`} className="flex items-center gap-4 p-5"><div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#FFEDD5] text-3xl">👕</div><div className="min-w-0 flex-1"><h3 className="font-black">{item.product}</h3><p className="mt-1 text-xs text-[#78716C]">Size {item.size} · {item.colour} · Quantity {item.quantity}</p></div><p className="font-black">{formatCurrency(item.price * item.quantity)}</p></div>)}</div><div className="ml-auto w-full max-w-sm space-y-2 border-t border-[#FFEDD5] p-5 text-sm"><div className="flex justify-between text-[#57534E]"><span>Subtotal</span><span>{formatCurrency(order.subtotal)}</span></div><div className="flex justify-between text-[#57534E]"><span>Delivery charge</span><span>{formatCurrency(order.deliveryCharge)}</span></div><div className="flex justify-between border-t border-[#FED7AA] pt-3 text-lg font-black"><span>Total</span><span>{formatCurrency(order.total)}</span></div></div></Card>
          <Card className="p-5 sm:p-6"><h2 className="font-black">Fulfilment timeline</h2><div className="mt-5 grid gap-4 sm:grid-cols-4">{[{label:"Confirmed",icon:Check},{label:"Packed",icon:PackageCheck},{label:"Shipped",icon:Truck},{label:"Delivered",icon:MapPin}].map((step,index) => <div key={step.label} className="relative"><div className={`grid h-10 w-10 place-items-center rounded-xl ${index <= progressIndex[status] ? "bg-[#F97316] text-white" : "bg-[#FFEDD5] text-[#C2410C]"}`}><step.icon size={17} /></div><p className="mt-2 text-sm font-bold">{step.label}</p><p className="text-[10px] text-[#A8A29E]">{index === 0 ? order.createdAt : index <= progressIndex[status] ? "Completed" : "Awaiting update"}</p></div>)}</div></Card>
        </div>
        <div className="space-y-5"><Card className="p-5"><h2 className="font-black">Update status</h2><div className="mt-4"><Label htmlFor="order-status">Order status</Label><Select id="order-status" value={status} onChange={event => setStatus(event.target.value as OrderStatus)}>{statusOptions.map(item => <option key={item}>{item}</option>)}</Select></div><Button className="mt-3 w-full" onClick={update}>Save status</Button></Card><Card className="p-5"><h2 className="font-black">Customer</h2><p className="mt-4 font-bold">{order.customer}</p><a href={`tel:${order.phone}`} className="mt-2 flex items-center gap-2 text-sm text-[#57534E]"><Phone size={15} className="text-[#EA580C]" />{order.phone}<Copy size={12} /></a><p className="mt-3 flex gap-2 text-sm leading-6 text-[#57534E]"><MapPin size={16} className="mt-1 shrink-0 text-[#EA580C]" />{order.address}</p><Badge className="mt-3">{order.zone}</Badge></Card><Card className="p-5"><h2 className="font-black">Payment</h2><p className="mt-3 text-sm font-bold">{order.paymentMethod}</p><p className="mt-1 text-xs text-[#78716C]">Total payable: {formatCurrency(order.total)}</p><Badge tone={order.paymentMethod === "Cash on Delivery" ? "dark" : "orange"} className="mt-3">{order.paymentMethod === "Cash on Delivery" ? "Collect on delivery" : "Verification recorded"}</Badge></Card></div>
      </div>
    </div>
  );
}
