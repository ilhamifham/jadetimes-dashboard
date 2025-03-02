import { getUserRole } from "@/lib/data";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import PageAddButton from "@/components/PageAddButton";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import SearchBar from "@/components/Search";
import NoPermission from "@/components/NoPermission";

export default async function TagsPage() {
  const role = await getUserRole();

  if (role !== "Owner") {
    return <NoPermission />;
  }

  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <div>
            <PageH1 text="Tags" />
            <PageSubHeading>Create and manage tags to help readers discover related content in your blog.</PageSubHeading>
          </div>
          <PageAddButton text="Create Tag" />
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[5.625rem]" justify="justify-end">
          <SearchBar />
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
