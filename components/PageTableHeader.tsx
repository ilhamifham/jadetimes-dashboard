const PageTableHeader = ({
  children,
  isSticky,
  justify,
  top,
}: Readonly<{
  children: React.ReactNode;
  isSticky?: boolean;
  justify?: string;
  top?: string;
}>) => {
  return (
    <div className={`bg-wix-100 ${isSticky ? "sticky" : ""} ${top ? top : ""}`.trim()}>
      <div
        className={`bg-white border-b border-b-wix-100 px-6 py-[0.9375rem] text-sm rounded-t-md h-[3.75rem] flex items-center ${
          justify ? justify : "justify-start"
        }`.trim()}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTableHeader;
