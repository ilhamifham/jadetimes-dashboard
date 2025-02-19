
import TabList from "@/components/TabList";

const tabs = [
  {
    slug: "published",
    name: "Published",
  },
  {
    slug: "reported",
    name: "Reported",
  },
  {
    slug: "trash",
    name: "Trash",
  },
];

export default function CommentsPage() {
  return (
    <div className="w-full bg-wix-100 overflow-auto">
      <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 sticky top-0 bg-wix-100">
        <div className="py-6 flex items-center">
          <h1 className="text-[1.75rem] font-bold w-full">Comments</h1>
        </div>
        <TabList tabs={tabs} />
      </div>
      {/* <div className="max-w-[1254px] min-w-[960px] mx-auto px-12 pb-12">
        <div className="pt-6 sticky top-[151px] bg-wix-100">
          <div className="bg-white border-b border-b-tranparent px-6 py-[0.9375rem] text-sm rounded-t-md flex items-center">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="accent-wix-300 scale-[1.2] cursor-pointer"
              />{" "}
              Select all
            </label>
            <div className="flex gap-3 items-center ml-auto">
              Filter by:
              <Dropdown />
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="bg-white h-[400px] rounded-b-md">
          <TabPage />
        </div>
      </div> */}
    </div>
  );
}
