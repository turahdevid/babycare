# Analisis Sistem: Reservation Baby Care

> Dokumen ini adalah **sumber kebenaran** untuk konsep sistem, alur proses, dan logika bisnis aplikasi Reservation Baby Care.  
> Berdasarkan Prisma Schema sebagai single source of truth.

---

## 1. GAMBARAN UMUM SISTEM

### 1.1 Tujuan Sistem

Aplikasi **Reservation Baby Care** adalah sistem manajemen reservasi layanan perawatan bayi (baby spa, pijat bayi, dll) yang memungkinkan:

- **Pencatatan data customer** (Bunda & Baby)
- **Pembuatan & pengelolaan reservasi** treatment
- **Penugasan bidan** untuk setiap reservasi
- **Pelacakan status** reservasi dari awal hingga selesai
- **Pelaporan** aktivitas reservasi

### 1.2 Pengguna Sistem

| Role | Deskripsi |
|------|-----------|
| **ADMIN** | Pengelola utama sistem. Dapat mengakses semua fitur, membuat reservasi, mengelola data master, assign bidan, dan melihat laporan lengkap. |
| **MIDWIFE** | Bidan yang ditugaskan untuk melakukan treatment. Dapat melihat jadwal reservasi yang di-assign kepadanya dan mengupdate status treatment. |

### 1.3 Masalah yang Diselesaikan

1. **Pencatatan manual tidak terstruktur** → Sistem digital terpusat
2. **Jadwal bentrok** → Validasi slot otomatis per bidan
3. **Histori customer tercecer** → Data customer & baby tersimpan dan dapat ditelusuri
4. **Tidak ada audit trail** → Setiap perubahan tercatat di `ReservationAuditLog`
5. **Laporan manual** → Dashboard & report otomatis

### 1.4 Konsep Utama

```
┌─────────────────────────────────────────────────────────────────┐
│                         RESERVATION                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │ Customer │───▶│   Baby   │    │ Treatment│    │  User    │  │
│  │  (Bunda) │    │  (Anak)  │    │ (Layanan)│    │ (Bidan)  │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│       │               │               │               │         │
│       └───────────────┴───────────────┴───────────────┘         │
│                           │                                      │
│                    ┌──────▼──────┐                               │
│                    │ Reservation │                               │
│                    │  - Jadwal   │                               │
│                    │  - Status   │                               │
│                    │  - Items    │                               │
│                    └─────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. ARSITEKTUR LOGIS SISTEM

### 2.1 Layer Utama

```
┌─────────────────────────────────────────────────────────────────┐
│                        UI LAYER                                  │
│  Next.js App Router + React Server Components + Client Components│
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ Login   │ │Dashboard│ │Reservasi│ │Customer │ │ Report  │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                    AUTHENTICATION LAYER                          │
│              NextAuth.js + CredentialsProvider                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Session (JWT) → user.id, user.role, user.email          │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                   BUSINESS LOGIC LAYER                           │
│           Server Actions / tRPC Procedures / API Routes          │
│  ┌─────────┐ ┌─────────────┐ ┌───────────┐ ┌─────────────────┐  │
│  │Reservasi│ │ Customer &  │ │ Treatment │ │  Report/Query   │  │
│  │ Service │ │ Baby Service│ │  Service  │ │    Service      │  │
│  └─────────┘ └─────────────┘ └───────────┘ └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────────┐
│                     DATA ACCESS LAYER                            │
│                    Prisma ORM + MySQL                            │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ User │ Customer │ Baby │ Treatment │ Reservation │ AuditLog│ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Peran Komponen Utama

| Komponen | Peran |
|----------|-------|
| **Next.js App Router** | Routing, Server Components, Server Actions |
| **NextAuth.js** | Autentikasi credentials, session JWT, role management |
| **Prisma ORM** | Type-safe database access, migrations, schema as source of truth |
| **MySQL** | Persistent data storage |
| **Middleware** | Route protection berdasarkan session cookie |

### 2.3 Hubungan Antar Layer

