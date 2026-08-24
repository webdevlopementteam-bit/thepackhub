import Image from "next/image";

export default function NewsTrends() {
  return (
    <section className="bg-[#FBF7EC] py-10 px-5">
      <h2 className="text-center text-3xl font-bold text-black">
        NEWS & TRENDS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-10">
        {/* First Image */}
        <div className="text-center">
          <div className="relative w-full h-64">
            <Image
              src="/news_trand/sweet-paper-cup-500x500-1.jpg"
              alt="Cupcake Liners"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="text-center">
          <div className="relative w-full h-64">
            <Image
              src="/news_trand/Easy-Cupcakes-3.jpg"
              alt="Cupcakes"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="text-center">
          <div className="relative w-full h-64">
            <Image
              src="/news_trand/laddu-paper-katori-with-print.jpeg"
              alt="Eco Liners"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
