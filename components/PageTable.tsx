const PageTable = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-[78.375rem] min-w-[58.1875rem] mx-auto px-12 pb-6">{children}</div>;
};

export default PageTable;
