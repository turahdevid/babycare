# rulesagent.md

# AI Agent Master Rules, Workflow, QA & Security Standard

## Purpose
Dokumen ini menjadi sumber aturan tunggal (Single Source of Truth) untuk seluruh AI Agent yang bekerja pada proyek berbasis T3 Stack.

Agent wajib mengikuti seluruh standar arsitektur, pengembangan, keamanan, pengujian, dan quality assurance yang didefinisikan di dokumen ini.

---

# Core Priorities

Urutan prioritas pengambilan keputusan:

1. Type Safety
2. Correctness
3. Maintainability
4. Scalability
5. Performance
6. Developer Experience

---

# Mandatory Technology Stack

## Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend
- tRPC
- Next.js Server Actions
- Prisma ORM

## Database
- MySQL

## Authentication
- Auth.js / NextAuth

## Validation
- Zod

## State Management
- TanStack Query
- Zustand (only if necessary)

## Testing
- Vitest
- React Testing Library
- Playwright

---

# Global Development Rules

## TypeScript Rules

### Required
- TypeScript only
- Strict Mode enabled
- No `any`
- Prefer inferred types from Prisma, Zod, tRPC

### Forbidden
- JavaScript files for application logic
- Unsafe type assertions
- Implicit any

---

## API Rules

### Internal API
Use:
- tRPC

Avoid:
- REST API unless absolutely necessary

### Mutations
Prefer:
- Server Actions

---

## Validation Rules

All inputs MUST be validated using Zod.

Required for:
- Forms
- API Inputs
- Query Params
- Server Actions
- External Payloads

---

## Database Rules

### Required
- Prisma ORM

### Forbidden
- Raw SQL without justification
- Database access inside React components

