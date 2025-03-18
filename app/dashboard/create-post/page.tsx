import { ArrowLeft } from "@wix/wix-ui-icons-common";
import GoBackButton from "@/components/GoBackButton";
import Button from "@/components/Button";
import Post from "@/components/Post";

export default function CreatePostPage() {
  return (
    <div className="w-full">
      <div className="py-[0.657rem] px-[1.125rem] flex flex-row items-center justify-between border-b border-b-neutral-200">
        <GoBackButton className="text-sm flex flex-row items-center duration-300 hover:text-neutral-600">
          <ArrowLeft className="w-6 h-6 -ml-1 mr-1" />
          Back
        </GoBackButton>
        <div className="flex flex-row items-center">
          <Button className="text-wix-300 text-sm font-normal hover:text-[#5999ff] rounded-none">Save</Button>
          <div className="w-[1px] h-6 bg-neutral-200 mx-5"></div>
          <Button className="text-wix-300 text-sm font-normal mr-5 hover:text-[#5999ff] rounded-none">Preview</Button>
          <Button type="primary" className="py-[0.375rem] px-[1.789rem] text-sm">
            Publish
          </Button>
        </div>
      </div>
      <div className="flex flew-row h-[calc(100vh-6.375rem)] overflow-hidden">
        <div className="w-[5.625rem] flex-none border-r border-r-neutral-200"></div>
        <div className="w-full overflow-auto">
          <Post />
        </div>
      </div>
    </div>
  );
}
