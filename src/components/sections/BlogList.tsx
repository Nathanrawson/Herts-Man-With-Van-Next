"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";

export default function BlogList() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
            Latest Articles
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
            Helpful Advice for Your Move
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From packing tips to council waste services, our guides are written
            to help you have the smoothest move possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="group overflow-hidden border-0 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 h-full bg-white rounded-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary/90 text-white border-0 text-xs font-semibold">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span>{formatBlogDate(post.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center text-primary font-semibold text-sm group/link">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
