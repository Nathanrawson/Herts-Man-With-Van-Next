"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorageHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-[140px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/storage-hero-bg.jpg"
        alt="Moving men moving items into secure storage"
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
            Packing &amp; Storage Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
        >
          Secure Packing &amp; Storage Services in{" "}
          <span className="text-primary">Welwyn Garden City</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed"
        >
          Herts Man With A Van provides trusted packing and storage services for
          customers in Welwyn Garden City and across Hertfordshire. We offer
          secure, flexible storage solutions and expert packing to keep your
          belongings safe, whether you need short-term or long-term storage
          options tailored to your move.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-lg text-white max-w-2xl mx-auto"
        >
          Reach out for a free, no-obligation quote.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white font-medium"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            Well-Established
          </span>
          <span className="w-1 h-1 rounded-full bg-white/50 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            We Are Specialists
          </span>
          <span className="w-1 h-1 rounded-full bg-white/50 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            Same-Day Service
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
          >
            <a href="tel:01438500156">
              <Phone className="w-5 h-5 mr-2" strokeWidth={2.5} />
              01438 500156
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/50 bg-white/10 text-white hover:bg-white/20 text-base px-8 py-6 rounded-xl font-semibold shadow-none"
          >
            <a href="/contact">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
            </a>
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
