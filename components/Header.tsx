import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/jadetimes.png";
import ProfileButton from "@/components/ProfileButton";
import { getUserDetails } from "@/lib/data";

const Header = async () => {
  const user = await getUserDetails();

  return (
    <header className="h-12 shadow-md relative z-[1] min-w-[64rem]">
      <div className="h-full px-4 flex items-center justify-center">
        <Link href="/dashboard/posts" className="mr-auto w-[9.19rem] min-w-[9.19rem]">
          <Image src={Logo} alt="jadetimes" />
        </Link>
        <ProfileButton user={user} />
      </div>
    </header>
  );
};

export default Header;
