import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
              Sustainability
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/60 sm:text-[15px] sm:leading-7">
              Novacart adheres to the principles of sustainable growth, believes
              in corporate social value and actively strives to further reduce
              its impact on the environment.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUSTAINABILITY CONTENT
      ===================================================== */}
      <section className="bg-white">
        {/* =====================================================
            RESPECT FOR ENVIRONMENT
        ===================================================== */}
        <section className="relative overflow-hidden">
          <div className="h-[2px] w-full bg-[#49308F]" />

          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* LEFT CONTENT */}
              <div className="order-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#49308F]/25 bg-[#49308F]/5 text-[11px] font-bold text-[#49308F]">
                    01
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#49308F]">
                    Environmental Responsibility
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                  Respect for the{" "}
                  <span className="relative text-[#49308F]">
                    environment
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                  </span>
                </h2>

                <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

                <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                  <p>
                    All our strategies are based on a careful assessment of the
                    environmental impact and on the protection of natural
                    resources, in line with the sustainable development goals
                    set by the United Nations for 2030. We carefully choose the
                    raw materials, preferring the FSC ® certified paper that
                    ensures responsible management of forests, where more trees
                    are planted than those that are cut.
                  </p>

                  <p>
                    We have equipped Novacart’s facilities with LED lighting
                    systems, which are more energy-efficient, and we design
                    low-consumption systems in-house. We use storage modes that
                    optimize transport by stacking boxes for the transfer of a
                    higher number of products, reducing travel and CO2
                    emissions. Use of very small water, recycling of production
                    waste and optimization of the packaging are other strategies
                    we have chosen to adopt.
                  </p>
                </div>

                <Link
                  href="https://www.thepackhub.in/sustainability/#"
                  className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#49308F]"
                >
                  Discover More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative order-2">
                <div className="absolute -inset-3 rounded-[1.8rem] bg-[#D4AF37]/10 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/sustainability/img1.png"
                      alt="Respect for the environment"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>

                  <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESPECT FOR PEOPLE
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#fafaf8]">
          <div className="h-[2px] w-full bg-[#49308F]" />

          <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* LEFT IMAGE */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-3 rounded-[1.8rem] bg-[#49308F]/8 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/sustainability/img2.webp"
                      alt="Respect for people"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>

                  <div className="h-[3px] w-full bg-gradient-to-r from-[#49308F]/60 via-[#49308F] to-[#49308F]/60" />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[11px] font-bold text-[#A98520]">
                    02
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A98520]">
                    Social Responsibility
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                  Respect for{" "}
                  <span className="relative text-[#49308F]">
                    people
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                  </span>
                </h2>

                <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

                <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                  <p>
                    In accordance with the sustainable development goals
                    promoted by the United Nations, we are committed to
                    promoting the health and well-being of every person who
                    comes into contact with our company, from employees to
                    customers.
                  </p>

                  <p>
                    We adopt codes of conduct and guidelines to support decent
                    and responsible economic growth and support investments
                    aimed at improving the working conditions of employees.
                  </p>

                  <p>
                    The monitoring of each stage of the production chain through
                    certified checks is constant, in order to guarantee the
                    safety of employees, customers, final consumers and every
                    individual involved in the group’s activities.
                  </p>
                </div>

                <Link
                  href="https://www.thepackhub.in/sustainability/#"
                  className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#49308F]"
                >
                  Discover More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ECONOMIC DEVELOPMENT
        ===================================================== */}
        <section className="relative overflow-hidden">
          <div className="h-[2px] w-full bg-[#49308F]" />

          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#49308F]/5 blur-[100px] lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* LEFT CONTENT */}
              <div className="order-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#49308F]/25 bg-[#49308F]/5 text-[11px] font-bold text-[#49308F]">
                    03
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#49308F]">
                    Community Growth
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-4xl">
                  Economic development{" "}
                  <span className="relative text-[#49308F]">
                    of communities
                    <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#D4AF37]" />
                  </span>
                </h2>

                <div className="mt-5 h-[3px] w-12 bg-[#D4AF37]" />

                <div className="mt-6 space-y-4 text-[14px] leading-7 text-black/60 sm:text-[15px]">
                  <p>
                    We want to create value for the communities and territories
                    in which we operate, fostering growth in a sustainable
                    manner. Being a market leader allows us to guarantee
                    economic solidity creating wealth and well-being for the
                    territory and the population.
                  </p>

                  <p>
                    We offer jobs, explore new markets, open new locations and
                    invest in research and development to continuously innovate.
                    We are also committed to reducing the production costs of
                    our supply chain, so that our products are always
                    competitive on the market.
                  </p>
                </div>

                <Link
                  href="https://www.thepackhub.in/sustainability/#"
                  className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#49308F]"
                >
                  Discover More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative order-2">
                <div className="absolute -inset-3 rounded-[1.8rem] bg-[#D4AF37]/10 blur-2xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/sustainability/img3.webp"
                      alt="Economic development of communities"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>

                  <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-[#49308F]" />
        </section>
      </section>
    </main>
  );
}
