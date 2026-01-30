import { db } from "../src/server/db";
import { hashPassword } from "../src/server/auth/password";

type Role = "ADMIN" | "MIDWIFE";

function isRole(value: string): value is Role {
  return value === "ADMIN" || value === "MIDWIFE";
}

async function createUser(
  email: string,
  password: string,
  role: Role,
  name?: string,
) {
  try {
    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        name,
        emailVerified: new Date(),
      },
    });

    process.stdout.write(
      `User created successfully\nID: ${user.id}\nEmail: ${user.email ?? ""}\nRole: ${user.role}\nName: ${user.name ?? ""}\n`,
    );
  } catch {
    process.stderr.write("Error creating user\n");
  } finally {
    await db.$disconnect();
  }
}

const email = process.argv[2];
const password = process.argv[3];
const roleValue = process.argv[4];
const name = process.argv[5];

if (!email || !password || !roleValue) {
  process.stderr.write(
    "Usage: tsx scripts/create-user.ts <email> <password> <role> [name]\n",
  );
  process.stderr.write(
    'Example: tsx scripts/create-user.ts admin@example.com password123 ADMIN "Admin User"\n',
  );
  process.exit(1);
}

if (!isRole(roleValue)) {
  process.stderr.write("Role must be either ADMIN or MIDWIFE\n");
  process.exit(1);
}

void createUser(email, password, roleValue, name);