```
User Request
     │
     ▼
┌─────────────┐     ┌─────────────┐
│  Middleware │────▶│ Auth Check  │──── Redirect jika tidak login
└─────────────┘     └─────────────┘
     │ (authenticated)
     ▼
┌─────────────┐
│  UI Layer   │◀─── Session (role, id, email)
└─────────────┘
     │
     ▼
┌─────────────┐
│  Business   │◀─── Validasi role & permission
│   Logic     │
└─────────────┘
     │
     ▼
┌─────────────┐
│   Prisma    │◀─── Type-safe queries
└─────────────┘
     │
     ▼
┌─────────────┐
│   MySQL     │
└─────────────┘
```

---

## 3. ALUR PROSES UTAMA

### A. ALUR LOGIN

```
┌─────────────────────────────────────────────────────────────────┐
│                        ALUR LOGIN                                │
└─────────────────────────────────────────────────────────────────┘

[User] ──▶ Buka halaman login (/)

     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: INPUT                                                    │
│ - Email (required, format valid)                                 │
│ - Password (required, min 6 karakter)                            │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: VALIDASI CLIENT-SIDE                                     │
│ - Cek format email                                               │
│ - Cek password tidak kosong                                      │
│ - Tampilkan toast "loading" saat proses                          │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: KIRIM KE NEXTAUTH                                        │
│ signIn("credentials", { email, password, redirect: false })      │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 4: AUTHORIZE FUNCTION (server)                              │
│ 4.1 Query: db.user.findUnique({ where: { email } })              │
│ 4.2 Cek user ditemukan                                           │
│ 4.3 Cek user.password ada (bukan OAuth-only)                     │
│ 4.4 Cek bcrypt.compare(password, user.password)                  │
│ 4.5 Return user object jika valid, null jika tidak               │
└─────────────────────────────────────────────────────────────────┘
     │
     ├──▶ [GAGAL] → Return error → Toast "Email atau password salah"
     │
     ▼ [BERHASIL]
┌─────────────────────────────────────────────────────────────────┐
│ STEP 5: JWT CALLBACK                                             │
│ - Simpan user.id ke token.sub                                    │
│ - Simpan user.role ke token.role                                 │
│ - Simpan user.email ke token.email                               │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 6: SESSION TERBENTUK                                        │
│ Cookie: authjs.session-token (encrypted JWT)                     │
│ Session berisi: { user: { id, role, email } }                    │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 7: REDIRECT & FEEDBACK                                      │
│ - Toast "Login berhasil"                                         │
│ - router.push("/dashboard")                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Tabel: User**
| Field | Digunakan |
|-------|-----------|
| `email` | Lookup user |
| `password` | Verifikasi bcrypt |
| `role` | Disimpan di session untuk authorization |

---

### B. ALUR DASHBOARD (HOME)

```
┌─────────────────────────────────────────────────────────────────┐
│                     ALUR DASHBOARD                               │
└─────────────────────────────────────────────────────────────────┘

[User Login] ──▶ Redirect ke /dashboard

     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ MIDDLEWARE CHECK                                                 │
│ - Cek session cookie ada                                         │
│ - Jika tidak ada → redirect ke /                                 │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ LOAD SESSION                                                     │
│ const session = await auth()                                     │
│ Ambil: session.user.id, session.user.role                        │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ QUERY DATA BERDASARKAN ROLE                                      │
└─────────────────────────────────────────────────────────────────┘
     │
     ├──▶ [ADMIN]
     │    ┌─────────────────────────────────────────────────────┐
     │    │ ADMIN DASHBOARD                                     │
     │    │                                                     │
     │    │ 1. Total reservasi hari ini                         │
     │    │    Query: Reservation WHERE startAt = TODAY         │
     │    │                                                     │
     │    │ 2. Reservasi per status                             │
     │    │    Query: GROUP BY status                           │
     │    │                                                     │
     │    │ 3. Jadwal upcoming (semua bidan)                    │
     │    │    Query: Reservation WHERE startAt >= NOW          │
     │    │           ORDER BY startAt LIMIT 5                  │
     │    │                                                     │
     │    │ 4. Quick actions                                    │
     │    │    - Tambah reservasi                               │
     │    │    - Lihat laporan                                  │
     │    └─────────────────────────────────────────────────────┘
     │
     └──▶ [MIDWIFE]
          ┌─────────────────────────────────────────────────────┐
          │ MIDWIFE DASHBOARD                                   │
          │                                                     │
          │ 1. Reservasi saya hari ini                          │
          │    Query: Reservation WHERE midwifeId = MY_ID       │
          │           AND startAt = TODAY                       │
          │                                                     │
          │ 2. Status reservasi saya                            │
          │    Query: GROUP BY status WHERE midwifeId = MY_ID   │
          │                                                     │
          │ 3. Jadwal saya mendatang                            │
          │    Query: Reservation WHERE midwifeId = MY_ID       │
          │           AND startAt >= NOW                        │
          │           ORDER BY startAt LIMIT 5                  │
          └─────────────────────────────────────────────────────┘
