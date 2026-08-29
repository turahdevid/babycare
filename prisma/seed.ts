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

  // Seed sample customer, baby, and reservations with CASH and TRANSFER
  let sampleCustomer = await db.customer.findFirst({
    where: { motherPhone: "081234567890" },
  });

  if (!sampleCustomer) {
    sampleCustomer = await db.customer.create({
      data: {
        motherName: "Ibu Amanda",
        motherPhone: "081234567890",
        motherEmail: "amanda@example.com",
        address: "Jl. Melati No. 12, Jakarta",
      },
    });
  }

  let sampleBaby = await db.baby.findFirst({
    where: { customerId: sampleCustomer.id, name: "Baby Kenzo" },
  });

  if (!sampleBaby) {
    sampleBaby = await db.baby.create({
      data: {
        customerId: sampleCustomer.id,
        name: "Baby Kenzo",
        gender: "MALE",
        birthPlace: "Jakarta",
        birthDate: new Date(now.getFullYear(), now.getMonth() - 6, 10),
      },
    });
  }

  const allTreatments = await db.treatment.findMany({ take: 4 });

  if (allTreatments.length >= 2) {
    const existingRes1 = await db.reservation.findFirst({
      where: { id: "sample-res-cash" },
    });

    if (!existingRes1) {
      const t1 = allTreatments[0]!;
      const t1Price = t1.basePrice.toNumber();
      await db.reservation.create({
        data: {
          id: "sample-res-cash",
          customerId: sampleCustomer.id,
          babyId: sampleBaby.id,
          midwifeId: midwife.id,
          startAt: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0),
          endAt: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
          status: "COMPLETED",
          serviceType: "OUTLET",
          paymentMethod: "CASH",
          subtotalPrice: t1Price,
          totalPrice: t1Price,
          items: {
            create: [
              {
                treatmentId: t1.id,
                babyId: sampleBaby.id,
                quantity: 1,
                unitPrice: t1.basePrice,
                durationMinutes: t1.durationMinutes,
              },
            ],
          },
        },
      });
    }

    const existingRes2 = await db.reservation.findFirst({
      where: { id: "sample-res-transfer" },
    });

    if (!existingRes2) {
      const t2 = allTreatments[1]!;
      const t2Price = t2.basePrice.toNumber();
      await db.reservation.create({
        data: {
          id: "sample-res-transfer",
          customerId: sampleCustomer.id,
          babyId: sampleBaby.id,
          midwifeId: midwife.id,
          startAt: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0),
          endAt: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
          status: "COMPLETED",
          serviceType: "OUTLET",
          paymentMethod: "TRANSFER",
          subtotalPrice: t2Price,
          totalPrice: t2Price,
          items: {
            create: [
              {
                treatmentId: t2.id,
                babyId: sampleBaby.id,
                quantity: 1,
                unitPrice: t2.basePrice,
                durationMinutes: t2.durationMinutes,
              },
            ],
          },
        },
      });
    }
  }

  process.stdout.write(
    `Seed completed.\n- Admin: ${admin.email ?? ""}\n- Midwife: ${midwife.email ?? ""}\n- Treatments created: ${treatmentCount}\n`,
  );
}

main()
  .catch((err) => {
    console.error("Seed error details:", err);
    process.stderr.write("Seed failed\n");
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
