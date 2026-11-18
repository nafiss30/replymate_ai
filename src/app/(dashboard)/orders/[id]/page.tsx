import { notFound } from "next/navigation";
import { OrderDetail } from "@/components/orders/order-detail";
import { orders } from "@/data/mock-data";

export function generateStaticParams() { return orders.map(order => ({ id: order.id })); }

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orders.find(item => item.id === id);
  if (!order) notFound();
  return <OrderDetail order={order} />;
}