Database access only allowed in:
- server/*
- services/*
- repositories/*

---

# Architecture Standards

## Required Folder Structure

```text
src/
├── app/
├── server/
│   ├── api/
│   ├── auth/
│   └── db.ts
├── features/
├── components/
├── hooks/
├── lib/
├── schemas/
├── types/
├── utils/
```

## Feature-Based Architecture

Each business domain must be isolated.

```text
features/
├── users/
├── bookings/
├── customers/
└── finance/
```

---

# UI Standards

## Component Priority

1. shadcn/ui
2. Shared Components
3. Feature Components
4. Page Components

## Tailwind Rules

Required:
- Utility-first approach
- cn() helper
- Design tokens
- CSS variables

Forbidden:
- Inline styles
- Random colors
- Random spacing

---

# State Management Rules

Priority:

1. TanStack Query (server state)
2. useState (local state)
3. Zustand (shared state)

Avoid overusing Zustand.

---

# Form Standards

Required Stack:

- React Hook Form
- Zod
- shadcn/ui Form Components

---

# Authentication Rules

Required:
- Auth.js / NextAuth

Must Validate:
- Session
- User Identity
- Authorization

Never trust client-side session only.

---

# Error Handling Standards

Every error must:

1. Be logged
2. Be typed
3. Be user-friendly

Required pattern:

```ts
try {
} catch (error) {
  logger.error(error);
  throw new Error("User friendly message");
}
```

---

# Documentation Requirements

Every feature must document:

- Purpose
- Business Rules
- Dependencies
- Data Flow
- API Contracts
- Validation Rules

---

# Deprecated API Policy

Before implementation verify:

- Latest Next.js docs
- Latest T3 recommendations
- Latest Prisma docs
- Latest shadcn/ui docs
- Latest Tailwind docs

If deprecated:

```text
STOP
↓
Find Official Replacement
↓
Refactor
↓
Continue
```

---

# Mandatory Development Workflow

```text
START
↓
Analyze Requirements
↓
Identify Business Domain
↓
Identify Existing Feature
↓
Reuse Existing Components
↓
Design Solution
↓
Validate Against Standards
↓
Create/Update Zod Schemas
↓
Create/Update Types
↓
Implement Prisma Logic
↓
Implement tRPC Procedures
↓
Implement Server Actions
↓
Implement Services
↓
Implement UI
↓
Implement Validation
↓
Implement Error Handling
↓
Create Tests
↓
Run Type Check
↓
Run Lint
↓
Run Tests
↓
Verify No Deprecated APIs
↓
Performance Review
↓
Update Documentation
↓
FINAL REVIEW
↓
QA MODE
↓
COMPLETE
```

---

# Definition of Done (DoD)

A task is complete only if:

- TypeScript used everywhere
- No any
- Strict mode maintained
- T3 conventions followed
- Clean architecture respected
- Feature architecture respected
- Prisma used correctly
- tRPC used correctly
- Zod validation implemented
- React Hook Form used
- Error handling implemented
- Tests updated
- Lint passes
- Typecheck passes
- Tests pass
- No deprecated APIs
- Documentation updated
- Production-ready

---

# Mandatory QA Mode

After implementation agent MUST enter QA Mode automatically.

Workflow:

```text
Implementation
↓
Code Review
↓
Security Review
↓
Edge Case Analysis
↓
Automated Testing
↓
Performance Review
↓
Type Safety Validation
↓
Final QA Report
```

---

# Phase 1 — Code Review

Validate:

## Architecture
- Separation of concerns
- Business logic outside UI
- Database access outside UI
- Reusable abstractions

## Code Quality
- No duplication
- No dead code
- No unused imports
- No hardcoded secrets
- Consistent naming

## Type Safety
- No any
- No unsafe casts
- Zod validation exists

---

# Phase 2 — Security Review

Validate:

## Authentication
- Session validation
- Route protection

## Authorization
- RBAC enforcement
- User data isolation

## Input Validation
- Zod everywhere

## SQL Injection
- Prisma usage
- Parameterized queries

## XSS
- No unsafe HTML rendering

## CSRF
- Protected state-changing actions

## Secrets
- No exposed tokens
- No exposed API keys

## File Upload Security
- File type validation
- File size validation

## Rate Limiting
- Login protection
- Public API protection

---

# Phase 3 — Business Logic Review

Check:

- Invalid data creation
- Duplicate records
- Incorrect calculations
- Race conditions
- Inconsistent state

---

# Phase 4 — Edge Cases

Validate:

## Empty States
- No data
- Empty forms
- Empty responses

## Boundary Tests
- Min values
- Max values
- Large inputs

## Invalid Inputs
- Null
- Undefined
- Invalid IDs
- Invalid dates

## Concurrency
- Double submit
- Parallel updates
- Race conditions

---

# Phase 5 — Automated Testing

Required:

## Unit Tests
- Services
- Utilities
- Validators
- Business logic

Coverage:
- Minimum 80%
- Target 90%+

## Integration Tests
- tRPC
- Database
- Auth
- Authorization

## Component Tests
- Forms
- Tables
- Dialogs
- Buttons

## E2E Tests
- Login
- Logout
- Create
- Edit
- Delete
- Dashboard

---

# Performance Review

## Prisma
- No N+1 queries
- Proper indexing
- Pagination

## React
- Avoid re-renders
- Prefer Server Components
- Minimize Client Components

---

# Accessibility Review

Target:
- WCAG AA

Validate:
- Labels
- Keyboard navigation
- Semantic HTML
- Accessible forms

---

# Required QA Report Format

```markdown
# QA Report

## Feature
<feature-name>

## Code Review
PASS / FAIL

## Security Review
PASS / FAIL

### Vulnerabilities Found
- item

## Edge Cases Tested
- item

## Automated Tests Added
- Unit
- Integration
- Component
- E2E

## Coverage
85%

## Performance Review
PASS / FAIL

## Accessibility Review
PASS / FAIL

## Final Status
READY FOR PRODUCTION
```

---

# Completion Rules

Never respond:

```text
Task completed.
```

Always respond:

```text
Implementation completed.

QA review completed.
Security review completed.
Automated tests generated.
All validations passed.

Ready for production.
```