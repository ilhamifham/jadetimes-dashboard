import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/jadetimes.png";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="p-4 custom-center">
      <div className="w-full">
        <Image src={Logo} alt="jadetimes" className="max-w-80 mx-auto mb-16 w-full" />
        {children}
        <p className="text-center text-sm mt-16 max-w-3xl mx-auto">
          If you encounter any issues with our content management system or have feedback to share, please contact Jadetimes Media at{" "}
          <Link href="mailto:report@Jadetimes.com" className="underline">
            report@Jadetimes.com
          </Link>{" "}
          or +1 (505) 364-6585.
        </p>
      </div>
    </section>
  );
}
