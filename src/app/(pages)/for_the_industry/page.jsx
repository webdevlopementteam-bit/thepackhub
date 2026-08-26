"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =====================================================
   GALLERY IMAGES
===================================================== */

const galleryImages = [
  "/for_the_industry/p1.jpg",
  "/for_the_industry/p2.jpg",
  "/for_the_industry/p3.jpg",
  "/for_the_industry/p4.webp",
  "/for_the_industry/p5.jpg",
  "/for_the_industry/p6.jpg",
  "/for_the_industry/p7.jpg",
  "/for_the_industry/p8.jpg",
];

/* =====================================================
   INDUSTRY SECTIONS
===================================================== */

const industrySections = [
  {
    id: "from-the-oven",
    label: "Food Production",
    titleStart: "From the",
    titleHighlight: "oven to the shelf",
    image: "/for_the_industry/From the oven.jpg",
    imageAlt: "From the oven to the shelf",

    description: (
      <>
        <p>
          Thanks to a careful research of materials and structures, our baking
          molds and cups are suitable to support the needs of modern production
          lines.
        </p>

        <p className="mt-5">
          Our products do not need to be buttered and can be baked even without
          preformed metal baking trays, thus ensuring greater safety in the
          management of food. They are also suitable for high oven temperatures,
          freezing and thermal abatement processes.
        </p>

        <p className="mt-5">
          The technical features combined with the careful and attractive
          design, allow us to use our products from the oven to the sales shelf,
          without the need for a specific packaging for the presentation.
        </p>
      </>
    ),

    reverse: false,
  },

  {
    id: "attention-to-details",
    label: "Custom Design",
    titleStart: "Attention to",
    titleHighlight: "details",
    image: "/for_the_industry/Attention to details.jpg",
    imageAlt: "Attention to details",

    description: (
      <>
        <p>
          We are always careful to find graphic solutions that satisfy the
          tastes of the market. For those who want to stand out, we also offer
          the possibility of characterizing the design of our products at will.
        </p>

        <p className="mt-5">
          We can impress our baking cups and our cooking molds with a
          personalized style by printing drawings designed by the customer and a
          wide choice of colors, providing our skills and offering suggestions.
        </p>
      </>
    ),

    reverse: true,
  },

  {
    id: "ad-hoc-solutions",
    label: "Tailor-Made Solutions",
    titleStart: "Ad hoc",
    titleHighlight: "solutions",
    image: "/for_the_industry/Ad hoc solutions.avif",
    imageAlt: "Ad hoc solutions",

    description: (
      <>
        <p>
          Our experience in the food industry allows us to offer a tailor-made
          service for specific requests.
        </p>

        <p className="mt-5">
          Our Research and Development laboratory is available for the selection
          of suitable materials and for the design of new products able to
          respond to the most particular needs.
        </p>

        <p className="mt-5">
          Our technicians are able to realize projects also for the production
          plants of the customer and thus obtain a finished product{" "}
          <em>ad hoc</em>, from the design and construction of the mold, up to
          the supply of automatic spraying lines.
        </p>

        <p className="mt-5">
          Finally, at the request of the customer, we provide security stocks at
          our offices.
        </p>
      </>
    ),

    reverse: false,
  },

  {
    id: "360-service",
    label: "Complete Industry Service",
    titleStart: "A",
    titleHighlight: "360° service",
    image: "/for_the_industry/A 360.jpg",
    imageAlt: "A 360 degree service",

    description: (
      <>
        <p>
          Through the CMS division, we are able to realize plants that automate
          the insertion of products on production lines in order to simplify the
          production cycle and favor the reduction of costs.
        </p>

        <p className="mt-5">
          The CMS division employs highly specialized personnel and
          technologically advanced equipment to manufacture molds and build
          machineries that will be delivered already tested and able to work
          immediately with total efficiency.
        </p>

        <p className="mt-5">
          The service we offer to the industries is therefore complete: quality
          finished products, plants for production and automation.
        </p>
      </>
    ),

    reverse: true,
  },
];

/* =====================================================
   PAGE
===================================================== */

