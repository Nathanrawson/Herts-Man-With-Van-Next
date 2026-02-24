"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            What We Offer
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From single-item pickups to full house moves, we provide comprehensive
            removals solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Service cards */}
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
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
