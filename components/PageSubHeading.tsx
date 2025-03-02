const PageSubHeading = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="text-neutral-700">{children}</div>;
};

export default PageSubHeading;
