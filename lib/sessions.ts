"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

type sessionPayload = {
  userId: string;
  userRole: string;
};

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// encrypt
export async function encrypt(payload: sessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(encodedKey);
}

// decrypt
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    if (error) {
      return;
    }
  }
}

// create session
export async function createSession(userId: string, userRole: string) {
  const session = await encrypt({ userId, userRole });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}

// verify session
export async function verifySession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = await decrypt(session);

  return payload;
}

// delete session
export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}
