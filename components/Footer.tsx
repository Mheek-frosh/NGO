"use client";

import { motion } from "framer-motion";

const footerLinks = {
  About: [
    { label: "Our Story", href: "#about" },
    { label: "Team", href: "#about" },
    { label: "Impact", href: "#causes" },
  ],
  "Get Involved": [
    { label: "Donate", href: "#donate" },
    { label: "Volunteer", href: "#contact" },
    { label: "Partner", href: "#contact" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "Newsletter", href: "#contact" },
    { label: "Social", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-bold">Hope in Action</h3>
            <p className="mt-4 max-w-sm text-sm text-cream/80">
              Building stronger communities and a healthier planet, one step at a
              time. Join us in creating lasting change.
            </p>
          </motion.div>
          {Object.entries(footerLinks).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-forest-400">
                {title}
              </h4>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-cream/80 transition hover:text-cream"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-forest-800 pt-8 text-center text-sm text-cream/60"
        >
          © {new Date().getFullYear()} Hope in Action. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
