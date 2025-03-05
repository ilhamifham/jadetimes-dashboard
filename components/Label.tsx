const Label = ({ className, text }: { className?: string; text: string }) => {
  return <div className={`text-sm text-neutral-700 mb-1 ${className}`}>{text}</div>;
};

export default Label;
