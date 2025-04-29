import { Editor } from "@tiptap/react";
import { Bold, BulletList } from "@wix/wix-ui-icons-common";

const TipTapMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-[0.125rem] rounded-sm duration-300 ${editor.isActive("bold") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"}`}
        disabled={editor.isEmpty}
      >
        <Bold className="w-6 h-6" />
        <span className="sr-only">bold</span>
      </button>
      <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-[0.125rem] rounded-sm duration-300 ${editor.isActive("bulletList") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"}`}
        disabled={editor.isEmpty}
      >
        <BulletList className="w-6 h-6" />
        <span className="sr-only">bulletlist</span>
      </button>
      {/* <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
      <div className="relative flex">
        <button
          onClick={() => editor.commands.toggleLink({ href: "https://example.com" })}
          className={`p-[0.125rem] rounded-sm duration-300 ${
            editor.isActive("link") ? "bg-wix-100" : editor.isEmpty ? "opacity-30" : "hover:bg-wix-100"
          }`}
          disabled={editor.isEmpty}
        >
          <LinkBold className="w-6 h-6" />
        </button>
        {popover && (
          <div className="absolute top-12 border border-wix-200 px-4 py-2 rounded-md shadow-xl bg-white w-72">
            <label htmlFor="link" className="block text-sm mb-1">
              URL
            </label>
            <input
              id="link"
              type="url"
              className="block border border-wix-200 rounded-md w-full mb-2 px-2 py-1 text-sm"
              placeholder="Enter or paste a link"
            />
          </div>
        )}
      </div> */}
    </>
  );
};

export default TipTapMenuBar;
