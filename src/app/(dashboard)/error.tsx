"use client";

import { CircleAlert, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DashboardError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <Card className="flex min-h-96 flex-col items-center justify-center p-8 text-center"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFEDD5] text-[#C2410C]"><CircleAlert size={22} /></div><h1 className="mt-4 text-xl font-black">This view could not load</h1><p className="mt-2 max-w-md text-sm leading-6 text-[#78716C]">The frontend caught an unexpected error. No data was changed—try loading the view again.</p><Button className="mt-5" onClick={reset}><RotateCcw size={16} />Try again</Button></Card>;
}
