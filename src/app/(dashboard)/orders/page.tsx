import { Download, Plus } from "lucide-react";
import { OrderTable } from "@/components/orders/order-table";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Fulfilment desk" title="Orders" description="Review conversation-generated draft orders and track each order from pending to delivery." actions={<><Button variant="secondary"><Download size={16} />Export</Button><Button><Plus size={16} />New draft order</Button></>} /><OrderTable /></div>;
}
