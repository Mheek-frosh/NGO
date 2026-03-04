"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const causes = [
  {
    title: "Environment",
    description:
      "Reforestation, clean oceans, and sustainable agriculture to protect our planet.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    icon: "🌱",
  },
  {
    title: "Education",
    description:
      "Schools, scholarships, and teacher training so every child can learn.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    icon: "📚",
  },
  {
    title: "Health & Water",
    description:
      "Clean water, clinics, and nutrition programs for thriving communities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    icon: "💧",
  },
  {
    title: "Livelihood",
    description:
      "Skills training and microloans to help families build sustainable income.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    icon: "🤝",
  },
];

export default function Causes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="causes" className="bg-sand py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-forest-700">
            Our causes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-4xl">
            Where we focus our impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-900/80">
            We work across four pillars to create holistic, lasting change in
            the communities we serve.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, i) => (
            <motion.article
              key={cause.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-3xl">{cause.icon}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {cause.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90">{cause.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
