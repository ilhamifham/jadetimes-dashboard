import { Refresh } from "@wix/wix-ui-icons-common";

export default function DashboardLoading() {
  return (
    <div className="bg-wix-100 w-full flex items-center justify-center">
      <div>
        <Refresh className="animate-spin text-wix-300" size={50} />
      </div>
    </div>
  );
}
