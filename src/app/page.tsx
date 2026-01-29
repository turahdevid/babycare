"use client";

import Link from "next/link";
import { type FormEvent, useId } from "react";

function BabycareLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bcLogoGradient" x1="10" x2="54" y1="10" y2="54">
          <stop stopColor="#93C5FD" />
          <stop offset="0.5" stopColor="#FBCFE8" />
          <stop offset="1" stopColor="#C4B5FD" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="60"
          id="bcLogoGlow"
          width="60"
          x="2"
          y="2"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
        </filter>
      </defs>

      <g filter="url(#bcLogoGlow)" opacity="0.55">
        <circle cx="32" cy="32" fill="url(#bcLogoGradient)" r="22" />
      </g>
      <circle
        cx="32"
        cy="32"
        fill="rgba(255,255,255,0.58)"
        r="22"
        stroke="rgba(255,255,255,0.62)"
        strokeWidth="1.5"
      />

      <path
        d="M21 32.2c0-7 5.7-12.7 12.7-12.7 2.2 0 4.3.6 6.1 1.7 1.8-1.1 3.9-1.7 6.1-1.7 7 0 12.7 5.7 12.7 12.7 0 10.4-9 18.7-18.8 18.7S21 42.6 21 32.2Z"
        fill="url(#bcLogoGradient)"
        opacity="0.92"
      />
      <circle cx="29" cy="32" fill="rgba(15,23,42,0.72)" r="1.65" />
      <circle cx="41" cy="32" fill="rgba(15,23,42,0.72)" r="1.65" />
      <path
        d="M31.4 37.8c1 .9 2.4 1.4 3.6 1.4 1.3 0 2.7-.5 3.7-1.4"
        stroke="rgba(15,23,42,0.58)"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function BabycareIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="600"
      viewBox="0 0 480 600"
      width="480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bcPanel" x1="70" x2="410" y1="90" y2="510">
          <stop stopColor="rgba(147,197,253,0.8)" />
          <stop offset="0.5" stopColor="rgba(251,207,232,0.62)" />
          <stop offset="1" stopColor="rgba(196,181,253,0.7)" />
          <animate attributeName="x1" dur="14s" repeatCount="indefinite" values="60;110;60" />
        </linearGradient>
        <linearGradient id="bcStroke" x1="90" x2="390" y1="100" y2="520">
          <stop stopColor="rgba(255,255,255,0.85)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.25)" />
        </linearGradient>
        <linearGradient id="bcAccent" x1="160" x2="330" y1="300" y2="480">
          <stop stopColor="#93C5FD" />
          <stop offset="0.55" stopColor="#FBCFE8" />
          <stop offset="1" stopColor="#C4B5FD" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="560"
          id="bcSoft"
          width="460"
          x="10"
          y="30"
        >
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <g filter="url(#bcSoft)" opacity="0.7">
        <path
          d="M78 130c0-22.1 17.9-40 40-40h244c22.1 0 40 17.9 40 40v340c0 22.1-17.9 40-40 40H118c-22.1 0-40-17.9-40-40V130Z"
          fill="url(#bcPanel)"
        />
      </g>
      <path
        d="M88 130c0-22.1 17.9-40 40-40h224c22.1 0 40 17.9 40 40v340c0 22.1-17.9 40-40 40H128c-22.1 0-40-17.9-40-40V130Z"
        fill="rgba(255,255,255,0.3)"
        stroke="url(#bcStroke)"
        strokeWidth="1.5"
      />

      <g opacity="0.86">
        <path
          d="M124 175c12-18 35-26 59-18 19 6 38 7 61 2 24-6 46 2 60 18 12 14 30 18 48 10"
          stroke="rgba(255,255,255,0.75)"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M140 220c9-10 25-14 40-9 16 6 30 6 48 2 18-5 34 1 44 12 10 10 22 12 36 7"
          stroke="rgba(255,255,255,0.55)"
          strokeLinecap="round"
          strokeWidth="3.5"
        />
      </g>

      <g opacity="0.92">
        <path
          d="M194 308c0-20 16-36 36-36h48c20 0 36 16 36 36v9c0 18-13 33-30 36l-5 1c-8 1.6-13.5 8.6-13.5 16.7v6.3c0 9-7.3 16.3-16.3 16.3h-27.4c-9 0-16.3-7.3-16.3-16.3v-6.3c0-8.1-5.5-15.1-13.5-16.7l-5-1c-17-3-30-18-30-36v-9Z"
          fill="url(#bcAccent)"
          opacity="0.92"
        />
        <path
          d="M178 336h158"
          stroke="rgba(255,255,255,0.74)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M190 320c14-26 40-42 67-42s53 16 67 42"
          stroke="rgba(255,255,255,0.54)"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <circle cx="204" cy="460" fill="rgba(15,23,42,0.22)" r="22" />
        <circle cx="204" cy="460" fill="rgba(255,255,255,0.55)" r="18" />
        <circle cx="296" cy="460" fill="rgba(15,23,42,0.22)" r="22" />
        <circle cx="296" cy="460" fill="rgba(255,255,255,0.55)" r="18" />
        <path
          d="M220 410h60c7.5 0 13.5 6 13.5 13.5S287.5 437 280 437h-60c-7.5 0-13.5-6-13.5-13.5S212.5 410 220 410Z"
          fill="rgba(255,255,255,0.42)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
        />
      </g>

      <g opacity="0.9">
        <path
          d="M108 406c0-12 10-22 22-22h18c12 0 22 10 22 22v86c0 11-9 20-20 20h-22c-11 0-20-9-20-20v-86Z"
          fill="rgba(255,255,255,0.36)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
        />
        <path
          d="M116 384c0-8 6.5-14.5 14.5-14.5h11c8 0 14.5 6.5 14.5 14.5v14h-40v-14Z"
          fill="rgba(255,255,255,0.5)"
        />
        <path
          d="M122 444h28"
          stroke="rgba(147,197,253,0.7)"
          strokeLinecap="round"
          strokeWidth="6"
        />
      </g>

      <g opacity="0.92">
        <path
          d="M320 440c0-20 16-36 36-36s36 16 36 36v50c0 14-11 25-25 25h-22c-14 0-25-11-25-25v-50Z"
          fill="rgba(255,255,255,0.34)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
        />
        <circle cx="344" cy="444" fill="rgba(15,23,42,0.12)" r="10" />
        <circle cx="368" cy="444" fill="rgba(15,23,42,0.12)" r="10" />
        <path
          d="M346 468c4 4 8 6 10 6s6-2 10-6"
          stroke="rgba(15,23,42,0.16)"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle cx="336" cy="410" fill="rgba(255,255,255,0.56)" r="14" />
        <circle cx="376" cy="410" fill="rgba(255,255,255,0.56)" r="14" />
      </g>

      <g opacity="0.88">
        <path
          d="M96 292l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12Z"
          fill="rgba(255,255,255,0.55)"
        />
        <path
          d="M410 270l5 9 10 2-7 7 2 10-10-5-10 5 2-10-7-7 10-2 5-9Z"
          fill="rgba(255,255,255,0.45)"
        />
        <circle cx="160" cy="520" fill="rgba(255,255,255,0.35)" r="3" />
        <circle cx="344" cy="530" fill="rgba(255,255,255,0.35)" r="2.5" />
      </g>
    </svg>
  );
}

