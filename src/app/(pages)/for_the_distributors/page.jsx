import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DistributorsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* =====================================================
          HERO / INTRO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f1eee5]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/15 blur-[130px]" />

          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#49308F]/10 blur-[130px]" />

          <div className="absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[130px]" />
        </div>

        {/* Top Accent */}
        <div className="relative h-[4px] w-full bg-gradient-to-r from-[#8F6F12] via-[#D4AF37] to-[#8F6F12]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          {/* Content */}
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37] sm:w-14" />

              <span className="rounded-full border border-[#D4AF37]/30 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A98520] backdrop-blur-sm">
                The Pack Hub
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              For{" "}
              <span className="relative text-[#49308F]">
                distributors
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#D4AF37]" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-[17px]">
              To our distributors we guarantee catalogue designed for every type
              of customer, an exhaustive quantity of products stored in our
              facilities and speed and precision in order management.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS FOR EVERY CUSTOMER
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/7 blur-[120px]" />

          <div className="absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#49308F]/7 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AF37]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A98520]">
                  Our Catalogue
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Products for{" "}
                <span className="text-[#49308F]">every customer</span>
              </h2>

              {/* Gold Line */}
              <div className="mt-5 h-[3px] w-16 bg-[#D4AF37]" />

              {/* Content */}
              <div className="mt-7 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                <p>
                  For food cooking we can offer a rich catalogue of molds and
                  cups suitable for high oven temperatures and microwave
                  cooking, at the same time able to withstand freezing. Their
                  technical characteristics make them suitable for the needs of
                  industrial production lines.
                </p>

                <p>
                  The careful attractive design makes our products usable
                  directly from the oven to the sale, speeding up the production
                  of food and eliminating the need for a different packaging for
                  presentation. We also have special packaging suitable for
                  large retailers. Our catalogue are completed by a vast
                  assortment of display items.
                </p>
              </div>

              {/* Feature */}
              <div className="mt-8 flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-[#D4AF37]" />

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-black/70">
                  Designed for modern distribution
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="group relative">
                {/* Glow */}
                <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#49308F]/10" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/for_the_distributers/img1.jpg"
                      alt="Products for every customer"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAXIMUM RELIABILITY IN DELIVERIES
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f1eee5] py-16 sm:py-20 lg:py-24">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#49308F]/8 blur-[130px]" />

          <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/12 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT IMAGE */}
            <div className="group relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-[#49308F]/10 blur-2xl transition-all duration-500 group-hover:bg-[#D4AF37]/10" />

              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/for_the_distributers/img2.jpg"
                    alt="Maximum reliability in deliveries"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AF37]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A98520]">
                  Delivery & Logistics
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Maximum <span className="text-[#49308F]">reliability</span> in
                deliveries
              </h2>

              <div className="mt-5 h-[3px] w-16 bg-[#D4AF37]" />

              {/* Content */}
              <div className="mt-7 space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                <p>
                  Reliability has always been one of our distinguishing
                  features. In our storage facilities we keep stocks of products
                  in adequate quantities to market demands, worrying to keep the
                  supplies under control.
                </p>

                <p>
                  We manage orders with precision and speed, always respecting
                  the times and methods of delivery agreed with customers.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="mt-8 rounded-2xl border border-[#D4AF37]/25 bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#49308F] text-white">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-black">
                      Fast & Precise Order Management
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-black/50">
                      Reliable stock availability and deliveries according to
                      agreed schedules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#e8dcb8] py-16 sm:py-10 lg:py-15">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[130px]" />

          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#49308F]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-2 lg:px-5">
          {/* Image Banner */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem]">
            <div className="relative h-[400px] sm:h-[450px] lg:h-[520px]">
              <Image
                src="/for_the_distributers/bootom.jpg"
                alt="The Catalogue of The Pack Hub Products"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/0" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6 sm:px-10 lg:px-16">
                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#D4AF37]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                      Explore Our Products
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    The Catalogue of{" "}
                    <span className="text-[#D4AF37]">
                      The Pack Hub Products
                    </span>
                  </h2>

                  {/* Button */}
                  <Link
                    href="#"
                    className="group/btn mt-8 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_12px_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
                  >
                    <span>Discover More</span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/10 sm:inset-6 sm:rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
