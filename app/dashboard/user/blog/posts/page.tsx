import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Add } from "@wix/wix-ui-icons-common";
import SearchBar from "@/components/Search";
import Dropdown from "@/components/Dropdown";
import noPost from "@/public/no-post.svg"

export default function Posts() {
  return (
    <div className="w-full bg-wix-100 overflow-auto">
      <div className="max-w-[1248px] min-w-[960px] mx-auto px-12 sticky top-0 bg-wix-100">
        <div className="py-6 flex">
          <h1 className="text-[1.75rem] font-bold w-full">Posts</h1>
          <div className="flex items-center gap-3">
            <button className="btn secondary">
              More Actions
              <ChevronDown className="-mr-[0.375rem]" />
            </button>
            <Link href="?tab=create_post" className="btn primary">
              <Add className="-ml-[0.375rem]" />
              Create New Post
            </Link>
          </div>
        </div>
        <ul className="flex border-b border-b-neutral-200">
          <li>
            <Link
              href="?tab=published"
              className="border-b-[3px] border-b-wix-300 text-wix-300 px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
            >
              Published
            </Link>
          </li>
          <li>
            <Link
              href="?tab=drafts"
              className="px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
            >
              Drafts
            </Link>
          </li>
          <li>
            <Link
              href="?tab=pending_review"
              className="px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
            >
              Pending Review
            </Link>
          </li>
          <li>
            <Link
              href="?tab=scheduled"
              className="px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
            >
              Scheduled
            </Link>
          </li>
          <li>
            <Link
              href="?tab=trash"
              className="px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
            >
              Trash
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-[1248px] min-w-[960px] mx-auto px-12 pb-12">
        <div className="pt-6 sticky top-[151px] bg-wix-100">
          <div className="bg-white border-b border-b-tranparent px-6 py-[0.9375rem] text-sm rounded-t-md flex">
            <div className="flex gap-3 items-center ml-auto">
              Filter by:
              <Dropdown />
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="bg-white h-[400px] rounded-b-md">
          <div className="flex flex-col items-center justify-center h-full">
            <Image src={noPost} alt="" />
            <p className="font-bold mb-2">No published posts yet</p>
            <p className="text-neutral-500 text-sm">Once you publish posts, you'll see them here.</p>
            <Link href="?tab=create_post" className="text-wix-300 mt-4 flex gap-3"><Add className="-ml-[0.375rem]" />Create New Post</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
