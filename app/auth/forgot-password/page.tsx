import ResetPasswordForm from "@/components/ResetPasswordForm";
import GoBackButton from "@/components/GoBackButton";

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="text-center text-4xl md:text-[3.5rem] md:font-bold mb-2 md:mb-7">Reset Password</h1>
      <p className="text-center text-lg mb-8">Enter your login email and we&apos;ll send you a link to reset your password</p>
      <div className="max-w-80 mx-auto">
        <ResetPasswordForm />
        <GoBackButton className="rounded-full whitespace-nowrap font-medium flex items-center gap-[0.375rem] border border-wix-200 py-[0.3125rem] px-6 bg-white text-wix-300 duration-300 hover:bg-wix-300 hover:text-white hover:border-wix-300 w-full justify-center mt-3">
          Back
        </GoBackButton>
      </div>
    </>
  );
}
