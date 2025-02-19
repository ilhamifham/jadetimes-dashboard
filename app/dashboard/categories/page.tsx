import Link from "next/link";
import { Add } from "@wix/wix-ui-icons-common";
import SearchBar from "@/components/Search";
import TabPage from "@/components/TabPage";

export default function CategoriesPage() {
  return (
    <div className="w-full bg-wix-100 overflow-auto">
      <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 sticky top-0 bg-wix-100">
        <div className="py-6 flex items-center">
          <h1 className="text-[1.75rem] font-bold w-full">Categories</h1>
          <Link href="posts/create_post" className="btn primary">
            <Add className="-ml-[0.375rem]" />
            Create Category
          </Link>
        </div>
      </div>
      <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 pb-6">
        <div className="sticky top-[90px] bg-wix-100">
          <div className="bg-white border-b border-b-tranparent px-6 py-[0.9375rem] text-sm rounded-t-md flex items-center">
            <div className="flex gap-3 items-center ml-auto">
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
