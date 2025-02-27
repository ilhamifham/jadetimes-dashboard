const PageTableHeader = ({
  children,
  isTabList,
  justify,
}: Readonly<{
  children: React.ReactNode;
  isTabList?: boolean;
  justify: string;
}>) => {
  return (
    <div
      className={`bg-wix-100 sticky ${
        isTabList ? "top-[9.6875rem]" : "top-[5.625rem]"
      }`}
    >
      <div
        className={`bg-white border-b border-b-wix-100 px-6 py-[0.9375rem] text-sm rounded-t-md h-[3.75rem] flex items-center ${justify}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTableHeader;
