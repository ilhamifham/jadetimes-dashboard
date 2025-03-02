const PageSection = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="w-full bg-wix-100 overflow-auto">{children}</section>;
};

export default PageSection;
