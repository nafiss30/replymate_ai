import Link from "next/link";
import {
  Bot,
  CheckCircle2,
  CloudSun,
  CreditCard,
  Headphones,
  Languages,
  MessageCircleMore,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Bangla-English support",
    description: "বাংলা, English এবং mixed-language customer message এক জায়গায় বুঝে reply draft তৈরি করে।",
  },
  {
    icon: ShieldCheck,
    title: "Owner stays in control",
    description: "Complaint, payment এবং low-confidence reply পাঠানোর আগে owner review বাধ্যতামূলক।",
  },
  {
    icon: PackageCheck,
    title: "Chat থেকে order",
    description: "Product, variant, customer ও delivery information সংগ্রহ করে draft order তৈরি করা যায়।",
  },
  {
    icon: Store,
    title: "Product knowledge",
    description: "Price, size, colour, stock এবং policy data থেকে grounded উত্তর দেখানো হয়।",
  },
  {
    icon: CloudSun,
    title: "Weather recommendations",
    description: "বাংলাদেশের শহরের weather অনুযায়ী উপযুক্ত clothing item সাজেস্ট করে।",
  },
  {
    icon: CreditCard,
    title: "Payment tracking",
    description: "COD, manual bKash, Nagad এবং SSLCommerz sandbox status একসঙ্গে দেখা যায়।",
  },
];

