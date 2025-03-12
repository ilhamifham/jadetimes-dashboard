import { getUserRole } from "@/lib/data";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import Button from "@/components/Button";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import SearchBar from "@/components/Search";
import NoPermission from "@/components/NoPermission";
import { Add } from "@wix/wix-ui-icons-common";

export default async function TagsPage() {
  const role = await getUserRole();

  if (role === "Guest Writer") {
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
          <Button type="primary" size="big">
            <Add className="-ml-[0.1875rem] w-6 h-6" />
            Create Tag
          </Button>
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[7.125rem]" justify="justify-end">
          <SearchBar />
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
