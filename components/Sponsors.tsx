"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// We'll use crisp, monochromatic logos for a sleek, premium look.
const sponsors = [
    { name: "Acme Corp", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "GlobalTech", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "EcoSolutions", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "FutureFund", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
    { name: "TerraFirma", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_without_text.svg" },
    { name: "Oceanic", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
];

export default function Sponsors() {
    return (
        <section className="py-20 bg-cream border-b border-forest-900/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-forest-500">
                        Trusted by global partners
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group">
                    {/* Gradient masks for smooth fade out at edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex whitespace-nowrap gap-16 lg:gap-24 items-center shrink-0 pr-16 lg:pr-24"
                        animate={{ x: [0, -1035] }} // Adjust duration based on width. This runs indefinitely.
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
                            <div
                                key={`${sponsor.name}-${i}`}
                                className="relative h-10 w-32 sm:h-12 sm:w-40 opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 flex items-center justify-center mix-blend-multiply cursor-pointer"
                            >
                                <Image
                                    src={sponsor.url}
                                    alt={sponsor.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
