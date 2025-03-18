import { Editor } from "@tiptap/react";
import { Bold, BulletList, LinkBold } from "@wix/wix-ui-icons-common";

const TipTapMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-[0.125rem] rounded-sm duration-300 ${
          editor.isActive("bold") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"
        }`}
        disabled={editor.isEmpty}
      >
        <Bold className="w-6 h-6" />
      </button>
      <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-[0.125rem] rounded-sm duration-300 ${
          editor.isActive("bulletList") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"
        }`}
        disabled={editor.isEmpty}
      >
        <BulletList className="w-6 h-6" />
      </button>
      <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
      <button
        onClick={() => console.log("Link")}
        className={`p-[0.125rem] rounded-sm duration-300 ${
          editor.isActive("link") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"
        }`}
        disabled={editor.isEmpty}
      >
        <LinkBold className="w-6 h-6" />
      </button>
    </>
  );
};

export default TipTapMenuBar;
