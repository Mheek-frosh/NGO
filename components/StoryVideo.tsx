"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";

/**
 * StoryVideo Component
 * 
 * Renders a promotional video section with a thumbnail and a play button.
 * Clicking the play button opens a full-screen modal with an embedded YouTube video overlay.
 * Uses framer-motion for smooth entrance animations and layout shifts.
 */
export default function StoryVideo() {
    // State to track if the video modal is currently open
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest-800/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-white">Watch Our Story</span>
                        </div>

                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            See the impact <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-coral">unfold.</span>
                        </h2>

                        <p className="text-lg text-cream/70 font-body leading-relaxed mb-8 max-w-lg">
                            Through the eyes of the communities we serve, witness firsthand the transformative power of sustainable action and dedicated partnership.
                        </p>

                        {/* Optional Stats or Quote */}
                        <blockquote className="border-l-4 border-coral pl-6 italic text-cream/90 font-display text-xl">
                            "We didn't just rebuild the well; we rebuilt hope for the entire village."
                            <footer className="not-italic text-sm text-forest-400 font-body mt-2 font-semibold">— Sarah Jenkins, Field Director</footer>
                        </blockquote>
                    </motion.div>

                    {/* Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-forest-950/20 group cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop"
                            alt="Video Thumbnail"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            unoptimized
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-forest-950/40 group-hover:bg-forest-950/20 transition-colors duration-500" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative">
                                {/* Ping animation behind button */}
                                <div className="absolute inset-0 bg-coral rounded-full animate-ping opacity-60" />
                                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:bg-coral group-hover:border-coral transition-all duration-300">
                                    <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Video Modal (Dummy overlay playing a local/random video embed) */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/95 backdrop-blur-sm px-4 sm:px-12"
                    >
                        <button
                            onClick={() => setIsPlaying(false)}
                            className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Our Story"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
