"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

const causes = [
    {
        id: 1,
        title: "Clean Water for Mwanga",
        area: "Tanzania",
        description: "Build 5 solar-powered boreholes to provide clean drinking water to over 10,000 residents in rural Mwanga.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
        raised: 25400,
        goal: 40000,
        urgent: true,
    },
    {
        id: 2,
        title: "Project Learn & Lead",
        area: "Cambodia",
        description: "Equip recently built primary schools with computers, books, and trained teachers to give kids a brighter future.",
        image: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?w=800&q=80",
        raised: 12000,
        goal: 50000,
        urgent: false,
    },
    {
        id: 3,
        title: "Reforest the Amazon",
        area: "Brazil",
        description: "Planting native trees to restore sections of the Amazon rainforest devastated by illegal logging operations.",
        image: "https://images.unsplash.com/photo-1518182170546-076616fdcbca?w=800&q=80",
        raised: 89000,
        goal: 100000,
        urgent: true,
    },
];

export default function FeaturedCauses() {
    return (
        <section className="py-24 lg:py-32 bg-forest-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-100 rounded-l-[100px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-forest-900/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-forest-900">Urgent Needs</span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-forest-950 tracking-tight">
                            Featured campaigns. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-coral">Make an impact today.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/programs"
                            className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-coral transition-colors group"
                        >
                            View all programs
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {causes.map((cause, index) => {
                        const progress = (cause.raised / cause.goal) * 100;

                        return (
                            <motion.div
                                key={cause.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-forest-950/5 border border-forest-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Image Header */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={cause.image}
                                        alt={cause.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        unoptimized
                                    />
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {cause.urgent && (
                                            <div className="inline-flex items-center gap-1.5 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                <HeartPulse className="w-3.5 h-3.5" />
                                                Urgent
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-forest-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                        {cause.area}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-display font-bold text-2xl text-forest-950 mb-3 group-hover:text-forest-600 transition-colors">
                                        {cause.title}
                                    </h3>
                                    <p className="text-forest-800/70 text-sm leading-relaxed mb-8 flex-1">
                                        {cause.description}
                                    </p>

                                    {/* Progress Section */}
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-end mb-2">
                                            <div className="font-display">
                                                <span className="text-2xl font-bold text-forest-950">${cause.raised.toLocaleString()}</span>
                                                <span className="text-sm font-medium text-forest-800/60 ml-1">raised</span>
                                            </div>
                                            <div className="text-sm font-semibold text-forest-800/60">
                                                Goal: ${cause.goal.toLocaleString()}
                                            </div>
                                        </div>

                                        {/* Progress Bar Container */}
                                        <div className="h-3 w-full bg-forest-100 rounded-full overflow-hidden mb-6">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                className="h-full bg-gradient-to-r from-coral to-amber-500 rounded-full relative"
                                            />
                                        </div>

                                        <Link
                                            href="/donate"
                                            className="block w-full text-center bg-forest-950 text-white font-semibold py-4 rounded-xl hover:bg-forest-900 hover:shadow-lg transition-all"
                                        >
                                            Donate Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
