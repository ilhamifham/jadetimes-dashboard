import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-2 md:text-[3.5rem] md:mb-7 md:font-bold">Sign Up</h1>
      <p className="text-center text-lg mb-8">
        Already have an account?{" "}
        <Link href="?view=sign-in" className="text-base text-wix-300 whitespace-nowrap">
          Log In
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
            type="email"
            name="confirmEmail"
            id="confirmEmail"
            className="input"
            placeholder="Confirm email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder="Choose a password"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="input"
            placeholder="Confirm password"
            required
          />
        </div>
        <button className="btn primary py-2 justify-center mt-6">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
