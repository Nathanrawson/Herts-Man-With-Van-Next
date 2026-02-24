"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Recycle,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Location } from "@/lib/locations";

const LocationMap = dynamic(
  () => import("@/components/sections/LocationMap"),
  { ssr: false }
);

interface LocationContentProps {
  location: Location;
  otherLocations: Location[];
}

const services = [
  {
    title: "Removals Service",
    description:
      "Fast, insured removals for homes and businesses, including same-day service and single-item pickups. Reliable, efficient, and tailored to your move.",
    image: "/assets/images/removals-van.jpg",
    imageAlt: "Professional removals van loaded and ready",
  },
  {
    title: "Packing",
    description:
      "Professional packing services using high-quality materials to ensure your items are protected throughout the move.",
    image: "/assets/images/packing-service.webp",
    imageAlt: "Professional packing service",
  },
  {
    title: "Storage",
    description:
      "Secure short- or long-term storage options designed to keep your belongings safe and easily accessible whenever needed.",
    image: "/assets/images/storage-service.webp",
    imageAlt: "Secure storage facilities",
  },
];

const highlights = [
  "Fully insured services",
  "Road Haulage Association member",
  "UK House Clearance Association member",
  "Same-day service available",
  "No job too small",
  "7 days a week, 08:00–18:00",
];

export default function LocationContent({
  location,
  otherLocations,
}: LocationContentProps) {
  return (
    <>
      {/* About section — image + text side by side like homepage */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/images/about-furniture.jpg"
                  alt={`Professional removals in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              {location.distanceFromBase === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl hidden md:block"
                >
                  <p className="text-3xl font-heading font-bold">8+</p>
                  <p className="text-sm text-white/80">Years Experience</p>
                </motion.div>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
                Removals in {location.name}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                Man With A Van in {location.name}
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {location.description}
              </p>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Postcodes & landmarks */}
      <section className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
                Areas We Cover
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                Covering All of {location.name}
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                We cover every postcode and neighbourhood in{" "}
                {location.name}. Whether you&apos;re near the town centre or
                on the outskirts, we&apos;ll be there on time, every time.
              </p>

              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-3">
                    Postcodes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {location.postcodeAreas.map((pc) => (
                      <span
                        key={pc}
                        className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                      >
                        {pc}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-3">
                    Local Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {location.landmarks.map((lm) => (
                      <span
                        key={lm}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-muted-foreground border border-border"
                      >
                        <MapPin className="w-3 h-3 text-primary" />
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[480px]"
            >
              <LocationMap
                lat={location.coordinates.lat}
                lng={location.coordinates.lng}
                name={location.name}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services — reuse same card style as homepage */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
              What We Offer in {location.name}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From single-item pickups to full house moves, we provide
              comprehensive removals solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 h-full bg-white rounded-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                      asChild
                    >
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Waste Disposal Info */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Getting Rid of Unwanted Items
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
              Waste Disposal in {location.name}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Don&apos;t want to take everything with you? Your local council
              offers affordable furniture and bulky waste collections — much
              cheaper than private clearance companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bulky waste collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg shadow-black/5 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Trash2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Bulky Waste Collection
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {location.councilWaste.bulkyWasteInfo}
                  </p>
                  <a
                    href={location.councilWaste.councilWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                  >
                    Visit {location.councilWaste.councilName}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recycling centre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="h-full border-0 shadow-lg shadow-black/5 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {location.councilWaste.recyclingCentre}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {location.councilWaste.recyclingCentreAddress}
                  </p>
                  <a
                    href="https://www.hertfordshire.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                  >
                    Hertfordshire County Council
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tip + blog link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 bg-[#f8fafc] rounded-2xl p-6 md:p-8 border border-border text-center"
          >
            <p className="text-muted-foreground text-base">
              <strong className="text-foreground">Tip:</strong> We don&apos;t
              offer waste disposal ourselves, but we always recommend council
              services as they&apos;re far cheaper than private options. For more
              tips on getting rid of unwanted items, charity donations, and free
              alternatives, read our{" "}
              <Link
                href="/blog/how-to-get-rid-of-unwanted-furniture-in-hertfordshire"
                className="text-primary font-semibold hover:underline"
              >
                complete guide to furniture disposal in Hertfordshire
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Hertfordshire Coverage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
              We Also Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherLocations.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={`/removals/${loc.slug}`}
                  className="flex items-center gap-2 p-4 rounded-xl border border-border bg-white hover:bg-primary/5 hover:border-primary/30 transition-all group"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                    {loc.name}
                  </span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
