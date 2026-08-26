"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "distributors",
    label: "Solutions & Services",
    titleStart: "For the",
    titleHighlight: "distributors",
    description:
      "We manage orders accurately and quickly and guarantee full reliability in deliveries.",
    image: "/solutions_services/img2.webp",
    imageAlt: "Solutions for distributors",
    icon: "/icon/icon.png",
    iconAlt: "For distributors",
    reverse: false,
  },
  {
    id: "confectioners",
    label: "Solutions & Services",
    titleStart: "For",
    titleHighlight: "confectioners",
    description:
      "For confectioners and food professionals, we offer solutions that speed up and simplify production.",
    image: "/solutions_services/birthday.webp",
    imageAlt: "Solutions for confectioners",
    icon: "/icon/birthday.png",
    iconAlt: "For confectioners",
    reverse: true,
  },
  {
    id: "large-retailers",
    label: "Solutions & Services",
    titleStart: "For large",
    titleHighlight: "retailers",
    description:
      "We create packaging suitable for retail and customizable with your own brand.",
    image: "/solutions_services/for_large_retailers.webp",
    imageAlt: "Solutions for large retailers",
    icon: "/icon/for_large_retailers.png",
    iconAlt: "For large retailers",
    reverse: false,
  },
];

export default function SolutionsAndServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          SOLUTIONS & SERVICES HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#b09220]/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b09220]/10 blur-[120px]" />
        </div>

        {/* Gold Top Line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#8c7013] via-[#d4b82a] to-[#8c7013]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* ================= LEFT CONTENT ================= */}
            <div className="relative">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/solutions_services/solutions_services_logo.png"
                  alt="Solutions and Services"
                  width={180}
                  height={80}
                  className="h-auto w-[130px] object-contain sm:w-[155px]"
                />
              </div>

              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#b09220]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b09220]">
                  Solutions & Services
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                For the{" "}
                <span className="relative text-[#b09220]">
                  industry
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#b09220]/20" />
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-black/60 sm:text-[15px] sm:leading-7">
                The Pack Hub stands out as the ideal partner for the industry by
                delivering customized product solutions, scalable production
                capacities, and exceptionally short supply lead times. These key
                attributes ensure unmatched efficiency and flexibility, meeting
                the dynamic needs of modern businesses.
              </p>

              {/* Button */}
              <div className="mt-7">
                <Link
                  href="#discover"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b09220] hover:shadow-[0_14px_35px_rgba(176,146,32,0.3)] active:translate-y-0 active:scale-95"
                >
                  <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                  <span className="relative z-10">Discover More</span>

                  <ArrowRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative md:-mr-5">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#b09220]/10 blur-2xl" />

              <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b09220]/40 hover:shadow-[0_25px_65px_rgba(0,0,0,0.14)] sm:rounded-3xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/solutions_services/img1.jpg"
                    alt="The Pack Hub industry solutions"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="h-[3px] w-full bg-gradient-to-r from-[#8c7013] via-[#d4b82a] to-[#8c7013]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS SECTIONS
      ===================================================== */}
      <section id="discover" className="bg-white">
        {solutions.map((solution, index) => (
          <div key={solution.id} id={solution.id}>
            {/* Divider */}
            <div className="h-[2px] w-full bg-[#49308F]" />

            <div className="relative overflow-hidden">
              {/* Background Glow */}
              <div
                className={`pointer-events-none absolute top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block ${
                  solution.reverse ? "-left-20" : "-right-20"
                }`}
              />

              <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                  {/* ================= IMAGE ================= */}
                  <div
                    className={`relative ${
                      solution.reverse
                        ? "order-2 md:order-2"
                        : "order-2 md:order-1"
                    }`}
                  >
                    {/* Decorative Background */}
                    <div
                      className={`absolute -inset-3 rounded-[2rem] bg-[#49308F]/8 blur-2xl ${
                        solution.reverse
                          ? "md:translate-x-3"
                          : "md:-translate-x-3"
                      }`}
                    />

                    {/* Image Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/40 hover:shadow-[0_25px_65px_rgba(73,48,143,0.14)] sm:rounded-3xl">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 767px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#49308F]/15 via-transparent to-transparent" />
                      </div>

                      {/* Bottom Accent */}
                      <div className="h-[3px] w-full bg-gradient-to-r from-[#49308F]/60 via-[#49308F] to-[#49308F]/60" />
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div
                    className={`${
                      solution.reverse
                        ? "order-1 md:order-1"
                        : "order-1 md:order-2"
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-[#49308F] bg-white p-2.5 shadow-[0_8px_25px_rgba(73,48,143,0.10)] transition-transform duration-300 hover:scale-105">
                      <Image
                        src={solution.icon}
                        alt={solution.iconAlt}
                        width={64}
                        height={64}
                        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                      />
                    </div>

                    {/* Label */}
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#49308F]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#49308F]">
                        {solution.label}
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                      {solution.titleStart}{" "}
                      <span className="relative text-[#49308F]">
                        {solution.titleHighlight}

                        <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#49308F]/20" />
                      </span>
                    </h2>

                    {/* Accent */}
                    <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-[14px] leading-7 text-black/60 sm:text-[15px]">
                      {solution.description}
                    </p>

                    {/* Button */}
                    <div className="mt-7">
                      <Link
                        href={`#${solution.id}`}
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#49308F] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(73,48,143,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3b2675] hover:shadow-[0_15px_35px_rgba(73,48,143,0.35)] active:translate-y-0 active:scale-95"
                      >
                        {/* Shine */}
                        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                        <span className="relative z-10">Discover More</span>

                        <ArrowRight
                          size={15}
                          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Bottom Divider */}
            {index === solutions.length - 1 && (
              <div className="h-[2px] w-full bg-[#49308F]" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
