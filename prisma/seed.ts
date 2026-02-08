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

  const treatmentSeeds: {
    name: string;
    category: "BABY" | "KIDS";
    durationMinutes: number;
    basePrice: number;
  }[] = [
    // Baby treatments
    { name: "Baby Massage", category: "BABY", durationMinutes: 30, basePrice: 80_000 },
    { name: "Baby Spa", category: "BABY", durationMinutes: 60, basePrice: 185_000 },
    { name: "Immune Booster Massage", category: "BABY", durationMinutes: 45, basePrice: 105_000 },
    { name: "Happy Tummy Massage", category: "BABY", durationMinutes: 45, basePrice: 105_000 },
    { name: "Gundul", category: "BABY", durationMinutes: 30, basePrice: 60_000 },
    { name: "C & F Massage", category: "BABY", durationMinutes: 45, basePrice: 130_000 },
    { name: "C & F Therapy", category: "BABY", durationMinutes: 60, basePrice: 185_000 },
    // Kids treatments
    { name: "Kids Massage", category: "KIDS", durationMinutes: 30, basePrice: 90_000 },
    { name: "Kids Spa", category: "KIDS", durationMinutes: 60, basePrice: 200_000 },
    { name: "Bubble Bath", category: "KIDS", durationMinutes: 45, basePrice: 115_000 },
    { name: "Immune Booster Massage", category: "KIDS", durationMinutes: 45, basePrice: 115_000 },
    { name: "Happy Tummy Massage", category: "KIDS", durationMinutes: 45, basePrice: 115_000 },
    { name: "C & F Massage", category: "KIDS", durationMinutes: 45, basePrice: 150_000 },
    { name: "C & F Therapy", category: "KIDS", durationMinutes: 60, basePrice: 200_000 },
  ];

  let treatmentCount = 0;
  for (const t of treatmentSeeds) {
    const existing = await db.treatment.findFirst({
      where: { name: t.name, category: t.category, deletedAt: null },
      select: { id: true },
    });

    if (!existing) {
      await db.treatment.create({
        data: {
          name: t.name,
          category: t.category,
          durationMinutes: t.durationMinutes,
          basePrice: t.basePrice,
          isActive: true,
        },
      });
      treatmentCount++;
    }
  }

  process.stdout.write(
    `Seed completed.\n- Admin: ${admin.email ?? ""}\n- Midwife: ${midwife.email ?? ""}\n- Treatments created: ${treatmentCount}\n`,
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
