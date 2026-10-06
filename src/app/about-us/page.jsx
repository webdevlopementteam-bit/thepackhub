"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= ABOUT US ================= */}
        <div className="mb-14 text-left md:mb-16">
          <div className="mb-5 flex items-center gap-2.5 sm:gap-3">
            <span className="h-px w-8 shrink-0 bg-[#FCCE60] sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4b82a] sm:text-xs sm:tracking-[0.3em]">
              About Us
            </span>
          </div>

          <div className="max-w-6xl space-y-5 text-[15px] leading-7 text-gray-600 sm:text-base">
            <p>
              <strong className="font-semibold text-gray-800">
                The Pack Hub
              </strong>
              , established in 2022, are well-known manufacturers, exporters,
              and suppliers of a broad range of bakery items. We offer our
              client a finest range of Baking Cup Paper, wrapping sheets Printed
              Cake Box, and Cake Base Gold. These products are manufactured
              making use of optimum quality raw material by our skilled
              employees in conformity with universal market standards. Owing to
              optimum quality, quality paper, elegant design and fine finish,
              these products are widely recognized amongst clientele.
            </p>

            <p>
              Industries are expanding and acknowledging the use of paper
              products. Our wide range of paper products are customized
              according to the customers’ demand. We supply our baking paper
              cups in Delhi NCR and different parts of India. Our products are
              high in demand in all the sectors be it bakery, hotels,
              restaurants, railways, airways, etc.
            </p>

            <p>
              Our products are manufactured with all the precision and are
              delivered after various quality checks. We also take care of our
              clients’ other demands like printing logo, image, brand promotion,
              etc. We take pride in being recognized as the best disposable
              paper cups manufacturer in India.
            </p>
          </div>
        </div>

        {/* ================= PRODUCTION SECTION ================= */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/about/about.jpg"
              alt="The Pack Hub Production"
              width={800}
              height={600}
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[380px] md:h-[430px] lg:h-[500px]"
            />
          </div>

          {/* FOR PRODUCTION */}
          <div className="text-left">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#4D2785] p-2 sm:h-20 sm:w-20 sm:p-3">
              <Image
                src="/icon/icon.png"
                alt="Production icon"
                width={50}
                height={50}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[3px] text-black">
              For Production
            </span>

            <h3 className="mb-5 text-2xl font-bold leading-tight text-[#4D2785] sm:text-4xl lg:text-5xl">
              Quality & Efficiency
            </h3>

            <p className="mb-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Every day we make millions of products guaranteeing the highest
              quality and efficiency.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4D2785] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#123F8A]"
            >
              Discover More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
