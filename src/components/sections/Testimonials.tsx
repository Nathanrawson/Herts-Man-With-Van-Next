"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jamila T Jeffers",
    initials: "JJ",
    rating: 5,
    text: "Thank you so much Phil - Herts Man with a van. You and your team (Dan and Dean) made this move so easy to manage. I would definitely use your services again and will be recommending you to others.",
  },
  {
    name: "Sarah M",
    initials: "SM",
    rating: 5,
    text: "Fantastic service from start to finish. Phil was punctual, professional, and handled all our belongings with great care. Highly recommend for anyone needing a reliable removals service in Hertfordshire.",
  },
  {
    name: "David R",
    initials: "DR",
    rating: 5,
    text: "Used Herts Man With A Van for our office move and couldn't be happier. Efficient, careful, and reasonably priced. Will definitely use again for future moves.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg shadow-black/5 p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-brand-gold text-brand-gold"
                      />
                    )
                  )}
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <Avatar className="w-12 h-12 bg-primary text-white">
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {testimonials[current].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading font-bold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
