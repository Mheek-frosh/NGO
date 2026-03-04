"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    title: "Green Futures",
    tagline: "Reforestation & climate action",
    description:
      "Planting trees, restoring ecosystems, and training local stewards to protect biodiversity.",
    color: "from-forest-800 to-forest-700",
  },
  {
    title: "Water for All",
    tagline: "Clean water & sanitation",
    description:
      "Wells, filtration systems, and hygiene education so communities have safe, sustainable water.",
    color: "from-forest-700 to-forest-600",
  },
  {
    title: "Learn & Lead",
    tagline: "Education & leadership",
    description:
      "Schools, teacher training, and youth programs that build the next generation of leaders.",
    color: "from-forest-600 to-forest-500",
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="programs" className="bg-forest-950 py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-forest-400">
            Our programs
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            How we create change
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/80">
            Evidence-based programs designed with communities, for communities.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition hover:bg-white/10 lg:flex-row"
            >
              <div
                className={`h-2 w-full bg-gradient-to-r ${program.color} lg:h-auto lg:w-1 lg:min-h-[180px]`}
              />
              <div className="flex-1 p-8 lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest-400">
                  {program.tagline}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="mt-4 text-cream/90">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
