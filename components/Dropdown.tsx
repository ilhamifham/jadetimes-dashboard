"use client";

import usePopover from "@/hooks/usePopover";
import { ChevronDown } from "@wix/wix-ui-icons-common";

const Dropdown = () => {
  const [popover, popoverRef, togglePopover] = usePopover();

  return (
    <div className="relative">
      <button
        className="relative w-56 py-1 px-3 rounded-full border border-wix-200 outline-offset-2 bg-white flex items-center duration-300 hover:bg-wix-200"
        onClick={togglePopover}
      >
        <span className="line-clamp-1 grow text-left">All posts</span>
        <ChevronDown className="absolute right-[0.125rem] h-[1.875rem] w-[1.875rem] p-1 text-wix-300" />
      </button>
      {popover && (
        <div
          ref={popoverRef as React.RefObject<HTMLDivElement>}
          className="absolute w-72 left-1/2 -translate-x-1/2 translate-y-1 bg-white shadow-lg border border-wix-200 rounded-lg animate-[wiggle_1s_ease-in-out_infinite] overflow-hidden"
        >
          <div className="text-sm text-neutral-500 font-bold px-4 pt-4 pb-2">Writers</div>
          <ul className="max-h-36 overflow-y-auto">
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
          </ul>
          <div className="text-sm text-neutral-500 font-bold px-4 pt-4 pb-2 border-t border-t-neutral-200">Categories</div>
          <ul className="max-h-36 overflow-y-auto">
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
            <li>
              <label className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-wix-200">
                <input type="checkbox" className="accent-wix-300 scale-[1.2] cursor-pointer" />
                Ilham Ifham
              </label>
            </li>
          </ul>
          <div className="p-4 border-t border-t-neutral-200 flex items-center justify-between">
            <button className="btn primary ml-auto">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
