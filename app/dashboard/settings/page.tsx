import Image from "next/image";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import PageTableH2 from "@/components/PageTableH2";
import AvatarIcon from "@/components/AvatarIcon";
import Button from "@/components/Button";
import Label from "@/components/Label";
import { getUserDetails } from "@/lib/data";
import { X } from "@wix/wix-ui-icons-common";

export default async function SettingsPage() {
  const user = await getUserDetails();

  return (
    <PageSection>
      <PageHeader>
        <PageH1 text="Account Settings" />
        <PageSubHeading>View and update your account details, profile and more.</PageSubHeading>
      </PageHeader>
      <PageTable>
        <PageTableHeader>
          <PageTableH2 text="Account info" />
        </PageTableHeader>
        <div className="px-6 py-[0.9375rem] pb-6 bg-white rounded-b-md mb-7 flex items-center gap-6">
          <div className="flex items-center gap-6 w-full max-w-4xl mr-auto">
            <div className="w-full">
              <div className="mb-6">
                <Label text="First name" />
                <div className="bordered-box">{user?.firstName}</div>
              </div>
              <Label text="Last name" />
              <div className="bordered-box">{user?.lastName}</div>
            </div>
            <div className="flex-none">
              <Label className="text-center" text="Image" />
              {user?.profileImage ? (
                <Image src={user.profileImage} width={135} height={135} alt="" className="w-[5.625rem] h-[5.625rem] mt-2 rounded-full object-cover" />
              ) : (
                <AvatarIcon className="w-[5.625rem] h-[5.625rem] mt-2" />
              )}
            </div>
          </div>
          <Button type="secondary" size="small">
            Update Profile
          </Button>
        </div>
        <PageTableHeader>
          <PageTableH2 text="Login info" />
        </PageTableHeader>
        <div className="px-6 py-[0.9375rem] pb-6 bg-white rounded-b-md">
          <Label text="Account email" />
          <div className="flex items-center gap-6">
            <div className="bordered-box w-full max-w-4xl mr-auto">{user?.email}</div>
            <Button type="secondary" size="small">
              Edit Email
            </Button>
          </div>
          <div className="mt-6 mb-5 h-[1px] bg-neutral-200"></div>
          <Label text="Password" />
          <div className="flex items-center gap-6">
            <div className="bordered-box w-full max-w-4xl mr-auto">• • • • • • • •</div>
            <Button type="secondary" size="small">
              Edit Password
            </Button>
          </div>
        </div>
      </PageTable>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#162d3da8] flex items-center justify-center z-10 px-[3.375rem] py-12">
        <div className="flex-none w-[31.875rem] bg-white py-[1.125rem] px-6 rounded-md relative">
          <h3 className="font-bold text-xl mb-6">Change account details</h3>
          <form action="">
            <Label text="Update your first name" />
            <input type="text" className="bordered-box w-full mb-6" />
            <Label text="Update your last name" />
            <input type="text" className="bordered-box w-full mb-6" />
            <Label text="Update your image" />
            <input type="file" className="bordered-box w-full mb-8" />
            <Button size="small" type="primary" className="ml-auto">
              Update
            </Button>
          </form>
          <Button type="secondary" className="absolute top-[1.125rem] right-6">
            <X size={28} />
          </Button>
        </div>
      </div>
    </PageSection>
  );
}
