import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Package, Sparkles } from "lucide-react";
import { products } from "@/app/lib/products";

/* =====================================================
   SLUG GENERATOR
===================================================== */

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* =====================================================
   STATIC PARAMS
===================================================== */

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug || slugify(product.name),
  }));
}

/* =====================================================
   PRODUCT PAGE
===================================================== */

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find(
    (item) => (item.slug || slugify(item.name)) === slug,
  );

  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#fafaf8] px-5">
        <div className="relative max-w-md text-center">
          {/* Decorative Glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b09220]/10 blur-3xl" />

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b09220]/20 bg-white text-[#b09220] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <Package size={28} />
          </div>

          <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#b09220]">
            Product Not Found
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            This product isn't available.
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-black/55">
            The product you are looking for may have been moved or is no longer
            available in our collection.
          </p>

          <Link
            href="/products"
            className="
              group relative mt-7 inline-flex items-center gap-2.5
              overflow-hidden rounded-full bg-black
              px-6 py-3.5 text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#b09220]
              hover:shadow-[0_12px_30px_rgba(176,146,32,0.3)]
            "
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to Products</span>
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     PRODUCT DATA
  ===================================================== */

  const data = product.data || {};

  let bulletPoints = [];

  if (Array.isArray(data.bulletPointData)) {
    bulletPoints = data.bulletPointData;
  } else if (typeof data.bulletPointData === "string") {
    bulletPoints = data.bulletPointData
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  const tableData = data.tableData || false;

  const tags = Array.isArray(data.tags) ? data.tags : [];

  const descriptionData = Array.isArray(data.descriptionData)
    ? data.descriptionData
    : [];

  /* =====================================================
     RELATED PRODUCTS
  ===================================================== */

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.name !== product.name,
    )
    .slice(0, 4);

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          TOP PRODUCT SECTION
      ===================================================== */}

      <section className="relative border-b border-black/8 bg-[#fafaf8]">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#b09220]/5 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#b09220]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <Link
            href="/products"
            className="
              group/back mb-8 inline-flex items-center gap-2
              rounded-full border border-transparent
              px-3 py-2 -ml-3

              text-[10px] font-bold uppercase
              tracking-[0.16em] text-[#a88c1f]

              transition-all duration-300
              hover:border-[#b09220]/15
              hover:bg-white
              hover:text-black
              hover:shadow-sm
            "
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover/back:-translate-x-1"
            />
            Back to Products
          </Link>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* =================================================
                LEFT IMAGE
            ================================================= */}

            <div
              className="
    group relative overflow-hidden
    rounded-3xl border border-black/10 bg-white

    shadow-[0_15px_50px_rgba(0,0,0,0.07)]
    transition-all duration-300

    hover:border-[#b09220]/40
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
  "
            >
              {/* Top Label */}
              <div
                className="
      absolute left-5 top-5 z-20
      flex items-center gap-2
      rounded-full border border-black/8
      bg-white/90 px-3 py-1.5
      text-[8px] font-bold uppercase
      tracking-[0.16em] text-black/50
      shadow-sm backdrop-blur-md
    "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#b09220]" />
                Premium Packaging
              </div>

              {/* Image Zoom Area */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="
        object-contain p-8
        transition-transform duration-500 ease-in-out
        group-hover:scale-110
        sm:p-12 lg:p-16
      "
                  sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
                />
              </div>
            </div>

            {/* =================================================
                RIGHT DETAILS
            ================================================= */}

            <div className="flex min-w-0 flex-col lg:pt-3">
              {/* Category */}
              <Link
                href={`/products/category/${slugify(product.category)}`}
                className="
                  group/category relative inline-flex w-fit items-center gap-2
                  overflow-hidden rounded-full

                  border border-[#b09220]/25
                  bg-[#b09220]/5
                  px-3.5 py-1.5

                  text-[9px] font-bold uppercase
                  tracking-[0.2em] text-[#a88c1f]

                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:border-[#b09220]
                  hover:bg-[#b09220]
                  hover:text-white
                  hover:shadow-[0_8px_22px_rgba(176,146,32,0.28)]
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute inset-y-0 -left-1/2 w-1/3
                    -skew-x-12 bg-white/30
                    transition-all duration-700
                    group-hover/category:left-[130%]
                  "
                />

                <span className="relative z-10">{product.category}</span>

                <ArrowRight
                  size={12}
                  className="
                    relative z-10
                    -translate-x-1.5 opacity-0
                    transition-all duration-300
                    group-hover/category:translate-x-0
                    group-hover/category:opacity-100
                  "
                />
              </Link>

              {/* Product Name */}
              <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-black sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
                {product.name}
              </h1>

              {/* Gold Line */}
              <div className="mt-5 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-[#b09220]" />
                <div className="h-px w-16 bg-black/10" />
              </div>

              {/* Description */}
              {product.description && (
                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base lg:text-[17px] lg:leading-8">
                  {product.description}
                </p>
              )}

              {/* =================================================
                  FEATURES
              ================================================= */}

              {bulletPoints.length > 0 && (
                <div className="mt-8">
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-[#b09220]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b09220]">
                        Product Features
                      </span>
                    </div>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-black">
                      Key Features
                    </h2>
                  </div>

                  <div
                    className="
                      relative overflow-hidden rounded-2xl
                      border border-black/8 bg-white p-3
                      shadow-[0_12px_35px_rgba(0,0,0,0.04)]
                      sm:p-4
                    "
                  >
                    {/* Decorative Glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b09220]/8 blur-3xl" />

                    <div className="relative space-y-1">
                      {bulletPoints.map((point, index) => (
                        <div
                          key={index}
                          className="
                            group/feature flex items-start gap-3
                            rounded-xl p-3

                            transition-all duration-300
                            hover:translate-x-1
                            hover:bg-[#b09220]/5
                          "
                        >
                          <span
                            className="
                              mt-0.5 flex h-6 w-6 shrink-0
                              items-center justify-center
                              rounded-full

                              bg-[#b09220]/10
                              text-[#b09220]

                              transition-all duration-300

                              group-hover/feature:scale-110
                              group-hover/feature:bg-[#b09220]
                              group-hover/feature:text-white
                            "
                          >
                            <Check size={13} strokeWidth={3} />
                          </span>

                          <span className="pt-0.5 text-sm leading-6 text-black/65 transition-colors duration-300 group-hover/feature:text-black">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
                  SPECIFICATIONS
              ================================================= */}

              {tableData && (
                <div className="mt-8 w-full min-w-0 sm:mt-10">
                  {/* Heading */}
                  <div className="mb-4 sm:mb-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b09220] sm:text-[10px] sm:tracking-[0.22em]">
                      Specifications
                    </span>

                    <h2 className="mt-1.5 text-lg font-bold tracking-tight text-black sm:mt-2 sm:text-xl lg:text-2xl">
                      Product Specifications
                    </h2>
                  </div>

                  {/* Table Wrapper */}
                  <div
                    className="
        w-full min-w-0 overflow-x-auto
        rounded-xl border border-black/10 bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.05)]
        sm:rounded-2xl
        sm:shadow-[0_12px_35px_rgba(0,0,0,0.05)]
      "
                  >
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-gradient-to-r from-black via-[#1a1a1a] to-black text-white">
                          {tableData.headers.map((header, index) => (
                            <th
                              key={index}
                              className="
                  whitespace-nowrap
                  px-3 py-3
                  text-[8px] font-bold uppercase
                  tracking-[0.08em] text-white/90

                  sm:px-4 sm:py-4
                  sm:text-[10px] sm:tracking-[0.12em]

                  lg:px-5
                "
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {tableData.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className="
                border-t border-black/8
                transition-colors duration-300
                odd:bg-[#fafaf8]
                hover:bg-[#b09220]/7
              "
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="
                    px-3 py-3
                    text-[10px] font-medium leading-5 text-black/65

                    sm:px-4 sm:py-3.5
                    sm:text-xs

                    lg:px-5 lg:text-sm
                  "
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile scroll hint */}
                  <p className="mt-2 text-center text-[9px] font-medium text-black/35 sm:hidden">
                    Swipe left or right to view all specifications
                  </p>
                </div>
              )}

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="mt-8 flex flex-wrap gap-3">
                {/* Enquire */}
                <Link
                  href="/contact"
                  className="
                    group/enquire relative inline-flex items-center gap-2.5
                    overflow-hidden rounded-full

                    bg-black px-6 py-3.5
                    text-sm font-semibold text-white

                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:bg-[#b09220]
                    hover:shadow-[0_14px_35px_rgba(176,146,32,0.3)]

                    active:translate-y-0
                    active:scale-95
                  "
                >
                  {/* Shine */}
                  <span
                    className="
                      absolute inset-y-0 -left-1/2 w-1/3
                      -skew-x-12 bg-white/20
                      transition-all duration-700
                      group-hover/enquire:left-[130%]
                    "
                  />

                  <span className="relative z-10">Enquire Now</span>

                  <ArrowRight
                    size={16}
                    className="
                      relative z-10
                      transition-transform duration-300
                      group-hover/enquire:translate-x-1.5
                    "
                  />
                </Link>

                {/* View All */}
                <Link
                  href="/products"
                  className="
                    group/all inline-flex items-center gap-2
                    rounded-full border border-black/12
                    bg-white px-6 py-3.5

                    text-sm font-semibold text-black

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-[#b09220]
                    hover:text-[#b09220]
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                  "
                >
                  View All Products
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/all:translate-x-1"
                  />
                </Link>
              </div>

              {/* =================================================
                  TAGS
              ================================================= */}

              {tags.length > 0 && (
                <div className="mt-10">
                  {/* Section Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#b09220]" />

                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b09220]/10">
                        <span className="h-2 w-2 rounded-full bg-[#b09220]" />
                      </span>

                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b7d16]">
                        Product Tags
                      </span>
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-[#b09220]/40 to-transparent" />
                  </div>

                  {/* Tags Card */}
                  <div
                    className="
        group/tags relative overflow-hidden rounded-2xl
        border border-[#b09220]/20

        bg-gradient-to-br
        from-[#fffdf7] via-white to-[#faf5e6]

        p-5
        shadow-[0_10px_35px_rgba(176,146,32,0.08)]

        transition-all duration-500

        hover:border-[#b09220]/40
        hover:shadow-[0_18px_45px_rgba(176,146,32,0.14)]

        sm:p-6
      "
                  >
                    {/* Animated Top Gold Accent */}
                    <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
                      <div
                        className="
            h-full w-full origin-left scale-x-0
            bg-gradient-to-r from-transparent via-[#d4b82a] to-transparent
            transition-transform duration-700
            group-hover/tags:scale-x-100
          "
                      />
                    </div>

                    {/* Decorative Glows */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#b09220]/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-[#d4b82a]/10 blur-3xl" />

                    {/* Small background pattern */}
                    <div className="pointer-events-none absolute right-5 top-5 grid grid-cols-4 gap-1 opacity-[0.07]">
                      {Array.from({ length: 16 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-1 w-1 rounded-full bg-[#b09220]"
                        />
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="relative flex flex-wrap gap-2.5 sm:gap-3">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="
              group/tag relative inline-flex cursor-default
              items-center overflow-hidden rounded-full

              border border-[#b09220]/20
              bg-white px-4 py-2.5

              text-xs font-semibold tracking-wide
              text-[#806b16]

              shadow-[0_3px_10px_rgba(0,0,0,0.04)]

              transition-all duration-300 ease-out

              hover:-translate-y-1
              hover:border-[#b09220]
              hover:bg-[#b09220]
              hover:text-white
              hover:shadow-[0_10px_22px_rgba(176,146,32,0.28)]

              active:scale-95
            "
                        >
                          {/* Shine Effect */}
                          <span
                            className="
                absolute inset-y-0 -left-1/2 w-1/3
                -skew-x-12 bg-white/25
                transition-all duration-700
                group-hover/tag:left-[130%]
              "
                          />

                          {/* Tag Indicator */}
                          <span
                            className="
                relative z-10 mr-2 flex h-1.5 w-1.5
                rounded-full bg-[#b09220]

                transition-all duration-300
                group-hover/tag:scale-125
                group-hover/tag:bg-white
              "
                          />

                          <span className="relative z-10">{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Bottom subtle text */}
                    <div className="relative mt-5 flex items-center gap-2 border-t border-[#b09220]/10 pt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b09220]" />

                      <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-black/35">
                        {tags.length} product-related tags
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESCRIPTION SECTION
      ===================================================== */}

      {descriptionData.length > 0 && (
        <section className="relative bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#b09220]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b09220]">
                  Product Information
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                About <span className="text-[#b09220]">{product.name}</span>
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-[3px] w-12 rounded-full bg-[#b09220]" />
                <div className="h-px w-20 bg-black/10" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {descriptionData.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2
                        key={index}
                        className="
                          border-l-4 border-[#b09220]
                          pl-5 pt-1
                          text-2xl font-bold tracking-tight text-black
                          sm:text-3xl
                        "
                      >
                        {block.content}
                      </h2>
                    );

                  case "h4":
                    return (
                      <h3
                        key={index}
                        className="pt-2 text-xl font-bold tracking-tight text-black"
                      >
                        {block.content}
                      </h3>
                    );

                  case "h5":
                    return (
                      <h4
                        key={index}
                        className="pt-2 text-lg font-bold text-black"
                      >
                        {block.content}
                      </h4>
                    );

                  case "p":
                    return (
                      <p
                        key={index}
                        className="
                          text-[15px] leading-8 text-black/65
                          sm:text-base sm:leading-8
                        "
                      >
                        {block.content}
                      </p>
                    );

                  case "list":
                    return (
                      <ul
                        key={index}
                        className="
                          relative overflow-hidden
                          space-y-1 rounded-2xl
                          border border-black/8
                          bg-[#fafaf8] p-4
                          shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                          sm:p-5
                        "
                      >
                        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#b09220]/5 blur-3xl" />

                        {block.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="
                              relative flex items-start gap-3
                              rounded-xl p-3
                              text-sm leading-6 text-black/70

                              transition-colors duration-300
                              hover:bg-white
                            "
                          >
                            <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[#b09220] shadow-[0_0_0_4px_rgba(176,146,32,0.1)]" />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "faq":
                    return (
                      <div key={index} className="pt-4">
                        <div className="mb-7">
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b09220]">
                            Have Questions?
                          </span>

                          <h3 className="mt-2 text-2xl font-bold tracking-tight text-black">
                            Frequently Asked Questions
                          </h3>
                        </div>

                        <div className="space-y-3">
                          {block.items?.map((faq, faqIndex) => (
                            <details
                              key={faqIndex}
                              className="
                                group overflow-hidden rounded-2xl
                                border border-black/10 bg-white

                                transition-all duration-300

                                hover:border-[#b09220]/40
                                hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)]

                                open:border-[#b09220]/35
                              "
                            >
                              <summary
                                className="
                                  flex cursor-pointer list-none
                                  items-center justify-between gap-5
                                  p-5 text-sm font-semibold text-black
                                  sm:p-6
                                "
                              >
                                <span>{faq.question}</span>

                                <span
                                  className="
                                    flex h-8 w-8 shrink-0
                                    items-center justify-center
                                    rounded-full bg-black
                                    text-lg font-normal text-white

                                    transition-all duration-300

                                    group-hover:bg-[#b09220]
                                    group-open:rotate-45
                                    group-open:bg-[#b09220]
                                  "
                                >
                                  +
                                </span>
                              </summary>

                              <div className="border-t border-black/8 bg-[#fafaf8]/70 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                                <p className="text-sm leading-7 text-black/60">
                                  {faq.answer}
                                </p>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED PRODUCTS
      ===================================================== */}

      {relatedProducts.length > 0 && (
        <section className="relative overflow-hidden bg-[#fafaf8] py-16 sm:py-20 lg:py-24">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#b09220]/5 blur-[100px]" />
          <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#b09220]/5 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Header */}

            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#b09220]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b09220]">
                    You May Also Like
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Related <span className="text-[#b09220]">Products</span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-black/55">
                  Explore more products from our{" "}
                  <Link
                    href={`/products/category/${slugify(product.category)}`}
                    className="font-semibold text-black transition-colors hover:text-[#b09220]"
                  >
                    {product.category}
                  </Link>{" "}
                  range.
                </p>
              </div>

              <Link
                href="/products"
                className="
                  group/viewall inline-flex w-fit items-center gap-2
                  rounded-full border border-black/10
                  bg-white px-5 py-3

                  text-xs font-bold uppercase
                  tracking-[0.1em] text-black

                  shadow-sm
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-[#b09220]
                  hover:text-[#b09220]
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]
                "
              >
                View All
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/viewall:translate-x-1"
                />
              </Link>
            </div>

            {/* Product Grid */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => {
                const relatedSlug =
                  relatedProduct.slug || slugify(relatedProduct.name);

                return (
                  <Link
                    key={relatedSlug}
                    href={`/products/${relatedSlug}`}
                    className="
                      group relative overflow-hidden
                      rounded-3xl border border-black/10
                      bg-white

                      shadow-[0_8px_25px_rgba(0,0,0,0.04)]

                      transition-all duration-500

                      hover:-translate-y-2
                      hover:border-[#b09220]/45
                      hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)]
                    "
                  >
                    {/* Top Accent */}
                    <div
                      className="
                        absolute left-0 right-0 top-0 z-20 h-[3px]
                        origin-left scale-x-0
                        bg-gradient-to-r from-[#8c7013] via-[#d4b82a] to-[#8c7013]
                        transition-transform duration-500
                        group-hover:scale-x-100
                      "
                    />

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-[#f8f8f6]">
                      {/* Glow */}
                      <div
                        className="
                          absolute left-1/2 top-1/2
                          h-32 w-32
                          -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-[#b09220]/5
                          blur-3xl
                          transition-all duration-500
                          group-hover:scale-150
                          group-hover:bg-[#b09220]/10
                        "
                      />

                      {/* Category */}
                      <span
                        className="
                          absolute left-3 top-3 z-10
                          rounded-full border border-[#b09220]/20
                          bg-white/90 px-2.5 py-1

                          text-[8px] font-bold uppercase
                          tracking-[0.12em] text-[#a88c1f]

                          backdrop-blur-sm
                        "
                      >
                        {relatedProduct.category}
                      </span>

                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="
                          relative z-[1]
                          object-contain p-6

                          transition-transform duration-700
                          group-hover:scale-110
                        "
                        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
                      />
                    </div>

                    {/* Content */}

                    <div className="p-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b09220]">
                        {relatedProduct.category}
                      </span>

                      <h3
                        className="
                          mt-2 line-clamp-2 min-h-[48px]
                          text-base font-bold leading-6 text-black

                          transition-colors duration-300
                          group-hover:text-[#a88c1f]
                        "
                      >
                        {relatedProduct.name}
                      </h3>

                      {relatedProduct.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/50">
                          {relatedProduct.description}
                        </p>
                      )}

                      <div
                        className="
                          mt-5 flex items-center gap-2
                          text-[10px] font-bold uppercase
                          tracking-[0.12em] text-black/55

                          transition-colors duration-300
                          group-hover:text-[#b09220]
                        "
                      >
                        <span>View Product</span>

                        <ArrowRight
                          size={14}
                          className="
                            transition-all duration-300
                            group-hover:translate-x-1.5
                            group-hover:scale-110
                          "
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
