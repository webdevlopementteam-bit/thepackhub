import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid3X3, Package } from "lucide-react";
import { products } from "@/app/lib/products";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  const categories = [...new Set(products.map((product) => product.category))];

  return categories.map((category) => ({
    category: slugify(category),
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (product) => slugify(product.category) === category,
  );

  const categoryName = categoryProducts[0]?.category || category;

  /* =====================================================
     CATEGORY NOT FOUND
  ===================================================== */

  if (categoryProducts.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b09220]">
            404 Error
          </span>

          <h1 className="mt-3 text-3xl font-bold text-black">
            Category Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/50">
            The product category you are looking for does not exist.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b09220]"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          CATEGORY HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden">
        {/* =================================================
            BACKGROUND IMAGE
        ================================================= */}

        <Image
          src="/breadcrumb/b1.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* =================================================
            OVERLAY

            Background image is already yellow/gold,
            so we use black overlays instead of more gold.
            This keeps the image visible and text readable.
        ================================================= */}

        {/* Main directional dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        {/* Bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Soft radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,transparent_0%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.32)_100%)]" />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
            <Link
              href="/"
              className="text-white/50 transition-colors duration-300 hover:text-[#e0c35a]"
            >
              Home
            </Link>

            <span className="text-white/25">/</span>

            <Link
              href="/products"
              className="text-white/50 transition-colors duration-300 hover:text-[#e0c35a]"
            >
              Products
            </Link>

            <span className="text-white/25">/</span>

            <span className="text-[#e0c35a]">{categoryName}</span>
          </div>

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* LEFT SIDE */}

            <div className="max-w-3xl">
              {/* Badge */}

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                <Grid3X3 size={13} className="text-[#e0c35a]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Product Category
                </span>
              </div>

              {/* Title */}

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {categoryName}
              </h1>

              {/* Accent */}

              <div className="mt-4 h-1 w-14 rounded-full bg-[#d4b54a]" />

              {/* Description */}

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Explore our complete range of{" "}
                <span className="font-semibold text-white">
                  {categoryName.toLowerCase()}
                </span>{" "}
                products, designed with quality and reliability for your
                requirements.
              </p>
            </div>

            {/* =================================================
                RIGHT SIDE
                AVAILABLE PRODUCTS + VIEW PRODUCTS
            ================================================= */}

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              {/* Available Products */}

              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 px-5 py-4 backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e0c35a]/30 bg-[#b09220]/15 text-[#e0c35a]">
                  <Package size={19} />
                </div>

                <div>
                  <div className="text-xl font-bold leading-none text-[#e0c35a]">
                    {categoryProducts.length}
                  </div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                    {categoryProducts.length === 1
                      ? "Available Product"
                      : "Available Products"}
                  </div>
                </div>
              </div>

              {/* View Products */}

              <a
                href="#category-products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b09220] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#c8a92b] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
              >
                View Products
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border */}

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4b54a]/70 to-transparent" />
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ===================================================== */}

      <section
        id="category-products"
        className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b09220]">
                Explore Collection
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
                {categoryName} Products
              </h2>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#b09220]" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-black/45">
                Showing all products
              </span>

              <span className="rounded-full bg-[#b09220]/10 px-3 py-1.5 text-xs font-bold text-[#a88c1f]">
                {categoryProducts.length}
              </span>
            </div>
          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product, index) => {
              const productSlug = product.slug || slugify(product.name);

              return (
                <article
                  key={productSlug || index}
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-black/10
                    bg-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-[#b09220]/50
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)]
                  "
                >
                  {/* Gold Top Accent */}

                  <div
                    className="
                      absolute left-0 right-0 top-0 z-20 h-[2px]
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
                      {/* Background Glow */}

                      <div
                        className="
                          absolute left-1/2 top-1/2
                          h-40 w-40
                          -translate-x-1/2 -translate-y-1/2
                          rounded-full
                          bg-[#b09220]/5
                          blur-3xl
                          transition-all duration-500
                          group-hover:h-48
                          group-hover:w-48
                          group-hover:bg-[#b09220]/10
                        "
                      />

                      {/* Image */}

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

                      {/* Arrow */}

                      <div
                        className="
                          absolute bottom-3 right-3 z-10
                          flex h-9 w-9 items-center justify-center
                          rounded-full
                          bg-black text-white
                          opacity-0 translate-y-2
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

                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#b09220] sm:text-[10px]">
                      {product.category}
                    </p>

                    {/* Product Name */}

                    <h2 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 tracking-tight text-black sm:text-base">
                      {product.name}
                    </h2>

                    {/* Divider */}

                    <div className="my-3 h-px w-full bg-black/8" />

                    {/* View Product */}

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
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#080808] py-16 sm:py-20">
        {/* Background Glow */}

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b09220]/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8a92b]">
            Looking for something else?
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Explore our complete product range
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/45">
            Discover more products across different categories and find the
            right solution for your requirements.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#b09220]
                px-7 py-3.5
                text-sm font-bold
                text-white
                transition-all duration-300
                hover:bg-[#c8a92b]
                hover:shadow-[0_12px_35px_rgba(176,146,32,0.25)]
              "
            >
              View All Products
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/15
                px-7 py-3.5
                text-sm font-semibold
                text-white/80
                transition-all duration-300
                hover:border-[#b09220]
                hover:text-[#c8a92b]
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
