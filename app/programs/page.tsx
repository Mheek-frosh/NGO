"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Droplet, BookOpen } from "lucide-react";

const programs = [
    {
        title: "Green Futures",
        tagline: "Reforestation & Climate Action",
        description: "We are planting millions of trees, restoring critical ecosystems, and training local stewards to protect biodiversity. Our approach ensures sustainable agroforestry that benefits both the planet and local economies.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
        icon: Leaf,
        color: "from-forest-500 to-forest-700",
    },
    {
        title: "Water for All",
        tagline: "Clean Water & Sanitation",
        description: "Access to clean water is a fundamental human right. We build sustainable wells, install advanced filtration systems, and provide comprehensive hygiene education so communities can thrive without the burden of water poverty.",
        image: "https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?w=1200&q=80",
        icon: Droplet,
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "Learn & Lead",
        tagline: "Education & Leadership",
        description: "Empowering the next generation. We construct schools in remote areas, provide extensive teacher training, and facilitate youth leadership programs to break the cycle of poverty through education.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
        icon: BookOpen,
        color: "from-amber-400 to-amber-600",
    },
];

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-forest-950 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-800/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white">
                            Global Programs
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display text-5xl sm:text-7xl font-bold tracking-tight mb-6"
                    >
                        How we create <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-coral">lasting change.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg sm:text-xl text-cream/80 leading-relaxed font-body"
                    >
                        Evidence-based programs designed with communities, for communities. We focus on sustainable solutions that address the root causes of environmental and social challenges.
                    </motion.p>
                </div>
            </section>

            {/* Programs List */}
            <section className="py-24 lg:py-32 relative -mt-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
                    {programs.map((program, i) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-forest-950/10 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Floating Icon Card */}
                                    <div className={`absolute -bottom-6 ${i % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center p-6 z-20`}>
                                        <program.icon className="w-full h-full text-forest-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`h-[2px] w-12 bg-gradient-to-r ${program.color}`} />
                                    <span className="text-sm font-semibold uppercase tracking-widest text-forest-600">
                                        {program.tagline}
                                    </span>
                                </div>

                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-950 mb-6">
                                    {program.title}
                                </h2>

                                <p className="text-lg text-forest-900/80 leading-relaxed font-body mb-8">
                                    {program.description}
                                </p>

                                <Link
                                    href="/donate"
                                    className="group inline-flex items-center gap-2 font-semibold text-coral hover:text-coral/80 transition-colors"
                                >
                                    <span className="border-b-2 border-transparent group-hover:border-coral/40 pb-0.5 transition-all">
                                        Support this program
                                    </span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact CTA */}
            <section className="bg-forest-950 py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-bold text-white mb-8"
                    >
                        Your contribution scales our impact.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center rounded-full bg-coral px-10 py-5 text-lg font-bold text-white shadow-xl hover:bg-coral/90 transition-all hover:scale-105"
                        >
                            Donate to our Programs
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
