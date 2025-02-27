import Link from "next/link";
import { Add } from "@wix/wix-ui-icons-common";
import SearchBar from "@/components/Search";
import TabList from "@/components/TabList";
import TabPage from "@/components/TabPage";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";

const tabs = [
  {
    slug: "published",
    name: "Published",
  },
  {
    slug: "drafts",
    name: "Drafts",
  },
  {
    slug: "pendidng_review",
    name: "Pending Review",
  },
  {
    slug: "scheduled",
    name: "Scheduled",
  },
  {
    slug: "trash",
    name: "Trash",
  },
];

export default function PostsPage() {
  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <PageH1 text="Posts" />
          <Link href="create-post" className="btn primary">
            <Add className="-ml-[0.375rem] w-6 h-6" />
            Create New Post
          </Link>
        </div>
        <TabList tabs={tabs} />
      </PageHeader>
      <PageTable>
        <PageTableHeader isTabList={true} justify="justify-end">
          <SearchBar />
        </PageTableHeader>
        <div className="bg-white h-[1400px] rounded-b-md">
          <TabPage />
        </div>
      </PageTable>
    </PageSection>
  );
}
