import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageAddButton from "@/components/PageAddButton";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import SearchBar from "@/components/Search";

export default function TagsPage() {
  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <PageH1 text="Tags" />
          <PageAddButton text="Create Tag" />
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader justify="justify-end">
          <SearchBar />
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
