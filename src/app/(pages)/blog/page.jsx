import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";

const blogs = [
  {
    title: "Why The Pack Hub is Every Baker’s First Choice",
    image: "/blog/img1.png",
    description:
      "When it comes to choosing baking tools, quality and reliability are paramount. The Pack Hub has established itself as a trusted partner for bakers by offering paper cups that meet the highest standards of performance, design, and sustainability. Here’s why…",
    date: "December 18, 2024",
    author: "bizmartbharat@gmail.com",
    href: "/why-the-pack-hub-is-every-bakers-first-choice/",
  },
  {
    title: "Bake Sustainably with The Pack Hub’s Eco-Friendly Paper Cups",
    image: "/blog/img2.png",
    description:
      "In today’s world, sustainability has become a cornerstone of responsible living. This includes every aspect of our lives, from the food we consume to the tools we use. For bakers, The Pack Hub offers a way to bake responsibly with…",
    date: "December 18, 2024",
    author: "bizmartbharat@gmail.com",
    href: "/bake-sustainably-with-the-pack-hubs-eco-friendly-paper-cups/",
  },
  {
    title: "The Pack Hub: Redefining Baking Elegance with Premium Paper Cups",
    image: "/blog/img3.png",
    description:
      "When it comes to baking, every detail matters. From the ingredients used to the tools chosen, each element contributes to creating the perfect baked treat. Among these tools, the humble paper cup is often overlooked, yet it plays a critical…",
    date: "December 18, 2024",
    author: "bizmartbharat@gmail.com",
    href: "/the-pack-hub-redefining-baking-elegance-with-premium-paper-cups/",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[110px]" />

          <div className="absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-[#49308F]/10 blur-[110px]" />
        </div>

        {/* Gold Top Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#A98520]">
                The Pack Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="relative text-[#49308F]">
                Blog
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#D4AF37]" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
              Discover insights, ideas and inspiration from The Pack Hub,
              covering baking, sustainability, product innovation and more.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="mb-10 sm:mb-12">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A98520] sm:text-[11px]">
                Latest Articles
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              From our <span className="text-[#49308F]">blog</span>
            </h2>
          </div>

          {/* =================================================
              BLOG GRID
              LG  = 3
              MD  = 2
              MOBILE = 1
          ================================================= */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <Link
                  href={blog.href}
                  className="relative block overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Number */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/60 text-[11px] font-bold text-white backdrop-blur-sm">
                      0{index + 1}
                    </div>
                  </div>
                </Link>

                {/* =================================================
                    CONTENT
                ================================================= */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Label */}
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-[#D4AF37]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A98520]">
                      Blog
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-lg font-bold leading-snug text-black sm:text-xl">
                    <Link
                      href={blog.href}
                      className="transition-colors duration-300 hover:text-[#49308F]"
                    >
                      {blog.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6.5 text-black/60 sm:text-[15px] sm:leading-7 ">
                    {blog.description}
                  </p>

                  {/* =================================================
                      META
                  ================================================= */}
                  {/* =================================================
    META
================================================= */}
                  <div className="mt-auto border-t border-black/10 pt-4">
                    <div className="flex items-center justify-between gap-3">
                      {/* Author */}
                      <div className="flex min-w-0 items-center gap-2">
                        <User
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#A98520]"
                        />

                        <span className="truncate text-[11px] font-medium text-black/55 sm:text-xs">
                          {blog.author}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="flex shrink-0 items-center gap-2">
                        <CalendarDays
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#49308F]"
                        />

                        <span className="whitespace-nowrap text-[11px] font-medium text-black/55 sm:text-xs">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Gold Accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
