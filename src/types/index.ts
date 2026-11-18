export type Intent =
  | "Product Price"
  | "Availability"
  | "Size or Colour"
  | "Delivery Information"
  | "Return or Exchange"
  | "Order Status"
  | "Payment Inquiry"
  | "Complaint"
  | "Unknown";

export type Sentiment = "Normal" | "Positive" | "Confused" | "Urgent" | "Angry" | "Complaint";
export type ConversationStatus = "Pending Review" | "Approved" | "Needs Human Reply" | "Complaint" | "Resolved";
export type OrderStatus = "Pending" | "Confirmed" | "Packed" | "Shipped" | "Delivered" | "Cancelled" | "Return Requested";
export type PaymentStatus = "Pending" | "Verified" | "Rejected" | "COD";

export interface Message {
  id: string;
  sender: "customer" | "shop" | "ai";
  body: string;
  time: string;
}

export interface Conversation {
  id: string;
  customer: { name: string; initials: string; phone?: string; location?: string };
  channel: "Messenger" | "Simulator";
  preview: string;
  intent: Intent;
  sentiment: Sentiment;
  confidence: number;
  aiDraft: string;
  status: ConversationStatus;
  unread: number;
  updatedAt: string;
  priority?: "high" | "normal";
  messages: Message[];
}

export interface ProductVariant {
  id: string;
  size: string;
  colour: string;
  stock: number;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
  category: string;
  fabric: string;
  season: string;
  warmth: "Light" | "Medium" | "Warm";
  weatherTags: string[];
  status: "Active" | "Low stock" | "Out of stock";
  variants: ProductVariant[];
}

export interface Policy {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  updatedAt: string;
}

export interface OrderItem {
  product: string;
  size: string;
  colour: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  zone: "Inside Dhaka" | "Outside Dhaka" | "Same-day Dhaka";
  paymentMethod: "Cash on Delivery" | "bKash" | "Nagad" | "SSLCommerz Sandbox";
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  createdAt: string;
  conversationId?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  customer: string;
  method: "Cash on Delivery" | "bKash" | "Nagad" | "SSLCommerz Sandbox";
  transactionId?: string;
  amount: number;
  status: PaymentStatus;
  submittedAt: string;
}

export interface WeatherRecommendation {
  city: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  chanceOfRain: number;
  tags: string[];
  productIds: string[];
}
