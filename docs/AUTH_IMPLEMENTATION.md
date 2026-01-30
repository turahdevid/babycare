# NextAuth Login Implementation

## Overview

Production-ready authentication system using NextAuth v5 with Credentials Provider, bcrypt password hashing, role-based access control, and JWT session strategy.

## Features

- ✅ Secure credential-based authentication (email + password)
- ✅ Bcrypt password hashing (12 salt rounds)
- ✅ Email verification requirement
- ✅ Role-based access control (ADMIN, MIDWIFE)
- ✅ JWT session strategy
- ✅ TypeScript strict mode compliance
- ✅ ESLint clean (no errors or warnings)
- ✅ Comprehensive input validation with Zod
- ✅ Secure error handling (no sensitive data leakage)

## Database Schema

### User Model

```prisma
enum Role {
    ADMIN
    MIDWIFE
}

model User {
    id            String    @id @default(cuid())
    name          String?
    email         String?   @unique
    emailVerified DateTime?
    image         String?
    password      String?
    role          Role      @default(MIDWIFE)
    accounts      Account[]
    sessions      Session[]
}
```

## File Structure

```
src/
├── server/
│   └── auth/
│       ├── config.ts          # NextAuth configuration
│       ├── password.ts        # Password utilities (hash, verify)
│       └── index.ts           # Auth exports
├── app/
│   ├── page.tsx              # Login page
│   └── (admin)/
│       ├── dashboard/        # Protected dashboard
│       └── example-auth/     # Auth example page
scripts/
└── create-user.ts            # User creation utility
```

## Implementation Details

### 1. Password Utilities (`src/server/auth/password.ts`)

```typescript
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
```

### 2. NextAuth Configuration (`src/server/auth/config.ts`)

**Key Features:**
- Credentials Provider with email/password
- Zod validation for inputs
- Email verification check
- Password verification with bcrypt
- JWT session with user ID, role, and email
- Custom sign-in page

**Security Measures:**
- All validation errors return `null` (no specific error messages to prevent user enumeration)
- Try-catch error handling
- Email trimming and format validation
- Password existence and verification checks
- Email verification requirement

### 3. Session Type Definitions

```typescript
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
      email: string;
    } & DefaultSession["user"];
  }
}
```

## Usage Examples

### 1. Creating Test Users

```bash
# Install tsx if not already installed
pnpm add -D tsx

# Create an admin user
pnpm tsx scripts/create-user.ts admin@example.com SecurePass123 ADMIN "Admin User"

# Create a midwife user
pnpm tsx scripts/create-user.ts midwife@example.com SecurePass123 MIDWIFE "Midwife User"
```

### 2. Protecting Server Components

```typescript
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function ProtectedPage() {
  const session = await auth();

  // Check if user is authenticated
  if (!session) {
    redirect("/");
  }

  // Access user information
  const userId = session.user.id;
  const userRole = session.user.role;
  const userEmail = session.user.email;

  return <div>Protected Content</div>;
}
```

### 3. Role-Based Access Control

```typescript
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function AdminOnlyPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  // Restrict to ADMIN role only
  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return <div>Admin Content</div>;
}
```

### 4. Checking Multiple Roles

```typescript
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function StaffPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const isStaff = session.user.role === "ADMIN" || session.user.role === "MIDWIFE";

  if (!isStaff) {
    redirect("/unauthorized");
  }

  return <div>Staff Content</div>;
}
```

### 5. Using Session in Client Components

```typescript
"use client";

import { useSession } from "next-auth/react";

export function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <p>Email: {session.user.email}</p>
      <p>Role: {session.user.role}</p>
    </div>
  );
}
```

## Security Best Practices

### Implemented

1. **Password Security**
   - Bcrypt with 12 salt rounds
   - Passwords never logged or exposed
   - Password field nullable (supports OAuth users)

2. **Input Validation**
   - Zod schema validation
   - Email format validation
   - Required field checks
   - String trimming

3. **User Validation**
   - Email existence check
   - Email verification requirement
   - Password existence check
   - Secure password comparison

