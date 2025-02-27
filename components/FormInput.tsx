type InputAttributes = {
  type: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  error: string;
};

const FormInput = ({
  type,
  name,
  placeholder,
  defaultValue,
  error,
}: InputAttributes) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`placeholder:text-neutral-500 placeholder:text-base pt-5 pb-1 border-b-2 text-lg w-full focus:outline-none hover:border-b-neutral-400 focus:border-b-wix-300 ${
        error ? "border-b-red-600" : "border-b-neutral-200"
      }`}
      // required
    />
  );
};

export default FormInput;
