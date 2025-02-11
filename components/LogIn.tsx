import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-2 md:text-[3.5rem] md:font-bold md:mb-7">Log In</h1>
      <p className="text-center text-lg mb-8">
        Don't have an account?{" "}
        <Link href="?view=sign-up" className="text-base text-wix-300 whitespace-nowrap">
          Sign Up
        </Link>
      </p>
      <form className="flex flex-col gap-4 max-w-80 mx-auto">
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
        <div>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder="Password"
            required
          />
        </div>
        <Link
          href="?view=forgot-password"
          className="text-sm underline w-fit my-6 whitespace-nowrap"
        >
          Forgot Password?
        </Link>
        <button className="btn primary py-2 justify-center">Log In</button>
      </form>
    </>
  );
};

export default SignIn;