4. **Error Handling**
   - Try-catch blocks
   - Generic error responses (prevent user enumeration)
   - Console error logging for debugging
   - No sensitive data in error messages

5. **Session Security**
   - JWT strategy (stateless)
   - User ID, role, and email in token
   - Type-safe session access

### Recommended Additions

1. **Rate Limiting**
   ```typescript
   // Add to authorize function
   // Check login attempts per IP/email
   // Implement exponential backoff
   ```

2. **Account Lockout**
   ```typescript
   // Add fields to User model:
   // - loginAttempts: Int @default(0)
   // - lockedUntil: DateTime?
   ```

3. **Password Requirements**
   ```typescript
   const passwordSchema = z
     .string()
     .min(8, "Password must be at least 8 characters")
     .regex(/[A-Z]/, "Password must contain uppercase letter")
     .regex(/[a-z]/, "Password must contain lowercase letter")
     .regex(/[0-9]/, "Password must contain number");
   ```

4. **Session Expiration**
   ```typescript
   session: {
     strategy: "jwt",
     maxAge: 30 * 24 * 60 * 60, // 30 days
   }
   ```

## Testing

### Manual Testing Steps

1. **Create Test User**
   ```bash
   pnpm tsx scripts/create-user.ts test@example.com password123 MIDWIFE "Test User"
   ```

2. **Test Login**
   - Navigate to `/`
   - Enter credentials
   - Verify redirect to dashboard

3. **Test Protected Routes**
   - Access `/admin/dashboard` without login → redirects to `/`
   - Login and access → shows dashboard

4. **Test Role Access**
   - Visit `/admin/example-auth` to see session details
   - Verify role-specific content displays correctly

### Example Test Cases

```typescript
// Test 1: Valid login
// Input: valid email + password
// Expected: User logged in, session created

// Test 2: Invalid email
// Input: nonexistent@example.com + any password
// Expected: Login fails, returns null

// Test 3: Invalid password
// Input: valid email + wrong password
// Expected: Login fails, returns null

// Test 4: Unverified email
// Input: valid email (emailVerified = null) + valid password
// Expected: Login fails, returns null

// Test 5: Role-based access
// Input: MIDWIFE user accessing ADMIN-only route
// Expected: Redirect to unauthorized page
```

## Environment Variables

Ensure `.env` contains:

```env
DATABASE_URL="mysql://user:password@localhost:3306/babycare"
AUTH_SECRET="your-secret-key-here"
AUTH_URL="http://localhost:3000"
```

Generate `AUTH_SECRET`:
```bash
openssl rand -base64 32
```

## Troubleshooting

### Issue: "Authorization error" in console

**Cause:** Database connection issue or Prisma query error

**Solution:** Check DATABASE_URL and ensure database is running

### Issue: Login fails with valid credentials

**Cause:** Email not verified (emailVerified is null)

**Solution:** Ensure user has emailVerified date when creating:
```typescript
emailVerified: new Date()
```

### Issue: Session not persisting

**Cause:** Missing AUTH_SECRET or AUTH_URL

**Solution:** Set environment variables correctly

### Issue: TypeScript errors in config.ts

**Cause:** Prisma client not generated

**Solution:** Run `pnpm prisma generate`

## Migration from Discord Provider

The original implementation used Discord OAuth. This has been completely replaced with:

- ❌ Removed: `DiscordProvider`
- ❌ Removed: `PrismaAdapter` (not needed for JWT strategy)
- ✅ Added: `CredentialsProvider`
- ✅ Added: JWT session strategy
- ✅ Added: Custom authorize function
- ✅ Added: Role-based session

## Next Steps

1. **Implement Login UI**
   - Form validation
   - Error message display
   - Loading states

2. **Add Password Reset**
   - Forgot password flow
   - Email verification
   - Token-based reset

3. **Add Registration**
   - User signup form
   - Email verification flow
   - Welcome email

4. **Enhance Security**
   - Rate limiting
   - Account lockout
   - 2FA support

## Support

For issues or questions:
1. Check ESLint output: `pnpm lint`
2. Check TypeScript: `pnpm typecheck`
3. Review console logs for authorization errors
4. Verify database schema matches Prisma schema
