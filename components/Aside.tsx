"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Newspaper, Category, Tag, Groups } from "@wix/wix-ui-icons-common";

const navigations = [
  {
    slug: "posts",
    icon: Newspaper,
  },
  {
    slug: "categories",
    icon: Category,
  },
  {
    slug: "tags",
    icon: Tag,
  },
  {
    slug: "writers",
    icon: Groups,
  },
];

const Aside = () => {
  const pathname = usePathname();
  const url = pathname.split("/")[2];

  return (
    <aside
      className={`bg-[#131720] duration-300 ${
        url === "create-post" ? "w-0 overflow-hidden" : "flex-none w-64 max-[1230px]:w-[3.375rem]"
      }`}
    >
      <nav>
        <ul className="font-medium text-sm mt-3 text-white">
          {navigations.map((navigation, index) => (
            <li key={index}>
              <Link
                href={navigation.slug}
                className={`py-[0.375rem] flex gap-3 items-center px-[0.9375rem] ${
                  url === navigation.slug ? "bg-[#42454c]" : "hover:bg-[#2b2e36]"
                }`}
              >
                <navigation.icon className="w-6 h-6" />
                <span className="max-[1230px]:hidden">
                  {navigation.slug.charAt(0).toUpperCase() + navigation.slug.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
