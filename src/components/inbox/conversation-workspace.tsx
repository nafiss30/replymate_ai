"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, CircleAlert, Edit3, Flag, MessageSquareText, Phone, Send, Sparkles, ThumbsDown, UserRoundCheck } from "lucide-react";
import type { Conversation, ConversationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export function ConversationWorkspace({ conversation }: { conversation: Conversation }) {
  const [draft, setDraft] = useState(conversation.aiDraft);
  const [status, setStatus] = useState<ConversationStatus>(conversation.status);
  const [editing, setEditing] = useState(false);
  const [notice, setNotice] = useState("");

  const act = (message: string, nextStatus?: ConversationStatus) => {
    if (nextStatus) setStatus(nextStatus);
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <Link href="/inbox" className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#57534E] hover:text-[#C2410C]"><ArrowLeft size={17} />Back to inbox</Link>
        <div className="flex items-center gap-2"><Badge tone={status === "Complaint" ? "danger" : "orange"}>{status}</Badge><Badge>{conversation.channel}</Badge></div>
      </div>
      {notice ? <div role="status" className="mb-4 flex items-center gap-2 rounded-xl border border-[#FDBA74] bg-[#FFEDD5] px-4 py-3 text-sm font-semibold text-[#9A3412]"><Check size={17} />{notice}</div> : null}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(340px,.75fr)]">
        <Card className="flex min-h-[650px] flex-col overflow-hidden">
          <div className="flex items-center gap-3 border-b border-[#FFEDD5] px-4 py-4 sm:px-6"><div className="grid h-11 w-11 place-items-center rounded-xl bg-[#171717] text-sm font-black text-white">{conversation.customer.initials}</div><div className="min-w-0 flex-1"><h1 className="truncate font-black">{conversation.customer.name}</h1><p className="mt-0.5 text-xs text-[#78716C]">{conversation.customer.location || "Location unavailable"} · Active now</p></div>{conversation.customer.phone ? <a href={`tel:${conversation.customer.phone}`} aria-label="Call customer" className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-[#FED7AA] text-[#EA580C]"><Phone size={17} /></a> : null}</div>
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#FFFDF9] p-4 sm:p-6">
            {conversation.messages.filter(message => message.sender !== "ai" || message.time !== "Draft").map((message) => (
              <div key={message.id} className={cn("flex", message.sender === "customer" ? "justify-start" : "justify-end")}><div className={cn("max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[70%]", message.sender === "customer" ? "rounded-tl-sm border border-[#FED7AA] bg-white" : "rounded-tr-sm bg-[#171717] text-white")}><p>{message.body}</p><p className={cn("mt-1 text-[10px]", message.sender === "customer" ? "text-[#A8A29E]" : "text-[#D6D3D1]")}>{message.time}</p></div></div>
            ))}
          </div>
          <div className="border-t border-[#FFEDD5] bg-white p-4 sm:p-5"><div className="flex gap-2"><input aria-label="Manual reply" placeholder="Write a manual reply…" className="focus-ring h-11 flex-1 rounded-xl border border-[#FED7AA] px-4 text-sm" /><Button aria-label="Send manual reply" onClick={() => act("Manual reply queued in demo mode", "Approved")}><Send size={16} /><span className="hidden sm:inline">Send</span></Button></div></div>
        </Card>

        <div className="space-y-5">
          <Card className="overflow-hidden"><div className="flex items-center gap-2 border-b border-[#FFEDD5] bg-[#171717] px-5 py-4 text-white"><Sparkles size={18} className="text-[#FDBA74]" /><h2 className="font-black">AI analysis</h2></div><div className="space-y-4 p-5"><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#FFF7ED] p-3"><p className="text-[10px] font-bold uppercase tracking-wider text-[#78716C]">Intent</p><p className="mt-1 text-sm font-black">{conversation.intent}</p></div><div className="rounded-xl bg-[#FFF7ED] p-3"><p className="text-[10px] font-bold uppercase tracking-wider text-[#78716C]">Sentiment</p><p className="mt-1 text-sm font-black">{conversation.sentiment}</p></div></div><div><div className="mb-2 flex justify-between text-xs"><span className="font-bold text-[#57534E]">Confidence</span><b>{conversation.confidence}%</b></div><div className="h-2 overflow-hidden rounded-full bg-[#FFEDD5]"><div className="h-full rounded-full bg-[#F97316]" style={{ width: `${conversation.confidence}%` }} /></div></div>{conversation.status === "Complaint" || conversation.sentiment === "Angry" ? <div className="flex gap-2 rounded-xl border border-[#FDBA74] bg-[#FFEDD5] p-3 text-xs leading-5 text-[#9A3412]"><CircleAlert size={17} className="mt-0.5 shrink-0" /><p><b>Owner approval required.</b> Complaint or angry sentiment detected.</p></div> : null}</div></Card>

          <Card className="p-5"><div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2"><MessageSquareText size={17} className="text-[#EA580C]" /><h2 className="font-black">AI reply draft</h2></div><button className="text-xs font-bold text-[#C2410C]" onClick={() => setEditing(!editing)}><Edit3 size={14} className="mr-1 inline" />{editing ? "Done" : "Edit"}</button></div>{editing ? <Textarea value={draft} onChange={(event) => setDraft(event.target.value)} /> : <p className="rounded-xl bg-[#FFF7ED] p-4 text-sm leading-6 text-[#44403C]">{draft}</p>}<p className="mt-3 text-[11px] leading-5 text-[#78716C]">Generated from demo product and policy data. Owner review is required before sending.</p><div className="mt-4 grid grid-cols-2 gap-2"><Button onClick={() => act("Reply approved in demo mode", "Approved")}><Check size={16} />Approve</Button><Button variant="secondary" onClick={() => act("Draft rejected", "Needs Human Reply")}><ThumbsDown size={16} />Reject</Button><Button variant="secondary" className="col-span-2" onClick={() => act("Conversation marked resolved", "Resolved")}><UserRoundCheck size={16} />Mark resolved</Button><Button variant="danger" className="col-span-2" onClick={() => act("Complaint marked high priority", "Complaint")}><Flag size={16} />Mark high priority</Button></div></Card>
        </div>
      </div>
    </div>
  );
}
