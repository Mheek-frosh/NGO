"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background: video (optional) + image fallback with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80"
          alt="Community and nature"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        {/* Uncomment and set src to your video for a video hero (e.g. MP4 from Pexels/your CDN) */}
        {/* <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" src="/hero-video.mp4" /> */}
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            Empowering communities since 2015
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Change starts
            <br />
            <span className="text-forest-300">with you.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
          >
            We work with local communities to protect the environment, fight
            poverty, and build a sustainable future. Your support creates real
            impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#donate"
              className="rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-coral/90 hover:shadow-2xl"
            >
              Donate now
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
