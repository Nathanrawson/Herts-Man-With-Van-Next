"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Founded in 2017",
  "Fully insured services",
  "HGV Driver Qualified",
  "Goods In Transit insurance",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
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
                alt="Professional furniture removals by Herts Man With A Van"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-gold-foreground rounded-2xl p-5 shadow-xl hidden md:block"
            >
              <p className="text-3xl font-heading font-bold">8+</p>
              <p className="text-sm text-white/80">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              About Herts Man With A Van
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Founded in 2017, Herts Man With A Van provides fast, fully insured,
              and reliable transport services for homes and businesses. Whether
              it&apos;s house removals, office moves, or same-day deliveries, we
              handle it all with care and efficiency.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our clean, spacious van is perfect for everything from single items
              to full loads. With stress-free service and free, no-obligation
              quotes, we&apos;re here to make your move simple and smooth, whatever
              the size of the job.
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
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
