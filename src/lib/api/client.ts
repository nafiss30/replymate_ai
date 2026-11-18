import { conversations, defaultWeather, orders, payments, policies, products } from "@/data/mock-data";
import type { Conversation, Order, OrderStatus, Payment, Policy, Product, WeatherRecommendation } from "@/types";

const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export class ApiError extends Error {
  constructor(message: string, public status: number, public details?: unknown) { super(message); this.name = "ApiError"; }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, { ...init, headers: { "Content-Type": "application/json", ...init?.headers } });
  if (!response.ok) {
    const details = await response.json().catch(() => null);
    throw new ApiError(details?.message || "Request failed", response.status, details);
  }
  return response.json() as Promise<T>;
}

const mock = async <T>(value: T): Promise<T> => new Promise(resolve => setTimeout(() => resolve(value), 250));

export const api = {
  products: {
    list: (): Promise<Product[]> => demoMode ? mock(products) : request("/api/products"),
    create: (payload: Partial<Product>): Promise<Product> => request("/api/products", { method: "POST", body: JSON.stringify(payload) }),
  },
  policies: {
    list: (): Promise<Policy[]> => demoMode ? mock(policies) : request("/api/policies"),
    update: (id: string, payload: Partial<Policy>): Promise<Policy> => request(`/api/policies/${id}`, { method: "PATCH", body: JSON.stringify(payload) }),
  },
  conversations: {
    list: (): Promise<Conversation[]> => demoMode ? mock(conversations) : request("/api/conversations"),
    messages: (id: string): Promise<Conversation["messages"]> => demoMode ? mock(conversations.find(item => item.id === id)?.messages || []) : request(`/api/conversations/${id}/messages`),
  },
  orders: {
    list: (): Promise<Order[]> => demoMode ? mock(orders) : request("/api/orders"),
    updateStatus: (id: string, status: OrderStatus): Promise<Order> => request(`/api/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
  },
  payments: {
    list: (): Promise<Payment[]> => demoMode ? mock(payments) : request("/api/payments/manual"),
    verifyManual: (id: string, status: "Verified" | "Rejected"): Promise<Payment> => request("/api/payments/manual", { method: "PATCH", body: JSON.stringify({ id, status }) }),
  },
  analytics: {
    overview: <T>(): Promise<T> => request("/api/analytics/overview"),
  },
  weather: {
    recommend: (city: string): Promise<WeatherRecommendation> => demoMode ? mock({ ...defaultWeather, city }) : request("/api/weather/recommend", { method: "POST", body: JSON.stringify({ city }) }),
  },
};
