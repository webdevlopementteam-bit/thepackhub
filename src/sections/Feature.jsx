import Image from "next/image";

export default function Feature() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Content */}
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-[#49308F] sm:text-sm">
              Feature
            </span>

            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Baking Paper Cups
            </h2>

            <div className="mt-2 space-y-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              <p>
                Baking paper cups are a convenient and attractive way to bake,
                display, and serve treats. They can be used for cupcakes, sweet
                breads, cheesecakes, brownies, and other baked goods, provided
                the cups are suitable for the required baking temperature.
              </p>
              <p>
                To use baking cups, place them on a baking tray, fill them with
                batter, and bake according to your recipe and the product&apos;s
                temperature guidelines. Depending on the cup design, additional
                liners or cooking spray may not be necessary. For the best
                results, follow the recommended filling level to allow the
                batter to rise properly during baking.
              </p>
              <p>
                Baking paper cups make serving and handling individual portions
                easier for bakeries, cafes, and home bakers. As a trusted
                Packaging Company in India, The Pack Hub offers packaging
                solutions for businesses looking for practical and convenient
                bakery packaging products. These paper cups are generally
                designed for single use and should be disposed of appropriately
                after use.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-[380px]">
            <Image
              src="/features/img1.jpg"
              alt="Baking Paper Cups"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
