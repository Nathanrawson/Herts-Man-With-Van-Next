"use client";

import { motion } from "framer-motion";
import { Clock, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Well-Established",
    description: "Trusted since 2017 with hundreds of happy customers",
  },
  {
    icon: Zap,
    title: "We Are Specialists",
    description: "Expert removals for homes, offices, and single items",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Urgent move? We offer fast same-day removals",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 py-12 md:py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-md shadow-black/5 border border-border/60 p-6 md:p-8 flex flex-col items-center text-center gap-3 transition-shadow hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center ring-4 ring-brand-gold/5">
                <feature.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
