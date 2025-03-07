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
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return {
      id: user?.id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      profileImage: user?.profileImage,
    };
  }
}

export async function getAllUsers() {
  const session = await verifySession();

  if (session) {
    const userId = parseInt(session.userId as string);
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user?.role === "Owner") {
      const users = await prisma.user.findMany();

      return users;
    }
  }
}
