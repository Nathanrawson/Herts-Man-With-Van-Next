import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Removals Service", href: "/#services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Packing & Storage", href: "/packing-and-storage" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy & Cookie Policy", href: "#" },
  { label: "Trading Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-2 inline-block">
              <Image
                src="/assets/images/logo.png"
                alt="Herts Man With A Van"
                width={240}
                height={94}
                className="h-14 w-auto"
              />
            </div>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Trusted removals company serving Welwyn Garden City, Stevenage,
              Hatfield, Hertford, St Albans, and across Hertfordshire since
              2017.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/hertsmanwithavan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@hertsmanwithavan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.1a8.2 8.2 0 005.58 2.18V11.8a4.84 4.84 0 01-3.77-1.66V6.69z" />
                </svg>
              </a>
              <a
                href="https://g.co/kgs/hertsmanwithavan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Google Business"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01438500156"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  01438 500156
                </a>
              </li>
              <li>
                <a
                  href="mailto:phil@hertsmanwithavan.com"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  phil@hertsmanwithavan.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                134 Oakdale, Welwyn Garden City
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Monday &ndash; Sunday: 08:00 - 18:00
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {[
                { label: "Stevenage", href: "/removals/stevenage" },
                { label: "Welwyn Garden City", href: "/removals/welwyn-garden-city" },
                { label: "Hatfield", href: "/removals/hatfield" },
                { label: "Hertford", href: "/removals/hertford" },
                { label: "St Albans", href: "/removals/st-albans" },
                { label: "Hitchin", href: "/removals/hitchin" },
                { label: "All Areas", href: "/service-areas" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Herts Man With A Van. The content on
            this website is owned by us and our licensors.
          </p>
          <p className="text-white/40 text-sm">
            Welwyn Garden City, Hertfordshire
          </p>
        </div>
      </div>
    </footer>
  );
}
