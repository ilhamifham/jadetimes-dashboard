import { verifySession } from "@/lib/sessions";

export async function getUserRole() {
  const session = await verifySession();

  if (session) {
    return session?.userRole;
  }
}
