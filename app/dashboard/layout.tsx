import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex h-[calc(100vh-3.0625rem)] overflow-hidden">
        <Aside />
        {children}
      </main>
    </>
  );
}
