"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import usePopover from "@/hooks/usePopover";
import { logOut } from "@/lib/auth";
import AvatarIcon from "@/components/AvatarIcon";
import Button from "@/components/Button";
import { Settings, ChevronDownLargeSmall } from "@wix/wix-ui-icons-common";

type User = {
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  profileImage: string | null | undefined;
};

const ProfileButton = ({ user }: { user?: User }) => {
  const [popover, popoverRef, togglePopover] = usePopover();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    await logOut(event, setIsLoading, router);
  }

  return (
    <div className="relative h-[1.875rem]">
      <button onClick={togglePopover} className="rounded-full flex flex-row items-center gap-1 group">
        {user?.profileImage ? (
          <Image
            src={user.profileImage}
            alt="profile image"
            width={72}
            height={72}
            className="w-[1.875rem] h-[1.875rem] rounded-full object-cover object-top duration-300 group-hover:opacity-60"
          />
        ) : (
          <AvatarIcon className="w-[1.875rem]" />
        )}
        <ChevronDownLargeSmall className="text-wix-300 duration-300 group-hover:opacity-60" />
      </button>
      {popover && (
        <div
          ref={popoverRef as React.RefObject<HTMLDivElement>}
          className="absolute bg-white w-80 top-12 right-0 shadow-lg border border-wix-200 rounded-lg"
        >
          <div className="flex items-center gap-3 border-b border-b-wix-200 p-4">
            {user?.profileImage ? (
              <Image src={user.profileImage} alt="profile image" width={72} height={72} className="w-12 h-12 rounded-full object-cover object-top" />
            ) : (
              <AvatarIcon className="w-12" />
            )}
            <div>
              <div className="font-medium">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="text-neutral-500 text-sm">{user?.email}</div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between gap-6">
            <Link href="settings" className="text-sm flex items-center gap-2 hover:text-neutral-600" onClick={togglePopover}>
              <Settings className="w-6 h-6 -ml-[0.2rem]" /> Account Settings
            </Link>
            <form onSubmit={handleSubmit}>
              <Button type="secondary" size="small" status={isLoading}>
                {isLoading ? "Loading..." : "Log Out"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
