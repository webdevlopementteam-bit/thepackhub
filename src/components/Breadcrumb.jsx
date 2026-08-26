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
    href: "/about-us",
    dropdown: [
      {
        label: "Production",
        href: "/production",
        image: "/breadcrumb/b1.png",
      },
      {
        label: "Certifications",
        href: "/certifications",
        image: "/breadcrumb/b2.png",
      },
    ],
  },

  {
    label: "Products",
    href: "/products",
    image: "/breadcrumb/b3.webp",
  },

  {
    label: "Solutions & Services",
    href: "/solutions-and-services",
    dropdown: [
      {
        label: "For The Industry",
        href: "/for_the_industry",
        image: "/breadcrumb/b1.png",
      },
      {
        label: "For The Distributors",
        href: "/for_the_distributors",
        image: "/breadcrumb/b2.png",
      },
      {
        label: "For Confectioners",
        href: "/for_confectioners",
        image: "/breadcrumb/b3.webp",
      },
      {
        label: "For Large Retailers",
        href: "/for_large_retailers",
        image: "/breadcrumb/b4.jpg",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
    image: "/breadcrumb/b4.jpg",
  },

  {
    label: "Sustainability",
    href: "/sustainability",
    image: "/breadcrumb/environment.webp",
  },

  {
    label: "More",
    dropdown: [
      {
        label: "Research & Development",
        href: "/research-and-development",
        image: "/breadcrumb/b1.png",
      },
      {
        label: "Blog",
        href: "/blog",
        image: "/breadcrumb/b2.png",
      },
    ],
  },
];

/* =====================================================
   GET CURRENT PAGE
===================================================== */

function getCurrentPage(pathname) {
  for (const item of navigation) {
    // Direct route
    if (item.href === pathname) {
      return {
        currentPage: item,
        parentPage: null,
      };
    }

    // Dropdown route
    if (item.dropdown) {
      const child = item.dropdown.find((subItem) => subItem.href === pathname);

      if (child) {
        return {
          currentPage: child,
          parentPage: item,
        };
      }
    }
  }

  return {
    currentPage: null,
    parentPage: null,
  };
}

/* =====================================================
   BREADCRUMB
===================================================== */

export default function Breadcrumb() {
  const pathname = usePathname();

  const { currentPage, parentPage } = getCurrentPage(pathname);

  // Don't show on Home or unknown routes
  if (!currentPage || pathname === "/") {
    return null;
  }

  /*
    Use image directly from the current page.
    This makes every dropdown page show its own image.
  */
  const image = currentPage.image || "/breadcrumb/b1.png";

  return (
    <section className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[320px]">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <Image
        src={image}
        alt={currentPage.label}
        fill
        priority
        className="object-cover"
      />

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/55" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              TITLE
          ===================================================== */}

          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {currentPage.label}
          </h1>

          {/* =====================================================
              BREADCRUMB
          ===================================================== */}

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
