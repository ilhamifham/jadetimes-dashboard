import Link from "next/link";
import { Add } from "@wix/wix-ui-icons-common";
import SearchBar from "@/components/Search";
import TabList from "@/components/TabList";
import TabPage from "@/components/TabPage";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
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
          <div>
            <PageH1 text="Posts" />
            <PageSubHeading>Manage posts.</PageSubHeading>
          </div>
          <Link
            href="create-post"
            className="rounded-full whitespace-nowrap font-medium flex items-center gap-[0.375rem] py-[0.375rem] px-6 bg-wix-300 text-white"
          >
            <Add className="-ml-[0.1875rem] w-6 h-6" />
            Create New Post
          </Link>
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[9.6875rem]" justify="justify-end">
          <TabList tabs={tabs} />
          <SearchBar />
        </PageTableHeader>
        <div className="bg-white h-[400px] rounded-b-md">
          <TabPage />
        </div>
      </PageTable>
    </PageSection>
  );
}
