import Link from "next/link";
import { Add } from "@wix/wix-ui-icons-common";
import SearchBar from "@/components/Search";
// import Dropdown from "@/components/Dropdown";
import TabList from "@/components/TabList";
import TabPage from "@/components/TabPage";

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
    <div className="w-full bg-wix-100 overflow-auto">
      <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 pb-6 sticky top-0 bg-wix-100">
        <div className="py-6 flex items-center">
          <h1 className="text-[1.75rem] font-bold w-full">Posts</h1>
          <Link href="create-post" className="btn primary">
            <Add className="-ml-[0.375rem]" />
            Create New Post
          </Link>
        </div>
        <TabList tabs={tabs} />
      </div>
      <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 pb-6">
        <div className="sticky top-[9.75rem] bg-wix-100">
          <div className="bg-white border-b border-b-tranparent px-6 py-[0.9375rem] text-sm rounded-t-md flex items-center">
            {/* <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="accent-wix-300 scale-[1.2] cursor-pointer"
              />{" "}
              Select all
            </label> */}
            <div className="flex gap-3 items-center ml-auto">
              {/* Filter by:
              <Dropdown /> */}
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="bg-white h-[400px] rounded-b-md">
          <TabPage />
        </div>
      </div>
    </div>
  );
}
