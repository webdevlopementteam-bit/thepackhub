"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import Environmental_Sustainability from "@/sections/Environmental_Sustainability";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* =====================================================
   PRODUCTION IMAGES
===================================================== */

const productionImages = [
  "/production/p1.jpg",
  "/production/p2.jpg",
  "/production/p3.jpg",
  "/production/p4.jpg",
  "/production/p5.jpg",
  "/production/p6.jpg",
  "/production/p7.jpg",
  "/production/p8.jpg",
  "/production/p9.jpg",
  "/production/p10.jpg",
];

/* =====================================================
   PAGE
===================================================== */

export default function Production() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return (
    <>
      {/* =====================================================
          PRODUCTION
      ===================================================== */}
      <section
        id="production"
        className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4b82a]/10 blur-[100px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="min-w-0">
              {/* Label */}
              <div className="mb-5 flex items-center gap-2.5 sm:gap-3">
                <span className="h-px w-8 shrink-0 bg-[#FCCE60] sm:w-12" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4b82a] sm:text-xs sm:tracking-[0.3em]">
                  Production
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 text-sm leading-7 text-black sm:space-y-5 sm:text-base sm:leading-8 md:text-lg md:leading-8">
                <p>
                  For over 90 years Novacart has been producing baking molds,
                  paper cups and paper and cardboard products for the food and
                  pastry industries. Our highly skilled and competent staff work
                  in our production facilities.
                </p>

                <p>
                  We carefully select our suppliers and carefully evaluate the
                  raw materials: in this way we guarantee our customers
                  certified quality products through strict internal controls,
                  capable of responding perfectly to different needs.
                </p>

                <p>
                  The high degree of automation of our production facilities
                  allows us to work quickly to provide a punctual service and in
                  line with the dynamism of the market.
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE SLIDER
            ================================================= */}
            <div className="relative min-w-0 w-full">
              {/* Gold Corner */}
              <div className="absolute -right-1 -top-1 z-10 h-14 w-14 border-r border-t border-[#d4b82a]/70 sm:-right-3 sm:-top-3 sm:h-20 sm:w-20 md:-right-4 md:-top-4 md:h-24 md:w-24" />

              {/* Slider Card */}
              <div className="relative w-full overflow-hidden rounded-xl border border-black/10 bg-[#111] shadow-xl sm:rounded-2xl sm:shadow-2xl">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop
                  speed={800}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="production-swiper aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3]"
                >
                  {productionImages.map((image, index) => (
                    <SwiperSlide key={image}>
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={image}
                          alt={`Production facility ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                          className="object-cover"
                          priority={index === 0}
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Image Counter */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
                          <span className="text-xs font-medium tracking-[0.15em] text-[#d4b82a] sm:text-sm sm:tracking-widest">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px w-6 bg-white/40 sm:w-10" />

                          <span className="text-xs tracking-[0.15em] text-white/60 sm:text-sm sm:tracking-widest">
                            {String(productionImages.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-4 flex w-full items-center gap-3 sm:mt-5 sm:gap-4">
                <div className="h-px min-w-0 flex-1 bg-black/10" />

                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4b82a]" />

                <div className="h-px w-12 shrink-0 bg-[#d4b82a]/50 sm:w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENVIRONMENTAL SUSTAINABILITY
      ===================================================== */}
      <Environmental_Sustainability />

      {/* =====================================================
          INNOVATION / RESEARCH & DEVELOPMENT
      ===================================================== */}
      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-10 lg:gap-20">
            {/* =================================================
                TEXT COLUMN
            ================================================= */}
            <div className="order-2 min-w-0 md:order-1">
              {/* Label */}
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-px w-8 shrink-0 bg-[#d4b82a] sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4b82a] sm:text-xs sm:tracking-[0.3em]">
                  Research & Development
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
                Innovation
              </h2>

              {/* Divider */}
              <div className="mt-5 h-px w-full bg-black/10 sm:mt-6">
                <div className="h-px w-16 bg-[#d4b82a] sm:w-24" />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/75 sm:mt-7 sm:text-base sm:leading-8 md:text-lg lg:text-xl lg:leading-9">
                We believe in innovation and continuous growth: this is why
                Punto Rosso, our laboratory for analysis, research and
                development, was born.
              </p>

              {/* Button */}
              <Link
                href="#"
                className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#49308F] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#49308F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4b82a] hover:text-[#111111] hover:shadow-xl hover:shadow-[#d4b82a]/30 active:translate-y-0 sm:mt-9 sm:w-auto sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
              >
                {/* Hover Shine */}
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-full" />

                <span className="relative z-10">Discover More</span>

                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-black/10 sm:h-9 sm:w-9">
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-[-20deg]"
                  />
                </span>
              </Link>
            </div>

            {/* =================================================
                IMAGE COLUMN
            ================================================= */}
            <div className="order-1 min-w-0 md:order-2">
              <div className="group relative w-full overflow-hidden">
                {/* Gold Corner */}
                <div className="absolute right-0 top-0 z-20 h-14 w-14 border-r-2 border-t-2 border-[#d4b82a] sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28" />

                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/11]">
                  <Image
                    src="/production/research.jpg"
                    alt="Innovation and research laboratory"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>

                {/* Bottom Gold Line */}
                <div className="h-1 w-1/2 bg-[#d4b82a] transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