const workflow = [
  {
    icon: MessageCircleMore,
    title: "Customer message আসে",
    description: "Messenger অথবা built-in simulator থেকে Bangla-English message পাওয়া যায়।",
  },
  {
    icon: Bot,
    title: "AI safe draft বানায়",
    description: "Intent, sentiment ও confidence সহ shop data-ভিত্তিক reply draft প্রস্তুত হয়।",
  },
  {
    icon: Headphones,
    title: "Owner সিদ্ধান্ত নেয়",
    description: "Owner reply approve, edit, reject বা নিজে manual reply পাঠাতে পারে।",
  },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F97316] text-white shadow-sm">
        <Sparkles size={20} />
      </div>
      <div>
        <p className="text-lg font-black leading-none">ReplyMate AI</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#C2410C]">Commerce support desk</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] text-[#171717]">
      <header className="sticky top-0 z-40 border-b border-[#FED7AA]/80 bg-[#FFF7ED]/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="ReplyMate AI home" className="focus-ring rounded-xl">
            <Brand />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            <a href="#features" className="text-sm font-semibold text-[#57534E] transition hover:text-[#C2410C]">Features</a>
            <a href="#workflow" className="text-sm font-semibold text-[#57534E] transition hover:text-[#C2410C]">How it works</a>
            <a href="#safety" className="text-sm font-semibold text-[#57534E] transition hover:text-[#C2410C]">AI safety</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="focus-ring inline-flex h-10 items-center rounded-xl border border-[#FED7AA] bg-white px-3.5 text-sm font-bold transition hover:bg-[#FFEDD5] sm:px-4">
              Owner login
            </Link>
            <Link href="/dashboard" className="focus-ring hidden h-10 items-center rounded-xl bg-[#F97316] px-4 text-sm font-bold text-white transition hover:bg-[#EA580C] sm:inline-flex">
              View demo
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#FED7AA]/70">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full border-[64px] border-[#F97316]/10" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_.92fr] lg:items-center lg:px-8 lg:py-24">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FDBA74] bg-[#FFEDD5] px-3 py-1.5 text-sm font-bold text-[#9A3412]">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              Built for Bangladeshi Facebook shops
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Customer message থেকে order—সবকিছু এক জায়গায়।
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534E] sm:text-lg">
              ReplyMate AI ছোট online clothing shop-কে Bangla-English customer message বুঝতে, safe reply draft বানাতে এবং conversation থেকে order manage করতে সাহায্য করে।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/login" className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-[#F97316] px-6 text-base font-bold text-white shadow-lg shadow-orange-900/10 transition hover:bg-[#EA580C]">
                Login to owner portal
              </Link>
              <Link href="/simulator" className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-[#FED7AA] bg-white px-6 text-base font-bold transition hover:bg-[#FFEDD5]">
                Try chat simulator
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#57534E]">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#EA580C]" />No Meta credentials needed for demo</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#EA580C]" />Owner approval for risky replies</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#F97316]/10" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#FDBA74] bg-white shadow-[0_28px_80px_rgba(120,53,15,0.16)]">
              <div className="flex items-center justify-between border-b border-[#FFEDD5] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#171717] text-sm font-black text-white">NJ</div>
                  <div><p className="font-black">Nusrat Jahan</p><p className="text-xs text-[#78716C]">Messenger · Active now</p></div>
                </div>
                <span className="rounded-full bg-[#FFEDD5] px-3 py-1 text-xs font-bold text-[#C2410C]">Pending review</span>
              </div>
              <div className="space-y-4 bg-[#FFFDF9] p-5 sm:p-6">
                <div className="max-w-[86%] rounded-2xl rounded-tl-sm border border-[#FED7AA] bg-white px-4 py-3 text-sm leading-6">
                  Black hoodie XL আছে? Comilla delivery charge কত?
                </div>
                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-[#171717] px-4 py-3 text-sm leading-6 text-white">
                  Black XL বর্তমানে নেই। Black L আছে ৮টি। Comilla delivery charge ৳130। চাইলে L size-এর measurement পাঠাতে পারি।
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-[#FFEDD5] p-3"><p className="text-xs font-semibold text-[#78716C]">Intent</p><p className="mt-1 text-sm font-black">Size & colour</p></div>
                  <div className="rounded-xl bg-[#FFEDD5] p-3"><p className="text-xs font-semibold text-[#78716C]">Sentiment</p><p className="mt-1 text-sm font-black">Normal</p></div>
                  <div className="rounded-xl bg-[#FFEDD5] p-3"><p className="text-xs font-semibold text-[#78716C]">Confidence</p><p className="mt-1 text-sm font-black">94%</p></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-[#FFEDD5] p-4">
                <button className="focus-ring h-11 rounded-xl bg-[#F97316] text-sm font-bold text-white hover:bg-[#EA580C]">Approve reply</button>
                <button className="focus-ring h-11 rounded-xl border border-[#FED7AA] bg-white text-sm font-bold hover:bg-[#FFF7ED]">Edit draft</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#EA580C]">Complete shop workspace</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Reply দেওয়া থেকে delivery পর্যন্ত</h2>
            <p className="mt-4 text-base leading-7 text-[#57534E]">Customer support এবং order operations-এর দরকারি interfaceগুলো একটি responsive owner dashboard-এ রাখা হয়েছে।</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[#FED7AA] bg-white p-6 shadow-[0_12px_35px_rgba(120,53,15,0.05)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFEDD5] text-[#EA580C]"><feature.icon size={20} /></div>
                <h3 className="mt-5 text-lg font-black">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#57534E]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-24 border-y border-[#FED7AA] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#EA580C]">Simple owner workflow</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">AI কাজ করে, সিদ্ধান্ত থাকে আপনার</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#171717] text-[#FDBA74]"><step.icon size={21} /></div>
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#57534E]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#171717] text-[#FDBA74]"><ShieldCheck size={26} /></div>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Safe replies, real shop data</h2>
            <p className="mt-4 text-base leading-7 text-[#57534E]">ReplyMate AI price, stock, delivery charge বা policy নিজে থেকে বানিয়ে বলে না। সংরক্ষিত shop data না থাকলে owner-এর কাছে message পাঠায়।</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Complaint বা angry customer", "Payment-related message", "Low-confidence AI draft", "Unknown বা sensitive question"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#FED7AA] bg-white p-4 text-base font-bold">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FFEDD5] text-[#C2410C]"><CheckCircle2 size={16} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#171717] px-6 py-9 text-white sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FDBA74]">University demo ready</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Owner portal ঘুরে দেখুন</h2><p className="mt-2 max-w-2xl text-base leading-7 text-[#D6D3D1]">Typed mock data ব্যবহার করে সব major frontend workflow credentials ছাড়াই পরীক্ষা করা যাবে।</p></div>
          <Link href="/login" className="focus-ring inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-[#F97316] px-6 text-base font-bold text-white transition hover:bg-[#EA580C]">Open login portal</Link>
        </div>
      </section>

      <footer className="border-t border-[#FED7AA] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Brand />
          <p className="text-sm text-[#78716C]">Demo data only · No real customer or payment information</p>
        </div>
      </footer>
    </main>
  );
}
