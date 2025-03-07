"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Tab = {
  slug: string;
  name: string;
};

const TabList = ({ tabs }: { tabs: Tab[] }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("tab");

  return (
    <ul className="flex mr-auto text-base -ml-6">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={
            search === null
              ? "first:text-wix-300 first:border-b-[3px] first:border-b-wix-300"
              : search === tab.slug
              ? "text-wix-300 border-b-[3px] border-b-wix-300"
              : ""
          }
        >
          <Link href={`?tab=${tab.slug}`} className="px-4 pt-[3px] h-[3.5625rem] flex items-center whitespace-nowrap duration-300 hover:text-wix-300">
            {tab.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
