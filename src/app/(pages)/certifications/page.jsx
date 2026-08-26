"use client";

import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-white py-12 text-black sm:py-14 md:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* ================= HEADING ================= */}
        <div className="mb-5 flex items-center gap-2.5 sm:gap-3">
          <span className="h-px w-8 shrink-0 bg-[#FCCE60] sm:w-12" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4b82a] sm:text-xs sm:tracking-[0.3em]">
            Certifications
          </span>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-5 text-sm leading-7 sm:space-y-6 sm:text-base sm:leading-8 lg:text-lg">
          <p>
            From the supplying of raw materials to the delivery of products to
            the customer, the entire processing cycle is punctuated by repeated
            and strict checks. The results of the checks carried out are
            recorded, each batch of production is identifiable at any time by
            means of an IT system.
          </p>

          <p>
            The systems are assisted by computerized equipment that allows us to
            monitor and record every machine process.
          </p>

          <p>
            We maintain the highest level of safety, hygiene and comfort in our
            work environments, respecting all the sanitary rules of the product,
            taking into account that it must be used for the food market.
          </p>

          <p>
            Therefore, a Quality Management System has been set up within the
            company.
          </p>

          <p>
            The numerous international external certifications achieved attest
            to the quality of Novacart products and its production chain.
          </p>

          <p>
            Novacart is in conformity with the requirements of Standard BRC
            PACKAGING. For more information on our certifications, you can
            contact our Quality department.
          </p>
        </div>

        {/* ================= QUALITY SYSTEM ================= */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold sm:text-2xl">Quality System</h3>

          <div className="mt-6 rounded-2xl border border-black/15 bg-white shadow-lg">
            {/* Card Header */}
            <div className="bg-[#49308F] px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-white sm:h-8 sm:w-8" />

                <h4 className="text-lg font-semibold text-white sm:text-xl">
                  FSC ® Certificate
                </h4>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#49308F] text-white">
                  <Award size={21} />
                </div>

                <div>
                  <p className="mt-3 text-sm leading-6 text-black/80">
                    The FSC ® Multisite Certificate is an international and
                    independent certification aimed at those working in the
                    forest sector or on products derived from wooded areas and
                    serves to ensure environmental, social and economic benefits
                    to territories and communities through responsible forest
                    management, which protects biodiversity and ecosystem.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49308F]">
                    <CheckCircle2 size={16} />
                    International Certification
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-1.5 w-full bg-[#49308F]" />
          </div>
        </div>

        {/* ================= DOTTED BORDER DIV ================= */}
        <div className="mt-10 w-full border-2 border-dotted border-[#49308F] p-6 text-center">
          <span className="text-base font-bold sm:text-lg">
            FSC ® Certificate
          </span>
        </div>
      </div>
    </section>
  );
}
