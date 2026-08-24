"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
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

// Breadcrumb images
const breadcrumbImages = ["/breadcrumb/b1.png", "/breadcrumb/b2.png"];

export default function Breadcrumb() {
  const pathname = usePathname();

  // Find current page
  let currentPage = null;
  let parentPage = null;

  navigation.forEach((item) => {
    // Direct route
    if (item.href === pathname) {
      currentPage = item;
    }

    // Dropdown route
    if (item.dropdown) {
      const child = item.dropdown.find((subItem) => subItem.href === pathname);

      if (child) {
        currentPage = child;
        parentPage = item;
      }
    }
  });

  // Don't show breadcrumb on Home or unknown routes
  if (!currentPage || pathname === "/") {
    return null;
  }

  // Pick image based on pathname
  const imageIndex =
    Math.abs(
      pathname.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0),
    ) % breadcrumbImages.length;

  const image = breadcrumbImages[imageIndex];

  return (
    <section className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[320px]">
      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src={image}
        alt={currentPage.label}
        fill
        priority
        className="object-cover"
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* ================= TITLE ================= */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {currentPage.label}
          </h1>

          {/* ================= BREADCRUMB ================= */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center gap-1 text-white/80 transition hover:text-[#D4AF37]"
            >
              <Home size={16} />
              Home
            </Link>

            <ChevronRight size={16} className="text-white/50" />

            {/* Parent */}
            {parentPage && (
              <>
                <span className="text-white/80">{parentPage.label}</span>

                <ChevronRight size={16} className="text-white/50" />
              </>
            )}

            {/* Current Page */}
            <span className="font-medium text-[#D4AF37]">
              {currentPage.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
