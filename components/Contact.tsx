"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-sand py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-forest-700">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-4xl">
              We&apos;d love to hear from you
            </h2>
            <p className="mt-4 text-lg text-forest-900/80">
              Whether you want to volunteer, partner with us, or simply say
              hello—reach out. We read every message.
            </p>
            <div className="mt-8 space-y-4">
              <p className="font-medium text-forest-900">contact@hopeinaction.org</p>
              <p className="font-medium text-forest-900">+1 (555) 123-4567</p>
              <p className="text-forest-800/80">
                123 Community Way, Suite 100<br />
                City, State 12345
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white p-8 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-900">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-forest-300 bg-cream/50 px-4 py-3 text-forest-950 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-900">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-forest-300 bg-cream/50 px-4 py-3 text-forest-950 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-forest-300 bg-cream/50 px-4 py-3 text-forest-950 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                  placeholder="How can we help?"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-forest-800 px-6 py-4 font-semibold text-white transition hover:bg-forest-900"
              >
                Send message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
