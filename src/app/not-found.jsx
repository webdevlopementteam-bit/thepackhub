"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-5 py-12 text-black sm:py-16">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      {/* Small Decorative Lines */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 items-center gap-2 sm:flex">
        <span className="h-px w-10 bg-[#D4AF37]/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-2 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        <span className="h-px w-10 bg-[#D4AF37]/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative mx-auto mb-5 inline-block">
          <h1 className="select-none text-[90px] font-black leading-none tracking-[-6px] text-[#111111] sm:text-[120px] md:text-[145px]">
            404
          </h1>

          {/* Gold underline */}
          <div className="absolute bottom-[-3px] left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#D4AF37] sm:w-20" />
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
          Page Not Found
        </h2>

        {/* Short Description */}
        <p className="mx-auto mb-7 max-w-md text-xs leading-6 text-gray-500 sm:text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black sm:w-auto"
          >
            <Home className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-xs font-semibold text-gray-700 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#B18A0F] sm:w-auto"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Go Back
          </button>
        </div>

        {/* Bottom Accent */}
        <div className="mt-9 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          <span className="h-px w-10 bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
