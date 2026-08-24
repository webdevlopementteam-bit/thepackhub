"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PackHub() {
  const [mounted, setMounted] = useState(false);
  const [molds, setMolds] = useState(576345214);
  const [cups, setCups] = useState(6723783578);
  const [others, setOthers] = useState(960532197);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setMolds((prev) => prev + 25);
      setCups((prev) => prev + 100);
      setOthers((prev) => prev + 10);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <Image
        src="/packHub/world-bg1.png"
        alt="World Map"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-12 sm:px-8 md:px-10 lg:px-12">
        {/* ================= HEADING ================= */}
        <div className="mb-10 text-left sm:mb-12">
          <h1 className="mb-2 text-3xl font-bold text-yellow-400 sm:text-4xl md:text-5xl">
            The Pack Hub
          </h1>

          <p className="mb-5 text-lg text-white sm:text-xl">
            The numbers of our group
          </p>

          <button className="rounded-full bg-yellow-400 px-6 py-2.5 font-semibold text-black transition hover:bg-yellow-300">
            Discover More
          </button>
        </div>

        {/* ================= TOP STATS ================= */}
        {/* ================= TOP STATS ================= */}
        <div className="mb-12 grid w-full grid-cols-2 border-l border-r border-white/40 sm:grid-cols-4">
          <div className="border-r border-white/40 px-4 py-2 text-left sm:text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">147</h2>
            <p className="mt-1 text-sm text-white/80">Number of employees</p>
          </div>

          <div className="border-r border-white/40 px-4 py-2 text-left sm:text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">63</h2>
            <p className="mt-1 text-sm text-white/80">Countries in the world</p>
          </div>

          <div className="border-r border-white/40 px-4 py-2 text-left sm:text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">3923</h2>
            <p className="mt-1 text-sm text-white/80">Happy Customers</p>
          </div>

          <div className="px-4 py-2 text-left sm:text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">14</h2>
            <p className="mt-1 text-sm text-white/80">Production sites</p>
          </div>
        </div>

        {/* ================= BOTTOM COUNTERS ================= */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-xl border border-white/50 bg-blue-950/30 backdrop-blur-sm sm:grid-cols-3">
          <div className="border-b border-white/30 p-5 sm:border-b-0 sm:border-r">
            <p className="mb-1 text-sm text-teal-300">Baking Molds</p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              {molds.toLocaleString()}
            </h2>
          </div>

          <div className="border-b border-white/30 p-5 sm:border-b-0 sm:border-r">
            <p className="mb-1 text-sm text-teal-300">Baking Cups</p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              {cups.toLocaleString()}
            </h2>
          </div>

          <div className="p-5">
            <p className="mb-1 text-sm text-teal-300">Other Products</p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              {others.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <p className="mt-7 max-w-3xl text-left text-sm leading-6 text-white/80">
          The Pack Hub Group produces millions of pieces every day, the numbers
          refer to our production from 01/01/2024
        </p>
      </div>
    </section>
  );
}
