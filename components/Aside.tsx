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
      className={`bg-[#131720] duration-300 ${url === "create-post" ? "w-0 overflow-hidden invisible" : "flex-none w-[3.375rem] min-[1230px]:w-64"}`}
    >
      <nav>
        <ul className="font-medium text-sm pt-1 text-white px-1">
          {navigations.map((navigation, index) => (
            <li key={index} className="relative group mb-1">
              <Link
                href={navigation.slug}
                className={`py-[0.375rem] flex gap-3 items-center px-[0.6875rem] rounded duration-300 ${
                  url === navigation.slug ? "bg-[#42454c]" : "hover:bg-[#2b2e36]"
                }`}
              >
                <navigation.icon className="w-6 h-6" />
                <span className="hidden min-[1230px]:block">{navigation.slug.charAt(0).toUpperCase() + navigation.slug.slice(1)}</span>
              </Link>
              <span className="absolute top-1/2 -translate-y-1/2 text-xs bg-[#131720] px-3 py-2 rounded-md left-14 z-50 hidden group-hover:block duration-300 min-[1230px]:group-hover:hidden">
                {navigation.slug.charAt(0).toUpperCase() + navigation.slug.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
