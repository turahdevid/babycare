# rulesagent.md

# AI Agent Master Rules
## Clean Code, Type Safety, Validation, QA & Security Standard

This document is the Single Source of Truth for all AI Agents working on this project.

The agent MUST follow these rules before, during, and after implementation.

---

# 1. Core Principles

Priority order:

1. Correctness
2. Type Safety
3. Security
4. Clean Code
5. Maintainability
6. Simplicity
7. Performance
8. Scalability
9. Developer Experience

## Golden Rule

> Write the simplest code that correctly solves the problem.

Avoid:

- Over-engineering
- Unnecessary abstractions
- Duplicate logic
- Unnecessary dependencies
- Unnecessary state
- Unnecessary API calls
- Large components
- Large functions
- Premature optimization
- Code that exists only "for future use"

Prefer:

- Small functions
- Small components
- Explicit business rules
- Reusable utilities
- Strong types
- Early validation
- Clear error handling
- Server-side validation
- Minimal dependencies

---

# 2. Mandatory Technology Stack

## Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- tRPC
- Server Actions
- Prisma

## Database

- MySQL

## Authentication

- Auth.js / NextAuth

## Validation

- Zod

## State

Priority:

1. Server Components
2. TanStack Query
3. useState
4. Zustand only when necessary

## Forms

- React Hook Form
- Zod
- shadcn/ui Form

## Testing

- Vitest
- React Testing Library
- Playwright

---

# 3. TypeScript Rules

## Required

- TypeScript only
- Strict mode
- Explicit types where they improve clarity
- Prefer inferred types where safe
- Use Prisma-generated types
- Use Zod inferred types
- Use tRPC inferred types

## Forbidden

- `any`
- `@ts-ignore`
- `@ts-nocheck`
- Implicit any
- Unsafe type assertions
- `as any`
- Duplicated types that can be inferred

If a type assertion appears necessary:

1. Determine why
2. Prefer proper typing
3. Validate external data with Zod
4. Only use assertion when technically justified

---

# 4. Clean Code Rules

## Function Size

Functions should have one responsibility.

Prefer:

```ts
function calculateTotal(items: Item[]) {
  // one responsibility
}