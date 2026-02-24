"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-[140px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/hero-bg.jpg"
        alt="Reliable removals service in Welwyn Garden City"
        fill
        className="object-cover"
        priority
        quality={90}
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
          <span className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            Making Life That Little Bit Easier!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
        >
          Reliable & Insured Removals Company in{" "}
          <span className="text-primary">Hertfordshire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Herts Man With A Van is a trusted removals company assisting with
          domestic and commercial removals in Welwyn Garden City, Stevenage,
          and across Hertfordshire. Perfect for single items or full moves, we
          provide fast, reliable, and hassle-free removals you can trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-white/60"
        >
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-brand-gold" />
            Road Haulage Association
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-gold" />
            UK House Clearance Association
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-8 md:mt-10 mb-8 sm:mb-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
          >
            <a href="#contact">
              Discuss Your Requirements
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl"
          >
            <a href="tel:01438500156">Call 01438 500156</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
