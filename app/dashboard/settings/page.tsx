import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";

export default function SettingsPage() {
  return (
    <PageSection>
      <PageHeader>
        <PageH1 text="Account Settings" />
        <PageSubHeading>View and update your account details, profile and more.</PageSubHeading>
      </PageHeader>
      <PageTable>
        <PageTableHeader>
          <h2 className="font-bold text-lg">Account info</h2>
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
