"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  User,
  Truck,
  Home,
  Package,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Shield,
    text: "Fully insured services for complete peace of mind.",
  },
  {
    icon: User,
    text: "Owner-operated business for a personal and cost-effective approach.",
  },
  {
    icon: Truck,
    text: "Clean and spacious van to safely transport your items.",
  },
  {
    icon: Home,
    text: "Specialists in house and commercial removals.",
  },
  {
    icon: Package,
    text: "Protective coverings are provided at no extra cost.",
  },
  {
    icon: CalendarCheck,
    text: "Flexible scheduling to fit your busy life.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Why Customers Trust Us With Their Move
            </h2>
            <div className="mt-8 space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mt-0.5">
                    <reason.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <p className="text-foreground text-base leading-relaxed pt-1.5">
                    {reason.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-base"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/washing-machine.webp"
                  alt="Moving appliances safely"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/armchair.webp"
                  alt="Careful furniture handling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/van-driveway.webp"
                  alt="Herts Man With A Van on location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
