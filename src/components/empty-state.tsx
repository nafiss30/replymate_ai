import { Inbox } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EmptyState({ title = "Nothing here yet", description = "Try changing the filters or check back later." }: { title?: string; description?: string }) {
  return (
    <Card className="flex min-h-64 flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFEDD5] text-[#EA580C]"><Inbox size={22} /></div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-[#78716C]">{description}</p>
    </Card>
  );
}
