import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/jadetimes.png";

const GlobalTopNav = () => {
  return (
    <header className="min-h-12 shadow-md relative z-[1]">
      <div className="h-12 px-4 flex items-center justify-center">
        <Link href="/dashboard" className="mr-auto w-36">
          <Image src={Logo} alt="jadetimes" />
        </Link>
      </div>
    </header>
  );
};

export default GlobalTopNav;
