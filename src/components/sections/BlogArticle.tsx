"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Phone,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-posts";
import { formatBlogDate, blogPosts } from "@/lib/blog-posts";

interface BlogArticleProps {
  post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Get related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Article Hero */}
      <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/60 to-[#111111]/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-48 md:pt-56 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/90 text-white border-0 text-xs font-semibold">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
              <span className="text-white/60 text-sm">
                {formatBlogDate(post.date)}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1 text-white/60 text-sm">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-10"
            >
              {section.heading && (
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-snug">
                  {section.heading}
                </h2>
              )}
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}

          {/* CTA within article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#f8fafc] rounded-2xl p-8 md:p-12 border border-border"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Need Help With Your Move?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              We&apos;re a trusted, fully insured removals company based in
              Welwyn Garden City, serving all of Hertfordshire. Call us for a
              free, no-obligation quote.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
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
                className="text-base px-8 py-6 rounded-xl"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Prev / Next navigation */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-start gap-3 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Previous
                  </span>
                  <p className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-sm leading-snug mt-1">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-start gap-3 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-right sm:flex-row-reverse"
              >
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Next
                  </span>
                  <p className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-sm leading-snug mt-1">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
              Keep Reading
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
              More Helpful Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((related, i) => (
              <motion.div
                key={related.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge
                      variant="secondary"
                      className="text-xs mb-2"
                    >
                      {related.category}
                    </Badge>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-sm leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {related.readTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
