import Image from "next/image";
import Link from "next/link";

export default function Innovation() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 border border-purple-100 bg-gradient-to-br from-white to-purple-50/40 p-5 shadow-[0_10px_40px_rgba(73,48,143,0.08)] sm:p-7 md:flex-row md:gap-10 md:p-8 lg:p-10">
        {/* Left Side */}
        <div className="w-full flex-1">
          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-[#49308F] bg-white">
            <span className="text-3xl text-[#49308F]">♻</span>
          </div>

          {/* Heading */}
          <h2 className="mb-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            For Innovation
          </h2>

          {/* Decorative Line */}
          <div className="mb-4 h-1 w-16 bg-[#49308F]" />

          {/* Description */}
          <p className="mb-6 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            The drive for innovation, the exploration of new markets and the
            introduction of positive changes in the sector has always been a
            stimulus for our work.
          </p>

          {/* Button */}
          <Link
            href={"/about-us"}
            className="group inline-flex items-center gap-2 rounded-full bg-[#49308F] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-800"
          >
            Discover More
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full flex-1">
          <div className="relative overflow-hidden border border-purple-100 bg-white p-2 shadow-[0_15px_40px_rgba(73,48,143,0.12)]">
            <Image
              src="/innovation/img1.webp"
              alt="Innovation sweets"
              width={800}
              height={500}
              className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[280px] md:h-[300px] lg:h-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
