import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#FFF7ED] p-6"><div className="max-w-md text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#171717] text-[#FDBA74]"><SearchX size={28} /></div><p className="mt-6 text-xs font-black uppercase tracking-[.25em] text-[#EA580C]">404 · Not found</p><h1 className="mt-2 text-3xl font-black">We couldn’t find that page.</h1><p className="mt-3 text-sm leading-6 text-[#78716C]">The conversation, order, or dashboard view may not exist in this demo.</p><Link href="/dashboard" className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#F97316] px-4 text-sm font-bold text-white hover:bg-[#EA580C]"><ArrowLeft size={16} />Back to dashboard</Link></div></main>;
}
