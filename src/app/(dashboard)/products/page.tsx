import { Download } from "lucide-react";
import { ProductManager } from "@/components/products/product-manager";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Catalog & inventory" title="Products and variants" description="Manage the product facts the AI can safely use in customer replies and weather suggestions." actions={<Button variant="secondary"><Download size={16} />Export catalog</Button>} /><ProductManager /></div>;
}
