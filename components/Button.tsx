const Button = ({
  children,
  type,
  status,
  className,
  size,
}: Readonly<{
  children: React.ReactNode;
  type: "primary" | "secondary";
  status?: boolean;
  className?: string;
  size?: "small" | "big";
}>) => {
  const primary = "bg-wix-300 text-white hover:bg-[#0f62e6]";
  const secondary = "border border-wix-200 bg-white text-wix-300 hover:bg-wix-300 hover:text-white hover:border-wix-300";
  const small = "py-1 px-4 text-sm";
  const big = "py-[0.375rem] px-6";

  return (
    <button
      className={`rounded-full whitespace-nowrap font-medium flex items-center gap-[0.375rem] duration-300 ${
        type === "secondary" ? secondary : primary
      } ${className} ${size === "small" ? small : size === "big" ? big : ""}`}
      disabled={status}
    >
      {children}
    </button>
  );
};

export default Button;
