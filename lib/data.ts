import { verifySession } from "@/lib/sessions";
import { prisma } from "@/lib/prisma";

export async function getUserRole() {
  const session = await verifySession();

  if (session) {
    const userId = parseInt(session.userId as string);
    const userRole = await prisma.user.findUnique({
      where: { id: userId },
    });

    return userRole?.role;
  }
}

export async function getUserDetails() {
  const session = await verifySession();

  if (session) {
    const userId = parseInt(session.userId as string);
    const userRole = await prisma.user.findUnique({
      where: { id: userId },
    });

    return {
      email: userRole?.email,
      firstName: userRole?.firstName,
      lastName: userRole?.lastName,
      profileImage: userRole?.profileImage,
    };
  }
}
