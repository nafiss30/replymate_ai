# ReplyMate AI

ReplyMate AI is a Bangla-English customer-support and order-management dashboard for small Bangladeshi businesses that sell through Facebook Pages and Messenger. The first demonstration uses a clothing shop called **Thread & Tone**.

## Frontend status

The `feature/nafis-frontend-ai` branch contains the complete responsive frontend demonstration. It uses typed mock data and a reusable API client boundary so Omi and Farzana can connect MongoDB, messaging, AI, order, payment, and analytics services later without restructuring pages.

### Included pages

- Owner login
- Dashboard overview with Recharts visualisations
- AI approval inbox and conversation details
- Customer chat simulator
- Products and variants
- Shop policies
- Orders list and order details
- Manual payment verification
- Analytics
- Weather-aware clothing recommendations
- Settings and integration status

## Frontend setup

Requirements:

- Node.js 20 or newer
- npm 10 or newer

Install and run:

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/dashboard`; `/login` contains the demonstration login form.

On macOS or Linux, use `cp .env.example .env.local` instead of `copy`.

## Available commands

```bash
npm run dev        # start the development server
npm run lint       # run ESLint
npm run typecheck  # run strict TypeScript checks
npm run build      # create a production build
npm run start      # serve the production build
```

## Demo data and API integration

- Mock records live in `src/data/mock-data.ts` and never contain real customer data.
- Shared domain types live in `src/types/index.ts`.
- Future backend calls are centralised in `src/lib/api/client.ts`.
- `NEXT_PUBLIC_DEMO_MODE=true` keeps supported reads on mock data.
- No API route, database implementation, AI secret, Messenger token, or payment credential is included in this frontend branch.

See [docs/FRONTEND_GUIDE.md](docs/FRONTEND_GUIDE.md) for route ownership, API expectations, design tokens, and integration guidance.

## Security

Never commit `.env.local`, API keys, database URIs, passwords, access tokens, or real customer information. `.env.example` contains names and empty placeholder values only. Production secrets belong in Vercel Environment Variables and must only be consumed by server-side backend code.

## Team workflow

- Nafis: `feature/nafis-frontend-ai`
- Omi: `feature/omi-database-orders`
- Farzana: `feature/farzana-messaging-analytics`
- Integration target: `develop`
- Stable deployment target: `main`

Changes flow through pull requests. Do not push feature work directly to `develop` or `main`.
