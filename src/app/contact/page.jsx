"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* =====================================================
          CONTACT INFO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f1eee5]">
        {/* =====================================================
      BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[150px]" />
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#49308F]/12 blur-[150px]" />
          <div className="absolute -bottom-60 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

          <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full border border-[#D4AF37]/20" />
          <div className="absolute -right-10 top-[38%] h-52 w-52 rounded-full border border-[#49308F]/10" />

          <div className="absolute bottom-10 left-[-80px] h-48 w-48 rounded-full border border-[#49308F]/10" />
        </div>

        {/* =====================================================
      TOP ACCENT
  ===================================================== */}
        <div className="relative h-[4px] w-full bg-gradient-to-r from-[#8F6F12] via-[#D4AF37] to-[#8F6F12]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />

              <span className="rounded-full border border-[#D4AF37]/30 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A98520] backdrop-blur-sm">
                The Pack Hub
              </span>

              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            {/* Heading - reduced */}
            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
              Let&apos;s start{" "}
              <span className="relative text-[#49308F]">
                a conversation
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#D4AF37]" />
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              Whether you have a product enquiry, need customized packaging or
              want to discuss your requirements, our team is ready to help.
            </p>
          </div>

          {/* =====================================================
        CONTACT PANEL
    ===================================================== */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#49308F]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:rounded-[2.5rem]">
              {/* =================================================
            TOP PANEL
        ================================================= */}
              <div className="relative overflow-hidden border-b border-black/10 bg-black px-7 py-10 sm:px-10 lg:px-14">
                <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[150px] font-black leading-none text-white/[0.025] sm:text-[200px]">
                  TALK
                </div>

                <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

                <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-[#D4AF37]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                        Contact Information
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                      We&apos;d love to hear from you.
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                      Reach us directly through phone, email or visit our
                      office.
                    </p>
                  </div>

                  <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 md:flex">
                    <div className="h-12 w-12 rounded-full border border-[#D4AF37]/40" />
                  </div>
                </div>
              </div>

              {/* =================================================
            CONTACT GRID
        ================================================= */}
              <div className="grid md:grid-cols-3">
                {/* PHONE */}
                <a
                  href="tel:+919650033010"
                  className="group relative overflow-hidden border-b border-black/10 p-7 transition-all duration-500 hover:bg-[#49308F]/[0.025] sm:p-9 md:border-b-0 md:border-r"
                >
                  <span className="pointer-events-none absolute -right-2 top-1 text-7xl font-black text-black/[0.035] transition-all duration-500 group-hover:text-[#49308F]/[0.07]">
                    01
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#49308F] to-[#35216d] text-white shadow-[0_12px_30px_rgba(73,48,143,0.25)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <Phone size={27} strokeWidth={1.7} />
                    <div className="absolute -inset-2 -z-10 rounded-2xl bg-[#49308F]/20 blur-xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                      Call Us
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-black">Phone</h4>

                    <div className="mt-5 space-y-2">
                      <span className="block text-sm text-black/55 transition-colors group-hover:text-[#49308F]">
                        +91-9650033010
                      </span>

                      <span className="block text-sm text-black/55 transition-colors group-hover:text-[#49308F]">
                        +91-8233040303
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#49308F]">
                      <span>Call Now</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#A98520] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:thepackhub@gmail.com"
                  className="group relative overflow-hidden border-b border-black/10 p-7 transition-all duration-500 hover:bg-[#D4AF37]/[0.035] sm:p-9 md:border-b-0 md:border-r"
                >
                  <span className="pointer-events-none absolute -right-2 top-1 text-7xl font-black text-black/[0.035] transition-all duration-500 group-hover:text-[#D4AF37]/[0.10]">
                    02
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A98520] text-black shadow-[0_12px_30px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <Mail size={27} strokeWidth={1.7} />
                    <div className="absolute -inset-2 -z-10 rounded-2xl bg-[#D4AF37]/20 blur-xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                      Write To Us
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-black">Email</h4>

                    <span className="mt-5 block break-all text-sm text-black/55 transition-colors group-hover:text-[#49308F]">
                      thepackhub@gmail.com
                    </span>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A98520]">
                      <span>Send Email</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#A98520] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </a>

                {/* ADDRESS */}
                <div className="group relative overflow-hidden p-7 transition-all duration-500 hover:bg-[#49308F]/[0.025] sm:p-9">
                  <span className="pointer-events-none absolute -right-2 top-1 text-7xl font-black text-black/[0.035] transition-all duration-500 group-hover:text-[#49308F]/[0.07]">
                    03
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#49308F] to-[#35216d] text-white shadow-[0_12px_30px_rgba(73,48,143,0.25)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <MapPin size={27} strokeWidth={1.7} />
                    <div className="absolute -inset-2 -z-10 rounded-2xl bg-[#49308F]/20 blur-xl" />
                  </div>

                  <div className="relative mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                      Visit Us
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-black">
                      Address
                    </h4>

                    <p className="mt-5 text-sm leading-7 text-black/55">
                      Ground Floor, Plot No. 177, Pocket D, Sector-2, DSIIDC
                      Industrial Complex, Bawana Industrial Area, North West
                      Delhi, New Delhi (India)
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#49308F]">
                      <span>Visit Us</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#49308F] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

              <div className="h-[4px] w-full bg-gradient-to-r from-[#49308F] via-[#D4AF37] to-[#A98520]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-20 lg:py-15">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/7 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#49308F]/7 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D4AF37]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                  Contact Us
                </span>
              </div>

              {/* Heading - reduced */}
              <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-5xl">
                Get in{" "}
                <span className="relative text-[#49308F]">
                  touch
                  <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#49308F]/20" />
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                Have a question, need more information or want to discuss your
                requirements? Send us a message and our team will get back to
                you as soon as possible.
              </p>

              <div className="mt-10 hidden items-center gap-4 lg:flex">
                <div>
                  <div className="h-[2px] w-14 bg-[#D4AF37]" />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                    We are here to help
                  </p>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/8 blur-2xl" />

              <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:rounded-3xl sm:p-8 lg:p-10">
                <div className="mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98520]">
                    Contact Form
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-black sm:text-2xl">
                    Tell us how we can help
                  </h2>

                  <div className="mt-4 h-[3px] w-14 bg-[#D4AF37]" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First + Last Name */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-black/70"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Enter your first name"
                        className="w-full rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-[#49308F] focus:bg-white focus:ring-4 focus:ring-[#49308F]/5"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-black/70"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Enter your last name"
                        className="w-full rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-[#49308F] focus:bg-white focus:ring-4 focus:ring-[#49308F]/5"
                      />
                    </div>
                  </div>

                  {/* Email + Mobile */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-black/70"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-[#49308F] focus:bg-white focus:ring-4 focus:ring-[#49308F]/5"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-black/70"
                      >
                        Mobile Number
                      </label>

                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-[#49308F] focus:bg-white focus:ring-4 focus:ring-[#49308F]/5"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-black/70"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-[#49308F] focus:bg-white focus:ring-4 focus:ring-[#49308F]/5"
                    />
                  </div>

                  {/* I'm not a robot */}
                  <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-black/10 bg-[#fafaf8] p-4 transition-colors hover:border-[#D4AF37]/50">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        required
                        className="h-5 w-5 cursor-pointer accent-[#49308F]"
                      />

                      <span className="text-sm text-black/70">
                        I'm not a robot
                      </span>
                    </div>

                    <ShieldCheck size={22} className="text-[#49308F]" />
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-black px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#49308F] hover:shadow-[0_15px_35px_rgba(73,48,143,0.25)] active:translate-y-0"
                  >
                    <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                    <span className="relative z-10">
                      {submitted ? "Message Sent" : "Submit"}
                    </span>

                    <Send
                      size={16}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <div className="mt-8 h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#49308F]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    GOOGLE MAP
===================================================== */}
      <section className="relative overflow-hidden bg-[#f1eee5] py-10 sm:py-20 lg:py-15">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#49308F]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="mb-10 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A98520]">
                Find Us
              </span>

              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            {/* Heading - reduced */}
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Visit Our{" "}
              <span className="relative text-[#49308F]">
                Location
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#D4AF37]" />
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              Find The Pack Hub at our office in Bawana Industrial Area, New
              Delhi.
            </p>
          </div>

          {/* Map Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:p-3">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[1.5rem]">
              <iframe
                src="https://www.google.com/maps?q=Ground+Floor,+Plot+No.+177,+Pocket+D,+Sector-2,+DSIIDC+Industrial+Complex,+Bawana+Industrial+Area,+North+West+Delhi,+New+Delhi,+India&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Pack Hub Location"
                className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
              />

              {/* Map Overlay Card */}
              <div className="absolute bottom-4 left-4 max-w-sm sm:bottom-6 sm:left-6">
                <div className="rounded-2xl border border-white/20 bg-black/85 p-5 shadow-2xl backdrop-blur-md sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                        The Pack Hub
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/75">
                        Ground Floor, Plot No. 177, Pocket D, Sector-2, DSIIDC
                        Industrial Complex, Bawana Industrial Area, North West
                        Delhi, New Delhi (India)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 h-[3px] rounded-full bg-gradient-to-r from-[#49308F] via-[#D4AF37] to-[#A98520] sm:mt-3" />
          </div>
        </div>
      </section>
    </main>
  );
}
