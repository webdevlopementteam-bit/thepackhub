"use client";
import Image from "next/image";
import Link from "next/link";

export default function Environmental_Sustainability() {
  return (
    <>
      <section className="relative w-full h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={"/environment/img1.jpg"}
          alt="Environmental Sustainability"
          fill
          className="object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">
            Environmental Sustainability
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            The Pack Hub business strategies are strongly oriented towards
            reducing environmental impact.
          </p>
          <Link
            href={"/about-us"}
            className="bg-[#49308F] hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Discover More
          </Link>
        </div>
      </section>
    </>
  );
}
