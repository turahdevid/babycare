import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

import { db } from "~/server/db";
import { verifyPassword } from "~/server/auth/password";
import type { Role } from "../../../generated/prisma";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: Role;
    email?: string | null;
  }
}

function isRole(value: unknown): value is Role {
  return value === "ADMIN" || value === "MIDWIFE";
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const loginSchema = z.object({
  email: z.string().email("Invalid email format").trim(),
  password: z.string().min(1, "Password is required"),
});

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);

          if (!validatedFields.success) {
            return null;
          }

          const { email, password } = validatedFields.data;

          const user = await db.user.findUnique({
            where: { email },
            select: {
              id: true,
              email: true,
              password: true,
              role: true,
              emailVerified: true,
            },
          });

          if (!user) {
            return null;
          }

          if (!user.emailVerified) {
            return null;
          }

          if (!user.password) {
            return null;
          }

          if (!user.email) {
            return null;
          }

          const isPasswordValid = await verifyPassword(password, user.password);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            role: user.role,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      const tokenId = token.id;
      const tokenEmail = token.email;
      const tokenRole = token.role;

      if (typeof tokenId !== "string") return session;
      if (typeof tokenEmail !== "string") return session;
      if (!isRole(tokenRole)) return session;

      session.user.id = tokenId;
      session.user.email = tokenEmail;
      session.user.role = tokenRole;

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;
