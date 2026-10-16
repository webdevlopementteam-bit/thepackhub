import Link from "next/link";
import { CalendarDays, User } from "lucide-react";

/* =====================================================
   Shared building blocks for blog post pages
===================================================== */

export function H2({ children }) {
  return (
    <h2 className="mt-12 text-2xl font-bold tracking-tight text-black sm:text-3xl">
      {children}
    </h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className="mt-8 text-lg font-semibold text-[#49308F] sm:text-xl">
      {children}
    </h3>
  );
}

export function P({ children }) {
  return <p className="mt-4">{children}</p>;
}

export function List({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={`mt-4 space-y-2 pl-6 marker:text-[#A98520] ${
        ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

// Bold lead-in followed by text, e.g. "Wrapping Sheets Food-safe, ..."
export function Item({ title, children }) {
  return (
    <p className="mt-4">
      <strong className="font-semibold text-black">{title}</strong> {children}
    </p>
  );
}

export function Callout({ title, children }) {
  return (
    <div className="mt-10 rounded-2xl border border-[#D4AF37]/40 bg-[#fafaf8] p-6 sm:p-8">
      <h2 className="text-xl font-bold text-black sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

export function Table({ headers, rows }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10">
      <table className="w-full min-w-[520px] text-left text-sm sm:text-[15px]">
        <thead className="bg-[#49308F] text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-t border-black/10 even:bg-[#fafaf8]"
            >
              {row.map((cell, index) => (
                <td
                  key={index}
                  className={`px-4 py-3 ${
                    index === 0 ? "font-semibold text-black" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function faqSchemaFor(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function Faqs({ faqs }) {
  return (
    <>
      <H2>Frequently Asked Questions</H2>

      <div className="mt-6 space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-black/10 bg-white px-5 py-4 open:border-[#D4AF37]/50 open:bg-[#fafaf8]"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-black">
              <h3 className="text-[15px] sm:text-base">
                {index + 1}. {faq.question}
              </h3>
              <span className="mt-0.5 shrink-0 text-xl leading-none text-[#A98520] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}

// faqs is used only for the FAQ schema; place <Faqs /> in the content.
export function BlogPostLayout({ title, date, faqs, children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaFor(faqs)),
          }}
        />
      )}

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[110px]" />

          <div className="absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-[#49308F]/10 blur-[110px]" />
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />

        <div className="relative mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:py-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />

            <Link
              href="/blog"
              className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#A98520] hover:text-[#49308F]"
            >
              Blog
            </Link>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[44px]">
            {title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium text-black/55 sm:text-sm">
            <span className="flex items-center gap-2">
              <User size={15} strokeWidth={1.8} className="text-[#A98520]" />
              The Pack Hub
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays
                size={15}
                strokeWidth={1.8}
                className="text-[#49308F]"
              />
              {date}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}
      <article className="mx-auto max-w-4xl px-5 py-12 text-[15px] leading-7 text-black/70 sm:px-8 sm:text-base sm:leading-8 lg:py-16">
        {children}
      </article>
    </main>
  );
}
