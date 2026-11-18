import { SettingsPanel } from "@/components/settings/settings-panel";
import { PageHeader } from "@/components/page-header";

export default function SettingsPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Workspace configuration" title="Settings & integrations" description="Configure the storefront, review frontend integration readiness, and set owner approval preferences." /><SettingsPanel /></div>;
}
