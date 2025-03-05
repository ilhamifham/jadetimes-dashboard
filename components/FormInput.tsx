import { forwardRef } from "react";

type InputAttributes = {
  type: string;
  name: string;
  placeholder: string;
  error: string | undefined;
};

const FormInput = forwardRef<HTMLInputElement, InputAttributes>(({ type, name, placeholder, error }, ref) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`placeholder:text-neutral-500 placeholder:text-base pt-5 pb-1 border-b-2 text-lg w-full focus:outline-none hover:border-b-neutral-400 focus:border-b-wix-300 group-hover:border-b-neutral-400 focus:group-hover:border-b-wix-300 ${
        error ? "border-b-red-600" : "border-b-neutral-200"
      }`}
      ref={ref}
    />
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
