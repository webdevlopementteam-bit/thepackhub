"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Send, X } from "lucide-react";
import { z } from "zod";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "@/app/lib/web3forms";

/* =========================================================
   TIMING
========================================================= */

const FIRST_DELAY_MS = 7000; // after the visitor lands
const REPEAT_DELAY_MS = 15000; // after the visitor closes it without submitting

const SUBMITTED_KEY = "thepackhub-enquiry-submitted";

// The contact page already has the full form
const HIDDEN_ON = ["/contact"];

/* =========================================================
   VALIDATION
========================================================= */

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .check(z.email("Please enter a valid email address.")),

  mobile: z
    .string()
    .trim()
    .regex(/^[0-9]{10,12}$/, "Mobile number must be between 10 and 12 digits."),

  message: z.string().trim().max(1000, "Message is too long."),
});

function hasSubmitted() {
  try {
    return localStorage.getItem(SUBMITTED_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberSubmitted() {
  try {
    localStorage.setItem(SUBMITTED_KEY, "1");
  } catch {
    // Storage unavailable: the popup simply stops for this visit
  }
}

/* =========================================================
   COMPONENT
========================================================= */

export default function EnquiryPopup() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const timerRef = useRef(null);
  const stoppedRef = useRef(false);
  const firstFieldRef = useRef(null);

  const hiddenHere = HIDDEN_ON.includes(pathname);

  const schedule = useCallback((delay) => {
    clearTimeout(timerRef.current);

    if (stoppedRef.current) return;

    timerRef.current = setTimeout(() => setOpen(true), delay);
  }, []);

  /* First appearance, 7 seconds after landing */
  useEffect(() => {
    if (hasSubmitted()) {
      stoppedRef.current = true;
      return;
    }

    schedule(FIRST_DELAY_MS);

    return () => clearTimeout(timerRef.current);
  }, [schedule]);

  /* Close: show again after 15 seconds unless the form was submitted */
  const close = useCallback(() => {
    setOpen(false);
    setErrors({});
    setSubmitError("");

    if (done) {
      stoppedRef.current = true;
      return;
    }

    schedule(REPEAT_DELAY_MS);
  }, [done, schedule]);

  /* Escape key closes the popup */
  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKey);
    firstFieldRef.current?.focus();

    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never fill this hidden field
    if (formData.get("botcheck")) return;

    const values = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      mobile: formData.get("mobile")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    const validation = enquirySchema.safeParse(values);

    if (!validation.success) {
      const fieldErrors = {};

      validation.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    try {
      const web3FormData = new FormData();

      web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
      web3FormData.append("name", values.name);
      web3FormData.append("email", values.email);
      web3FormData.append("phone", values.mobile);
      web3FormData.append("message", values.message || "-");
      web3FormData.append("page", window.location.href);
      web3FormData.append("subject", "New Popup Enquiry - The Pack Hub");
      web3FormData.append("from_name", "The Pack Hub Website");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (result.success) {
        rememberSubmitted();
        stoppedRef.current = true;
        clearTimeout(timerRef.current);
        setDone(true);
        form.reset();
      } else {
        setSubmitError(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setSubmitError(
        "Something went wrong while sending your enquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open || hiddenHere) return null;

  const inputClass = (field) =>
    `w-full rounded-xl border ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
        : "border-black/10 focus:border-[#49308F] focus:ring-[#49308F]/5"
    } bg-[#fafaf8] px-4 py-3 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:bg-white focus:ring-4`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-[#A98520] via-[#D4AF37] to-[#A98520]" />

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black/50 transition hover:bg-black/5 hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-7">
          {done ? (
            <div className="py-6 text-center">
              <h2
                id="enquiry-popup-title"
                className="text-xl font-bold text-black"
              >
                Thank you!
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Your enquiry has been sent. Our team will get back to you
                shortly.
              </p>

              <button
                type="button"
                onClick={close}
                className="mt-6 rounded-full bg-[#49308F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2673]"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A98520]">
                The Pack Hub
              </span>

              <h2
                id="enquiry-popup-title"
                className="mt-2 pr-8 text-xl font-bold leading-snug text-black sm:text-2xl"
              >
                Get a Quote for Your Packaging
              </h2>

              <p className="mt-2 text-sm leading-6 text-black/60">
                Share your details and our team will contact you with pricing
                and samples.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-5 space-y-3"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <input
                    ref={firstFieldRef}
                    name="name"
                    placeholder="Your Name *"
                    autoComplete="name"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    autoComplete="email"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Mobile Number *"
                    autoComplete="tel"
                    className={inputClass("mobile")}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Which product do you need? (optional)"
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#49308F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3a2673] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  {!submitting && <Send size={16} />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
