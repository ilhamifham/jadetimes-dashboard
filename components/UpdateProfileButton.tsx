"use client";

import Image from "next/image";
import { FormEvent, ChangeEvent, useState } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import AvatarIcon from "@/components/AvatarIcon";
import { PhotoCamera, X } from "@wix/wix-ui-icons-common";
import useDialog from "@/hooks/useDialog";

type User = {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  profileImage: string | null | undefined;
};

const UpdateProfileButton = ({ user }: { user?: User }) => {
  const [dialog, openDialog, closeDialog] = useDialog();
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    profileImage: user?.profileImage,
  });
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(formData);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>, name: string) {
    if (name === "profileImage" && event.target.files) {
      const file = event.target.files[0];
      const MB = 100000;

      if (file.size > MB) {
        setError("Image should be below 1MB");
      }

      if (file && file.size < MB) {
        setError("");
        const reader = new FileReader();

        reader.onloadend = () => {
          setFormData({
            ...formData,
            profileImage: reader.result as string,
          });
        };

        reader.readAsDataURL(file);
      }
    } else if (name === "firstName" || name === "lastName") {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });
    }
  }

  function resetFormData() {
    setFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      profileImage: user?.profileImage,
    });
    setError("");
  }

  return (
    <>
      <Button type="secondary" size="small" onClick={openDialog}>
        Update Profile
      </Button>
      {dialog && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#162d3da8] flex items-center justify-center z-10 px-[3.375rem] py-12">
          <div className="flex-none w-[31.875rem] bg-white py-[1.125rem] px-6 rounded-md relative">
            <h3 className="font-bold text-xl mb-6">Update account details</h3>
            <form onSubmit={handleSubmit}>
              <Label text="Update your image" className="text-center" />
              <div className="mb-6 flex items-center justify-center">
                <div className="relative">
                  {formData.profileImage ? (
                    <Image
                      src={formData.profileImage}
                      alt=""
                      width={135}
                      height={135}
                      className="rounded-full w-[5.625rem] h-[5.625rem] object-cover object-top"
                    />
                  ) : (
                    <AvatarIcon className="w-[5.625rem] h-[5.625rem]" />
                  )}
                  <label htmlFor="profilePhoto" className="rounded-full absolute right-0 bottom-0" tabIndex={0}>
                    <PhotoCamera
                      size={28}
                      className="w-7 h-7 border border-wix-200 rounded-full text-wix-300 bg-white cursor-pointer shadow-lg duration-300 hover:bg-wix-300 hover:text-white hover:border-wix-300"
                    />
                    <input
                      type="file"
                      name="profileImage"
                      accept="image/*"
                      id="profilePhoto"
                      className="hidden"
                      onChange={(event) => handleChange(event, "profileImage")}
                    />
                  </label>
                </div>
              </div>
              {error && <p className="text-red-600 text-sm text-center mb-6">{error}</p>}
              <Label text="Update your first name" />
              <input
                type="text"
                name="firstName"
                className="bordered-box w-full mb-6"
                value={formData.firstName}
                onChange={(event) => handleChange(event, "firstName")}
              />
              <Label text="Update your last name" />
              <input
                type="text"
                name="lastName"
                className="bordered-box w-full mb-8"
                defaultValue={formData.lastName}
                onChange={(event) => handleChange(event, "lastName")}
              />
              <Button size="small" type="primary" className="ml-auto">
                Update
              </Button>
            </form>
            <Button
              type="secondary"
              className="absolute top-[1.125rem] right-6"
              onClick={() => {
                closeDialog();
                resetFormData();
              }}
            >
              <X size={28} className="w-7 h-7" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfileButton;

// (event) => {
//   if (event.target.files) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       const base64Image = reader.result;

//       setFormData({
//         ...formData,
//         profileImage: base64Image as string,
//       });
//     };

//     reader.readAsDataURL(file);
//   }
// };
