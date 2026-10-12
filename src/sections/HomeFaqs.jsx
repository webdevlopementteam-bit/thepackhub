const faqs = [
  {
    question: "What is The Pack Hub?",
    answer:
      "The Pack Hub is a packaging company in India, established in 2022. It is a manufacturer, exporter and supplier of bakery and food packaging, including baking paper cups, food wrapping paper, printed cake boxes and cake base boards.",
  },
  {
    question:
      "Which is the best packaging solutions company in India for bakeries and food businesses?",
    answer:
      "The Pack Hub is a trusted packaging solutions company in India for bakeries, sweet shops, cafes and food brands. We offer food-safe, paper-based packaging with custom printing and bulk supply, so buyers can compare our products, quality and pricing before ordering.",
  },
  {
    question: "What does a packaging company in India do?",
    answer:
      "A packaging company in India designs, manufactures and supplies packaging products such as boxes, cups, wraps and liners. These products protect goods, keep food hygienic and help brands present their products professionally. The Pack Hub focuses on bakery and food packaging.",
  },
  {
    question: "What packaging products does The Pack Hub offer?",
    answer:
      "The Pack Hub offers baking paper cups, laddu paper cups, food wrapping paper, printed cake boxes, cake base boards, pastry bases and paper moulds. These suit bakeries, sweet shops, cafes, cloud kitchens and food brands.",
  },
  {
    question: "Is The Pack Hub a manufacturer or a supplier?",
    answer:
      "The Pack Hub is both a manufacturer and a supplier, and also an exporter. This means we make packaging products and supply them directly to businesses, which helps with quality control, customisation and pricing.",
  },
  {
    question: "Where is The Pack Hub located, and which cities do you supply to?",
    answer:
      "The Pack Hub is based in Delhi, India. We supply to Delhi NCR and customers across India, and we also export to international buyers. Contact us with your location for delivery details.",
  },
  {
    question: "Who can buy packaging from The Pack Hub?",
    answer:
      "Our customers include food manufacturers, confectionery professionals, bakeries, sweet shops, cafes, cloud kitchens, distributors and large retailers. We also support smaller businesses and home bakers who need quality packaging.",
  },
  {
    question: "Does The Pack Hub offer custom printed packaging?",
    answer:
      "Yes. We offer custom size, colour and logo printing on products such as cake boxes, paper cups and wrapping paper, so your brand stands out. Share your requirement and artwork for samples and pricing.",
  },
  {
    question: "Does The Pack Hub supply packaging in bulk and wholesale?",
    answer:
      "Yes. We supply packaging in bulk to bakeries, distributors, wholesalers and food businesses. The minimum order quantity depends on the product, size and printing, so contact us with your requirement for exact pricing.",
  },
  {
    question: "Is The Pack Hub’s packaging food-safe?",
    schemaQuestion: "Is The Pack Hub's packaging food-safe?",
    answer:
      "Our packaging is made from materials suitable for food packaging applications, with a focus on hygiene, strength and consistent quality. Specific features such as greaseproof properties vary by product, so check the product page or ask our team.",
  },
  {
    question: "What makes a packaging company reliable?",
    answer:
      "A reliable packaging company offers consistent quality, food-safe materials, customisation, fair pricing, clear communication and on-time delivery. Check samples, ask about minimum order quantities and read customer feedback before choosing a supplier.",
  },
  {
    question:
      "How do I choose the right packaging company in India for my business?",
    answer:
      "Compare product quality, material safety, customisation options, minimum order quantity, pricing, delivery time and support. Ask for samples first, and choose a supplier with experience in your product category, such as bakery or food packaging.",
  },
  {
    question: "Does The Pack Hub export packaging products outside India?",
    answer:
      "Yes. The Pack Hub is an exporter as well as a manufacturer and supplier. Share your destination country, product and quantity, and we will confirm export options, pricing and delivery time.",
  },
  {
    question: "Does The Pack Hub offer eco-friendly and sustainable packaging?",
    answer:
      "Our range is built around paper and paperboard products, which are a more sustainable alternative to many plastic packaging options. We aim to reduce waste and keep improving our materials and processes.",
  },
  {
    question: "How can I get a quote or samples from The Pack Hub?",
    answer:
      "Contact us through the website enquiry form or WhatsApp with your product type, size, quantity and design requirements. Our team will share pricing and guide you on samples and the next steps.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.schemaQuestion || faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomeFaqs() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-[#49308F] sm:text-sm">
          FAQs
        </span>

        <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-black/10 bg-white px-5 py-4 open:border-[#D4AF37]/50 open:bg-[#fafaf8]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-gray-900">
                <h3 className="text-[15px] sm:text-base">
                  {index + 1}. {faq.question}
                </h3>
                <span className="mt-0.5 shrink-0 text-xl leading-none text-[#A98520] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
