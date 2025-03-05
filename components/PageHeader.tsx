const PageHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <header className="max-w-[78.375rem] min-w-[58.1875rem] mx-auto px-12 py-6 sticky top-0 bg-wix-100">{children}</header>;
};

export default PageHeader;
