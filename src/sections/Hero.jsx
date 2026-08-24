"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/hero/hero-1.jpeg", alt: "Bakery Packaging Banner 1" },
  { src: "/hero/hero-2.jpg", alt: "Bakery Packaging Banner 2" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ================= IMAGE ================= */}
      <div className="relative h-[300px] w-full sm:h-[430px] ">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-blue-950/60 text-lg text-white backdrop-blur-sm transition hover:scale-110 hover:bg-blue-700 sm:left-5 sm:h-11 sm:w-11"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-blue-950/60 text-lg text-white backdrop-blur-sm transition hover:scale-110 hover:bg-blue-700 sm:right-5 sm:h-11 sm:w-11"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT AT BOTTOM ================= */}
      <div className="relative -mt-1 bg-white px-3 pb-4 sm:px-6 sm:pb-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 px-5 py-6 shadow-[0_8px_30px_rgba(30,64,175,0.08)] sm:px-8 sm:py-7 md:px-10 md:py-8">
            {/* Decorative Shapes */}
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/60" />
            <div className="absolute -bottom-20 -left-16 h-36 w-36 rounded-full bg-blue-50" />

            {/* Content */}
            <div className="relative z-10">
              {/* Label */}

              {/* Description */}
              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                <strong className="font-semibold text-blue-950">
                  The Pack Hub,
                </strong>{" "}
                established in 2022, are well-known manufacturers, exporters,
                and suppliers of a broad range of bakery items. We offer our
                clients a finest range of Baking Cup Paper, wrapping sheets,
                Printed Cake Box, and Cake Base Gold. These products are
                manufactured using optimum quality raw materials by our skilled
                employees in conformity with universal market standards.
              </p>

              {/* Bottom Area */}
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Button */}
                <Link
                  href="/about-us"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#49308F] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
                >
                  Discover More
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
