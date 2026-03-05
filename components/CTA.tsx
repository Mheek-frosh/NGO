"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-forest-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2913&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900/90 to-forest-950" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-coral/20 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full glass border-white/20 mb-8 shadow-2xl shadow-coral/20"
                >
                    <HeartHandshake className="h-10 w-10 text-coral" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6"
                >
                    Ready to make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-forest-400">real difference?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 text-xl leading-8 text-cream/80 max-w-2xl mx-auto font-body"
                >
                    Every dollar contributed goes directly toward community-led environmental and humanitarian initiatives. Together, we can build a sustainable future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/donate"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-coral px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-coral/30 w-full sm:w-auto"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                        <span className="relative flex items-center gap-2">
                            Donate Now
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-white border border-white/20 backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
                    >
                        Become a Partner
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
