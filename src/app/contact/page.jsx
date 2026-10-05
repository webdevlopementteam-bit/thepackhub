"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { z } from "zod";

/* =========================================================
   COMPANY / CONTACT DETAILS
========================================================= */

const COMPANY_NAME = "THE PACK HUB PVT. LTD.";

const ADDRESS =
  "913 KHASRA INDUSTRIAL AREA, BAZIDPUR SABOLI SONIPAT HARYANA-131029";

const PHONE_1 = "+919650033010";
const PHONE_2 = "+918233040303";

const EMAIL = "thepackhub@gmail.com";

/* =========================================================
   EXACT GOOGLE MAPS LOCATION PROVIDED BY YOU
========================================================= */

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27946.55772119408!2d77.07369425948546!3d28.888845984669956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20913%20KHASRA%20INDUSTRIAL%20AREA%2C%20BAZIDPUR%20SABOLI%20SONIPAT%20HARYANA-131029!5e0!3m2!1sen!2sin!4v1791188096594!5m2!1sen!2sin";

/*
  This opens Google Maps for The Pack Hub.
*/
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=The%20Pack%20Hub";

/* =========================================================
   ZOD VALIDATION
========================================================= */

const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name is too long."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name is too long."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .check(z.email("Please enter a valid email address.")),

  mobile: z
    .string()
    .trim()
    .min(1, "Mobile number is required.")
    .regex(/^[0-9]{10,12}$/, "Mobile number must be between 10 and 12 digits."),

  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters.")
    .max(2000, "Message is too long."),

  consent: z.boolean().refine((value) => value === true, {
    message: "Please confirm that you are not a robot.",
  }),
});

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setSubmitError("");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      mobile: formData.get("mobile")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      consent: formData.get("consent") === "on",
    };

    /* =====================================================
       ZOD VALIDATION
    ===================================================== */

    const validation = contactSchema.safeParse(values);

    if (!validation.success) {
      const fieldErrors = {};

      validation.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);

      const firstErrorField = validation.error.issues[0]?.path[0];

      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      return;
    }

    /* =====================================================
       WEB3FORMS SUBMISSION
    ===================================================== */

    setSubmitting(true);

    try {
      const web3FormData = new FormData();

      /*
        WEB3FORMS ACCESS KEY
      */
      web3FormData.append("access_key", "ea1eb459-5e8f-4dfb-a129-2e425e873320");

      web3FormData.append("name", `${values.firstName} ${values.lastName}`);

      web3FormData.append("firstName", values.firstName);

      web3FormData.append("lastName", values.lastName);

      web3FormData.append("email", values.email);

      web3FormData.append("phone", values.mobile);

      web3FormData.append("message", values.message);

      web3FormData.append("subject", "New Contact Enquiry - The Pack Hub");

      web3FormData.append("from_name", "The Pack Hub Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setSubmitError("");
        setErrors({});

        form.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(
          result.message || "Unable to send your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setSubmitError(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* =========================================================
     INPUT CLASS
  ========================================================= */

  const inputClass = (field) =>
    `w-full rounded-xl border ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
        : "border-black/10 focus:border-[#49308F] focus:ring-[#49308F]/5"
    } bg-[#fafaf8] px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:bg-white focus:ring-4`;

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f1eee5]">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[150px]" />

          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#49308F]/12 blur-[150px]" />

          <div className="absolute -bottom-60 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

          <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full border border-[#D4AF37]/20" />

          <div className="absolute -right-10 top-[38%] h-52 w-52 rounded-full border border-[#49308F]/10" />

          <div className="absolute bottom-10 left-[-80px] h-48 w-48 rounded-full border border-[#49308F]/10" />
        </div>

        {/* TOP ACCENT */}

        <div className="relative h-[4px] w-full bg-gradient-to-r from-[#8F6F12] via-[#D4AF37] to-[#8F6F12]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-10 lg:px-10 lg:py-15">
          {/* HEADER */}

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />

              <span className="rounded-full border border-[#D4AF37]/30 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A98520] backdrop-blur-sm">
                The Pack Hub
              </span>

              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

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

          {/* CONTACT PANEL */}

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#49308F]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:rounded-[2.5rem]">
              {/* TOP PANEL */}

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

              {/* CONTACT GRID */}

              <div className="grid md:grid-cols-3">
                {/* =================================================
                    PHONE
                ================================================= */}

                <div className="group relative overflow-hidden border-b border-black/10 p-7 transition-all duration-500 hover:bg-[#49308F]/[0.025] sm:p-9 md:border-b-0 md:border-r">
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

                    {/* NUMBER 1 */}

                    <a
                      href={`tel:${PHONE_1}`}
                      className="mt-5 block text-sm text-black/55 transition-all duration-300 hover:translate-x-1 hover:text-[#49308F]"
                    >
                      +91-9650033010
                    </a>

                    {/* NUMBER 2 */}

                    <a
                      href={`tel:${PHONE_2}`}
                      className="mt-3 block text-sm text-black/55 transition-all duration-300 hover:translate-x-1 hover:text-[#49308F]"
                    >
                      +91-8233040303
                    </a>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#49308F]">
                      <span>Call Now</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#A98520] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <a
                  href={`mailto:${EMAIL}`}
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
                      {EMAIL}
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

                {/* =================================================
                    ADDRESS
                ================================================= */}

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden p-7 transition-all duration-500 hover:bg-[#49308F]/[0.025] sm:p-9"
                >
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
                      {COMPANY_NAME}
                    </h4>

                    <p className="mt-5 text-sm leading-7 text-black/55">
                      ADD:- {ADDRESS}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#49308F]">
                      <span>Open In Maps</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#49308F] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </a>
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

                {/* =================================================
                    FORM
                ================================================= */}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* FIRST + LAST NAME */}

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
                        placeholder="Enter your first name"
                        className={inputClass("firstName")}
                      />

                      {errors.firstName && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.firstName}
                        </p>
                      )}
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
                        placeholder="Enter your last name"
                        className={inputClass("lastName")}
                      />

                      {errors.lastName && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* EMAIL + MOBILE */}

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
                        placeholder="Enter your email"
                        className={inputClass("email")}
                      />

                      {errors.email && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.email}
                        </p>
                      )}
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
                        inputMode="numeric"
                        maxLength={12}
                        placeholder="Enter 10 digit mobile number"
                        className={inputClass("mobile")}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value
                            .replace(/\D/g, "")
                            .slice(0, 12);
                        }}
                      />

                      {errors.mobile && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* MESSAGE */}

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
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className={inputClass("message")}
                    />

                    {errors.message && (
                      <p className="mt-2 text-xs font-medium text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* =================================================
                      CHECKBOX
                  ================================================= */}

                  <label
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border ${
                      errors.consent ? "border-red-500" : "border-black/10"
                    } bg-[#fafaf8] p-4 transition-colors hover:border-[#D4AF37]/50`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer accent-[#49308F]"
                      />

                      <span className="text-sm text-black/70">
                        I&apos;m not a robot
                      </span>
                    </div>

                    <ShieldCheck size={22} className="text-[#49308F]" />
                  </label>

                  {errors.consent && (
                    <p className="-mt-4 text-xs font-medium text-red-500">
                      {errors.consent}
                    </p>
                  )}

                  {/* SUCCESS MESSAGE */}

                  {submitted && (
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      ✓ Your message has been sent successfully. We will contact
                      you soon.
                    </div>
                  )}

                  {/* ERROR MESSAGE */}

                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {submitError}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-black px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#49308F] hover:shadow-[0_15px_35px_rgba(73,48,143,0.25)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />

                    <span className="relative z-10">
                      {submitting
                        ? "Sending..."
                        : submitted
                          ? "Message Sent"
                          : "Submit"}
                    </span>

                    <Send
                      size={16}
                      className={`relative z-10 transition-transform duration-300 ${
                        !submitting ? "group-hover:translate-x-1" : ""
                      }`}
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
          {/* MAP HEADING */}

          <div className="mb-10 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A98520]">
                Find Us
              </span>

              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Visit Our{" "}
              <span className="relative text-[#49308F]">
                Location
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[#D4AF37]" />
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              Find {COMPANY_NAME} at our office in Bazidpur Saboli, Sonipat,
              Haryana.
            </p>
          </div>

          {/* =================================================
              MAP CARD
          ================================================= */}

          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:p-3">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[1.5rem]">
              {/* EXACT MAP PROVIDED BY USER */}

              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Pack Hub Location"
                className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
              />

              {/* =================================================
                  MAP OVERLAY
              ================================================= */}

              <div className="absolute bottom-4 left-4 max-w-sm sm:bottom-6 sm:left-6">
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                  <div className="rounded-2xl border border-white/20 bg-black/85 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-[#49308F]/95 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-black">
                        <MapPin size={21} />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                          {COMPANY_NAME}
                        </p>

                        <p className="mt-2 text-xs leading-5 text-white/75">
                          ADD:- {ADDRESS}
                        </p>

                        <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                          Open Google Maps →
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-2 h-[3px] rounded-full bg-gradient-to-r from-[#49308F] via-[#D4AF37] to-[#A98520] sm:mt-3" />
          </div>
        </div>
      </section>
    </main>
  );
}
