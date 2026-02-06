# Struktur Folder: src/app/(admin)

> Dokumentasi struktur folder untuk area admin aplikasi Baby Care Reservation.

---

## Arsitektur Route

```
src/app/(admin)/
│
├── dashboard/
│   ├── layout.tsx              # Nested layout: background + header + bottom nav
│   ├── page.tsx                # Dashboard home (ringkasan reservasi)
│   │
│   ├── _components/            # Shared components untuk dashboard area
│   │   ├── bottom-nav.tsx      # Bottom navigation (sticky)
│   │   ├── dashboard-header.tsx # Header dengan title + user menu
│   │   ├── glass-card.tsx      # Reusable glassmorphism card
│   │   ├── status-pill.tsx     # Status badge component
│   │   └── page-title.tsx      # Dynamic page title component
│   │
│   ├── reservation/
│   │   ├── page.tsx            # List reservasi + filter
│   │   ├── [id]/
│   │   │   └── page.tsx        # Detail reservasi
│   │   └── new/
│   │       └── page.tsx        # Form buat reservasi baru
│   │
│   ├── customer/
│   │   ├── page.tsx            # List customer + search
│   │   └── [id]/
│   │       └── page.tsx        # Detail customer + histori
│   │
│   ├── treatment/              # [ADMIN ONLY]
│   │   ├── page.tsx            # List treatment (master data)
│   │   └── [id]/
│   │       └── page.tsx        # Detail/edit treatment
│   │
│   ├── report/                 # [ADMIN ONLY]
│   │   └── page.tsx            # Laporan & analytics
│   │
│   └── account/
│       ├── page.tsx            # Data user (profile)
│       └── password/
│           └── page.tsx        # Ganti password
│
└── (deprecated)/
    └── example-auth/           # Contoh auth, bisa dihapus
        └── page.tsx
```

---

## Penjelasan Struktur

### 1. Route Group `(admin)`

- Semua halaman admin berada di dalam route group `(admin)`
- Route group tidak mempengaruhi URL path
- URL: `/dashboard`, `/dashboard/reservation`, dll

### 2. Nested Layout `dashboard/layout.tsx`

Layout ini menyediakan:
- **Background** pastel gradient dengan blur
- **Header** dengan title dinamis dan user menu
- **Bottom Navigation** sticky untuk navigasi utama
- **Padding** yang konsisten untuk konten

Semua halaman di bawah `/dashboard/*` otomatis menggunakan layout ini.

### 3. Folder `_components`

- Prefix `_` artinya folder ini **tidak menjadi route**
- Berisi komponen yang digunakan bersama di area dashboard
- Import: `from "./_components/glass-card"`

### 4. Dynamic Routes

- `[id]` adalah dynamic segment
- Contoh: `/dashboard/reservation/abc123` → `params.id = "abc123"`

---

## Mapping Fitur ke Route

| Fitur | Route | Role |
|-------|-------|------|
| Dashboard Home | `/dashboard` | ALL |
| List Reservasi | `/dashboard/reservation` | ALL |
| Detail Reservasi | `/dashboard/reservation/[id]` | ALL |
| Buat Reservasi | `/dashboard/reservation/new` | ADMIN |
| List Customer | `/dashboard/customer` | ALL |
| Detail Customer | `/dashboard/customer/[id]` | ALL |
| List Treatment | `/dashboard/treatment` | ADMIN |
| Detail Treatment | `/dashboard/treatment/[id]` | ADMIN |
| Report | `/dashboard/report` | ADMIN |
| Data User | `/dashboard/account` | ALL |
| Ganti Password | `/dashboard/account/password` | ALL |

---

## Bottom Navigation Items

| Icon | Label | Route | Visible |
|------|-------|-------|---------|
| Home | Home | `/dashboard` | ALL |
| Calendar | Reservasi | `/dashboard/reservation` | ALL |
| Baby | Customer | `/dashboard/customer` | ALL |
| Chart | Report | `/dashboard/report` | ADMIN only |

---

## Konvensi Penamaan

### Files

- `page.tsx` - Halaman utama route
- `layout.tsx` - Layout untuk route dan children
- `loading.tsx` - Loading UI (optional)
- `error.tsx` - Error boundary (optional)
- `not-found.tsx` - 404 page (optional)

### Components

- PascalCase untuk komponen: `GlassCard.tsx` atau `glass-card.tsx`
- Prefix dengan fitur jika spesifik: `reservation-form.tsx`

### Folders

- kebab-case untuk route: `reservation/`, `customer/`
- `_` prefix untuk non-route folders: `_components/`, `_hooks/`

---

## File Size Guidelines

- **page.tsx**: < 300 lines (extract ke components jika lebih)
- **component.tsx**: < 150 lines (single responsibility)
- **layout.tsx**: < 100 lines (hanya structure)

---

## Import Paths

```tsx
// Relative untuk _components
import { GlassCard } from "./_components/glass-card";
import { DashboardHeader } from "./_components/dashboard-header";

// Absolute untuk global
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { UserMenu } from "~/app/_components/user-menu";
```

---

*Struktur ini mengikuti best practices Next.js App Router dan disesuaikan untuk kebutuhan aplikasi Baby Care Reservation.*
