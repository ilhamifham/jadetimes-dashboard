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
import UpdateProfileButton from "@/components/UpdateProfileButton";

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
                <Image
                  src={user.profileImage}
                  width={135}
                  height={135}
                  alt=""
                  className="w-[5.625rem] h-[5.625rem] mt-2 rounded-full object-cover object-top"
                />
              ) : (
                <AvatarIcon className="w-[5.625rem] h-[5.625rem] mt-2" />
              )}
            </div>
          </div>
          <UpdateProfileButton user={user} />
        </div>
        <PageTableHeader>
          <PageTableH2 text="Login info" />
        </PageTableHeader>
        <div className="px-6 py-[0.9375rem] pb-6 bg-white rounded-b-md">
          <Label text="Account email" />
          <div className="flex items-center gap-6">
            <div className="bordered-box w-full max-w-4xl mr-auto">{user?.email}</div>
            <Button type="secondary" size="small" status={true}>
              Edit Email
            </Button>
          </div>
          <div className="mt-6 mb-5 h-[1px] bg-neutral-200"></div>
          <Label text="Password" />
          <div className="flex items-center gap-6">
            <div className="bordered-box w-full max-w-4xl mr-auto">• • • • • • • •</div>
            <Button type="secondary" size="small" status={true}>
              Edit Password
            </Button>
          </div>
        </div>
      </PageTable>
    </PageSection>
  );
}
