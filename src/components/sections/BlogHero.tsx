"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] pt-[140px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/hero-bg.jpg"
        alt="Herts Man With A Van - Blog"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/90 via-[#111111]/75 to-[#111111]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white border border-white/30 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            Blog
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
        >
          Moving <span className="text-primary">Tips</span> & Advice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed"
        >
          Practical guides, expert packing tips, and local advice to make your
          next move across Hertfordshire as smooth as possible. Written by the
          team at Herts Man With A Van.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white font-medium"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            Expert Guides
          </span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            Local Knowledge
          </span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            Practical Tips
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
          >
            <a href="tel:07479645823">
              <Phone className="w-5 h-5 mr-2" strokeWidth={2.5} />
              07479 645823
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/50 bg-white/10 text-white hover:bg-white/20 text-base px-8 py-6 rounded-xl font-semibold shadow-none"
          >
            <a href="/contact">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
