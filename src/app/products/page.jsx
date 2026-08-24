"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { products } from "@/app/lib/products";

const PRODUCTS_PER_PAGE = 16;

/* ================= SLUG GENERATOR ================= */
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProductImageSection() {
  const [currentPage, setCurrentPage] = useState(0);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = currentPage * PRODUCTS_PER_PAGE;

  const visibleProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  /* ================= NEXT ================= */
  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);

      setTimeout(() => {
        document.getElementById("products")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  /* ================= PREVIOUS ================= */
  const goPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);

      setTimeout(() => {
        document.getElementById("products")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <section
      id="products"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#a88c1f]">
              Our Products
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Quality products for{" "}
              <span className="text-[#b09220]">every baking need.</span>
            </h2>
          </div>

          {/* Product Quantity */}
          <div className="shrink-0 text-right">
            <span className="block text-2xl font-semibold text-[#b09220] sm:text-3xl">
              {products.length}
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-xs">
              Products
            </span>
          </div>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product, index) => {
            /* ================= PRODUCT SLUG ================= */
            const productSlug = slugify(product.name);

            return (
              <article
                key={productSlug || index}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-black/10
                  bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#b09220]/50
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                "
              >
                {/* =================================================
                    GOLD TOP ACCENT
                ================================================= */}
                <div
                  className="
                    absolute left-0 right-0 top-0 z-10 h-[2px]
                    origin-left scale-x-0
                    bg-[#b09220]
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* =================================================
                    PRODUCT IMAGE
                ================================================= */}
                <Link href={`/products/${productSlug}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-[#f7f7f5]">
                    {/* Glow */}
                    <div
                      className="
                        absolute left-1/2 top-1/2
                        h-40 w-40
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full
                        bg-[#b09220]/5
                        blur-3xl
                        transition-all duration-500
                        group-hover:bg-[#b09220]/10
                      "
                    />

                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="
                        relative z-[1]
                        object-contain
                        p-5
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                      sizes="
                        (max-width: 640px) 50vw,
                        (max-width: 1024px) 33vw,
                        25vw
                      "
                    />

                    {/* Hover Arrow */}
                    <div
                      className="
                        absolute bottom-3 right-3 z-10
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        bg-black
                        text-white
                        opacity-0
                        translate-y-2
                        transition-all duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>

                {/* =================================================
                    PRODUCT INFO
                ================================================= */}
                <div className="relative p-4 sm:p-5">
                  {/* Category */}
                  <Link
                    href={`/products/category/${slugify(product.category)}`}
                    className="mb-1.5 block w-fit text-[9px] font-bold uppercase tracking-[0.22em] text-[#b09220] transition-colors hover:text-black sm:text-[10px]"
                  >
                    {product.category}
                  </Link>
                  {/* Product Name */}
                  <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 tracking-tight text-black sm:text-base">
                    {product.name}
                  </h3>

                  {/* Divider */}
                  <div className="my-3 h-px w-full bg-black/8" />

                  {/* =================================================
                      VIEW PRODUCT
                  ================================================= */}
                  <Link
                    href={`/products/${productSlug}`}
                    className="
                      inline-flex items-center gap-2
                      text-[10px] font-bold uppercase
                      tracking-[0.14em]
                      text-black
                      transition-colors duration-300
                      hover:text-[#b09220]
                      sm:text-xs
                    "
                  >
                    View Product
                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            PAGINATION
        ===================================================== */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            {/* ================= PREVIOUS ================= */}
            <button
              onClick={goPrevious}
              disabled={currentPage === 0}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-black/10
                bg-white
                text-black
                shadow-sm
                transition-all duration-300
                hover:border-[#b09220]
                hover:bg-[#b09220]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:border-black/10
                disabled:hover:bg-white
                disabled:hover:text-black
              "
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>

            {/* ================= PAGE NUMBER ================= */}
            <div className="flex min-w-[90px] items-center justify-center gap-2">
              <span className="text-sm font-semibold text-black">
                {currentPage + 1}
              </span>

              <span className="text-sm text-black/30">/</span>

              <span className="text-sm text-black/50">{totalPages}</span>
            </div>

            {/* ================= NEXT ================= */}
            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-black
                text-white
                shadow-sm
                transition-all duration-300
                hover:bg-[#b09220]

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:bg-black
              "
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* =====================================================
            SHOWING COUNT
        ===================================================== */}
        <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-black/40">
          Showing {startIndex + 1}
          {"–"}
          {Math.min(startIndex + PRODUCTS_PER_PAGE, products.length)} of{" "}
          {products.length} products
        </p>
      </div>
    </section>
  );
}
