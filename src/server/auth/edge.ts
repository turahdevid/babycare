import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe auth config for middleware.
 * Does NOT import bcrypt or Prisma — only decodes JWT sessions.
 */
const edgeConfig = {
  providers: [],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token }) {
      return token;
    },
    session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }
      if (typeof token.email === "string") {
        session.user.email = token.email;
      }
      if (token.role === "ADMIN" || token.role === "MIDWIFE") {
        (session.user as unknown as Record<string, unknown>).role = token.role;
      }
      return session;
    },
  },
  trustHost: true,
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;

export const { auth } = NextAuth(edgeConfig);
