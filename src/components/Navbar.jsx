"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Plus,
  Minus,
  Menu,
  X,
  Search,
  Globe2,
  Phone,
} from "lucide-react";
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
    href: "/products",
  },
  {
    label: "Solutions & Services",
    dropdown: [
      {
        label: "For The Industry",
        href: "/industry1",
      },
      {
        label: "For The Distributors",
        href: "/industry2",
      },
      {
        label: "For Confectioners",
        href: "/industry3",
      },
      {
        label: "For Large Retailers",
        href: "/industry4",
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
        href: "/research",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
];

export default function NavBar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  // Mobile dropdown state
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // Search
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Close mobile menu
  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
  };

  // Active route
  const isActive = (href) => {
    if (!href) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Dropdown active
  const isDropdownActive = (items) => {
    return items?.some((item) => isActive(item.href));
  };

  // Search items
  const searchItems = navigation.flatMap((item) => {
    if (item.dropdown) {
      return item.dropdown;
    }

    return [
      {
        label: item.label,
        href: item.href,
      },
    ];
  });

  // Search results
  const filteredResults =
    searchQuery.trim().length > 0
      ? searchItems.filter((item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [];

  // Toggle search
  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm backdrop-blur-md">
      {/* =====================================================
          TOP NAVBAR
      ====================================================== */}
      <div className="mx-auto flex h-[76px] max-w-[1450px] items-center px-5 sm:px-6 lg:px-8">
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

            // Normal link
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

            // Desktop dropdown
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

                {/* Desktop dropdown */}
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
          <button
            onClick={handleSearchToggle}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
              searchOpen
                ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                : "text-gray-600 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            }`}
            aria-label="Search"
          >
            {searchOpen ? <X size={18} /> : <Search size={17} />}
          </button>

          {/* LANGUAGE */}
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1.5 sm:gap-1.5 sm:px-3">
            <Globe2 size={14} className="shrink-0 text-gray-500" />

            <select
              className="w-[58px] cursor-pointer bg-transparent text-[11px] font-medium text-gray-700 outline-none sm:w-auto sm:text-[12px]"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

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
      </div>

      {/* =====================================================
          SEARCH PANEL
      ====================================================== */}
      {searchOpen && (
        <div className="border-t border-gray-100 bg-white shadow-md">
          <div className="mx-auto max-w-[900px] px-4 py-3 sm:px-6">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, services, pages..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm text-gray-800 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/10"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* SEARCH RESULTS */}
            {searchQuery.trim() && (
              <div className="mt-2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                        closeMobile();
                      }}
                      className="flex items-center gap-3 border-b border-gray-50 px-4 py-3 text-sm text-gray-700 last:border-0 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
                    >
                      <Search size={15} className="shrink-0 text-[#D4AF37]" />

                      <span>{item.label}</span>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-5 text-center text-sm text-gray-500">
                    No results found for{" "}
                    <span className="font-semibold text-gray-700">
                      "{searchQuery}"
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          {/* GOLD LINE */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="max-h-[calc(100vh-76px)] overflow-y-auto px-4 pb-5 pt-4 sm:px-6">
            {/* PHONE CARD */}
            <a
              href="tel:+918233040303"
              className="mb-3 flex items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-3.5 transition hover:bg-[#D4AF37]/10"
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

                {
                  /* NORMAL LINK */
                }
                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className={`flex min-h-[46px] items-center rounded-xl px-3.5 text-[14px] font-semibold transition ${
                        isActive(item.href)
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                {
                  /* DROPDOWN ITEM */
                }
                const isOpen = openMobileDropdown === item.label;

                return (
                  <div key={item.label} className="overflow-hidden rounded-xl">
                    {/* ===============================
                        MOBILE MAIN ROW
                    ================================ */}
                    <div
                      className={`flex min-h-[46px] items-center rounded-xl transition ${
                        dropdownActive ? "bg-[#D4AF37]/10" : "hover:bg-gray-50"
                      }`}
                    >
                      {/* PAGE LINK */}
                      <Link
                        href={item.href || "#"}
                        onClick={closeMobile}
                        className={`flex flex-1 items-center px-3.5 text-[14px] font-semibold ${
                          dropdownActive ? "text-[#D4AF37]" : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {/* ARROW BUTTON */}
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
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

                    {/* ===============================
                        SUB MENU
                    ================================ */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="mx-2 mb-1 mt-1 border-l-2 border-[#D4AF37]/20 pl-3">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMobile}
                              className={`flex min-h-[42px] items-center rounded-lg px-3 text-[13px] transition ${
                                isActive(subItem.href)
                                  ? "bg-[#D4AF37]/10 font-semibold text-[#D4AF37]"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#D4AF37]"
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