```

**Tabel yang Diquery:**
| Tabel | Data yang Diambil |
|-------|-------------------|
| `Reservation` | Jadwal, status, customer info |
| `Customer` | Nama bunda |
| `Baby` | Nama baby |
| `Treatment` (via items) | Treatment yang dibooking |
| `User` | Nama bidan (untuk ADMIN) |

---

### C. ALUR MEMBUAT RESERVATION

```
┌─────────────────────────────────────────────────────────────────┐
│                  ALUR MEMBUAT RESERVATION                        │
└─────────────────────────────────────────────────────────────────┘

[ADMIN] ──▶ Klik "Tambah Reservasi"

     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: INPUT DATA CUSTOMER (BUNDA)                              │
│                                                                  │
│ ┌─ Customer baru ─────────────────────────────────────────────┐ │
│ │ - motherName (required)                                     │ │
│ │ - motherPhone (required, untuk kontak)                      │ │
│ │ - motherEmail (optional)                                    │ │
│ │ - address (optional)                                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌─ Atau pilih customer existing ──────────────────────────────┐ │
│ │ Search by: motherName atau motherPhone                      │ │
│ │ Query: Customer WHERE motherPhone LIKE ? OR motherName LIKE?│ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: INPUT DATA BABY                                          │
│                                                                  │
│ ┌─ Baby baru ─────────────────────────────────────────────────┐ │
│ │ - name (required)                                           │ │
│ │ - gender (MALE/FEMALE, optional)                            │ │
│ │ - birthDate (optional, untuk hitung usia)                   │ │
│ │ - notes (optional)                                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌─ Atau pilih baby existing dari customer ────────────────────┐ │
│ │ Query: Baby WHERE customerId = selectedCustomerId           │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: PILIH TANGGAL & SLOT                                     │
│                                                                  │
│ - Pilih tanggal (date picker, tidak boleh di masa lalu)         │
│ - Pilih jam mulai (startAt)                                      │
│ - Sistem hitung endAt berdasarkan total durasi treatment        │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 4: VALIDASI SLOT                                            │
│                                                                  │
│ Query:                                                           │
│   Reservation WHERE midwifeId = ? AND                            │
│   (                                                              │
│     (startAt <= newStartAt AND endAt > newStartAt) OR            │
│     (startAt < newEndAt AND endAt >= newEndAt) OR                │
│     (startAt >= newStartAt AND endAt <= newEndAt)                │
│   )                                                              │
│                                                                  │
│ Jika ada conflict → Tampilkan error "Slot sudah terisi"         │
│ Unique constraint: @@unique([midwifeId, startAt])               │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 5: PILIH TREATMENT                                          │
│                                                                  │
│ Query: Treatment WHERE isActive = true AND deletedAt IS NULL    │
│                                                                  │
│ Untuk setiap treatment yang dipilih:                             │
│ - quantity (default 1)                                           │
│ - unitPrice (dari Treatment.basePrice)                           │
│ - durationMinutes (dari Treatment.durationMinutes)               │
│ - notes (optional, per treatment)                                │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 6: ASSIGN BIDAN                                             │
│                                                                  │
│ Query: User WHERE role = 'MIDWIFE'                               │
│                                                                  │
│ Tampilkan bidan yang tersedia di slot tersebut                   │
│ (filter yang tidak punya reservation di waktu yang sama)         │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 7: SIMPAN RESERVATION                                       │
│                                                                  │
│ Transaction:                                                     │
│ 1. Create/Connect Customer                                       │
│ 2. Create/Connect Baby                                           │
│ 3. Create Reservation                                            │
│    - customerId                                                  │
│    - babyId                                                      │
│    - midwifeId                                                   │
│    - startAt, endAt                                              │
│    - status: PENDING                                             │
│    - channel: ADMIN                                              │
│ 4. Create ReservationTreatment[] (items)                         │
│ 5. Create ReservationAuditLog                                    │
│    - action: CREATE                                              │
│    - actorId: current user                                       │
│ 6. Create Notification (untuk bidan yang di-assign)              │
│    - type: RESERVATION_CREATED                                   │
│    - userId: midwifeId                                           │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 8: FEEDBACK                                                 │
│                                                                  │
│ - Toast "Reservasi berhasil dibuat"                              │
│ - Redirect ke halaman detail atau list reservasi                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### D. ALUR UPDATE STATUS RESERVATION

