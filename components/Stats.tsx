"use client";

import { motion } from "framer-motion";
import { Droplet, Sun, Wind, Recycle } from "lucide-react";

// Array of statistics to display in the grid
// Each stat includes an icon from lucide-react and localized description (hardcoded for now)
const stats = [
    {
        id: 1,
        name: "Clean Water Projects",
        value: "2,400+",
        icon: Droplet,
        description: "Wells built providing sustainable access to pure water.",
    },
    {
        id: 2,
        name: "Solar Installations",
        value: "15,000",
        icon: Sun,
        description: "Off-grid communities powered by renewable energy.",
    },
    {
        id: 3,
        name: "Air Quality Indexed",
        value: "80+",
        icon: Wind,
        description: "Cities partnered with for emissions reduction programs.",
    },
    {
        id: 4,
        name: "Plastic Removed",
        value: "5M Tons",
        icon: Recycle,
        description: "Plastic waste cleared from oceans and coastlines.",
    },
];

/**
 * Stats Component
 * 
 * Renders a grid of key impact statistics with animated numbers and icons.
 * Utilizes framer-motion for scroll-triggered reveal animations.
 */
export default function Stats() {
    return (
        <section className="relative bg-cream py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl text-balance">
                            Measurable progress, undeniable impact.
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-forest-800/80 max-w-2xl mx-auto">
                            Our initiatives are data-driven and community-focused. We don't just speak about change; we build it, measure it, and scale it.
                        </p>
                    </motion.div>

                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 sm:grid-cols-2">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex flex-col items-start gap-4 p-8 rounded-3xl bg-white shadow-xl shadow-forest-950/5 border border-forest-100 hover:shadow-2xl hover:shadow-forest-950/10 transition-shadow duration-300 relative group overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 group-hover:-rotate-12 transition-all duration-500 ease-out z-0">
                                        <Icon className="w-32 h-32 text-forest-900" />
                                    </div>

                                    <div className="p-3 rounded-2xl bg-forest-50 text-forest-600 ring-1 ring-inset ring-forest-100 mb-2 relative z-10">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <dd className="order-first text-4xl font-display font-bold tracking-tight text-forest-950 relative z-10">
                                        {stat.value}
                                    </dd>
                                    <dt className="text-base font-semibold leading-7 text-forest-900 relative z-10">
                                        {stat.name}
                                    </dt>
                                    <p className="mt-1 text-sm leading-6 text-forest-700/80 relative z-10">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
