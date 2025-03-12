"use client";

import { Caudex } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Replace, Delete, Settings } from "@wix/wix-ui-icons-common";

const caudex = Caudex({
  weight: ["400"],
  subsets: ["latin"],
});

function handleEnterKey(event: KeyboardEvent<HTMLElement>) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

const Post = () => {
  const [postData, setPostData] = useState({
    title: "",
    image: "",
    imageSource: "",
  });

  function handlePostTitle(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = "3.1875rem";
    event.target.style.height = `${(event.target.scrollHeight % 10) * 3.1875}rem`;

    setPostData({
      ...postData,
      title: event.target.value,
    });
  }

  function handlePostImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
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
    <div className="max-w-[46.25rem] mx-auto">
      <textarea
        name="post-title"
        className={`h-[3.1875rem] mt-6 text-[2.125rem] resize-none w-full overflow-hidden focus:outline-none text-neutral-600 placeholder:text-neutral-400 ${caudex.className}`}
        placeholder="Add Title"
        onKeyDown={handleEnterKey}
        onChange={handlePostTitle}
        value={postData.title}
      ></textarea>
      <div className="h-[1px] w-full bg-black my-6"></div>
      {postData.image ? (
        <div className="relative group">
          <div className="bg-white border border-neutral-200 rounded-md p-1 flex flex-row shadow-xl absolute left-1/2 -translate-x-1/2 top-2">
            <input id="update-post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
            <label
              htmlFor="update-post-image"
              className="cursor-pointer text-black p-[0.125rem] duration-300 hover:bg-wix-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]"
            >
              <Replace className="w-6 h-6" />
            </label>
            <div className="w-[1px] bg-neutral-200 h-auto mx-1"></div>
            <button className="p-[0.125rem] duration-300 hover:bg-wix-100" onClick={handleRemovePostImage}>
              <Delete className="w-6 h-6" />
            </button>
            <div className="w-[1px] bg-neutral-200 h-auto mx-1"></div>
            <button className="p-[0.125rem] duration-300 hover:bg-wix-100">
              <Settings className="w-6 h-6" />
            </button>
          </div>
          <Image src={postData.image} alt="" width={740} height={416.25} className="aspect-video w-full object-cover object-top" loading="lazy" />
        </div>
      ) : (
        <>
          <input id="post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
          <label
            htmlFor="post-image"
            className="bg-wix-100 aspect-video block p-4 cursor-pointer duration-300 hover:bg-wix-200 peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]"
          >
            <div className="border border-wix-300 border-dashed h-full flex items-center justify-center">
              <div className="text-wix-300 text-xl">Add photo</div>
            </div>
          </label>
        </>
      )}
      <input
        type="text"
        className="mt-4 h-full focus:outline-none w-full text-center text-[0.8125rem] text-neutral-600 placeholder:text-neutral-400"
        placeholder="Add image source"
      />
    </div>
  );
};

export default Post;
