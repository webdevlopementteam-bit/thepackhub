import Image from "next/image";

const services = [
  {
    image: "/solution_Service/cake1.png",
    title: "For the Industry",
    bg: "bg-[#FAE578]",
  },
  {
    image: "/solution_Service/cake2.png",
    title: "For the Distributors",
    bg: "bg-blue-200",
  },
  {
    image: "/solution_Service/cake3.png",
    title: "For Large Retailers",
    bg: "bg-pink-200",
  },
];

export default function SolutionsServices() {
  return (
    <section className="w-full bg-[#E3E9F5] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="whitespace-nowrap text-left text-2xl font-bold leading-tight text-blue-950 sm:text-3xl md:text-4xl lg:text-[42px]">
            Solutions and <span className="text-[#49308F]">Services</span>
          </h2>

          <p className="mt-3 text-left text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
            The Pack Hub responds to the needs of each client by offering
            targeted solutions and services for the food industry, professionals
            in the confectionery sector and for large retailers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_8px_25px_rgba(30,64,175,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(30,64,175,0.13)]"
            >
              {/* Image */}
              <div className="relative h-[220px] w-full overflow-hidden sm:h-[230px] md:h-[240px] lg:h-[250px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={`object-contain transition-transform duration-700 group-hover:scale-105 ${service.bg}`}
                />

                {/* Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-700 shadow-md sm:h-10 sm:w-10 sm:text-sm">
                  0{index + 1}
                </div>

                {/* Title */}
                <div className="absolute bottom-2 left-4 right-4 sm:bottom-5 sm:left-5">
                  <h3 className="text-xl font-bold text-white sm:text-2xl ">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
