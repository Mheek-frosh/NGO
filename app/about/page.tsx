"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import StoryVideo from "@/components/StoryVideo";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* About Hero */}
            <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-forest-950 rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
                        alt="Community team"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-coral" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white">
                            Our Story
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display text-5xl sm:text-7xl font-bold tracking-tight mb-8"
                    >
                        We believe in <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-coral">people</span> <br className="hidden sm:block" /> and the planet.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg sm:text-xl text-cream/80 leading-relaxed font-body"
                    >
                        Since 2011, Hope in Action has been working at the intersection of environmental conservation and human empowerment.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80"
                                alt="Environmental action"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply" />

                            {/* Floating Stat */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute bottom-6 left-6 right-6 lg:right-auto lg:-right-12 glass-dark rounded-2xl p-6 lg:p-8"
                            >
                                <div className="text-4xl font-display font-bold text-white mb-2">15+</div>
                                <div className="text-sm font-medium text-forest-300 uppercase tracking-widest">Years of Impact</div>
                            </motion.div>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-display text-4xl font-bold text-forest-950 mb-6">Our Mission</h2>
                                <p className="text-lg text-forest-900/80 leading-relaxed">
                                    Hope in Action was founded on a simple idea: lasting change happens when communities lead. We partner with local organizations to deliver clean water, education, healthcare, and environmental protection where it matters most.
                                </p>
                                <p className="mt-4 text-lg text-forest-900/80 leading-relaxed">
                                    Our transparent, community-driven approach ensures your support goes directly to programs that transform lives and ecosystems. We don't just provide aid; we build sustainable infrastructure for the future.
                                </p>
                            </motion.div>

                            <div className="grid gap-8">
                                {[
                                    { icon: Target, title: "Targeted Action", desc: "Data-driven interventions in high-need areas." },
                                    { icon: Shield, title: "Sustainable Focus", desc: "Solutions designed to outlast our involvement." },
                                    { icon: Globe, title: "Global Network", desc: "Local leaders empowered by global resources." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-forest-950 text-xl mb-1">{item.title}</h3>
                                            <p className="text-forest-800/70">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <Timeline />

            {/* Story Video Section */}
            <StoryVideo />

            {/* Stats Section */}
            <section className="bg-forest-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10">
                        {[
                            { value: "50K+", label: "Lives impacted directly by our programs" },
                            { value: "12", label: "Countries with active field operations" },
                            { value: "200+", label: "Projects completed since our founding" },
                            { value: "98%", label: "Of all funds go directly to programs" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center px-4"
                            >
                                <div className="text-5xl font-display font-bold text-coral mb-4">{stat.value}</div>
                                <div className="text-sm text-cream/70 font-medium leading-relaxed max-w-[200px]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mini CTA */}
            <section className="py-24 bg-cream">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-bold text-forest-950 mb-8"
                    >
                        Join our mission today.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-forest-900 transition-all hover:scale-105"
                        >
                            Support Our Work
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
