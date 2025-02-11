import Image from "next/image";
import Link from "next/link";
import noPermission from "@/public/no-permission.svg";

const NoPermission = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-wix-100">
      <Image src={noPermission} alt="" priority />
      <h1 className="font-bold mb-2 text-lg">You can’t access this page</h1>
      <p className="text-neutral-900">
        It looks like you don’t have the necessary permissions.
      </p>
      <Link href="posts/create_post" className="text-wix-300 mt-4 flex gap-3">
        Go To Main Page
      </Link>
    </div>
  );
};

export default NoPermission;