```
┌─────────────────────────────────────────────────────────────────┐
│                ALUR UPDATE STATUS RESERVATION                    │
└─────────────────────────────────────────────────────────────────┘

Status Flow:
┌────────┐    ┌───────────┐    ┌─────────────┐    ┌───────────┐
│PENDING │───▶│ CONFIRMED │───▶│ IN_PROGRESS │───▶│ COMPLETED │
└────────┘    └───────────┘    └─────────────┘    └───────────┘
    │              │                  │
    │              │                  │
    ▼              ▼                  ▼
┌────────────────────────────────────────────────────────────────┐
│                        CANCELLED                                │
└────────────────────────────────────────────────────────────────┘
                           │
                           ▼
                      ┌─────────┐
                      │ NO_SHOW │ (customer tidak datang)
                      └─────────┘
```

#### D.1 PENDING → CONFIRMED

```
┌─────────────────────────────────────────────────────────────────┐
│ SIAPA: ADMIN                                                     │
│ KAPAN: Setelah konfirmasi dengan customer (via WA/telepon)       │
│                                                                  │
│ PROSES:                                                          │
│ 1. Update Reservation.status = CONFIRMED                         │
│ 2. Insert ReservationAuditLog                                    │
│    - action: UPDATE_STATUS                                       │
│    - fromStatus: PENDING                                         │
│    - toStatus: CONFIRMED                                         │
│    - actorId: admin user                                         │
│ 3. Create Notification untuk bidan                               │
│    - type: RESERVATION_STATUS_CHANGED                            │
└─────────────────────────────────────────────────────────────────┘
```

#### D.2 CONFIRMED → IN_PROGRESS

```
┌─────────────────────────────────────────────────────────────────┐
│ SIAPA: ADMIN atau MIDWIFE (yang di-assign)                       │
│ KAPAN: Saat treatment dimulai                                    │
│                                                                  │
│ PROSES:                                                          │
│ 1. Update Reservation.status = IN_PROGRESS                       │
│ 2. Insert ReservationAuditLog                                    │
│    - action: UPDATE_STATUS                                       │
│    - fromStatus: CONFIRMED                                       │
│    - toStatus: IN_PROGRESS                                       │
└─────────────────────────────────────────────────────────────────┘
```

#### D.3 IN_PROGRESS → COMPLETED

```
┌─────────────────────────────────────────────────────────────────┐
│ SIAPA: ADMIN atau MIDWIFE (yang di-assign)                       │
│ KAPAN: Setelah treatment selesai                                 │
│                                                                  │
│ PROSES:                                                          │
│ 1. Update Reservation                                            │
│    - status = COMPLETED                                          │
│    - completedAt = NOW()                                         │
│ 2. Insert ReservationAuditLog                                    │
│    - action: COMPLETE                                            │
│    - fromStatus: IN_PROGRESS                                     │
│    - toStatus: COMPLETED                                         │
└─────────────────────────────────────────────────────────────────┘
```

#### D.4 CANCEL (dari status apapun kecuali COMPLETED)

```
┌─────────────────────────────────────────────────────────────────┐
│ SIAPA: ADMIN                                                     │
│ KAPAN: Customer membatalkan atau force cancel                    │
│                                                                  │
│ PROSES:                                                          │
│ 1. Update Reservation                                            │
│    - status = CANCELLED                                          │
│    - cancelledAt = NOW()                                         │
│ 2. Insert ReservationAuditLog                                    │
│    - action: CANCEL                                              │
│    - fromStatus: (status sebelumnya)                             │
│    - toStatus: CANCELLED                                         │
│    - message: alasan cancel (optional)                           │
│ 3. Notifikasi ke bidan jika sudah di-assign                      │
└─────────────────────────────────────────────────────────────────┘
```

