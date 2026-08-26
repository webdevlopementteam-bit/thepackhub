"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

  /* ================= CATEGORIES ================= */
  const categories = [...new Set(products.map((product) => product.category))];

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = currentPage * PRODUCTS_PER_PAGE;

  const visibleProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, products.length);

  /* ================= CATEGORY REDIRECT ================= */
  const handleCategoryChange = (e) => {
    const category = e.target.value;

    if (!category) return;

    window.location.href = `/products/category/${slugify(category)}`;
  };

  /* ================= SCROLL TO PRODUCTS ================= */
  const scrollToProducts = () => {
    setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  /* ================= NEXT ================= */
  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      scrollToProducts();
    }
  };

  /* ================= PREVIOUS ================= */
  const goPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      scrollToProducts();
    }
  };

  return (
    <section
      id="products"
      className="scroll-mt-20 bg-[#fafaf8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-10 border-b border-black/10 pb-8 sm:mb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b09220]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a88c1f] sm:text-xs">
                  Explore Our Collection
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Quality products for{" "}
                <span className="text-[#b09220]">every baking need.</span>
              </h2>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                {/* Showing Count */}
                <p className="text-sm font-medium text-black/55">
                  Showing{" "}
                  <span className="font-bold text-black">
                    {startIndex + 1}–{endIndex}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-[#b09220]">
                    {products.length}
                  </span>{" "}
                  results
                </p>

                <span className="hidden h-1 w-1 rounded-full bg-[#b09220] sm:block" />

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
                  {categories.length} Categories
                </p>
              </div>
            </div>

            {/* ================= CATEGORY DROPDOWN ================= */}
            <div className="w-full lg:w-[300px]">
              <label className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                <span className="h-px w-5 bg-[#b09220]" />
                Browse by Category
              </label>

              <div className="group relative">
                {/* Gold glow */}
                <div
                  className="
                    pointer-events-none absolute -inset-[1px]
                    rounded-xl bg-[#b09220]/20
                    opacity-0 blur-md
                    transition-opacity duration-300
                    group-hover:opacity-100
                    group-focus-within:opacity-100
                  "
                />

                <select
                  defaultValue=""
                  onChange={handleCategoryChange}
                  className="
                    relative z-10 h-14 w-full appearance-none
                    cursor-pointer rounded-xl
                    border border-black/10
                    bg-white px-5 pr-14
                    text-sm font-semibold text-black
                    shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                    outline-none
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5
                    hover:border-[#b09220]/70
                    hover:shadow-[0_12px_30px_rgba(176,146,32,0.12)]
                    focus:-translate-y-0.5
                    focus:border-[#b09220]
                    focus:ring-4 focus:ring-[#b09220]/10
                  "
                  aria-label="Select product category"
                >
                  <option value="">All Categories</option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Right icon area */}
                <div
                  className="
                    pointer-events-none absolute right-2 top-1/2 z-20
                    flex h-10 w-10 -translate-y-1/2
                    items-center justify-center
                    rounded-lg bg-[#b09220]/8
                    text-[#b09220]
                    transition-all duration-300
                    group-hover:bg-[#b09220]
                    group-hover:text-white
                    group-focus-within:bg-[#b09220]
                    group-focus-within:text-white
                  "
                >
                  <ChevronDown
                    size={18}
                    className="
                      transition-transform duration-300 ease-out
                      group-focus-within:rotate-180
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product, index) => {
            const productSlug = slugify(product.name);

            return (
              <article
                key={productSlug || index}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-black/10 bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#b09220]/50
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                "
              >
                {/* Gold Top Accent */}
                <div
                  className="
                    absolute left-0 right-0 top-0 z-10 h-[3px]
                    origin-left scale-x-0
                    bg-gradient-to-r from-[#8c7013] via-[#d4b82a] to-[#8c7013]
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Product Image */}
                <div
                  className="relative aspect-square cursor-pointer overflow-hidden bg-[#f7f7f5]"
                  onClick={() =>
                    (window.location.href = `/products/${productSlug}`)
                  }
                >
                  {/* Background Glow */}
                  <div
                    className="
                      absolute left-1/2 top-1/2
                      h-40 w-40
                      -translate-x-1/2 -translate-y-1/2
                      rounded-full bg-[#b09220]/5
                      blur-3xl
                      transition-all duration-500
                      group-hover:scale-150
                      group-hover:bg-[#b09220]/10
                    "
                  />

                  {/* Category Badge */}
                  <Link
                    href={`/products/category/${slugify(product.category)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="
                      group/category
                      absolute left-3 top-3 z-10
                      inline-flex items-center gap-1.5
                      overflow-hidden
                      rounded-full
                      border border-[#b09220]/20
                      bg-white/90
                      px-3 py-1.5
                      text-[8px] font-bold uppercase
                      tracking-[0.12em] text-[#a88c1f]
                      shadow-[0_4px_15px_rgba(0,0,0,0.06)]
                      backdrop-blur-md
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:border-[#b09220]
                      hover:bg-[#b09220]
                      hover:text-white
                      hover:shadow-[0_8px_22px_rgba(176,146,32,0.3)]
                      active:scale-95
                    "
                  >
                    {/* Shine Effect */}
                    <span
                      className="
                        absolute inset-y-0 -left-1/2 w-1/3
                        -skew-x-12
                        bg-white/40
                        transition-all duration-700
                        group-hover/category:left-[130%]
                      "
                    />

                    {/* Text */}
                    <span className="relative z-10">{product.category}</span>

                    {/* Arrow */}
                    <ArrowRight
                      size={11}
                      className="
                        relative z-10
                        -translate-x-1 opacity-0
                        transition-all duration-300
                        group-hover/category:translate-x-0
                        group-hover/category:opacity-100
                      "
                    />
                  </Link>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      relative z-[1] object-contain p-5
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                    "
                    sizes="(max-width: 640px) 50vw,(max-width: 1024px) 33vw,25vw"
                  />
                </div>

                {/* Product Info */}
                <div className="relative p-4 sm:p-5">
                  {/* Product Name */}
                  <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 tracking-tight text-black sm:text-base">
                    {product.name}
                  </h3>

                  {/* Divider */}
                  <div className="my-3 h-px w-full bg-black/8" />

                  {/* View Product */}
                  <Link
                    href={`/products/${productSlug}`}
                    className="
                      group/view relative inline-flex items-center gap-2
                      -ml-2 overflow-hidden
                      rounded-lg px-2 py-1.5
                      text-[10px] font-bold uppercase
                      tracking-[0.14em] text-black
                      transition-all duration-300 ease-out
                      hover:bg-[#b09220]/8
                      hover:text-[#b09220]
                      sm:text-xs
                    "
                  >
                    {/* Animated underline */}
                    <span
                      className="
                        absolute bottom-0 left-2
                        h-[2px] w-0
                        bg-[#b09220]
                        transition-all duration-300 ease-out
                        group-hover/view:w-[calc(100%-18px)]
                      "
                    />

                    {/* Text */}
                    <span className="relative z-10">View Product</span>

                    {/* Arrow */}
                    <ArrowRight
                      size={15}
                      className="
                        relative z-10
                        transition-all duration-300 ease-out
                        group-hover/view:translate-x-1.5
                        group-hover/view:scale-110
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
            {/* Previous */}
            <button
              onClick={goPrevious}
              disabled={currentPage === 0}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-black/10
                bg-white text-black shadow-sm
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

            {/* Page Number */}
            <div className="flex min-w-[100px] items-center justify-center gap-2">
              <span className="text-sm font-bold text-black">
                {currentPage + 1}
              </span>

              <span className="text-sm text-black/30">/</span>

              <span className="text-sm font-medium text-black/50">
                {totalPages}
              </span>
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full bg-black text-white shadow-sm
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

        {/* Bottom Showing Count */}
        <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-black/40">
          Showing {startIndex + 1}–{endIndex} of {products.length} results
        </p>
      </div>
    </section>
  );
}
