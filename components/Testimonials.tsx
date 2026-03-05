"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "When the well was built, our children stopped getting sick, and they could finally attend school regularly. This didn't just give us water; it gave us our lives back.",
        author: "Fatima Youssef",
        role: "Community Elder, Mwanga",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1baf8a?w=400&q=80"
    },
    {
        id: 2,
        content: "The sustainable farming techniques we learned have tripled our harvest. We are no longer dependent on emergency food aid. We are self-sufficient and proud.",
        author: "Carlos Mendez",
        role: "Farmer, Guatemala",
        image: "https://images.unsplash.com/photo-1507153676145-3db59b5d2da9?w=400&q=80"
    },
    {
        id: 3,
        content: "Thanks to the Learn & Lead initiative, I was the first in my family to graduate high school. Now, I have a scholarship for university.",
        author: "Sopheap Sun",
        role: "Student, Cambodia",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-800/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-6"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-300">
                            Voices of Impact
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Real people. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-amber-300">Real stories.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-white text-center">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            className="glass-dark border border-white/10 rounded-[2rem] p-8 md:p-10 relative flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center absolute -top-6 shadow-lg shadow-coral/30">
                                <Quote className="w-5 h-5 text-white/90" fill="currentColor" />
                            </div>

                            <p className="text-lg md:text-xl font-body leading-relaxed text-cream/90 italic mb-8 mt-4 flex-1">
                                "{t.content}"
                            </p>

                            <div className="flex flex-col items-center gap-4 w-full pt-6 border-t border-white/10">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-forest-400">
                                    <Image
                                        src={t.image}
                                        alt={t.author}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg">{t.author}</h4>
                                    <p className="text-sm text-forest-400 tracking-wider uppercase font-semibold mt-1">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
