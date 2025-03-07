"use server";

import { verifySession } from "@/lib/sessions";
import { prisma } from "@/lib/prisma";

export async function getUserRole() {
  const session = await verifySession();

  if (session) {
    const userId = parseInt(session.userId as string);
    const userRole = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        role: true,
      },
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
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        profileImage: true,
      },
    });

    return user;
  }
}

export async function getAllUsers() {
  const session = await verifySession();

  if (session) {
    const userId = parseInt(session.userId as string);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        role: true,
      },
    });

    if (user?.role === "Owner") {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          profileImage: true,
          role: true,
        },
      });

      return users;
    }
  }
}
