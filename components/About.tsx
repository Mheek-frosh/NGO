"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "50K+", label: "Lives impacted" },
  { value: "12", label: "Countries" },
  { value: "200+", label: "Projects" },
  { value: "98%", label: "Funds to programs" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative bg-cream py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Team and community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-forest-800 px-8 py-6 text-white shadow-xl"
            >
              <span className="font-display text-4xl font-bold">15+</span>
              <p className="text-sm text-forest-300">Years of impact</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-sm font-semibold uppercase tracking-wider text-forest-700"
            >
              About us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-4xl"
            >
              We believe in people and the planet.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-forest-900/90"
            >
              Hope in Action was founded on a simple idea: lasting change happens
              when communities lead. We partner with local organizations to
              deliver clean water, education, healthcare, and environmental
              protection where it matters most.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-forest-900/90"
            >
              Our transparent, community-driven approach ensures your support
              goes directly to programs that transform lives and ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl font-bold text-forest-700 sm:text-3xl">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-sm text-forest-800/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
