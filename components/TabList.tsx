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
    <ul className="flex border-b border-b-neutral-200">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={
            search === null
              ? "first:border-b-2 first:border-b-wix-300 first:text-wix-300"
              : search === tab.slug
              ? "border-b-2 border-b-wix-300 text-wix-300"
              : undefined
          }
        >
          <Link
            href={`?tab=${tab.slug}`}
            className="px-[1.125rem] pt-[1.125rem] pb-[0.9375rem] inline-block"
          >
            {tab.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
