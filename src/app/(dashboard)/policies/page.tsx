import { ShieldCheck } from "lucide-react";
import { PolicyManager } from "@/components/policies/policy-manager";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export default function PoliciesPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="AI knowledge source" title="Shop policies" description="Maintain clear delivery, exchange, return, and payment rules so AI drafts stay grounded." actions={<Badge tone="orange"><ShieldCheck size={14} className="mr-1" />5 policies synced</Badge>} /><PolicyManager /></div>;
}
