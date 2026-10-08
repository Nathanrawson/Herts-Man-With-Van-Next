"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Location } from "@/lib/locations";

interface LocationCTAProps {
  location: Location;
}

export default function LocationCTA({ location }: LocationCTAProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/van-driveway.webp"
        alt={`Book a removal in ${location.name}`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-[#5a85a8]/90" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Move in {location.name}?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation quote for your removal in{" "}
            {location.name}. Call now or fill in our quick form and
            we&apos;ll get back to you fast.
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
            <a href="tel:07479645823">
              <Phone className="w-5 h-5 mr-2" />
              07479 645823
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
