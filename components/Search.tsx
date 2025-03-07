"use client";

import { useState, useRef } from "react";
import { Search, Dismiss } from "@wix/wix-ui-icons-common";

const SearchBar = () => {
  const [deleteButton, setDeleteButton] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  function showDeleteButton() {
    setDeleteButton(searchRef.current?.value ? true : false);
  }

  function clearSearch() {
    if (searchRef.current) {
      searchRef.current.value = "";
      setDeleteButton(false);
      searchRef.current.focus();
    }
  }

  return (
    <div className="relative flex items-center min-w-60 group">
      <Search className="h-[1.875rem] w-[1.875rem] p-1 absolute left-[0.125rem] text-wix-300 pointer-events-none" />
      <input
        type="text"
        ref={searchRef}
        placeholder="Search"
        className="py-1 px-[1.875rem] rounded-full border border-wix-200 outline-offset-2 w-full duration-300 group-hover:bg-wix-200 placeholder:text-neutral-500"
        onChange={showDeleteButton}
      />
      {deleteButton && (
        <button className="absolute right-[0.313rem] rounded-full bg-wix-100" onClick={clearSearch}>
          <Dismiss className="h-5 w-5 p-[0.125rem] text-wix-300" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
