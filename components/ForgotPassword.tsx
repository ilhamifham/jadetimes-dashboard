"use client"

import GoBackButton from "@/components/GoBackButton";

const ForgotPassword = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-2 md:text-[3.5rem] md:font-bold md:mb-7">
        Reset Password
      </h1>
      <p className="text-center text-lg mb-8">
        Enter your login email and we'll send you a link to reset your password
      </p>
      <div className="max-w-80 mx-auto">
        <form className="flex flex-col gap-4" action={(formData: FormData) => console.log(formData.get("email"))}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="Email"
              required
            />
          </div>
          <button className="btn primary py-2 justify-center mt-6">Send</button>
        </form>
        <GoBackButton />
      </div>
    </>
  );
};

export default ForgotPassword;
