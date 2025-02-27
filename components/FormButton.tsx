const FormButton = ({
  status,
  children,
}: Readonly<{
  status: boolean;
  children: React.ReactNode;
}>) => {
  return (
    <button className="btn primary py-2 justify-center mt-6" disabled={status}>
      {children}
    </button>
  );
};

export default FormButton;
