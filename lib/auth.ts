import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function logIn(
  event: React.FormEvent,
  emailRef: React.RefObject<HTMLInputElement | null>,
  passwordRef: React.RefObject<HTMLInputElement | null>,
  setError: React.Dispatch<React.SetStateAction<{ email?: string; password?: string; server?: string } | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  regex: RegExp,
  router: AppRouterInstance
) {
  event.preventDefault();

  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;

  if (!email && !password) {
    setError({
      email: "Email required",
      password: "Password required",
    });
    return;
  }

  if (!email) {
    setError({
      email: "Email required",
    });
    return;
  }

  if (!regex.test(email) && !password) {
    setError({
      email: "Invalid email format",
      password: "Password required",
    });
    return;
  }

  if (!regex.test(email)) {
    setError({
      email: "Invalid email format",
    });
    return;
  }

  if (!password) {
    setError({
      password: "Password required",
    });
    return;
  }

  setError(undefined);

  const formData = {
    email,
    password,
  };

  try {
    setIsLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();

      setIsLoading(false);

      setError({
        email: data.email,
        password: data.password,
      });
    } else {
      router.refresh();
    }
  } catch (error: unknown) {
    setIsLoading(false);

    setError({
      server: "An unexpected error occurred",
    });

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}

export async function logOut(event: React.FormEvent, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, router: AppRouterInstance) {
  event.preventDefault();

  try {
    setIsLoading(true);

    const response = await fetch("/api/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.refresh();
    }
  } catch (error: unknown) {
    setIsLoading(false);

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}

export async function resetPassword(
  event: React.FormEvent,
  emailRef: React.RefObject<HTMLInputElement | null>,
  regex: RegExp,
  setError: React.Dispatch<React.SetStateAction<{ email?: string; success?: string; server?: string } | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  event.preventDefault();

  const email = emailRef.current?.value;

  if (!email) {
    setError({
      email: "Email required",
    });
    return;
  }

  if (!regex.test(email)) {
    setError({
      email: "Invalid email format",
    });
    return;
  }

  setError(undefined);

  const formData = {
    email,
  };

  try {
    setIsLoading(true);

    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      setError({
        email: data.email,
      });
    } else {
      setError({
        success: data.email,
      });

      if (emailRef.current) {
        emailRef.current.value = "";
      }
    }
  } catch (error: unknown) {
    setIsLoading(false);

    setError({
      server: "An unexpected error occurred",
    });

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}
