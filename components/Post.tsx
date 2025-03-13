"use client";

import { Caudex } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import usePopover from "@/hooks/usePopover";
import { AlignLeft, AlignCenterHorizontally, Replace, Delete, Settings } from "@wix/wix-ui-icons-common";

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
    imageAltText: "",
    imageSource: "",
    imageLeftAlign: false,
  });
  const [popover, popoverRef, togglePopover] = usePopover();

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
      <div>
        <div className={`${postData.imageLeftAlign ? "float-left mr-6 w-1/2" : "w-full"}`}>
          {postData.image ? (
            <div className="relative group">
              <div className="bg-white border border-neutral-200 rounded-md p-1 flex flex-row shadow-xl absolute left-1/2 -translate-x-1/2 top-2">
                <input id="update-post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
                <label
                  htmlFor="update-post-image"
                  className="cursor-pointer text-black p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]"
                >
                  <Replace className="w-6 h-6" />
                </label>
                <div className="w-[1px] bg-neutral-200 h-auto mx-1"></div>
                <button
                  className="p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100"
                  onClick={() =>
                    setPostData({
                      ...postData,
                      imageLeftAlign: !postData.imageLeftAlign,
                    })
                  }
                >
                  {postData.imageLeftAlign ? <AlignCenterHorizontally className="w-6 h-6" /> : <AlignLeft className="w-6 h-6" />}
                </button>
                <div className="w-[1px] bg-neutral-200 h-auto mx-1"></div>
                <button className="p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100" onClick={handleRemovePostImage}>
                  <Delete className="w-6 h-6" />
                </button>
                <div className="w-[1px] bg-neutral-200 h-auto mx-1"></div>
                <div className="relative flex">
                  <button className="p-[0.125rem] rounded-sm duration-300 hover:bg-wix-100" onClick={togglePopover}>
                    <Settings className="w-6 h-6" />
                  </button>
                  {popover && (
                    <div
                      ref={popoverRef as React.RefObject<HTMLDivElement>}
                      className="absolute border border-neutral-200 shadow-xl -top-1 bg-white left-10 rounded-md px-4 py-2 w-72"
                    >
                      <div className="font-bold mb-2">Image</div>
                      <Image
                        src={postData.image}
                        alt={postData.imageAltText}
                        width={382}
                        height={postData.imageLeftAlign ? 573 : 214.875}
                        className={`${postData.imageLeftAlign ? "aspect-[2/3]" : "aspect-video"} object-cover object-top mb-2 rounded-md`}
                        loading="lazy"
                      />
                      <label htmlFor="image-alt" className="text-sm mb-1">
                        Alt text
                      </label>
                      <textarea
                        id="image-alt"
                        className="block border border-wix-200 rounded-md w-full resize-none mb-2 px-2"
                        onKeyDown={handleEnterKey}
                        onChange={(event) =>
                          setPostData({
                            ...postData,
                            imageAltText: event.target.value,
                          })
                        }
                        value={postData.imageAltText}
                      ></textarea>
                    </div>
                  )}
                </div>
              </div>
              <Image
                src={postData.image}
                alt={postData.imageAltText}
                width={postData.imageLeftAlign ? 555 : 1110}
                height={postData.imageLeftAlign ? 832.5 : 624.375}
                className={`${postData.imageLeftAlign ? "aspect-[2/3]" : "aspect-video"} object-cover object-top`}
                loading="lazy"
              />
            </div>
          ) : (
            <>
              <input id="post-image" type="file" accept="images/*" className="peer sr-only" onChange={handlePostImage} />
              <label
                htmlFor="post-image"
                className={`${
                  postData.imageLeftAlign ? "aspect-[2/3]" : "aspect-video"
                } bg-wix-100 block p-4 cursor-pointer duration-300 hover:bg-wix-200 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:duration-0 peer-focus-visible:outline-[#1e90ff]`}
              >
                <div className="border border-wix-300 border-dashed h-full flex items-center justify-center">
                  <div className="text-wix-300 text-xl">Add photo</div>
                </div>
              </label>
            </>
          )}
          <input
            type="text"
            className={`${
              postData.imageLeftAlign ? "mt-4" : "my-4"
            } focus:outline-none w-full text-center text-[0.8125rem] text-neutral-600 placeholder:text-neutral-400`}
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
        <div className="text-sm">
          <p>
            Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the
            Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd
            better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld;
            maybe that's how y'get your kicks. You and your good-time buddies.
          </p>
          <br />
          <p>
            Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the
            Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd
            better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld;
            maybe that's how y'get your kicks. You and your good-time buddies.
          </p>
          <br />
          <p>
            Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the
            Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd
            better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld;
            maybe that's how y'get your kicks. You and your good-time buddies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
