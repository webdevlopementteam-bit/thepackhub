import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Best Packaging Manufacturer for Export From India | The Pack Hub",
  description:
    "Looking for the best packaging manufacturer for export from India? The Pack Hub offers food-safe packaging, custom branding and worldwide shipping. Enquire now!",
  keywords: [
    "Best Packaging Manufacturer for Export From India",
    "Packaging Manufacturer for Export",
    "Packaging Exporter India",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

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

          <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Best Packaging Manufacturer for Export From India
          </h1>

          <div className="max-w-6xl space-y-5 text-[15px] leading-7 text-gray-600 sm:text-base">
            <p>
              <strong className="font-semibold text-gray-800">
                The Pack Hub
              </strong>
              , established in 2022, is a well-known manufacturer, exporter,
              and supplier of a wide range of bakery and food packaging
              products. We offer our clients a quality range of Baking Cup
              Paper, Wrapping Sheets, Printed Cake Boxes, and Cake Base Gold.
              These products are manufactured using quality raw materials by
              our skilled team in accordance with industry standards. With a
              focus on quality, elegant designs, and fine finishing, our
              products are widely recognized among customers.
            </p>

            <p>
              As industries continue to expand and acknowledge the benefits of
              paper-based packaging, we offer customized solutions to meet
              diverse customer requirements. We supply our baking paper cups
              across Delhi NCR and different parts of India, catering to the
              needs of bakeries, hotels, restaurants, railways, airways, and
              other sectors. As a growing{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#49308F] underline underline-offset-4 hover:text-[#123F8A]"
              >
                packaging manufacturer for export
              </Link>
              , we also aim to serve businesses looking for reliable packaging
              solutions for domestic and international markets.
            </p>

            <p>
              Our products are manufactured with precision and delivered after
              undergoing quality checks to maintain consistent standards. We
              also fulfill clients&apos; customization requirements, including
              logo printing, images, and brand promotion designs. With our
              commitment to product quality, customization, and customer
              satisfaction, The Pack Hub aims to be the{" "}
              <strong className="font-semibold text-gray-800">
                best packaging manufacturer for export from India
              </strong>
              , offering practical packaging
              solutions for businesses across different industries.
            </p>
          </div>
        </div>

        {/* ================= PRODUCTION SECTION ================= */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/about/about.webp"
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
                src="/icon/icon.webp"
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