#### D.5 NO_SHOW

```
┌─────────────────────────────────────────────────────────────────┐
│ SIAPA: ADMIN atau MIDWIFE                                        │
│ KAPAN: Customer tidak datang pada waktu yang dijadwalkan         │
│                                                                  │
│ PROSES:                                                          │
│ 1. Update Reservation.status = NO_SHOW                           │
│ 2. Insert ReservationAuditLog                                    │
│    - action: UPDATE_STATUS                                       │
│    - toStatus: NO_SHOW                                           │
└─────────────────────────────────────────────────────────────────┘
```

**Permission Matrix:**

| Action | ADMIN | MIDWIFE |
|--------|-------|---------|
| PENDING → CONFIRMED | ✅ | ❌ |
| CONFIRMED → IN_PROGRESS | ✅ | ✅ (own) |
| IN_PROGRESS → COMPLETED | ✅ | ✅ (own) |
| Any → CANCELLED | ✅ | ❌ |
| Any → NO_SHOW | ✅ | ✅ (own) |
| Reassign Midwife | ✅ | ❌ |

---

### E. ALUR CUSTOMER (HISTORI)

```
┌─────────────────────────────────────────────────────────────────┐
│                   ALUR CUSTOMER / HISTORI                        │
└─────────────────────────────────────────────────────────────────┘

[ADMIN/MIDWIFE] ──▶ Buka halaman Customer

     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ LIST CUSTOMER                                                    │
│                                                                  │
│ Query: Customer WHERE deletedAt IS NULL                          │
│        ORDER BY createdAt DESC                                   │
│                                                                  │
│ Search by:                                                       │
│ - motherName (LIKE)                                              │
│ - motherPhone (LIKE)                                             │
│                                                                  │
│ Include:                                                         │
│ - _count: { babies, reservations }                               │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ DETAIL CUSTOMER                                                  │
│                                                                  │
│ 1. Info Bunda:                                                   │
│    - motherName, motherPhone, motherEmail, address               │
│                                                                  │
│ 2. Daftar Baby:                                                  │
│    Query: Baby WHERE customerId = ? AND deletedAt IS NULL        │
│    - name, gender, birthDate                                     │
│                                                                  │
│ 3. Histori Reservasi:                                            │
│    Query: Reservation WHERE customerId = ?                       │
│           ORDER BY startAt DESC                                  │
│    Include:                                                      │
│    - baby (nama)                                                 │
│    - midwife (nama bidan)                                        │
│    - items → treatment (nama treatment)                          │
│    - status, startAt, endAt                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Bagaimana Data Customer Dibentuk:**

```
┌─────────────────────────────────────────────────────────────────┐
│ Customer dibuat saat:                                            │
│ 1. ADMIN membuat reservasi dengan customer baru                  │
│ 2. (Future) Customer self-register via public booking            │
│                                                                  │
│ Relasi:                                                          │
│ Customer 1 ──────▶ N Baby                                        │
│ Customer 1 ──────▶ N Reservation                                 │
│ Baby 1 ──────────▶ N Reservation                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### F. ALUR REPORT

