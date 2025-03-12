import Image from "next/image";
import { getUserRole, getAllUsers } from "@/lib/data";
import PageSection from "@/components/PageSection";
import PageHeader from "@/components/PageHeader";
import PageH1 from "@/components/PageH1";
import PageSubHeading from "@/components/PageSubHeading";
import Button from "@/components/Button";
import PageTable from "@/components/PageTable";
import PageTableHeader from "@/components/PageTableHeader";
import PageTableH2 from "@/components/PageTableH2";
import NoPermission from "@/components/NoPermission";
import { Add } from "@wix/wix-ui-icons-common";
import AvatarIcon from "@/components/AvatarIcon";

export default async function WritersPage() {
  const role = await getUserRole();
  const users = await getAllUsers();

  if (role === "Guest Writer") {
    return <NoPermission />;
  }

  return (
    <PageSection>
      <PageHeader>
        <div className="flex items-center justify-between">
          <div>
            <PageH1 text="Writers" />
            <PageSubHeading>Manage writers for your blog, create and customize their public profiles.</PageSubHeading>
          </div>
          <Button type="primary" size="big">
            <Add className="-ml-[0.1875rem] w-6 h-6" />
            Add Writer
          </Button>
        </div>
      </PageHeader>
      <PageTable>
        <PageTableHeader isSticky top="top-[7.125rem]">
          <PageTableH2 text="All writers" />
        </PageTableHeader>
        <table className="block">
          <thead className="block">
            <tr className="py-[0.5625rem] px-6 flex items-center gap-6 text-sm bg-[#d6e6fe] border-y border-y-[#a8caff]">
              <th className="w-12"></th>
              <th className="flex-1 text-left">Name</th>
              <th className="flex-1 text-left">Role</th>
              <th className="flex-1 text-left">Post Count</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody className="block">
            {users?.map((user) => (
              <tr className="py-[0.9375rem] px-6 flex items-center gap-6 bg-white" key={user.id}>
                <td className="w-12 h-12">
                  {user.profileImage ? (
                    <Image
                      src={user.profileImage}
                      alt="profile image"
                      width={72}
                      height={72}
                      className="w-12 h-12 rounded-full object-cover object-top"
                    />
                  ) : (
                    <AvatarIcon className="w-12 h-12" />
                  )}
                </td>
                <td className="flex-1 font-medium">
                  {user.firstName} {user.lastName}
                </td>
                <td className="flex-1 text-sm text-neutral-700">{user.role}</td>
                <td className="flex-1 text-sm text-neutral-700">0 Posts</td>
                <td className="w-12"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageTable>
    </PageSection>
  );
}