export default function ForTheIndustryPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            {/* Small Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#D4AF37] sm:text-[10px]">
                Solutions & Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
              For the{" "}
              <span className="relative text-[#49308F]">
                industry
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-xs leading-6 text-black/60 sm:text-sm sm:leading-7 lg:text-base">
              We are able to offer a complete service with high quality,
              customizable and custom-designed finished products, as well as
              automatic production lines specifically created for the customer’s
              production cycle.
            </p>

            {/* Button */}
            <div className="mt-7">
              <Link
                href="#industry-solutions"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#49308F] hover:shadow-[0_14px_35px_rgba(99,84,151,0.30)] active:translate-y-0 active:scale-95"
              >
                {/* Shine */}
                <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                <span className="relative z-10">Explore Industry</span>

                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY SOLUTIONS
      ===================================================== */}
      <section id="industry-solutions" className="bg-white">
        {industrySections.map((solution, index) => (
          <div key={solution.id} id={solution.id}>
            {/* Top Divider */}
            <div className="h-[2px] w-full bg-[#49308F]" />

            <div className="relative overflow-hidden">
              {/* Background Glow */}
              <div
                className={`pointer-events-none absolute top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block ${
                  solution.reverse ? "-left-20" : "-right-20"
                }`}
              />

              <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
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
                      className={`absolute -inset-4 rounded-[2rem] bg-[#49308F]/8 blur-2xl ${
                        solution.reverse
                          ? "md:translate-x-3"
                          : "md:-translate-x-3"
                      }`}
                    />

                    {/* Image Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/40 hover:shadow-[0_25px_70px_rgba(99,84,151,0.16)] sm:rounded-3xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
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
                    {/* Number */}
                    <div className="mb-7 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[11px] font-bold text-[#49308F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#49308F] sm:text-[10px]">
                        {solution.label}
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
                      {solution.titleStart}{" "}
                      <span className="relative text-[#49308F]">
                        {solution.titleHighlight}

                        <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
                      </span>
                    </h2>

                    {/* Gold + Purple Accent */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="h-[3px] w-10 bg-[#D4AF37]" />
                      <span className="h-[3px] w-5 bg-[#49308F]" />
                    </div>

                    {/* Description */}
                    <div className="mt-6 max-w-xl text-xs leading-6 text-black/60 sm:text-sm sm:leading-7 lg:text-base">
                      {solution.description}
                    </div>

                    {/* Button */}
                    <div className="mt-7">
                      <Link
                        href={`#${solution.id}`}
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#49308F] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(99,84,151,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_15px_35px_rgba(212,175,55,0.30)] active:translate-y-0 active:scale-95"
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

            {/* Bottom Divider */}
            {index === industrySections.length - 1 && (
              <div className="h-[2px] w-full bg-[#49308F]" />
            )}
          </div>
        ))}
      </section>

      {/* =====================================================
          BAKING PRODUCTS GALLERY
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/8 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#49308F]/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          {/* Section Heading */}
          <div className="mb-9 max-w-3xl sm:mb-12">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#D4AF37] sm:text-[10px]">
                Our Products
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
              Baking cups &{" "}
              <span className="relative text-[#49308F]">
                cake moulds
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-xs leading-6 text-black/60 sm:text-sm sm:leading-7 lg:text-base">
              Explore our collection of baking cups, cake moulds and food
              packaging products designed for attractive presentation, reliable
              performance and modern production requirements.
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              640: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image}>
                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/40 hover:shadow-[0_25px_65px_rgba(99,84,151,0.15)] sm:rounded-3xl">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`The Pack Hub baking product ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Product Number */}
                  <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/95 text-[10px] font-bold text-[#49308F] shadow-lg backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-[#49308F]/60 via-[#49308F] to-[#49308F]/60" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================================
          COVER IMAGE
      ===================================================== */}
      <section className="bg-white">
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#49308F]/10 blur-3xl" />

          {/* Image Card */}
          <div className="mx-auto w-full max-w-5xl">
            <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#49308F]/30 hover:shadow-[0_25px_70px_rgba(99,84,151,0.15)] sm:rounded-3xl">
              {/* Tall Image */}
              <div className="relative h-[320px] overflow-hidden sm:h-[400px] md:h-[480px] lg:h-[560px]">
                <Image
                  src="/for_the_industry/cover.jpg"
                  alt="The Pack Hub products"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Bottom Accent */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#49308F]/60 via-[#49308F] to-[#49308F]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE CTA
      ===================================================== */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="group relative min-h-[420px] overflow-hidden rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:min-h-[500px] sm:rounded-3xl">
            {/* Background Image */}
            <Image
              src="/for_the_industry/bootom.jpg"
              alt="The Pack Hub Products Catalogue"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1279px) 100vw, 1280px"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#49308F]/90 via-[#49308F]/65 to-black/20" />

            {/* Gold Glow */}
            <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[420px] max-w-2xl items-center px-6 py-12 sm:min-h-[500px] sm:px-12 lg:px-16">
              <div>
                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D4AF37]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#D4AF37] sm:text-[10px]">
                    Explore Our Range
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  The Catalogue of{" "}
                  <span className="text-[#D4AF37]">The Pack Hub Products</span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-xl text-xs leading-6 text-white/70 sm:text-sm sm:leading-7 lg:text-base">
                  Discover our complete range of innovative, reliable and
                  high-quality packaging solutions designed for modern food
                  production.
                </p>

                {/* Button */}
                <div className="mt-7">
                  <Link
                    href="/products"
                    className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#D4AF37] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_35px_rgba(212,175,55,0.35)] active:translate-y-0 active:scale-95"
                  >
                    {/* Shine */}
                    <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 transition-all duration-700 group-hover/btn:left-[130%]" />

                    <span className="relative z-10">Discover More</span>

                    <ArrowRight
                      size={15}
                      className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Gold Accent */}
            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />
          </div>
        </div>
      </section>
    </main>
  );
}
