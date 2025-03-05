import { getUserRole } from "@/lib/data";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import Button from "@/components/Button";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import PageTableH2 from "@/components/PageTableH2";
import NoPermission from "@/components/NoPermission";
import { Add } from "@wix/wix-ui-icons-common";

export default async function WritersPage() {
  const role = await getUserRole();

  if (role !== "Owner") {
    return <NoPermission />;
  }

  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <div>
            <PageH1 text="Writers" />
            <PageSubHeading>Manage writers for your blog, create and customize their public profiles.</PageSubHeading>
          </div>
          <Button type="primary" size="big">
            <Add className="-ml-[0.1875rem] w-6 h-6" />
            Add Writer
          </Button>
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[5.625rem]">
          <PageTableH2 text="All writers" />
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
