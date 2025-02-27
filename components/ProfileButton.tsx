"use client";

import usePopover from "@/hooks/usePopover";
import AvatarIcon from "@/components/AvatarIcon";
import { logout } from "@/actions/formActions";
import { Settings } from "@wix/wix-ui-icons-common";
import Link from "next/link";

const ProfileButton = () => {
  const [popover, popoverRef, togglePopover] = usePopover();

  return (
    <div className="relative h-[1.875rem]">
      <button onClick={togglePopover} className="rounded-full">
        <AvatarIcon className="w-[1.875rem]" />
      </button>
      {popover && (
        <div
          ref={popoverRef as React.RefObject<HTMLDivElement>}
          className="absolute bg-white w-80 top-12 right-0 shadow-lg border border-wix-200 rounded-lg"
        >
          <div className="flex items-center gap-3 border-b border-b-wix-200 p-4">
            <AvatarIcon className="w-12" />
            <div>
              <div className="font-medium"></div>
              <div className="text-neutral-500 text-sm"></div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between gap-6">
            <Link
              href="settings"
              className="text-sm flex items-center gap-2"
              onClick={togglePopover}
            >
              <Settings className="w-6 h-6" /> Account Settings
            </Link>
            <form action={logout}>
              <button className="btn secondary border border-wix-200 py-[0.313rem] px-4 text-sm">
                Log Out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