```
┌─────────────────────────────────────────────────────────────────┐
│                       ALUR REPORT                                │
└─────────────────────────────────────────────────────────────────┘

[ADMIN] ──▶ Buka halaman Report

     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ FILTER PERIODE                                                   │
│ - Hari ini                                                       │
│ - Minggu ini                                                     │
│ - Bulan ini                                                      │
│ - Custom range                                                   │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ REPORT 1: RINGKASAN RESERVASI                                    │
│                                                                  │
│ Query:                                                           │
│   SELECT status, COUNT(*) as count                               │
│   FROM Reservation                                               │
│   WHERE startAt BETWEEN ? AND ?                                  │
│   GROUP BY status                                                │
│                                                                  │
│ Output:                                                          │
│ - Total reservasi                                                │
│ - Breakdown per status (PENDING, CONFIRMED, COMPLETED, dll)      │
│ - Persentase completion rate                                     │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ REPORT 2: PERFORMA BIDAN                                         │
│                                                                  │
│ Query:                                                           │
│   SELECT midwifeId, User.name, COUNT(*) as count                 │
│   FROM Reservation                                               │
│   JOIN User ON Reservation.midwifeId = User.id                   │
│   WHERE startAt BETWEEN ? AND ?                                  │
│   GROUP BY midwifeId                                             │
│   ORDER BY count DESC                                            │
│                                                                  │
│ Output:                                                          │
│ - Nama bidan                                                     │
│ - Jumlah reservasi yang ditangani                                │
│ - Jumlah completed                                               │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ REPORT 3: TREATMENT POPULER                                      │
│                                                                  │
│ Query:                                                           │
│   SELECT treatmentId, Treatment.name, SUM(quantity) as total     │
│   FROM ReservationTreatment                                      │
│   JOIN Reservation ON ReservationTreatment.reservationId = ...   │
│   JOIN Treatment ON ReservationTreatment.treatmentId = ...       │
│   WHERE Reservation.startAt BETWEEN ? AND ?                      │
│   GROUP BY treatmentId                                           │
│   ORDER BY total DESC                                            │
│                                                                  │
│ Output:                                                          │
│ - Nama treatment                                                 │
│ - Jumlah booking                                                 │
│ - Total revenue (SUM unitPrice * quantity)                       │
└─────────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│ REPORT 4: CUSTOMER INSIGHTS                                      │
│                                                                  │
│ - Jumlah customer baru (periode)                                 │
│ - Customer dengan reservasi terbanyak                            │
│ - Retention rate (returning customers)                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. ROLE-BASED FLOW

### 4.1 ADMIN Capabilities

| Fitur | Akses |
|-------|-------|
| Dashboard (semua data) | ✅ |
| Lihat semua reservasi | ✅ |
| Buat reservasi baru | ✅ |
| Update status reservasi (semua) | ✅ |
| Cancel reservasi | ✅ |
| Assign/reassign bidan | ✅ |
| Kelola customer | ✅ |
| Kelola treatment (master) | ✅ |
| Lihat semua report | ✅ |
| Kelola user (bidan) | ✅ |

### 4.2 MIDWIFE Capabilities

| Fitur | Akses |
|-------|-------|
| Dashboard (data sendiri) | ✅ |
| Lihat reservasi sendiri | ✅ |
| Update status reservasi sendiri | ✅ (IN_PROGRESS, COMPLETED, NO_SHOW) |
| Lihat customer (read-only) | ✅ |
| Lihat treatment | ✅ |
| Buat reservasi | ❌ |
| Cancel reservasi | ❌ |
| Assign bidan | ❌ |
| Lihat report | ❌ (atau limited) |

### 4.3 Access Control Implementation

```
┌─────────────────────────────────────────────────────────────────┐
│ MIDDLEWARE LEVEL                                                 │
│ - /dashboard/* → Requires authenticated session                  │
│ - Redirect to / if no session                                    │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│ PAGE/API LEVEL                                                   │
│ - Check session.user.role                                        │
│ - ADMIN-only pages: /dashboard/report, /dashboard/treatment      │
│ - MIDWIFE filter: hanya data dengan midwifeId = session.user.id  │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│ BUSINESS LOGIC LEVEL                                             │
│ - Validasi role sebelum mutasi                                   │
│ - Validasi ownership untuk MIDWIFE                               │
│ - Audit log mencatat actorId                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. HUBUNGAN ANTAR DATA (LOGIS)

### 5.1 Entity Relationship Diagram (Textual)

```
┌─────────────┐
│    User     │
│  (Bidan)    │
│─────────────│
│ id (PK)     │
│ email       │
│ password    │
│ role        │
└──────┬──────┘
       │
       │ 1:N (midwifeId)
       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│ Reservation │──────▶│  Customer   │◀──────│    Baby     │
│─────────────│  N:1  │─────────────│  1:N  │─────────────│
│ id (PK)     │       │ id (PK)     │       │ id (PK)     │
│ customerId  │───────│ motherName  │───────│ customerId  │
│ babyId      │──────▶│ motherPhone │       │ name        │
│ midwifeId   │       └─────────────┘       │ gender      │
│ startAt     │                             │ birthDate   │
│ endAt       │                             └─────────────┘
│ status      │
│ channel     │
└──────┬──────┘
       │
       │ 1:N
       ▼
┌─────────────────────┐       ┌─────────────┐
│ ReservationTreatment│──────▶│  Treatment  │
│─────────────────────│  N:1  │─────────────│
│ id (PK)             │       │ id (PK)     │
│ reservationId (FK)  │───────│ name        │
│ treatmentId (FK)    │       │ duration    │
│ quantity            │       │ basePrice   │
│ unitPrice           │       │ isActive    │
└─────────────────────┘       └─────────────┘

┌─────────────────────┐
│ ReservationAuditLog │
│─────────────────────│
│ id (PK)             │
│ reservationId (FK)  │───────▶ Reservation
│ action              │
│ fromStatus          │
│ toStatus            │
│ actorId (FK)        │───────▶ User
│ message             │
└─────────────────────┘

┌─────────────────────┐
│    Notification     │
│─────────────────────│
│ id (PK)             │
│ type                │
│ status              │
│ userId (FK)         │───────▶ User
│ reservationId (FK)  │───────▶ Reservation
│ title               │
│ body                │
└─────────────────────┘
```

### 5.2 Relasi NextAuth

```
┌─────────────┐       ┌─────────────┐
│    User     │◀──────│   Account   │
│─────────────│  1:N  │─────────────│
│ id (PK)     │       │ userId (FK) │
│             │       │ provider    │
│             │       │ type        │
└──────┬──────┘       └─────────────┘
       │
       │ 1:N
       ▼
┌─────────────┐
│   Session   │
│─────────────│
│ userId (FK) │
│ expires     │
└─────────────┘

┌───────────────────┐
│ VerificationToken │ (standalone, untuk email verification)
│───────────────────│
│ identifier        │
│ token             │
│ expires           │
└───────────────────┘
```

### 5.3 Cardinality Summary

| Relasi | Tipe | Keterangan |
|--------|------|------------|
| User → Reservation | 1:N | Satu bidan bisa punya banyak reservasi |
| Customer → Baby | 1:N | Satu customer bisa punya banyak baby |
| Customer → Reservation | 1:N | Satu customer bisa punya banyak reservasi |
| Baby → Reservation | 1:N | Satu baby bisa punya banyak reservasi |
| Reservation → ReservationTreatment | 1:N | Satu reservasi bisa punya banyak treatment |
| Treatment → ReservationTreatment | 1:N | Satu treatment bisa di banyak reservasi |
| Reservation → ReservationAuditLog | 1:N | Satu reservasi punya banyak audit log |
| User → ReservationAuditLog | 1:N | Satu user bisa jadi actor di banyak audit |
| User → Notification | 1:N | Satu user bisa punya banyak notifikasi |
| Reservation → Notification | 1:N | Satu reservasi bisa trigger banyak notifikasi |

---

## 6. RINGKASAN

### 6.1 Entities Utama

| Entity | Fungsi |
|--------|--------|
| **User** | Autentikasi & authorization (ADMIN/MIDWIFE) |
| **Customer** | Data ibu/bunda |
| **Baby** | Data bayi, linked ke customer |
| **Treatment** | Master data layanan |
| **Reservation** | Booking utama |
| **ReservationTreatment** | Treatment yang dipilih per reservasi |
| **ReservationAuditLog** | Audit trail perubahan |
| **Notification** | Notifikasi ke user |

### 6.2 Status Lifecycle

```
PENDING → CONFIRMED → IN_PROGRESS → COMPLETED
    ↓         ↓            ↓
    └─────────┴────────────┴──────→ CANCELLED / NO_SHOW
```

### 6.3 Key Business Rules

1. **Slot Uniqueness**: Satu bidan tidak bisa di-assign ke dua reservasi di waktu yang overlap
2. **Soft Delete**: Customer, Baby, Treatment menggunakan `deletedAt` untuk soft delete
3. **Audit Trail**: Setiap perubahan status reservasi dicatat di `ReservationAuditLog`
4. **Role-Based Access**: MIDWIFE hanya bisa akses data yang di-assign kepadanya
5. **Channel Tracking**: Reservasi mencatat channel pembuatan (ADMIN/CUSTOMER)

---

*Dokumen ini adalah acuan untuk pengembangan frontend, backend, dan penjelasan ke stakeholder.*
