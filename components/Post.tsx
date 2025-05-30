"use client";

import { Caudex } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import usePopover from "@/hooks/usePopover";
import { Replace, Delete, Settings, ArrowLeft, X } from "@wix/wix-ui-icons-common";
import { useEditor } from "@tiptap/react";
import GoBackButton from "@/components/GoBackButton";
import Button from "@/components/Button";
import TipTapMenuBar from "@/components/TipTapMenuBar";
import TiptapEditor from "@/components/TipTapEditor";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";
import BulletList from "@tiptap/extension-bullet-list";
import Bold from "@tiptap/extension-bold";

const caudex = Caudex({
  weight: ["400"],
  subsets: ["latin"],
});

function handleEnterKey(event: React.KeyboardEvent<HTMLElement>) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

const Post = () => {
  const [popover, popoverRef, togglePopover] = usePopover();
  const searchParams = useSearchParams();
  const search = searchParams.get("side-menu");
  const [panel, setPanel] = useState("general");
  const [postData, setPostData] = useState({
    title: "",
    image: "",
    imageAltText: "",
    imageSource: "",
    content: "",
  });
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "focus:outline-none text-sm",
      },
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      ListItem,
      Placeholder.configure({
        emptyEditorClass: "before:content-['Start_writing...'] before:absolute before:text-neutral-400",
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc tiptap-list-item pl-4",
        },
      }),
      Bold,
    ],
    immediatelyRender: false,
  });

  function handlePostTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const height = window.getComputedStyle(document.documentElement).fontSize;

    event.target.style.height = "2.75rem";
    event.target.style.height = `${event.target.scrollHeight / parseInt(height)}rem`;

    setPostData({
      ...postData,
      title: event.target.value,
    });
  }

  function handlePostImage(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setPostData({
          ...postData,
          image: reader.result as string,
        });
      };

      reader.readAsDataURL(file);
    }
  }

  function handleRemovePostImage() {
    setPostData({
      ...postData,
      image: "",
    });
  }

  return (
    <div className="w-full">
      <div className="py-[0.657rem] px-[1.125rem] flex flex-row items-center justify-between border-b border-b-neutral-200">
        <GoBackButton className="text-sm flex flex-row items-center duration-300 hover:text-neutral-600">
          <ArrowLeft className="w-6 h-6 -ml-1 mr-1" />
          Back
        </GoBackButton>
        <div className="flex flex-row items-center">
          <Button className="text-wix-300 text-sm font-normal hover:text-[#5999ff] rounded-none ml-5">Save</Button>
          <div className="w-[1px] h-6 bg-neutral-200 mx-5"></div>
          <Button type="primary" className="py-[0.375rem] px-[1.789rem] text-sm">
            Publish
          </Button>
        </div>
      </div>
      <div className="flex flew-row h-[calc(100vh-6.375rem)] overflow-hidden">
        <div className="w-[5.625rem] flex-none border-r border-r-neutral-200 p-3 px-5">
          <Link href="?side-menu=settings" className="text-xs flex flex-col items-center gap-1 duration-300 group">
            <div
              className={`p-[0.313rem] border border-neutral-200 rounded-full duration-300 ${
                search === "settings" ? "text-white bg-wix-300 border-wix-300" : "group-hover:text-wix-300 group-hover:bg-wix-200 group-hover:border-wix-200"
              }`}
            >
              <Settings className="w-[1.125rem] h-[1.125rem]" />
            </div>
            <div className={`duration-300 ${search === "settings" ? "text-wix-300" : "group-hover:text-wix-300"}`}>Settings</div>
          </Link>
        </div>
        <div className={`flex-none duration-300 text-nowrap ${search === "settings" ? "w-96 border-r border-r-neutral-200 overflow-y-auto" : "w-0 overflow-hidden invisible"}`}>
          <div className="sticky top-0 bg-white">
            <div className="px-6 py-4 flex flex-row items-center justify-between">
              <span className="text-lg font-medium">Post settings</span>{" "}
              <GoBackButton className="p-0.5 -mr-2 text-wix-300">
                <X />
              </GoBackButton>
            </div>
            <div className="border-b border-neutral-200 flex flex-row text-sm">
              <button
                className={`flex-1 border-b-[3px] px-3 pt-3 pb-[0.5625rem] duration-300 ${panel === "general" ? "text-wix-300 border-b-wix-300" : "hover:text-wix-300 border-b-transparent"}`}
                onClick={() => setPanel("general")}
              >
                General
              </button>
              <button
                className={`flex-1 border-b-[3px] px-3 pt-3 pb-[0.5625rem] duration-300 ${panel === "categories" ? "text-wix-300 border-b-wix-300" : "hover:text-wix-300 border-b-transparent"}`}
                onClick={() => setPanel("categories")}
              >
                Categories
              </button>
              <button
                className={`flex-1 border-b-[3px] px-3 pt-3 pb-[0.5625rem] duration-300 ${panel === "tags" ? "text-wix-300 border-b-wix-300" : "hover:text-wix-300 border-b-transparent"}`}
                onClick={() => setPanel("tags")}
              >
                Tags
              </button>
            </div>
          </div>
          <div className="py-4 px-6">{panel === "categories" ? "Categories" : panel === "tags" ? "Tags" : "General"}</div>
        </div>
        <div className="w-full overflow-auto">
          <div className="border-b border-b-neutral-200 sticky top-0 left-0 bg-white z-[2] flex flex-row items-center justify-center py-[0.844rem] px-[1.125rem]">
            <TipTapMenuBar editor={editor} />
          </div>
          <div className="px-8 w-[50.25rem] mx-auto mb-6">
            <textarea
              name="post-title"
              className={`h-11 leading-[normal] mt-6 text-[2.125rem] resize-none w-full overflow-hidden focus:outline-none text-neutral-600 placeholder:text-neutral-400 ${caudex.className}`}
              placeholder="Add Title"
              onKeyDown={handleEnterKey}
              onChange={handlePostTitle}
              value={postData.title}
              maxLength={200}
            ></textarea>
            <div className="h-[1px] w-full bg-black my-6"></div>
            <div>
              {postData.image ? (
                <div className="relative group">
                  <div className="bg-white border border-wix-200 rounded-md p-1 flex flex-row items-center shadow-xl absolute left-1/2 -translate-x-1/2 top-2 z-[1]">
                    <input id="update-post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
                    <label
                      htmlFor="update-post-image"
                      className="cursor-pointer text-black p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]"
                    >
                      <Replace className="w-6 h-6" />
                    </label>
                    <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
                    <button className="p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100" onClick={handleRemovePostImage}>
                      <Delete className="w-6 h-6" />
                    </button>
                    <div className="w-[1px] bg-neutral-200 h-6 mx-1"></div>
                    <div className="relative flex">
                      <button className={`p-[0.125rem] rounded-sm duration-300 ${popover ? "bg-wix-100" : "hover:bg-wix-100"}`} onClick={togglePopover}>
                        <Settings className="w-6 h-6" />
                      </button>
                      {popover && (
                        <div ref={popoverRef as React.RefObject<HTMLDivElement>} className="absolute border border-wix-200 shadow-xl -top-1 bg-white left-10 rounded-md px-4 py-2 w-72">
                          <div className="font-bold mb-2">Image</div>
                          <div className="w-[15.875rem] h-[8.93rem] bg-wix-200 rounded-md mb-2 overflow-hidden">
                            <Image src={postData.image} alt={postData.imageAltText} width={254} height={143} className="aspect-video object-cover object-top" loading="lazy" />
                          </div>
                          <label htmlFor="image-alt" className="block text-sm mb-1">
                            Alt text
                          </label>
                          <textarea
                            id="image-alt"
                            className="block border border-wix-200 rounded-md w-full resize-none mb-2 px-2 py-1 text-sm h-16"
                            onKeyDown={handleEnterKey}
                            onChange={(event) =>
                              setPostData({
                                ...postData,
                                imageAltText: event.target.value,
                              })
                            }
                            value={postData.imageAltText}
                            placeholder="Describe the image"
                          ></textarea>
                        </div>
                      )}
                    </div>
                  </div>
                  <Image src={postData.image} width={740} height={416} alt={postData.imageAltText} className="aspect-video object-cover object-top" />
                </div>
              ) : (
                <>
                  <input id="post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
                  <label
                    htmlFor="post-image"
                    className="aspect-video bg-wix-100 block p-4 cursor-pointer duration-300 hover:bg-wix-200 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]"
                  >
                    <div className="border border-wix-300 border-dashed h-full flex items-center justify-center">
                      <div className="text-wix-300 text-xl">Add photo</div>
                    </div>
                  </label>
                </>
              )}
              <input
                type="text"
                className="my-4 focus:outline-none w-full text-center text-[0.8125rem] text-neutral-600 placeholder:text-neutral-400"
                placeholder="Add image source"
                onChange={(event) =>
                  setPostData({
                    ...postData,
                    imageSource: event.target.value,
                  })
                }
                value={postData.imageSource}
              />
            </div>
            <TiptapEditor editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
