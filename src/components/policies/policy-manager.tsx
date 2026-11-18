"use client";

import { useState } from "react";
import { Check, Edit3, Plus, Save, X } from "lucide-react";
import { policies as seedPolicies } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/field";

export function PolicyManager() {
  const [items, setItems] = useState(seedPolicies);
  const [editing, setEditing] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const start = (id: string, description: string) => { setEditing(id); setText(description); };
  const save = (id: string) => { setItems(current => current.map(item => item.id === id ? { ...item, description: text, updatedAt: "Just now" } : item)); setEditing(null); setSaved(true); window.setTimeout(() => setSaved(false), 2200); };
  return (
    <>{saved ? <div className="mb-4 flex items-center gap-2 rounded-xl border border-[#FDBA74] bg-[#FFEDD5] px-4 py-3 text-sm font-semibold text-[#9A3412]"><Check size={16} />Policy saved in demo mode.</div> : null}<div className="grid gap-4 lg:grid-cols-2">{items.map(policy => <Card key={policy.id} className="p-5 sm:p-6"><div className="flex items-start justify-between gap-3"><div><div className="flex flex-wrap items-center gap-2"><h2 className="font-black">{policy.title}</h2><Badge tone={policy.enabled ? "orange" : "muted"}>{policy.enabled ? "Active" : "Disabled"}</Badge></div><p className="mt-1 text-xs text-[#A8A29E]">Updated {policy.updatedAt}</p></div><label className="relative inline-flex cursor-pointer items-center"><input type="checkbox" className="peer sr-only" checked={policy.enabled} onChange={() => setItems(current => current.map(item => item.id === policy.id ? {...item,enabled:!item.enabled}:item))} /><span className="h-6 w-11 rounded-full bg-[#D6D3D1] transition after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:bg-[#F97316] peer-checked:after:translate-x-5" /></label></div>{editing === policy.id ? <div className="mt-5"><Textarea aria-label={`Edit ${policy.title}`} value={text} onChange={event => setText(event.target.value)} /><div className="mt-3 flex gap-2"><Button size="sm" onClick={() => save(policy.id)}><Save size={14} />Save</Button><Button size="sm" variant="secondary" onClick={() => setEditing(null)}><X size={14} />Cancel</Button></div></div> : <><p className="mt-5 min-h-16 text-sm leading-6 text-[#57534E]">{policy.description}</p><Button size="sm" variant="secondary" className="mt-4" onClick={() => start(policy.id, policy.description)}><Edit3 size={14} />Edit policy</Button></>}</Card>)}</div><Button variant="secondary" className="mt-5"><Plus size={16} />Add custom policy</Button></>
  );
}
