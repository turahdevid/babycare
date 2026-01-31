import { PrismaClient } from "../generated/prisma";
import { hashPassword } from "../src/server/auth/password";

const db = new PrismaClient();

async function main() {
  const now = new Date();

  const adminEmail = "admin@example.com";
  const midwifeEmail = "midwife@example.com";

  const adminPassword = await hashPassword("SecurePass123");
  const midwifePassword = await hashPassword("SecurePass123");

  const admin = await db.user.upsert({
    where: { email: adminEmail },
    update: {
      password: adminPassword,
      role: "ADMIN",
      emailVerified: now,
      name: "Admin User",
    },
    create: {
      email: adminEmail,
      password: adminPassword,
      role: "ADMIN",
      emailVerified: now,
      name: "Admin User",
    },
  });

  const midwife = await db.user.upsert({
    where: { email: midwifeEmail },
    update: {
      password: midwifePassword,
      role: "MIDWIFE",
      emailVerified: now,
      name: "Midwife User",
    },
    create: {
      email: midwifeEmail,
      password: midwifePassword,
      role: "MIDWIFE",
      emailVerified: now,
      name: "Midwife User",
    },
  });

  process.stdout.write(
    `Seed completed.\n- Admin: ${admin.email ?? ""}\n- Midwife: ${midwife.email ?? ""}\n`,
  );
}

main()
  .catch(() => {
    process.stderr.write("Seed failed\n");
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
