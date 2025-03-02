import { getUserRole } from "@/lib/data";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import PageAddButton from "@/components/PageAddButton";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import NoPermission from "@/components/NoPermission";

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
          <PageAddButton text="Add Writer" />
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[5.625rem]">
          <h2 className="font-bold text-lg">All writers</h2>
        </PageTableHeader>
      </PageTable>
    </PageSection>
  );
}
