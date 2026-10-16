import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Top Sustainable Food Packaging Supplier in India | The Pack Hub",
  description:
    "The Pack Hub is a sustainable food packaging supplier in India—paper-based, eco-friendly packaging for bakeries, food brands, and online sellers. Get a quote!",
  keywords: [
    "Sustainable Food Packaging Supplier",
    "Eco Friendly Packaging Supplier for Ecommerce Brands",
  ],
  alternates: {
    canonical: "/sustainability",
  },
};

const environmentalPoints = [
  {
    title: "Paper-Based Materials",
    text: "Our range is built around paper and paperboard, including baking paper cups, laddu paper cups, cake boxes, food wrapping paper and paper moulds. Paper is a renewable material and a more sustainable alternative to many plastic packaging options.",
  },
  {
    title: "Right-Sized Packaging",
    text: "Packaging that fits the product uses less material and travels more efficiently. We offer multiple sizes and custom options, so businesses can avoid oversized packs and use only what they need.",
  },
  {
    title: "Less Waste in Production",
    text: "We aim to use materials carefully and reduce waste at every stage. Efficient cutting and planning of paper sheets help us make better use of each sheet, and we try to reuse or recycle leftover paper wherever possible.",
  },
  {
    title: "Responsible Material Selection",
    text: "We choose quality paper and paperboard suited to food packaging, with a focus on strength, safety and consistency. We keep reviewing our materials and suppliers as better sustainable options become available.",
  },
  {
    title: "Efficient Packing and Transport",
    text: "We pack products in a way that makes good use of carton space, which helps reduce the number of shipments needed and keeps transport more efficient.",
  },
];

