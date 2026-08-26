"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ForConfectionersPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#49308F]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                The Pack Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
              For{" "}
              <span className="relative text-[#49308F]">
                confectioners
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-[17px]">
              We have always worked alongside food and pastry professionals,
              offering high quality products that speed up and simplify
              production, with a refined and elegant design that can also be
              customized.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="#confectioners-solutions"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#49308F] hover:shadow-[0_14px_35px_rgba(73,48,143,0.3)] active:scale-95"
              >
                <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                <span className="relative z-10">Explore Confectioners</span>

                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONFECTIONERS SOLUTIONS
      ===================================================== */}
      <section id="confectioners-solutions" className="bg-white">
        {/* =====================================================
            NOVASERVICE
        ===================================================== */}
        <section className="relative overflow-hidden">
          {/* Divider */}
          <div className="h-[2px] w-full bg-[#49308F]" />

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[110px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="order-1 md:order-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#49308F]/25 bg-[#49308F]/5 text-xs font-bold text-[#49308F]">
                    01
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#49308F]">
                    Distribution Service
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
                  Novaservice:{" "}
                  <span className="relative text-[#49308F]">
                    at the service
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
                  </span>{" "}
                  of pastry chefs
                </h2>

                <div className="mt-6 h-[3px] w-14 bg-[#D4AF37]" />

                <div className="mt-7 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-[17px]">
                  <p>
                    To optimize the service we offer to our customers operating
                    in Italy, we have created Novaservice, a company specialized
                    in the distribution of products dedicated to pastry chefs
                    and professionals in the sector.
                  </p>

                  <p>
                    Our distribution service is able to manage orders in a
                    timely and precise manner, respecting agreed times and
                    methods. The dense territorial coverage allows us to reach
                    any location, in this way we can guarantee fast and on time
                    deliveries.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative order-2 md:order-2">
                <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_25px_70px_rgba(212,175,55,0.16)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/for_confectioners/Novaservice.jpg"
                      alt="Novaservice at the service of pastry chefs"
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
            A CAREFULLY REFINED PRODUCT
        ===================================================== */}
        <section className="relative overflow-hidden">
          <div className="h-[2px] w-full bg-[#49308F]" />

          <div className="pointer-events-none absolute -left-20 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[110px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
              {/* LEFT IMAGE */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 rounded-[2rem] bg-[#49308F]/8 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/40 hover:shadow-[0_25px_70px_rgba(73,48,143,0.16)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/for_confectioners/A carefully refined product.jpg"
                      alt="A carefully refined product"
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
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-xs font-bold text-[#A98520]">
                    02
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                    Product Design
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
                  A carefully{" "}
                  <span className="relative text-[#49308F]">
                    refined product
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
                  </span>
                </h2>

                <div className="mt-6 h-[3px] w-14 bg-[#D4AF37]" />

                <div className="mt-7 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-[17px]">
                  <p>
                    Our products are designed to facilitate and speed up the
                    production of food ensuring maximum hygiene. They are
                    suitable for freezing, thermal abatement and offer a
                    complete service from the oven to the sales shelf: they are
                    resistant to the high temperatures of the ovens and thanks
                    to their attractive design, they enhance the final product
                    eliminating the need of another packaging for presentation.
                  </p>

                  <p>
                    Our baking molds and cups are available in different sizes
                    to meet the creative needs of all our customers. To
                    professionals in the sector, we provide a distribution
                    service delivering products in the agreed time and manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ATTENTION TO DETAILS
        ===================================================== */}
        <section className="relative overflow-hidden">
          <div className="h-[2px] w-full bg-[#49308F]" />

          <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[110px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="order-1 md:order-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#49308F]/25 bg-[#49308F]/5 text-xs font-bold text-[#49308F]">
                    03
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#49308F]">
                    Custom Design
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
                  Attention to{" "}
                  <span className="relative text-[#49308F]">
                    details
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
                  </span>
                </h2>

                <div className="mt-6 h-[3px] w-14 bg-[#D4AF37]" />

                <div className="mt-7 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-[17px]">
                  <p>
                    We carefully take care of the design of our products so that
                    they are elegant, modern and able to satisfy all tastes, but
                    we also want to give our customers the chance to always be
                    recognizable and stand out from the competition.
                  </p>

                  <p>
                    To many of our products we can impress a personal style with
                    customized graphics, with the required colors and the
                    company logo. We are also available with ideas and
                    suggestions to find the perfect layout.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative order-2 md:order-2">
                <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_25px_70px_rgba(212,175,55,0.16)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/for_confectioners/Attention to details.jpg"
                      alt="Attention to details"
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

          <div className="h-[2px] w-full bg-[#49308F]" />
        </section>
      </section>

      {/* =====================================================
          CATALOGUE CTA
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="group relative min-h-[420px] overflow-hidden rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:min-h-[500px] sm:rounded-3xl">
            {/* Background Image */}
            <Image
              src="/for_confectioners/bootom.jpg"
              alt="The Pack Hub Products Catalogue"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1279px) 100vw, 1280px"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

            {/* Gold Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[420px] max-w-2xl items-center px-6 py-12 sm:min-h-[500px] sm:px-12 lg:px-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D4AF37]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                    Explore Our Range
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  The Catalogue of{" "}
                  <span className="text-[#D4AF37]">The Pack Hub Products</span>
                </h2>

                <div className="mt-8">
                  <Link
                    href="/products"
                    className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#D4AF37] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white active:scale-95"
                  >
                    <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[130%]" />

                    <span className="relative z-10">Discover More</span>

                    <ArrowRight
                      size={16}
                      className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />
          </div>
        </div>
      </section>
    </main>
  );
}
