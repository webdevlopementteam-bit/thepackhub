"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Minus, Menu, X, Globe2, Phone } from "lucide-react";
import Image from "next/image";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      {
        label: "Production",
        href: "/production",
      },
      {
        label: "Certifications",
        href: "/certifications",
      },
    ],
  },
  {
    label: "Products",
    href: "/product",
  },
  {
    label: "Solutions & Services",
    href: "/solutions-and-services",
    dropdown: [
      {
        label: "For The Industry",
        href: "/for_the_industry",
      },
      {
        label: "For The Distributors",
        href: "/for_the_distributors",
      },
      {
        label: "For Confectioners",
        href: "/for_confectioners",
      },
      {
        label: "For Large Retailers",
        href: "/for_large_retailers",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Sustainability",
    href: "/sustainability",
  },
  {
    label: "More",
    dropdown: [
      {
        label: "Research & Development",
        href: "/research-and-development",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
];

/* ============================================================
   GOOGLE TRANSLATE LANGUAGE LIST
============================================================ */

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "gu", name: "Gujarati" },
  { code: "mr", name: "Marathi" },
  { code: "pa", name: "Punjabi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "ur", name: "Urdu" },
  { code: "or", name: "Odia" },
  { code: "as", name: "Assamese" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "es", name: "Spanish" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh-CN", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "tr", name: "Turkish" },
  { code: "nl", name: "Dutch" },
  { code: "pl", name: "Polish" },
  { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" },
];

export default function NavBar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  /* ============================================================
     GOOGLE TRANSLATE STATE
  ============================================================ */

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  /* ============================================================
     LOAD GOOGLE TRANSLATE SCRIPT
  ============================================================ */

  useEffect(() => {
    // Google callback
    window.googleTranslateElementInit = function () {
      if (
        window.google &&
        window.google.translate &&
        document.getElementById("google_translate_element")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,bn,gu,mr,pa,ta,te,kn,ml,ur,or,as,fr,de,es,it,pt,ru,ja,ko,zh-CN,ar,tr,nl,pl,th,vi",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    // Avoid loading script multiple times
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");

      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  /* ============================================================
     CHANGE LANGUAGE
  ============================================================ */

  const changeLanguage = (language) => {
    setSelectedLanguage(language);

    // English = original language
    if (language === "en") {
      document.cookie = "googtrans=/en/en; path=/; max-age=31536000";

      window.location.reload();
      return;
    }

    // Google Translate cookie
    document.cookie = `googtrans=/en/${language}; path=/; max-age=31536000`;

    // Try to use Google's hidden select
    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = language;

      googleSelect.dispatchEvent(
        new Event("change", {
          bubbles: true,
        }),
      );

      return;
    }

    // If Google select is not ready yet
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = language;

        select.dispatchEvent(
          new Event("change", {
            bubbles: true,
          }),
        );

        clearInterval(interval);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  /* ============================================================
     CLOSE MOBILE
  ============================================================ */

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
  };

  /* ============================================================
     ACTIVE ROUTE
  ============================================================ */

  const isActive = (href) => {
    if (!href) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /* ============================================================
     DROPDOWN ACTIVE
  ============================================================ */

  const isDropdownActive = (items) => {
    return items?.some((item) => isActive(item.href));
  };

  /* ============================================================
     MOBILE DROPDOWN
  ============================================================ */

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm backdrop-blur-md">
      {/* =====================================================
          GOOGLE TRANSLATE HIDDEN ELEMENT
      ====================================================== */}

      <div
        id="google_translate_element"
        translate="no"
        className="notranslate"
        aria-hidden="true"
      />

      {/* =====================================================
          TOP NAVBAR
      ====================================================== */}

      <div className="mx-auto flex h-[76px] max-w-[1450px] items-center px-4 sm:px-6 lg:px-8">
        {/* LOGO */}

        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/logo.webp"
            alt="The Pack Hub Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP PHONE */}

        <a
          href="tel:+918233040303"
          className="ml-5 hidden items-center gap-2 rounded-xl px-2.5 py-2 transition hover:bg-[#D4AF37]/10 sm:flex"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10">
            <Phone size={15} strokeWidth={2} className="text-[#D4AF37]" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Phone
            </span>

            <span className="text-[12px] font-semibold text-gray-800">
              +91 8233040303
            </span>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="ml-auto hidden items-center lg:flex xl:gap-1">
          {navigation.map((item) => {
            const dropdownActive = isDropdownActive(item.dropdown);

            if (!item.dropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition ${
                    isActive(item.href)
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-semibold transition ${
                    dropdownActive
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>

                <div
                  className={`invisible absolute top-full z-50 mt-2 translate-y-1 overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    item.label === "More"
                      ? "right-0 w-64"
                      : item.label === "Solutions & Services"
                        ? "left-0 w-56"
                        : "left-0 w-48"
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block rounded-lg px-3.5 py-2.5 text-[13px] font-medium transition ${
                        isActive(subItem.href)
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-gray-700 hover:bg-[#3C3C3C] hover:text-[#D4AF37]"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:ml-4">
          {/* SEARCH */}

          {/* Search removed */}

          {/* =================================================
      LANGUAGE SELECT Future Update  
  ================================================== */}
          {/*Enable For Future Update  */}
          {/* <div 
    translate="no" 
    className="notranslate flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1.5 sm:gap-1.5 sm:px-3" 
  > 
    <Globe2 size={14} className="shrink-0 text-gray-500" /> 
 
    <select 
      translate="no" 
      className="notranslate w-[65px] cursor-pointer appearance-auto bg-transparent text-[11px] font-medium text-gray-700 outline-none sm:w-auto sm:text-[12px]" 
      value={selectedLanguage} 
      onChange={(e) => changeLanguage(e.target.value)} 
      aria-label="Select Language" 
    > 
      {languages.map((language) => ( 
        <option key={language.code} value={language.code}> 
          {language.name} 
        </option> 
      ))} 
    </select> 
  </div> */}

          {/* MOBILE MENU */}

          <button
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMobileDropdown(null);
            }}
            className={`ml-1 flex h-9 w-9 items-center justify-center rounded-xl border transition-all lg:hidden sm:h-10 sm:w-10 ${
              mobileOpen
                ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]"
                : "border-gray-200 bg-gray-50 text-gray-700"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/*  */}
      </div>

      {/* =====================================================
          SEARCH PANEL
      ====================================================== */}

      {/* Search panel removed */}

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="max-h-[calc(100vh-76px)] overflow-y-auto px-4 pb-5 pt-4 sm:px-6">
            {/* PHONE */}

            <a
              href="tel:+918233040303"
              className="mb-3 flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-3.5 transition hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/15"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15">
                <Phone size={17} className="text-[#D4AF37]" />
              </div>

              <div className="leading-tight">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Call Us
                </p>

                <p className="mt-0.5 text-sm font-semibold text-gray-800">
                  +91 82330 40303
                </p>
              </div>
            </a>

            {/* MOBILE LINKS */}

            <div className="space-y-1.5">
              {navigation.map((item) => {
                const dropdownActive = isDropdownActive(item.dropdown);

                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className={`flex min-h-[46px] items-center rounded-xl px-3.5 text-[14px] font-semibold transition ${
                        isActive(item.href)
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-gray-700 hover:bg-gray-50 active:bg-[#D4AF37]/10 active:text-[#D4AF37]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = openMobileDropdown === item.label;

                return (
                  <div key={item.label} className="overflow-hidden rounded-xl">
                    <div
                      className={`flex min-h-[46px] items-center rounded-xl transition ${
                        dropdownActive
                          ? "bg-[#D4AF37]/10"
                          : "hover:bg-gray-50 active:bg-[#D4AF37]/10"
                      }`}
                    >
                      <Link
                        href={item.href || "#"}
                        onClick={closeMobile}
                        className={`flex flex-1 items-center px-3.5 text-[14px] font-semibold active:text-[#D4AF37] ${
                          dropdownActive ? "text-[#D4AF37]" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:border-[#D4AF37]/40 active:bg-[#D4AF37]/10 active:text-[#D4AF37] ${
                          isOpen
                            ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]"
                            : "border-gray-200 bg-gray-50 text-gray-600"
                        }`}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? (
                          <Minus size={15} strokeWidth={2.5} />
                        ) : (
                          <Plus size={15} strokeWidth={2.5} />
                        )}
                      </button>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="mx-2 mb-1 mt-1 border-l-2 border-[#D4AF37]/20 pl-3">
                          {/* MAIN LINK INSIDE DROPDOWN */}

                          {item.href && (
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              className={`flex min-h-[42px] items-center rounded-lg px-3 text-[13px] transition ${
                                isActive(item.href)
                                  ? "bg-[#D4AF37]/10 font-semibold text-[#D4AF37]"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#D4AF37] active:bg-[#D4AF37]/10 active:text-[#D4AF37]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          )}

                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMobile}
                              className={`flex min-h-[42px] items-center rounded-lg px-3 text-[13px] transition ${
                                isActive(subItem.href)
                                  ? "bg-[#D4AF37]/10 font-semibold text-[#D4AF37]"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#D4AF37] active:bg-[#D4AF37]/10 active:text-[#D4AF37]"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
