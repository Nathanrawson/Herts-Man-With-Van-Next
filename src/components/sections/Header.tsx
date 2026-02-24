"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Removals", href: "/#services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Packing & Storage", href: "/packing-and-storage" },
  { label: "Blog", href: "/blog" },
  { label: "Video Blogs", href: "/video-blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top bar */}
      <div
        className={`bg-[#111111] text-white text-sm overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1.5">
          <a
            href="mailto:phil@hertsmanwithavan.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-xs">phil@hertsmanwithavan.com</span>
          </a>
          <a
            href="tel:01438500156"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="text-xs">01438 500156</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-[104px]"
          }`}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/images/logo.png"
              alt="Herts Man With A Van"
              width={280}
              height={110}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-12 md:h-14" : "h-24 md:h-28"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className="inline-flex items-center px-3 lg:px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild size="sm" className="ml-4 bg-primary hover:bg-primary/90 text-white shadow-sm">
              <a href="tel:01438500156">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                  <SheetTitle className="text-left">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Herts Man With A Van"
                      width={240}
                      height={94}
                      className="h-16 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col px-4 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className="flex items-center rounded-lg px-3 py-3 text-[15px] font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="px-3 pt-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                      <a href="tel:01438500156">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
