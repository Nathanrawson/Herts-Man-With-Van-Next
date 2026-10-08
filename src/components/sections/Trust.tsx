"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Our Promise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
              A Moving Service Built on{" "}
              <span className="text-brand-gold">Trust</span> and{" "}
              <span className="text-brand-gold">Experience</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-white/70 text-lg sm:text-xl leading-relaxed"
          >
            Herts Man With A Van are experts at helping people move with ease. As
            an owner-operated business, we bring a personal touch to every job,
            ensuring your belongings are treated with the utmost care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-white/70 text-lg sm:text-xl leading-relaxed"
          >
            We understand the challenges of moving, which is why we offer flexible
            scheduling, same-day services, and free, no-obligation quotes. Our
            mission is simple: to provide a reliable, efficient, and stress-free
            moving experience. Let us show you why so many customers trust us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-base"
            >
              <a href="#contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-6 rounded-xl text-base"
            >
              <a href="tel:07479645823">Call 07479 645823</a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "500+", label: "Happy Customers" },
              { value: "100%", label: "Fully Insured" },
              { value: "5★", label: "Google Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
