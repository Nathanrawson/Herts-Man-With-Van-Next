"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-[#5a85a8]" />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Make Moving Effortless
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get expert help from a trusted removals company that handles your move
            with care. Call now to speak directly with someone who can get you
            moving today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-7 rounded-xl text-lg font-bold shadow-lg"
          >
            <a href="tel:01438500156">
              <Phone className="w-5 h-5 mr-2" />
              01438 500156
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg"
          >
            <Link href="/contact">
              <FileText className="w-5 h-5 mr-2" />
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
