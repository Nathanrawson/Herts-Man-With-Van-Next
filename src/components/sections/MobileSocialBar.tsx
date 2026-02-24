"use client";

import { Facebook, Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Call",
    href: "tel:01438500156",
    icon: Phone,
    color: "bg-primary",
  },
  {
    label: "Email",
    href: "mailto:phil@hertsmanwithavan.com",
    icon: Mail,
    color: "bg-[#111111]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/hertsmanwithavan",
    icon: Facebook,
    color: "bg-[#1877F2]",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hertsmanwithavan",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.1a8.2 8.2 0 005.58 2.18V11.8a4.84 4.84 0 01-3.77-1.66V6.69z" />
      </svg>
    ),
    color: "bg-[#010101]",
  },
];

export default function MobileSocialBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-4 h-14">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${link.color} text-white flex flex-col items-center justify-center gap-0.5 transition-opacity hover:opacity-90`}
              aria-label={link.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
