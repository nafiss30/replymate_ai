"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { conversations } from "@/data/mock-data";
import type { ConversationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/field";
import { EmptyState } from "@/components/empty-state";

const toneForStatus = (status: ConversationStatus) => status === "Complaint" ? "danger" : status === "Approved" || status === "Resolved" ? "muted" : status === "Needs Human Reply" ? "dark" : "orange";

export function InboxList() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filtered = useMemo(() => conversations.filter((item) => {
    const matchesQuery = `${item.customer.name} ${item.preview} ${item.intent}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (status === "All" || item.status === status);
  }), [query, status]);

  return (
    <>
      <Card className="mb-5 p-3 sm:p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1"><Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E]" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search customer or message…" className="pl-10" /></div>
          <div className="grid grid-cols-2 gap-2 md:flex">
            <div className="relative"><Filter size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" /><Select aria-label="Filter by status" value={status} onChange={(event) => setStatus(event.target.value)} className="pl-9 md:w-48"><option>All</option><option>Pending Review</option><option>Approved</option><option>Needs Human Reply</option><option>Complaint</option><option>Resolved</option></Select></div>
            <button className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#FED7AA] bg-white px-4 text-sm font-semibold hover:bg-[#FFF7ED]"><SlidersHorizontal size={16} />More filters</button>
          </div>
        </div>
      </Card>
      {filtered.length === 0 ? <EmptyState title="No conversations found" description="Try a different customer name or status filter." /> : (
        <Card className="overflow-hidden">
          <div className="hidden grid-cols-[1.3fr_1.4fr_.7fr_.7fr_.7fr] gap-4 border-b border-[#FFEDD5] bg-[#FFF7ED] px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-[#78716C] lg:grid"><span>Customer</span><span>Latest message</span><span>Intent</span><span>AI confidence</span><span>Status</span></div>
          <div className="divide-y divide-[#FFEDD5]">
            {filtered.map((conversation) => (
              <Link href={`/inbox/${conversation.id}`} key={conversation.id} className="group grid gap-3 px-4 py-4 transition hover:bg-[#FFF7ED]/80 sm:px-6 lg:grid-cols-[1.3fr_1.4fr_.7fr_.7fr_.7fr] lg:items-center lg:gap-4">
                <div className="flex min-w-0 items-center gap-3"><div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#171717] text-xs font-black text-white">{conversation.customer.initials}{conversation.unread ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#F97316] px-1 text-[9px] ring-2 ring-white">{conversation.unread}</span> : null}</div><div className="min-w-0"><p className="truncate text-sm font-black group-hover:text-[#C2410C]">{conversation.customer.name}</p><p className="mt-1 text-xs text-[#78716C]">{conversation.channel} · {conversation.updatedAt}</p></div></div>
                <div className="min-w-0"><p className="line-clamp-2 text-sm leading-5 text-[#57534E]">{conversation.preview}</p><p className="mt-1 text-xs font-semibold text-[#9A3412] lg:hidden">{conversation.intent} · {conversation.confidence}% confidence</p></div>
                <div className="hidden lg:block"><Badge>{conversation.intent}</Badge></div>
                <div className="hidden lg:flex items-center gap-2"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#FFEDD5]"><div className="h-full rounded-full bg-[#F97316]" style={{ width: `${conversation.confidence}%` }} /></div><b className="text-xs">{conversation.confidence}%</b></div>
                <div><Badge tone={toneForStatus(conversation.status)}>{conversation.status}</Badge></div>
              </Link>
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
