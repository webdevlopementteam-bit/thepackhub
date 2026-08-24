import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "@/app/lib/products";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug || slugify(product.name),
  }));
}

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
      <main className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">Product Not Found</h1>

          <p className="mt-3 text-black/50">
            The product you are looking for does not exist.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b09220]"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     DATA
  ===================================================== */

  const data = product.data || {};

  /*
    bulletPointData can be:

    1. false
    2. Array
    3. String separated by comma
  */

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
     SAME CATEGORY + CURRENT PRODUCT EXCLUDED
  ===================================================== */

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.name !== product.name,
  );

  return (
    <main className="bg-white">
      {/* =====================================================
          TOP PRODUCT SECTION
          LEFT IMAGE / RIGHT DETAILS
      ===================================================== */}

      <section className="border-b border-black/10 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-14 lg:py-20">
          <Link
            href="/products"
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] hover:text-black/50 transition-colors text-[#b09220]"
          >
            <ArrowLeft size={15} />
            Back to Products
          </Link>

          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT IMAGE */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-6 sm:p-12 lg:p-16"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="h-1 w-full bg-[#b09220]" />
            </div>

            {/* RIGHT DETAILS */}
            <div className="flex h-full flex-col">
              <span className="w-fit rounded-full border border-[#b09220]/30 bg-[#b09220]/5 px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#a88c1f]">
                {product.category}
              </span>

              <h1 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-black">
                {product.name}
              </h1>

              {product.description && (
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-black/60">
                  {product.description}
                </p>
              )}

              {bulletPoints.length > 0 && (
                <div className="mt-6 sm:mt-8">
                  <div className="mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#b09220]">
                      Product Features
                    </span>
                    <h2 className="mt-1 text-lg sm:text-xl font-bold text-black">
                      Key Features
                    </h2>
                  </div>
                  <div className="space-y-3 rounded-xl sm:rounded-2xl border border-black/10 bg-white p-4 sm:p-6">
                    {bulletPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b09220] text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-6 text-black/70">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tableData && (
                <div className="mt-6 sm:mt-8 overflow-x-auto">
                  <div className="mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#b09220]">
                      Specifications
                    </span>
                    <h2 className="mt-1 text-lg sm:text-xl font-bold text-black">
                      Product Specifications
                    </h2>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-white">
                    <table className="w-full min-w-[300px] sm:min-w-[500px] border-collapse text-left">
                      <thead>
                        <tr className="bg-black text-white">
                          {tableData.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-3 sm:px-5 py-3 sm:py-4 text-xs font-semibold uppercase tracking-[0.08em]"
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
                            className="border-t border-black/10 transition-colors hover:bg-[#b09220]/5"
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-black/70"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 sm:px-6 sm:py-3.5 text-sm font-semibold text-white transition hover:bg-[#b09220]"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 sm:px-6 sm:py-3.5 text-sm font-semibold text-black transition hover:border-[#b09220] hover:text-[#b09220]"
                >
                  View All Products
                </Link>
              </div>
              {/* =================================================
    TAGS
================================================= */}

              {tags.length > 0 && (
                <div className="mt-10">
                  {/* Heading */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#b09220]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b7d16]">
                      Product Tags
                    </span>

                    <div className="h-px flex-1 bg-gradient-to-r from-[#b09220]/40 to-transparent" />
                  </div>

                  {/* Tags Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#b09220]/20 bg-gradient-to-br from-[#fffdf7] via-white to-[#faf5e6] p-5 shadow-[0_10px_35px_rgba(176,146,32,0.08)] sm:p-6">
                    {/* Decorative Glow */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#b09220]/10 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#b09220]/5 blur-3xl" />

                    <div className="relative flex flex-wrap gap-2.5">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="
              group relative cursor-default overflow-hidden
              rounded-full border border-[#b09220]/20
              bg-white px-4 py-2.5
              text-xs font-semibold tracking-wide text-[#806b16]
              shadow-sm
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-[#b09220]/60
              hover:bg-[#b09220]
              hover:text-white
              hover:shadow-[0_8px_20px_rgba(176,146,32,0.25)]
            "
                        >
                          {/* Small decorative dot */}
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#b09220] transition-colors duration-300 group-hover:bg-white" />

                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESCRIPTION DATA
      ===================================================== */}

      {descriptionData.length > 0 && (
        <section className="bg-white py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            {/* DESCRIPTION HEADER */}

            <div className="mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b09220]">
                Product Information
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                About {product.name}
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#b09220]" />
            </div>

            {/* DESCRIPTION CONTENT */}

            <div className="space-y-8">
              {descriptionData.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2
                        key={index}
                        className="pt-3 text-2xl font-bold tracking-tight text-black sm:text-3xl"
                      >
                        {block.content}
                      </h2>
                    );

                  case "h4":
                    return (
                      <h3
                        key={index}
                        className="pt-3 text-xl font-bold tracking-tight text-black"
                      >
                        {block.content}
                      </h3>
                    );

                  case "h5":
                    return (
                      <h4
                        key={index}
                        className="pt-3 text-lg font-bold text-black"
                      >
                        {block.content}
                      </h4>
                    );

                  case "p":
                    return (
                      <p
                        key={index}
                        className="text-[15px] leading-7 text-black/65 sm:text-base sm:leading-8"
                      >
                        {block.content}
                      </p>
                    );

                  case "list":
                    return (
                      <ul
                        key={index}
                        className="space-y-3 rounded-2xl border border-black/10 bg-[#f8f8f6] p-5 sm:p-6"
                      >
                        {block.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-sm leading-6 text-black/70"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b09220]" />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "faq":
                    return (
                      <div key={index} className="pt-4">
                        <h3 className="mb-6 text-2xl font-bold text-black">
                          Frequently Asked Questions
                        </h3>

                        <div className="space-y-3">
                          {block.items?.map((faq, faqIndex) => (
                            <details
                              key={faqIndex}
                              className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
                            >
                              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-sm font-semibold text-black sm:p-6">
                                <span>{faq.question}</span>

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-open:rotate-45">
                                  +
                                </span>
                              </summary>

                              <div className="border-t border-black/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
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
        <section className="bg-[#f8f8f6] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* HEADER */}

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b09220]">
                  You May Also Like
                </span>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Related Products
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                  Explore more products from our{" "}
                  <span className="font-semibold text-black">
                    {product.category}
                  </span>{" "}
                  range.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#b09220]"
              >
                View All
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RELATED PRODUCT GRID */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => {
                const relatedSlug =
                  relatedProduct.slug || slugify(relatedProduct.name);

                return (
                  <Link
                    key={relatedSlug}
                    href={`/products/${relatedSlug}`}
                    className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#b09220]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-square overflow-hidden bg-white">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Gold overlay line */}

                      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#b09220] transition-transform duration-300 group-hover:scale-x-100" />
                    </div>

                    {/* CONTENT */}

                    <div className="p-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b09220]">
                        {relatedProduct.category}
                      </span>

                      <h3 className="mt-2 line-clamp-2 min-h-[48px] text-lg font-bold leading-6 text-black transition-colors group-hover:text-[#a88c1f]">
                        {relatedProduct.name}
                      </h3>

                      {relatedProduct.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/55">
                          {relatedProduct.description}
                        </p>
                      )}

                      <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-black/60 transition-colors group-hover:text-[#b09220]">
                        View Product
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
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
