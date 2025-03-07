const Button = ({
  children,
  type,
  status,
  className,
  size,
  error,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  type: "primary" | "secondary";
  status?: boolean;
  className?: string;
  size?: "small" | "big";
  error?: boolean;
  onClick?: () => void;
}>) => {
  const primary = `text-white ${error ? "bg-red-600" : "bg-wix-300"} ${status ? "opacity-60" : "hover:opacity-60"}`;
  const secondary = `border bg-white ${error ? "border-red-200 text-red-600" : "border-wix-200 text-wix-300"} ${
    status ? "opacity-60" : `hover:text-white ${error ? "hover:bg-red-600 hover:border-red-600" : "hover:bg-wix-300 hover:border-wix-300"}`
  }`;
  const small = "py-1 px-4 text-sm";
  const big = "py-[0.375rem] px-6";

  return (
    <button
      className={`rounded-full whitespace-nowrap font-medium flex items-center gap-[0.375rem] duration-300 ${
        type === "secondary" ? secondary : primary
      } ${size === "small" ? small : size === "big" ? big : ""} ${status ? "opacity-50" : ""} ${className}`}
      disabled={status}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
