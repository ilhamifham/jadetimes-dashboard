import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageAddButton from "@/components/PageAddButton";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";

export default function WritersPage() {
  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <PageH1 text="Writers" />
          <PageAddButton text="Add Writer" />
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader justify="justify-start">
          <h2 className="font-bold text-lg">All writers</h2>
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
