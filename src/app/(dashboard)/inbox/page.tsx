import { RefreshCw } from "lucide-react";
import { InboxList } from "@/components/inbox/inbox-list";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function InboxPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader eyebrow="Owner approval center" title="AI Inbox" description="Review conversations, approve safe drafts, and take over complaints or sensitive cases." actions={<Button variant="secondary"><RefreshCw size={16} />Sync messages</Button>} />
      <InboxList />
    </div>
  );
}
