"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  About: [
    { label: "Our Story", href: "/about" },
    { label: "Team", href: "/about" },
    { label: "Impact", href: "/causes" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/contact" },
    { label: "Partner", href: "/contact" },
  ],
  Connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Programs", href: "/programs" },
    { label: "Social", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-500/50 to-transparent" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-forest-900/40 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="font-display text-3xl font-bold tracking-tight text-white mb-6 inline-block">
              Hope<span className="text-coral">InAction</span>
            </Link>
            <p className="max-w-md text-base text-cream/70 leading-relaxed mb-8">
              Building stronger communities and a healthier planet, one step at a
              time. Join us in creating lasting change and empowering the next generation.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@hopeinaction.org" className="flex items-center gap-3 text-cream/80 hover:text-coral transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@hopeinaction.org</span>
              </a>
              <div className="flex items-center gap-3 text-cream/80">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin className="w-5 h-5" />
                <span>123 Impact Ave, NY 10001</span>
              </div>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <h4 className="font-display text-lg font-semibold tracking-wide text-white mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-base text-cream/70 transition-all hover:text-white hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
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
          transition={{ delay: 0.5 }}
          className="mt-20 border-t border-forest-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} Hope in Action. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-cream/50">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-coral animate-pulse-slow" fill="currentColor" />
            <span>for a better world</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
