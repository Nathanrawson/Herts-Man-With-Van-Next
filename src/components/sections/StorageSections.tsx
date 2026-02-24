"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Package,
  Warehouse,
  Truck,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ─────────────────────── Section: Secure & Flexible Storage ─────────────────────── */

export function StorageSolutions() {
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
              Storage Solutions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Secure &amp; Flexible Storage Solutions
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Our packing and storage service offers secure, clean, and flexible
              storage options. Whether you need short-term or long-term storage,
              we provide spacious units suitable for furniture, boxes, and
              valuables.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our facilities are monitored to ensure the safety of your
              belongings at all times. Tailored storage plans allow you to store
              items for as long as needed, making moving or decluttering
              stress-free and convenient.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Secure, monitored facilities",
                "Short &amp; long-term options",
                "Spacious, clean units",
                "Flexible storage plans",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span
                    className="text-foreground font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/assets/images/storage-units.jpg"
                alt="Warehouse building with self-storage units"
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
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl hidden md:block"
            >
              <Warehouse className="w-8 h-8 mb-1" />
              <p className="text-sm text-white/80">Secure Storage</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Section: Professional Packing Services ─────────────────────── */

export function PackingServices() {
  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/assets/images/packing-truck.jpg"
                alt="A moving truck filled with various luggage and boxes stacked in the back"
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
              className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-5 shadow-xl hidden md:block"
            >
              <Package className="w-8 h-8 mb-1" />
              <p className="text-sm text-white/80">Expert Packing</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Packing Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Professional Packing Services Included
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Proper packing is essential for protecting your items during
              storage. Our expert team uses high-quality materials and techniques
              to carefully pack everything from fragile items to bulky furniture.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              This service is included with our packing and storage solutions,
              ensuring your possessions are well-protected throughout the
              duration of storage. With professional packing, you can rest
              assured that your belongings are safe, organised, and easily
              accessible whenever required.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "High-quality materials",
                "Fragile item specialists",
                "Included with storage",
                "Organised & accessible",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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

/* ─────────────────────── Section: Integrated Moving, Packing & Storage ─────────────────────── */

export function IntegratedService() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
            Complete Service
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Integrated Moving, Packing &amp; Storage
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Combining our removals, packing, and storage services offers a
            seamless moving experience. After expertly packing your belongings,
            we transport and securely store your belongings until you need
            delivery. This integrated approach saves time and reduces stress,
            allowing you to manage your move at your own pace.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Our professional team handles every step with care and efficiency,
            making your relocation smooth, flexible, and straightforward.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Package,
              title: "Expert Packing",
              description:
                "High-quality materials and professional techniques to protect every item.",
            },
            {
              icon: Warehouse,
              title: "Secure Storage",
              description:
                "Clean, monitored facilities for short-term or long-term storage needs.",
            },
            {
              icon: Truck,
              title: "Reliable Transport",
              description:
                "Insured removals from your door to our storage facility and back again.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="text-center border-0 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 h-full bg-[#f8fafc] rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
          >
            <Link href="/contact">
              Make An Enquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── Section: Storage Testimonials ─────────────────────── */

const testimonials = [
  {
    text: "We used the service to move out of a three bed house delivery to storage and Philip and his team were exceptional. Communication was great answering all my queries and they were on time, on budget and very careful with all of our belongings. Would definitely recommend! Many thanks guys!",
    name: "Debbie Coe",
    link: "https://maps.app.goo.gl/7qv4V3jS27jaF5Qj7",
  },
  {
    text: "Philip went above and beyond to help us with our move. He was professional, careful with all our belongings, and made the entire process stress-free. His storage facility was clean and secure. Highly recommend!",
    name: "Sarah M.",
    link: "https://maps.app.goo.gl/g2uHSMk12SEYGYHw5",
  },
  {
    text: "Fantastic service from start to finish. Philip helped us pack and store our furniture while we renovated. Everything was returned in perfect condition. Great communication throughout. 5 stars!",
    name: "James T.",
    link: "https://maps.app.goo.gl/g2uHSMk12SEYGYHw5",
  },
];

export function StorageTestimonials() {
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

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="border-0 shadow-lg shadow-black/5 h-full bg-white rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary/20 mb-4 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-semibold hover:text-primary transition-colors"
                    >
                      {testimonial.name}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Google Review
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Section: Final CTA ─────────────────────── */

export function StorageCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Simplify Your Storage Needs
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Take control of your move with a trusted packing &amp; storage
              service. Call now to book secure storage for your belongings.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-xl shadow-lg shadow-primary/25 font-bold"
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
                className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-10 py-7 rounded-xl"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:ml-auto">
              <Image
                src="/assets/images/storage-boxes.jpg"
                alt="Covered items and boxes packed tightly for secure storage"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
