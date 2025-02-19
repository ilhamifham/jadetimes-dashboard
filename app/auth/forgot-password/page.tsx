import ResetPasswordForm from "@/components/ResetPasswordForm";
import GoBackButton from "@/components/GoBackButton";

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="text-center text-4xl mb-2 md:text-[3.5rem] md:font-bold md:mb-7">
        Reset Password
      </h1>
      <p className="text-center text-lg mb-8">
        Enter your login email and we&apos;ll send you a link to reset your
        password
      </p>
      <div className="max-w-80 mx-auto">
        <ResetPasswordForm />
        <GoBackButton />
      </div>
    </>
  );
}
