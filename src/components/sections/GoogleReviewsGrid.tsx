"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Package } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { GooglePlaceData } from "@/lib/google-reviews";
import { GOOGLE_REVIEWS_URL } from "@/lib/google-reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-brand-gold text-brand-gold"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC04"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Each card has a unique rotation and vertical offset
 * to mimic boxes tumbling out of a moving van. On hover they
 * "settle" upright with a lift effect.
 */
const cardStyles: { rotate: number; y: number }[] = [
  { rotate: -2.5, y: 0 },
  { rotate: 1.8, y: 12 },
  { rotate: -1.2, y: 4 },
  { rotate: 2.2, y: 0 },
  { rotate: -1.8, y: 8 },
];

/* Decorative SVG illustrations for the bottom row gutters */
function ArmchairIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Armchair body */}
      <rect x="25" y="40" width="70" height="45" rx="8" className="fill-primary/8 stroke-primary/20" strokeWidth="1.5" />
      {/* Seat cushion */}
      <rect x="32" y="55" width="56" height="18" rx="5" className="fill-primary/12 stroke-primary/25" strokeWidth="1" />
      {/* Back cushion */}
      <rect x="35" y="38" width="50" height="20" rx="6" className="fill-primary/10 stroke-primary/20" strokeWidth="1" />
      {/* Left arm */}
      <rect x="20" y="45" width="12" height="35" rx="5" className="fill-primary/10 stroke-primary/20" strokeWidth="1.5" />
      {/* Right arm */}
      <rect x="88" y="45" width="12" height="35" rx="5" className="fill-primary/10 stroke-primary/20" strokeWidth="1.5" />
      {/* Legs */}
      <rect x="32" y="85" width="6" height="14" rx="2" className="fill-primary/15" />
      <rect x="82" y="85" width="6" height="14" rx="2" className="fill-primary/15" />
      {/* Stars / sparkle */}
      <circle cx="95" cy="30" r="2" className="fill-brand-gold/60" />
      <circle cx="105" cy="25" r="1.5" className="fill-brand-gold/40" />
      <circle cx="100" cy="35" r="1" className="fill-brand-gold/50" />
    </svg>
  );
}

function PianoIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Piano body */}
      <rect x="20" y="30" width="80" height="55" rx="4" className="fill-primary/8 stroke-primary/20" strokeWidth="1.5" />
      {/* Top lid (slightly open) */}
      <path d="M20 34 C20 30 24 27 28 27 L92 27 C96 27 100 30 100 34" className="stroke-primary/25" strokeWidth="1.5" fill="none" />
      <line x1="20" y1="30" x2="100" y2="27" className="stroke-primary/15" strokeWidth="1" />
      {/* White keys */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
        <rect key={k} x={26 + k * 7} y="60" width="6" height="22" rx="1" className="fill-white stroke-primary/20" strokeWidth="0.75" />
      ))}
      {/* Black keys */}
      {[0, 1, 3, 4, 5, 7, 8].map((k) => (
        <rect key={k} x={30 + k * 7} y="60" width="4" height="13" rx="1" className="fill-primary/30" />
      ))}
      {/* Legs */}
      <rect x="25" y="85" width="5" height="16" rx="1.5" className="fill-primary/15" />
      <rect x="90" y="85" width="5" height="16" rx="1.5" className="fill-primary/15" />
      {/* Pedals */}
      <rect x="52" y="98" width="4" height="3" rx="1" className="fill-primary/20" />
      <rect x="60" y="98" width="4" height="3" rx="1" className="fill-primary/20" />
      <rect x="68" y="98" width="4" height="3" rx="1" className="fill-primary/20" />
      {/* Music notes */}
      <circle cx="15" cy="22" r="2.5" className="fill-primary/20" />
      <line x1="17.5" y1="22" x2="17.5" y2="10" className="stroke-primary/20" strokeWidth="1.2" />
      <circle cx="108" cy="18" r="2" className="fill-primary/15" />
      <line x1="110" y1="18" x2="110" y2="8" className="stroke-primary/15" strokeWidth="1" />
    </svg>
  );
}

function ReviewCard({ review, i }: { review: GooglePlaceData["reviews"][number]; i: number }) {
  const style = cardStyles[i] || cardStyles[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateZ: style.rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: i * 0.12,
        type: "spring",
        stiffness: 100,
      }}
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="
          relative h-full rounded-2xl p-6
          bg-white border border-border/60
          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]
          transition-all duration-500 ease-out
          group-hover:shadow-[0_20px_40px_-12px_rgba(107,152,191,0.25)]
          group-hover:-translate-y-2
        "
        style={{
          transform: `rotate(${style.rotate}deg) translateY(${style.y}px)`,
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(0deg) translateY(-8px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `rotate(${style.rotate}deg) translateY(${style.y}px)`;
        }}
      >
        {/* Subtle tape strip across the top */}
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-16 h-3 bg-primary/15 rounded-sm" />

        {/* Review header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {review.profile_photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
              />
            ) : (
              <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                  {getInitials(review.author_name)}
                </AvatarFallback>
              </Avatar>
            )}
            <div>
              <p className="font-semibold text-foreground text-sm">
                {review.author_name}
              </p>
              <p className="text-xs text-muted-foreground">
                {review.relative_time_description}
              </p>
            </div>
          </div>
          <GoogleLogo />
        </div>

        {/* Stars */}
        <StarRating rating={review.rating} />

        {/* Review text – truncated with fade */}
        <div className="relative mt-3">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-5">
            {review.text}
          </p>
          {review.text.length > 200 && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function GoogleReviewsGrid({ data }: { data: GooglePlaceData }) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleLogo />
            <span className="text-muted-foreground font-medium text-sm tracking-wide uppercase">
              Google Reviews
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Rated {data.rating.toFixed(1)} Out of 5
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={Math.round(data.rating)} />
            <span className="text-muted-foreground text-sm">
              Based on {data.user_ratings_total} reviews
            </span>
          </div>
          <p className="mt-4 text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Package className="w-4 h-4" />
            Unpacking what our customers have to say
          </p>
        </motion.div>

        {/* Top row – 3 cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          style={{ perspective: "1200px" }}
        >
          {data.reviews.slice(0, 3).map((review, i) => (
            <ReviewCard key={`${review.author_name}-${review.publish_time}`} review={review} i={i} />
          ))}
        </div>

        {/* Bottom row – armchair | card | card | piano */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-8 lg:mt-6 items-center"
          style={{ perspective: "1200px" }}
        >
          {/* Left illustration – armchair (hidden on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-44 h-44 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <ArmchairIllustration />
            </div>
          </motion.div>

          {/* Two full-width review cards */}
          {data.reviews.slice(3, 5).map((review, i) => (
            <ReviewCard key={`${review.author_name}-${review.publish_time}`} review={review} i={i + 3} />
          ))}

          {/* Right illustration – piano (hidden on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-44 h-44 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <PianoIllustration />
            </div>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <Button
            asChild
            size="lg"
            className="rounded-xl px-8 py-6 text-base shadow-md hover:shadow-lg transition-shadow"
          >
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleLogo />
              <span className="ml-2">View All {data.user_ratings_total} Reviews</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl px-8 py-6 text-base"
          >
            <a
              href="https://g.page/r/CQ18emji1YUIEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleLogo />
              <span className="ml-2">Leave Us a Review</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
