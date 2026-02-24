"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] pt-[140px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/contact-hero.webp"
        alt="Herts Man With A Van - Contact Us"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/80 via-[#111111]/60 to-[#111111]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            Contact Us
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
        >
          Reliable Man & Van in{" "}
          <span className="text-primary">Welwyn Garden City</span> &ndash;
          Prompt & Professional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Herts Man With A Van delivers dependable man and van services in Welwyn
          Garden City and Hertfordshire, ensuring your move or delivery is
          handled with care and professionalism.
        </motion.p>
      </div>
    </section>
  );
}