export default function Home() {
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-200/70 via-pink-200/60 to-violet-200/70 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-amber-100/70 via-pink-200/50 to-sky-200/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[740px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/35 to-white/0 blur-3xl" />
      </div>

      <div className="bc-enter relative w-full max-w-[1024px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <section className="relative">
            <div className="flex items-center gap-4">
              <BabycareLogo className="h-16 w-16" />
              <div>
                <p className="text-sm font-medium tracking-wide text-slate-700/80">
                  Babycare
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Gentle care, beautifully organized
                </h1>
              </div>
            </div>

            <div className="mt-8">
              <BabycareIllustration className="bc-float mx-auto h-auto w-full max-w-[480px]" />
            </div>
          </section>

          <section className="relative">
            <div className="rounded-[28px] border border-white/55 bg-white/35 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
              <header className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Welcome back
                </h2>
                <p className="text-sm text-slate-700/80">
                  Sign in to keep routines calm and consistent.
                </p>
              </header>

              <form className="mt-8 space-y-5" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-slate-800/90"
                    htmlFor={emailId}
                  >
                    Email
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-14px_30px_rgba(15,23,42,0.08)] outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-sky-200/60"
                    id={emailId}
                    inputMode="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label
                      className="text-sm font-medium text-slate-800/90"
                      htmlFor={passwordId}
                    >
                      Password
                    </label>
                    <Link
                      className="text-sm font-medium text-slate-700/80 underline decoration-slate-400/50 underline-offset-4 transition hover:text-slate-900"
                      href="#"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-14px_30px_rgba(15,23,42,0.08)] outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id={passwordId}
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-700/90">
                    <input
                      className="h-4 w-4 rounded border-white/60 bg-white/50 text-sky-500 focus-visible:ring-2 focus-visible:ring-sky-200/60"
                      id={rememberId}
                      name="remember"
                      type="checkbox"
                    />
                    Remember me
                  </label>
                  <span className="text-xs text-slate-600/80">Secure on this device</span>
                </div>

                <div className="pt-1">
                  <button
                    className="group relative w-full overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#93C5FD,#FBCFE8,#C4B5FD)] bg-[length:200%_200%] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_40px_rgba(59,130,246,0.18)] transition hover:bg-[position:100%_0%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    type="submit"
                  >
                    <span className="relative z-10">Login</span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="absolute -left-1/2 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/35 blur-xl bc-ripple" />
                    </span>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-sm text-slate-700/80">New here?</p>
                  <Link
                    className="rounded-2xl border border-white/60 bg-white/30 px-4 py-2 text-sm font-semibold text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60"
                    href="#"
                  >
                    Sign up
                  </Link>
                </div>
              </form>

              <div className="mt-8 rounded-2xl border border-white/50 bg-white/25 p-4 text-xs text-slate-700/80">
                By continuing, you agree to our terms and privacy policy.
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bc-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .bc-enter {
          animation: bc-enter 700ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        @keyframes bc-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bc-float {
          animation: bc-float 6.5s ease-in-out infinite;
        }

        @keyframes bc-ripple {
          0% {
            transform: translateX(0) scale(0.85);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateX(260px) scale(1.2);
            opacity: 0;
          }
        }
        .bc-ripple {
          animation: bc-ripple 900ms ease-out infinite;
          animation-play-state: paused;
        }
        .group:hover .bc-ripple {
          animation-play-state: running;
        }
      `}</style>
    </main>
  );
}
