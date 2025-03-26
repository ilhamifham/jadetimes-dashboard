import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/jadetimes.png";
import ProfileButton from "@/components/ProfileButton";
import { getUserDetails } from "@/lib/data";

const Header = async () => {
  const user = await getUserDetails();

  return (
    <header className="px-[1.125rem] py-[0.532rem] flex items-center border-b border-b-neutral-200">
      <Link href="/dashboard/posts" className="mr-auto w-[9.19rem] min-w-[9.19rem]">
        <Image src={Logo} alt="jadetimes" priority />
      </Link>
      <ProfileButton user={user} />
    </header>
  );
};

export default Header;
