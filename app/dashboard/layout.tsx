import GlobalTopNav from "@/components/GlobalTopNav";
import GlobalSideNav from "@/components/GlobalSideNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalTopNav />
      <main className="flex h-[calc(100vh-48px)] overflow-hidden">
        <GlobalSideNav />
        {children}
      </main>
    </>
  );
}
