import { PageHeader } from "@/components/page-header";
import { ChatSimulator } from "@/components/simulator/chat-simulator";

export default function SimulatorPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Credential-free demonstration" title="Customer chat simulator" description="Test Bangla-English replies and conversational order collection without Meta credentials." /><ChatSimulator /></div>;
}
