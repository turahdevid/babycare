import { env } from "~/env";
import { PrismaClient } from "../../generated/prisma";

export type { Prisma } from "../../generated/prisma";
export { ReservationStatus, ServiceType } from "../../generated/prisma";
export type { Customer, Baby, Treatment, User } from "../../generated/prisma";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
