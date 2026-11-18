import { ShieldCheck } from "lucide-react";
import { PaymentTable } from "@/components/payments/payment-table";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export default function PaymentsPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Manual verification desk" title="Payments" description="Review COD records and manually verify submitted bKash or Nagad transaction IDs." actions={<Badge tone="cream"><ShieldCheck size={14} className="mr-1" />SSLCommerz sandbox ready</Badge>} /><PaymentTable /></div>;
}
