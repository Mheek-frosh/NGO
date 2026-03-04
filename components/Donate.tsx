"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const amounts = [25, 50, 100, 250, 500];

export default function Donate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="donate" className="relative overflow-hidden bg-forest-800 py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-forest-700/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-semibold uppercase tracking-wider text-forest-300"
          >
            Support our mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Your donation creates real impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-cream/90"
          >
            98% of every dollar goes directly to programs. Give once or monthly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-10 rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
          >
            <p className="text-sm font-medium text-forest-300">Choose an amount</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {amounts.map((amount, i) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3 font-display text-lg font-bold text-white transition hover:border-coral hover:bg-coral/20"
                >
                  ${amount}
                </motion.button>
              ))}
            </div>
            <div className="mt-6">
              <label htmlFor="custom-amount" className="sr-only">
                Custom amount
              </label>
              <input
                id="custom-amount"
                type="number"
                placeholder="Other amount ($)"
                className="w-full max-w-xs mx-auto rounded-xl border-2 border-white/30 bg-white/5 px-4 py-3 text-center text-white placeholder:text-white/50 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full max-w-sm mx-auto rounded-full bg-coral px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-coral/90"
            >
              Donate now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
