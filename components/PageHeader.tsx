const PageHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <header className="max-w-[84rem] min-w-[59.6875rem] mx-auto px-12 py-6 sticky top-0 bg-wix-100">{children}</header>;
};

export default PageHeader;
