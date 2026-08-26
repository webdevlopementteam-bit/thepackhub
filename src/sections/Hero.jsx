"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    desktop: "/hero/hero-1.jpeg",
    mobile: "/hero/m1.png",
    alt: "Bakery Packaging Banner 1",
  },
  {
    desktop: "/hero/hero-2.jpg",
    mobile: "/hero/m2.png",
    alt: "Bakery Packaging Banner 2",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    e.currentTarget.dataset.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const startX = Number(e.currentTarget.dataset.startX);
    const endX = e.changedTouches[0].clientX;
    const swipeDistance = startX - endX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className="m-0 w-full overflow-hidden bg-white p-0">
      {/* IMAGE SLIDER */}
      <div
        className="relative m-0 h-[650px] w-full touch-pan-y overflow-hidden bg-white p-0 sm:h-[750px] md:h-[400px] lg:h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* MOBILE IMAGE */}
        <Image
          src={images[current].mobile}
          alt={images[current].alt}
          fill
          priority={current === 0}
          sizes="(max-width: 767px) 100vw, 0px"
          className="block object-cover object-center md:hidden"
        />

        {/* DESKTOP IMAGE */}
        <Image
          src={images[current].desktop}
          alt={images[current].alt}
          fill
          priority={current === 0}
          sizes="(min-width: 768px) 100vw, 0px"
          className="hidden object-cover object-center md:block"
        />

        {/* PREVIOUS BUTTON */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute bottom-5 right-24 hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-blue-950/20 text-lg text-white backdrop-blur-sm transition hover:scale-110 hover:bg-blue-400 md:flex md:h-11 md:w-11"
        >
          ←
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute bottom-5 right-5 hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-blue-950/20 text-lg text-white backdrop-blur-sm transition hover:scale-110 hover:bg-blue-400 md:flex md:h-11 md:w-11"
        >
          →
        </button>
      </div>

      {/* CONTENT */}
      <div className="relative m-0 -mt-1 bg-white px-3 pb-4 sm:px-6 sm:pb-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 px-5 py-6 shadow-[0_8px_30px_rgba(30,64,175,0.08)] sm:px-8 sm:py-7 md:px-10 md:py-8">
            {/* Decorative Shapes */}
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/60" />
            <div className="absolute -bottom-20 -left-16 h-36 w-36 rounded-full bg-blue-50" />

            <div className="relative z-10">
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

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
