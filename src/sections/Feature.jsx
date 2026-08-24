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
                Baking paper cups are a fantastic way to display and share
                treats. They can be used to bake cupcakes, sweet breads,
                cheesecakes, and brownies in the oven at temperatures up to 375
                degrees.
              </p>
              <p>
                To use them, simply place the cup on a cookie sheet, add your
                batter, and bake. No need for additional liners or cooking
                spray! When filling the cups, it’s best to fill them about 1/2
                way for fluffy cake batter, or 3/4 of the way if you want the
                cake to pop up above the rim.
              </p>
              <p>
                One box of cake mix can make 16 cupcakes if you fill each cup
                halfway. To eat a cupcake from a baking cup, you can use a fork
                or spoon, or simply tear the paper wrapper at the seam.
              </p>
              <p>
                Note that baking cups are not reusable and are made of paper.
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
