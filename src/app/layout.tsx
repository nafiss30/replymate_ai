import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ReplyMate AI", template: "%s | ReplyMate AI" },
  description: "Bangla-English customer support and order management for Facebook shops.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
