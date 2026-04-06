"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Leaf, Award, Globe, Users } from "lucide-react";

// Pre-defined list of important milestone events in the NGO's history
const timelineEvents = [
    {
        year: "2011",
        title: "The Seed is Planted",
        description: "Hope in Action was founded by a small group of passionate environmentalists and humanitarian workers in New York.",
        icon: Leaf,
        color: "bg-forest-600",
    },
    {
        year: "2015",
        title: "Global Expansion",
        description: "Expanded operations to 5 countries, launching our flagship 'Clean Water for All' initiative and reaching 10,000 lives.",
        icon: Globe,
        color: "bg-blue-500",
    },
    {
        year: "2020",
        title: "A Community of Millions",
        description: "Reached our milestone of 1 million trees planted and over 500,000 active volunteers worldwide.",
        icon: Users,
        color: "bg-coral",
    },
    {
        year: "2026",
        title: "Award-Winning Impact",
        description: "Recognized by the UN for outstanding contributions to sustainable development goals (SDGs). Looking ahead to the next decade.",
        icon: Award,
        color: "bg-amber-500",
    },
];

/**
 * Timeline Component
 * 
 * Displays a vertical scroll-animated timeline of major organizational milestones.
 * Includes a dynamic progress bar that fills up as the user scrolls down the page.
 */
export default function Timeline() {
    // Reference to the timeline container to track scrolling progress
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // Apply spring physics to smooth out the scroll progress line animation
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 lg:py-32 bg-cream relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-forest-900/10 mb-6 shadow-sm"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-900">
                            Our Journey
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-forest-950 mb-6"
                    >
                        Who we've grown <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-coral">into.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-forest-900/80 font-body max-w-2xl mx-auto"
                    >
                        From a small grassroots campaign to a global network of change-makers. Here is our story of enduring impact.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Progress Line Background */}
                    <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-1 bg-forest-200 -translate-x-1/2 rounded-full hidden sm:block" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-1 origin-top bg-gradient-to-b from-forest-500 to-coral hidden sm:block -translate-x-1/2 rounded-full z-0"
                        style={{ scaleY: springProgress }}
                    />

                    <div className="space-y-16">
                        {timelineEvents.map((event, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={event.year} className="relative flex items-center justify-between flex-col sm:flex-row gap-8 sm:gap-0">

                                    {/* Timeline Dot (Mobile: left aligned, Desktop: center) */}
                                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-cream ${event.color}`}
                                        >
                                            <event.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Desktop Content Left */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-full sm:w-5/12 ml-24 sm:ml-0 ${isEven ? 'sm:text-right sm:pr-12' : 'sm:order-2 sm:pl-12'}`}
                                    >
                                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-forest-50 hover:shadow-2xl transition-shadow relative overflow-hidden group">
                                            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-2 h-full ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                            <span className="font-display font-bold text-5xl text-forest-200 mb-2 block group-hover:text-forest-300 transition-colors">
                                                {event.year}
                                            </span>
                                            <h3 className="font-display font-bold text-2xl text-forest-950 mb-3 relative z-10">
                                                {event.title}
                                            </h3>
                                            <p className="text-forest-900/70 text-base leading-relaxed relative z-10">
                                                {event.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Empty space for desktop zig-zag layout */}
                                    <div className="hidden sm:block sm:w-5/12" />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
