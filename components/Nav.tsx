"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/causes", label: "Causes" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className={`font-display text-2xl font-bold tracking-tight z-50 transition-colors ${scrolled ? "text-forest-950" : "text-white"}`}>
          Hope<span className="text-coral">InAction</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-all relative group ${scrolled
                      ? isActive ? "text-forest-700 font-semibold" : "text-forest-950/70 hover:text-forest-900"
                      : isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${scrolled ? "bg-forest-600" : "bg-white"
                    } ${isActive ? "scale-x-100" : ""}`} />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/donate"
              className={`group flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all shadow-lg hover:shadow-xl ${scrolled
                  ? "bg-forest-950 text-white hover:bg-forest-900"
                  : "bg-white text-forest-950 hover:bg-white/90"
                }`}
            >
              Donate
              <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${scrolled ? "text-coral" : "text-coral"}`} />
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-center p-2 rounded-full md:hidden z-50 transition-colors ${open ? "text-forest-950 bg-white" : scrolled ? "text-forest-950" : "text-white"
            }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-3xl md:hidden overflow-hidden flex flex-col pt-24 pb-8 px-6"
          >
            <ul className="flex flex-col gap-6 text-center">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-3xl font-display font-medium ${pathname === link.href ? "text-forest-700" : "text-forest-950"}`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-forest-900 w-full max-w-xs mx-auto"
                >
                  Donate Now
                  <Heart className="w-5 h-5 text-coral" fill="currentColor" />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
