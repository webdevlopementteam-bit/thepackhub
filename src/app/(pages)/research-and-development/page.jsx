import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchAndDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-32 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/10 blur-[110px]" />

          <div className="absolute -right-40 top-20 h-[380px] w-[380px] rounded-full bg-[#49308F]/10 blur-[110px]" />
        </div>

        {/* Gold Top Line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D4AF37]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                Innovation & Technology
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
              Research and{" "}
              <span className="relative text-[#49308F]">
                development
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#49308F]/20" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-[13px] leading-6 text-black/60 sm:text-sm sm:leading-7 lg:text-[15px]">
              We are always looking for new applications and sustainable raw
              materials because we believe in continuous growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH & DEVELOPMENT CONTENT
      ===================================================== */}
      <section className="bg-white">
        {/* =====================================================
            PUNTO ROSSO
        ===================================================== */}
        <section className="relative overflow-hidden">
          {/* Divider */}
          <div className="h-[2px] w-full bg-[#49308F]" />

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
            <div className="grid items-center gap-9 md:grid-cols-2 md:gap-11 lg:gap-18">
              {/* LEFT CONTENT */}
              <div className="order-1">
                {/* Section Label */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#49308F]/25 bg-[#49308F]/5 text-[10px] font-bold text-[#49308F]">
                    01
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#49308F]">
                    Research Laboratory
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-tight text-black sm:text-3xl lg:text-4xl">
                  Punto{" "}
                  <span className="relative text-[#49308F]">
                    Rosso
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#49308F]/20" />
                  </span>
                </h2>

                {/* Gold Accent */}
                <div className="mt-5 h-[3px] w-11 bg-[#D4AF37]" />

                {/* Content */}
                <div className="mt-6 space-y-4 text-[13px] leading-6 text-black/60 sm:text-sm sm:leading-7">
                  <p>
                    Within{" "}
                    <strong className="font-semibold text-black">
                      Punto Rosso
                    </strong>
                    , our laboratory for analysis, research and development, our
                    team of experts, in collaboration with the IIT of Genoa,
                    studies new applications and environmentally friendly raw
                    materials to be introduced into the production cycle of
                    Novacart sites. The aim of the research is to adapt Novacart
                    products to the ever-changing needs of markets and
                    customers, while respecting the environment as a priority.
                  </p>

                  <p>
                    The features that make Novacart products winning include
                    non-deformability, resistance to high and low temperatures
                    of ovens and freezers and resistance to fats.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link
                    href="https://www.thepackhub.in/research-and-development/#"
                    className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49308F]"
                  >
                    <span>Discover More</span>

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative order-2">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_22px_60px_rgba(212,175,55,0.15)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/research-and-development/img1.png"
                      alt="Punto Rosso research and development laboratory"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CUTTING-EDGE TECHNOLOGY
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#fafaf8]">
          {/* Divider */}
          <div className="h-[2px] w-full bg-[#49308F]" />

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
            <div className="grid items-center gap-9 md:grid-cols-2 md:gap-11 lg:gap-18">
              {/* LEFT IMAGE */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#49308F]/8 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/40 hover:shadow-[0_22px_60px_rgba(73,48,143,0.15)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/research-and-development/img2.png"
                      alt="Cutting-edge technology and production machines"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#49308F]/15 via-transparent to-transparent" />
                  </div>

                  <div className="h-[3px] w-full bg-gradient-to-r from-[#49308F]/60 via-[#49308F] to-[#49308F]/60" />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="order-1 md:order-2">
                {/* Section Label */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[10px] font-bold text-[#A98520]">
                    02
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A98520]">
                    Advanced Manufacturing
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-tight text-black sm:text-3xl lg:text-4xl">
                  Cutting-edge{" "}
                  <span className="relative text-[#49308F]">
                    technology
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#49308F]/20" />
                  </span>
                </h2>

                {/* Gold Accent */}
                <div className="mt-5 h-[3px] w-11 bg-[#D4AF37]" />

                {/* Content */}
                <div className="mt-6 space-y-4 text-[13px] leading-6 text-black/60 sm:text-sm sm:leading-7">
                  <p>
                    The CMS division (Construction of special machines),
                    entirely owned by Novacart, deals with the design of
                    production machines and plants suitable for the manufacture
                    of food paper products, using highly specialized personnel
                    and technologically advanced equipment.
                  </p>

                  <p>
                    Specific machines are made to be implemented in the
                    production chain, also for the customers, while the articles
                    already in production are perfected.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link
                    href="https://www.thepackhub.in/research-and-development/#"
                    className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49308F]"
                  >
                    <span>Discover More</span>

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="h-[2px] w-full bg-[#49308F]" />
        </section>
      </section>
    </main>
  );
}
