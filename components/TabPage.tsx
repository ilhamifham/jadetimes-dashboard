"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Add } from "@wix/wix-ui-icons-common";
import noPost from "@/public/no-post.svg";

const TabPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("tab");

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={noPost} alt="" priority />
      <p className="font-bold mb-2 mt-5">
        {search === "trash"
          ? "No posts in trash"
          : search === "scheduled"
          ? "No posts scheduled"
          : search === "pending_review"
          ? "No posts pending review"
          : search === "drafts"
          ? "No drafts yet"
          : "No published posts yet"}
      </p>
      <p className="text-neutral-500 text-sm">
        {search === "trash"
          ? "Posts that you move to trash will stay here until you permanently delete them."
          : search === "scheduled"
          ? "You can use scheduling to choose when people see your next post."
          : search === "pending_review"
          ? "Create a post and submit it for review by an editor."
          : search === "drafts"
          ? "Every great post begins with a single word."
          : "Once you publish posts, you’ll see them here."}
      </p>
      {search !== "trash" && (
        <Link href="create-post" className="text-wix-300 mt-4 flex gap-3">
          <Add className="-ml-[0.375rem]" />
          Create New Post
        </Link>
      )}
    </div>
  );
};

export default TabPage;
