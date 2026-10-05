"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Solutions & Services", href: "/solutions-and-services" },
    { name: "Contact", href: "/contact" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Research & Development", href: "/research-and-development" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="border-t border-[#D4AF37]/20 bg-white text-[#3C3C3C]">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-12 lg:px-10">
        {/* ================= IMAGE TOP ================= */}
        <div className="flex flex-col items-center">
          <Link href="/" className="group">
            <Image
              src="/images/logo.webp"
              alt="The Pack Hub Logo"
              width={100}
              height={100}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Tagline */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-px w-6 bg-[#D4AF37] sm:w-8" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8A6A16] sm:text-[10px]">
              Packed With Care
            </span>

            <span className="h-px w-6 bg-[#D4AF37] sm:w-8" />
          </div>
        </div>

        {/* ================= ROUTES + ICONS ================= */}
        <div className="mt-9 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-10">
          {/* Routes */}
          <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center sm:gap-x-7 lg:justify-start lg:gap-x-6 xl:gap-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#3C3C3C] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="flex shrink-0 items-center justify-center gap-3">
            <Link
              href="https://www.facebook.com/packhubofficial?rdid=OHyAOkPRlkWOk2cv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mVTCn53k%2F#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF size={17} />
            </Link>

            <Link
              href="https://www.instagram.com/thepack.hub?igsh=dXNra21qYmU0N2Q2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/the-pack-hub1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn size={17} />
            </Link>

            <Link
              href="https://www.youtube.com/@thepackhubofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <FaYoutube size={19} />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-gray-200 bg-gray-50/70 px-5 py-4 text-center">
        <Link
          href={"https://cybertricks.cybertricksmedia.in/"}
          target="_blank"
          className="text-[11px] font-medium text-gray-500 sm:text-xs"
        >
          Copyright © 2024 The Pack Hub
          <span className="mx-2 text-gray-300">|</span>
          Powered by{" "}
          <span className="font-semibold text-[#D4AF37] hover:text-[#B8860B] transition-colors duration-300">
            CYBERTRICKS Media Pvt Ltd
          </span>
        </Link>
      </div>
    </footer>
  );
}
