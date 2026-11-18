"use client";

import { FormEvent, useState } from "react";
import { Bot, CheckCircle2, ClipboardList, RotateCcw, Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/field";
import { cn } from "@/lib/utils";

type SimulatorMessage = { id: number; sender: "customer" | "ai"; body: string; meta?: string };
const initialMessages: SimulatorMessage[] = [
  { id: 1, sender: "ai", body: "Assalamu alaikum! Thread & Tone-এ স্বাগতম। কীভাবে সাহায্য করতে পারি?", meta: "Greeting · 99% confidence" },
  { id: 2, sender: "customer", body: "Black hoodie L আছে? Dhaka delivery charge কত?" },
  { id: 3, sender: "ai", body: "জি, Midnight Oversized Hoodie-এর Black L size আছে ৮টি। মূল্য ৳1,890। Inside Dhaka delivery charge ৳80। আপনি কি order করতে চান?", meta: "Availability · 96% confidence" },
];

function demoReply(input: string) {
  const lower = input.toLowerCase();
  if (lower.includes("order") || lower.includes("নিতে") || lower.includes("চাই")) return "অবশ্যই! Order draft তৈরির জন্য আপনার নাম, ফোন নম্বর এবং সম্পূর্ণ delivery address দিন। Owner final confirmation-এর পর order confirm হবে।";
  if (lower.includes("return") || lower.includes("exchange")) return "Size exchange delivery-এর ৩ দিনের মধ্যে করা যাবে, যদি product unworn থাকে এবং tag অক্ষত থাকে। Damaged product-এর ক্ষেত্রে unboxing video প্রয়োজন।";
  if (lower.includes("price") || lower.includes("দাম")) return "কোন product-এর দাম জানতে চান? Product-এর নাম বা ছবি দিলে catalog থেকে সঠিক মূল্য জানাতে পারি।";
  return "ধন্যবাদ! Demo AI আপনার message-টি বুঝেছে। Live system-এ product, policy এবং order data যাচাই করে একটি grounded reply draft তৈরি হবে।";
}

export function ChatSimulator() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const send = (event: FormEvent) => {
    event.preventDefault();
    const value = input.trim(); if (!value) return;
    setMessages(current => [...current, { id: Date.now(), sender: "customer", body: value }]); setInput(""); setTyping(true);
    window.setTimeout(() => { setMessages(current => [...current, { id: Date.now() + 1, sender: "ai", body: demoReply(value), meta: "Demo intent · 92% confidence" }]); setTyping(false); }, 700);
  };
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,.6fr)]">
      <Card className="flex min-h-[680px] flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-[#FFEDD5] bg-white p-4 sm:px-6"><div className="relative grid h-11 w-11 place-items-center rounded-full bg-[#171717] text-white"><Sparkles size={19} /><span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#F97316]" /></div><div className="flex-1"><h2 className="font-black">Thread &amp; Tone</h2><p className="text-xs text-[#78716C]">Typically replies instantly · Demo simulator</p></div><Badge tone="orange">AI active</Badge></div>
        <div className="flex-1 space-y-4 overflow-y-auto bg-[#FFFDF9] p-4 sm:p-6">{messages.map(message => <div key={message.id} className={cn("flex gap-2", message.sender === "customer" ? "justify-end" : "justify-start")}>
          {message.sender === "ai" ? <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#F97316] text-white"><Bot size={14} /></div> : null}
          <div className={cn("max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[72%]", message.sender === "customer" ? "rounded-tr-sm bg-[#171717] text-white" : "rounded-tl-sm border border-[#FED7AA] bg-white")}><p>{message.body}</p>{message.meta ? <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-[#C2410C]"><Sparkles size={11} />{message.meta}</p> : null}</div>
          {message.sender === "customer" ? <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#FFEDD5] text-[#C2410C]"><User size={14} /></div> : null}
        </div>)}{typing ? <div className="flex items-center gap-2 text-xs text-[#78716C]"><div className="grid h-7 w-7 place-items-center rounded-lg bg-[#F97316] text-white"><Bot size={14} /></div><span className="rounded-xl border border-[#FED7AA] bg-white px-3 py-2">AI is drafting a reply…</span></div> : null}</div>
        <form onSubmit={send} className="border-t border-[#FFEDD5] bg-white p-4"><div className="flex gap-2"><Input aria-label="Customer message" value={input} onChange={event => setInput(event.target.value)} placeholder="Type a Bangla, English, or mixed message…" /><Button type="submit" aria-label="Send message"><Send size={17} /><span className="hidden sm:inline">Send</span></Button></div><div className="mt-2 flex flex-wrap gap-2">{["Price কত?", "Black L আছে?", "Return policy কী?"].map(sample => <button type="button" key={sample} onClick={() => setInput(sample)} className="rounded-full bg-[#FFF7ED] px-3 py-1 text-[11px] font-semibold text-[#9A3412] hover:bg-[#FFEDD5]">{sample}</button>)}</div></form>
      </Card>
      <div className="space-y-5">
        <Card className="p-5"><div className="flex items-center gap-2"><ClipboardList size={18} className="text-[#EA580C]" /><h3 className="font-black">Draft order progress</h3></div><div className="mt-5 space-y-4">{["Product & variant", "Quantity", "Customer details", "Delivery address", "Payment choice"].map((label, index) => <div key={label} className="flex items-center gap-3"><div className={cn("grid h-7 w-7 place-items-center rounded-full text-xs font-black", index < 2 ? "bg-[#F97316] text-white" : "bg-[#FFEDD5] text-[#C2410C]")}>{index < 2 ? <CheckCircle2 size={14} /> : index + 1}</div><div><p className="text-sm font-bold">{label}</p><p className="text-[11px] text-[#78716C]">{index < 2 ? "Collected from chat" : "Waiting for customer"}</p></div></div>)}</div><Button variant="secondary" className="mt-5 w-full" disabled>Create draft order</Button></Card>
        <Card className="p-5"><h3 className="font-black">Try realistic questions</h3><div className="mt-3 space-y-2">{["Comilla delivery charge কত?", "Do you have this in red?", "ভাই orderটা কবে পাব?", "bKash trx id কোথায় দিব?"].map(text => <button key={text} onClick={() => setInput(text)} className="focus-ring w-full rounded-xl border border-[#FED7AA] bg-white p-3 text-left text-xs font-semibold leading-5 hover:bg-[#FFF7ED]">{text}</button>)}</div></Card>
        <Button variant="ghost" className="w-full" onClick={() => { setMessages(initialMessages); setInput(""); }}><RotateCcw size={16} />Reset simulator</Button>
      </div>
    </div>
  );
}
