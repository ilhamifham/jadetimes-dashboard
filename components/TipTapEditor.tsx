import { EditorContent, Editor } from "@tiptap/react";

const TiptapEditor = ({ editor }: { editor: Editor | null }) => {
  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
