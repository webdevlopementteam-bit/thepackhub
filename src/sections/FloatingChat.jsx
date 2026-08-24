"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaCommentDots,
} from "react-icons/fa";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-5">
      {/* Soft Glow */}
      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-full blur-2xl transition-all duration-700
        ${isOpen ? "scale-150 bg-yellow-400/40" : "bg-yellow-400/30"}`}
      />

      {/* Social Menu */}
      <div
        className={`absolute bottom-[68px] right-0 flex flex-col items-center gap-3 transition-all duration-300
        ${isOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      >
        {/* WhatsApp */}
        <div
          className={`transition-all duration-300 ${isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-75"}`}
        >
          <SocialButton
            href="https://wa.me/918233040303"
            label="WhatsApp"
            icon={<FaWhatsapp size={21} />}
            className="bg-[#25D366] shadow-[0_8px_25px_rgba(37,211,102,0.35)]"
          />
        </div>

        {/* Instagram */}
        <div
          className={`transition-all duration-300 delay-75 ${isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-75"}`}
        >
          <SocialButton
            href="https://www.instagram.com/thepack.hub"
            label="Instagram"
            icon={<FaInstagram size={21} />}
            className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] shadow-[0_8px_25px_rgba(225,48,108,0.35)]"
          />
        </div>

        {/* LinkedIn */}
        <div
          className={`transition-all duration-300 delay-150 ${isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-75"}`}
        >
          <SocialButton
            href="https://www.linkedin.com/in/company/the-pack-hub1/"
            label="LinkedIn"
            icon={<FaLinkedin size={20} />}
            className="bg-[#0A66C2] shadow-[0_8px_25px_rgba(10,102,194,0.35)]"
          />
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close social links" : "Open social links"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full 
        bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 text-white 
        shadow-[0_10px_35px_rgba(212,175,55,0.45)] backdrop-blur-md transition-all duration-500 
        hover:scale-110 hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] active:scale-95
        ${isOpen ? "rotate-6 scale-110" : ""}`}
      >
        {/* Inner Glow */}
        <span className="absolute inset-1 rounded-full bg-white/10" />

        {/* Icon */}
        <FaCommentDots
          size={23}
          className={`relative z-10 transition-all duration-500 ${isOpen ? "rotate-12 scale-110" : ""}`}
        />
      </button>
    </div>
  );
}

/* Social Button */
function SocialButton({ href, label, icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group/social relative block"
    >
      {/* Tooltip - Desktop Only */}
      <span className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-xl bg-black/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-500 group-hover/social:translate-x-0 group-hover/social:opacity-100 sm:block">
        {label}
      </span>

      {/* Social Icon */}
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full text-white backdrop-blur-xl transition-all duration-300 hover:scale-125 hover:-translate-x-1 active:scale-95 ${className}`}
      >
        {icon}
      </span>
    </a>
  );
}
