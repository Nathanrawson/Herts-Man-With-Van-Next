"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const LocationMap = dynamic(
  () => import("@/components/sections/LocationMap"),
  { ssr: false }
);
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Phone,
  Shield,
  Truck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations } from "@/lib/locations";

export default function ServiceAreasContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="Removals across Hertfordshire"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/80 via-[#111111]/60 to-[#111111]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 md:pt-52 pb-20 md:pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              <MapPin className="w-4 h-4" />
              Service Areas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
          >
            Removals Across{" "}
            <span className="text-primary">Hertfordshire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Based in Welwyn Garden City, Herts Man With A Van provides fully
            insured removals services across Hertfordshire and beyond. Find your
            area below for local information and a free quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white/60"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              7 Days a Week
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-primary" />
              Same-Day Available
            </span>
          </motion.div>
        </div>
      </section>

      {/* Location cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Choose Your Area
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Click on your town to see our services, postcodes covered, local
              FAQs, and to get a free removal quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location, i) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/removals/${location.slug}`}
                  className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all h-full"
                >
                  <div className="h-40 w-full relative pointer-events-none overflow-hidden">
                    <LocationMap
                      lat={location.coordinates.lat}
                      lng={location.coordinates.lng}
                      name={location.name}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {location.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {location.postcodeAreas.join(", ")} postcodes
                    </p>
                    {location.distanceFromBase === 0 && (
                      <p className="mt-1.5 text-xs text-primary font-semibold flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Our Home Base
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional areas note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-accent/50 rounded-2xl p-8 border border-border"
          >
            <h3 className="font-heading text-xl font-bold text-foreground">
              Don&apos;t See Your Area?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We cover all of Hertfordshire and regularly travel into
              Bedfordshire, Buckinghamshire, Cambridgeshire, Essex, and London.
              Give us a call and we&apos;ll happily provide a quote for your
              location.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl"
              >
                <a href="tel:07479645823">
                  <Phone className="w-5 h-5 mr-2" />
                  07479 645823
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-xl"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
