import { Add } from "@wix/wix-ui-icons-common";

const PagePageAddButton = ({ text }: { text: string }) => {
  return (
    <button className="btn primary">
      <Add className="-ml-[0.375rem] w-6 h-6" />
      {text}
    </button>
  );
};

export default PagePageAddButton;
