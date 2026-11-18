# ReplyMate AI Frontend Guide

## Purpose

This frontend is a responsive demonstration and integration surface for ReplyMate AI. UI behavior currently uses typed in-memory mock data. It intentionally does not implement MongoDB, authentication, OpenAI, Messenger, analytics, order, or payment backends.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- React Hook Form and Zod
- Lucide icons
- Recharts

## Route map

| Route | Purpose |
| --- | --- |
| `/login` | Owner login form and validation |
| `/dashboard` | Operational overview and charts |
| `/inbox` | AI approval inbox |
| `/inbox/[id]` | Conversation analysis, draft review, and owner actions |
| `/simulator` | Credential-free customer chat demonstration |
| `/products` | Product, variant, stock, and weather metadata UI |
| `/policies` | Delivery, return, exchange, and payment policy UI |
| `/orders` | Searchable order list |
| `/orders/[id]` | Order details and status workflow |
| `/payments` | COD and manual payment verification UI |
| `/analytics` | Message, AI quality, intent, and order charts |
| `/weather` | City-based clothing recommendation UI |
| `/settings` | Shop, AI safety, and integration readiness settings |

## Design system

- Background: `#FFF7ED`
- Primary text and sidebar: `#171717`
- Primary action: `#F97316`
- Primary hover: `#EA580C`
- Soft surface: `#FFEDD5`
- Border: `#FED7AA`

Reusable primitives are under `src/components/ui`. Layout navigation is in `src/components/layout/dashboard-shell.tsx`. Page-specific interactive components are grouped by feature.

## Mock-data boundary

All seeded demo records are in `src/data/mock-data.ts`. Page components should not define replacement copies of catalog, conversation, order, payment, or policy records.

When a backend endpoint becomes available:

1. Preserve the domain interfaces in `src/types/index.ts` or coordinate a shared type change.
2. Update the matching function in `src/lib/api/client.ts`.
3. Replace local seed imports with an API call through that client.
4. Preserve loading, empty, error, and success feedback.
5. Do not access server credentials from a client component.

## Expected backend endpoints

| Endpoint | Frontend expectation |
| --- | --- |
| `GET /api/products` | Returns `Product[]` |
| `GET /api/policies` | Returns `Policy[]` |
| `GET /api/conversations` | Returns `Conversation[]` |
| `GET /api/conversations/[id]/messages` | Returns `Message[]` |
| `GET /api/orders` | Returns `Order[]` |
| `PATCH /api/orders/[id]/status` | Accepts `{ status }`, returns updated `Order` |
| `PATCH /api/payments/manual` | Accepts payment verification decision |
| `GET /api/analytics/overview` | Returns dashboard and chart aggregates |
| `POST /api/weather/recommend` | Accepts `{ city }`, returns weather and product matches |

The backend teams may refine envelopes and pagination, but should coordinate the contract before merge.

## Safety behavior

The interface visually requires owner review for complaints, angry sentiment, payment inquiries, unclear intent, and low-confidence drafts. Frontend controls are demonstrative; backend authorization and safety rules must independently enforce these decisions.

## Responsive behavior

- Desktop: fixed sidebar and multi-column dashboard grids
- Tablet: condensed grids and horizontally scrollable data tables
- Mobile: drawer navigation, stacked cards, compact actions, and scroll-safe tables

## Environment variables

Copy `.env.example` to `.env.local`. The example file contains no real values. Never expose MongoDB, OpenAI, Meta, or payment credentials through `NEXT_PUBLIC_` variables.

## Quality checks

Run before creating a pull request:

```bash
npm run lint
npm run typecheck
npm run build
```

Also inspect Git status, stage only Nafis-owned frontend files, and confirm `.env.local` is ignored.