function SectionLabel({ number, gold = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold ${
          gold
            ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#A98520]"
            : "border-[#49308F]/25 bg-[#49308F]/5 text-[#49308F]"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

function SectionImage({ src, alt, gold = true }) {
  return (
    <div className="relative">
      <div
        className={`absolute -inset-3 rounded-[1.8rem] blur-2xl ${
          gold ? "bg-[#D4AF37]/10" : "bg-[#49308F]/8"
        }`}
      />

      <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div
          className={`h-[3px] w-full bg-gradient-to-r ${
            gold
              ? "from-[#A98520] via-[#D4AF37] to-[#A98520]"
              : "from-[#49308F]/60 via-[#49308F] to-[#49308F]/60"
          }`}
        />
      </div>
    </div>
  );
}

function TextBlock({ title, children }) {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

      <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
        {children}
      </div>
    </div>
  );
}

export default function SustainabilityPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        {/* Decorative Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#49308F]/10 blur-[120px]" />
        </div>

        {/* Gold Line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                The Pack Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              Sustainable Food Packaging Supplier
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/60 sm:text-[15px] sm:leading-7">
              <strong className="font-semibold text-black">
                The Pack Hub is a{" "}
                <Link
                  href="/product"
                  className="text-[#49308F] underline underline-offset-4 hover:text-[#123F8A]"
                >
                  sustainable food packaging supplier in India
                </Link>
                , offering paper-based, eco-friendly packaging for bakeries,
                restaurants, food brands and online sellers.
              </strong>{" "}
              We believe good
              packaging should protect food, look attractive and reduce
              dependence on single-use plastic.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <TextBlock title="Our Approach to Sustainable Packaging">
          <p>
            Packaging touches every food product, from the cake in a bakery to
            the order that arrives at a customer’s door. That is why the choices
            we make as a packaging manufacturer matter. At The Pack Hub, we
            focus on practical sustainability: paper-based products, less waste,
            efficient production and packaging that businesses can use every
            day.
          </p>

          <p>
            We do not believe sustainability is just a label. It is a set of
            steady choices, from the materials we pick to the way we pack and
            supply orders.
          </p>
        </TextBlock>
      </section>

      {/* =====================================================
          ENVIRONMENTAL RESPONSIBILITY
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        <div className="h-[2px] w-full bg-[#49308F]" />

        <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <SectionLabel number="01" />

              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                Environmental{" "}
                <span className="relative text-[#49308F]">
                  Responsibility
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                </span>
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

              <div className="mt-6 space-y-6">
                {environmentalPoints.map((point) => (
                  <div key={point.title}>
                    <h3 className="text-base font-semibold text-black sm:text-lg">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:sticky md:top-24">
              <SectionImage
                src="/sustainability/img1.webp"
                alt="Environmental Responsibility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD SAFETY
      ===================================================== */}
      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <TextBlock title="Food Safety and Quality Come First">
          <p>
            Sustainable packaging must still protect food. Our products are made
            from materials suitable for food packaging applications, and we
            focus on hygiene, strength and consistent quality. Greaseproof
            options help hold oil and moisture, so food stays fresh and
            presentable from the kitchen to the customer.
          </p>
        </TextBlock>
      </section>

      {/* =====================================================
          SOCIAL RESPONSIBILITY
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        <div className="h-[2px] w-full bg-[#49308F]" />

        <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px] lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="order-2 md:order-1">
              <SectionImage
                src="/sustainability/img2.webp"
                alt="Social Responsibility"
                gold={false}
              />
            </div>

            <div className="order-1 md:order-2">
              <SectionLabel number="02" gold />

              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                Social{" "}
                <span className="relative text-[#49308F]">
                  Responsibility
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                </span>
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                <p>
                  We care about the people behind every product. The Pack Hub
                  aims to provide a safe, fair and respectful workplace, support
                  skill development, and build long-term relationships with
                  customers and suppliers. We believe responsible business means
                  treating people well, from our team to the customers we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="h-[2px] w-full bg-[#49308F]" />

        <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <SectionLabel number="03" />

              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                Growing Together{" "}
                <span className="relative text-[#49308F]">
                  With Our Community
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                </span>
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                <p>
                  As a Delhi-based manufacturer, we create work opportunities,
                  support local supply chains and help small bakeries, home
                  bakers and growing food brands access quality packaging at
                  fair prices. Better packaging helps small businesses look
                  professional and grow with confidence.
                </p>
              </div>
            </div>

            <SectionImage
              src="/sustainability/img3.webp"
              alt="Growing Together With Our Community"
            />
          </div>
        </div>

        <div className="h-[2px] w-full bg-[#49308F]" />
      </section>

      {/* =====================================================
          ECOMMERCE + CUSTOM BRANDED + COMMITMENT
      ===================================================== */}
      <section className="space-y-14 px-5 py-14 sm:px-8 sm:py-18 lg:space-y-16 lg:px-10 lg:py-20">
        <TextBlock title="Eco-Friendly Packaging for Ecommerce Brands">
          <p>
            Online food sellers and e-commerce brands need packaging that
            survives delivery, looks good on unboxing, and supports a greener
            brand image. As an eco-friendly packaging supplier for e-commerce
            brands, The Pack Hub offers paper-based packaging with custom sizes,
            printing and branding, so your products arrive neat, protected and
            on-brand.
          </p>

          <p>
            Whether you sell cakes, sweets, bakery items or packaged food
            online, share your product and order volume with us and we will
            suggest suitable packaging options.
          </p>
        </TextBlock>

        <TextBlock title="Custom Branded Eco-Friendly Packaging">
          <p>
            Sustainable packaging can also look beautiful. We offer custom size,
            colour and logo printing, so your brand can show its eco-friendly
            values while standing out on shelves, counters and doorsteps.
            Branded paper packaging also builds trust with customers who prefer
            greener choices.
          </p>
        </TextBlock>

        <TextBlock title="Our Commitment">
          <p>
            We will keep improving our products, processes and materials as
            sustainable options grow. Our goal is simple: help food businesses
            pack better, waste less and build trust with customers who care
            about the environment.
          </p>
        </TextBlock>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#49308F] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-white">
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Partner With The Pack Hub
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/80 sm:text-[15px]">
            Looking for a reliable{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#D4AF37] underline underline-offset-4 hover:text-[#e0c35a]"
            >
              sustainable food packaging supplier
            </Link>
            ? Tell us your product, size and quantity, and we will recommend the
            right packaging.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#e0c35a]"
          >
            Contact Us
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
