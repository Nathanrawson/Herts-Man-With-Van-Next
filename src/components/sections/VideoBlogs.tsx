"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Hertfordshire Removals",
    src: "https://player.vimeo.com/video/973078253?h=0732dc0f55",
  },
  {
    title: "Moving Large Furniture",
    src: "https://player.vimeo.com/video/973109689?h=39f0a33cf0",
  },
  {
    title: "Loading The Van",
    src: "https://player.vimeo.com/video/973140682?h=4e71e2371c",
  },
];

export default function VideoBlogs() {
  return (
    <section className="py-24 md:py-32 bg-white">
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
            Watch &amp; Learn
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Latest Videos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Take a look at some recent removals we&apos;ve undertaken along with
            tips, tricks and handy hints to help your move go as smoothly as
            possible.
          </p>
        </motion.div>

        {/* Simple three columns — just the embeds, nothing else */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 text-center">
                {video.title}
              </h3>
              <iframe
                title={video.title}
                src={video.src}
                width="100%"
                height="600"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
