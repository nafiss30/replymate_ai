import { notFound } from "next/navigation";
import { ConversationWorkspace } from "@/components/inbox/conversation-workspace";
import { conversations } from "@/data/mock-data";

export function generateStaticParams() {
  return conversations.map((conversation) => ({ id: conversation.id }));
}

export default async function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const conversation = conversations.find((item) => item.id === id);
  if (!conversation) notFound();
  return <ConversationWorkspace conversation={conversation} />;
}
