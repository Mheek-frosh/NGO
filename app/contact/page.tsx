"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-cream flex flex-col pt-24 pb-12">
            {/* Visual Accent Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-forest-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[120px] translate-x-1/3" />
            </div>

            <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 mt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-forest-900/10 mb-6 shadow-sm mx-auto"
                    >
                        <MessageSquare className="w-4 h-4 text-forest-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-900">
                            Get in Touch
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-forest-950 mb-6"
                    >
                        We'd love to hear <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-coral">from you.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-forest-900/70 font-body"
                    >
                        Whether you share our vision, want to volunteer, or have a question about our programs, our team is ready to connect.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="grid gap-8">
                            {[
                                { icon: Mail, title: "Chat with us", subtitle: "Our friendly team is here to help.", info: "hello@hopeinaction.org" },
                                { icon: MapPin, title: "Visit us", subtitle: "Come say hello at our HQ.", info: "123 Impact Avenue, New York, NY 10001" },
                                { icon: Phone, title: "Call us", subtitle: "Mon-Fri from 8am to 5pm.", info: "+1 (555) 123-4567" },
                            ].map((item, i) => (
                                <div key={item.title} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-forest-900/5 flex items-center justify-center shrink-0 border border-forest-50 group-hover:-translate-y-1 transition-transform">
                                        <item.icon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl text-forest-950 mb-1">{item.title}</h3>
                                        <p className="text-forest-900/60 text-sm mb-3">{item.subtitle}</p>
                                        <span className="font-semibold text-forest-700">{item.info}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Aesthetic Image or Map Placeholder */}
                        <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl glass-dark">
                            <div className="absolute inset-0 bg-forest-950/80 flex items-center justify-center flex-col gap-2 relative z-10">
                                <MapPin className="w-8 h-8 text-coral animate-bounce" />
                                <span className="text-white font-display font-semibold tracking-wide">Global Headquarters</span>
                            </div>
                            {/* Optional: if you have a real map image, put it here */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-forest-200 to-coral/20 rounded-[2.5rem] blur-xl opacity-50" />
                        <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-forest-950/5 border border-forest-100 p-8 sm:p-12">
                            <h3 className="font-display font-bold text-2xl text-forest-950 mb-8">Send us a message</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-bold text-forest-950">First name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-forest-100 bg-forest-50/50 text-forest-950 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-500/10 outline-none transition-all"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-bold text-forest-950">Last name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-forest-100 bg-forest-50/50 text-forest-950 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-500/10 outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-forest-950">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-5 py-4 rounded-xl border-2 border-forest-100 bg-forest-50/50 text-forest-950 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-500/10 outline-none transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-bold text-forest-950">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-5 py-4 rounded-xl border-2 border-forest-100 bg-forest-50/50 text-forest-950 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-500/10 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="volunteer">Volunteer Inquiry</option>
                                        <option value="partner">Partnership Request</option>
                                        <option value="program">Program Questions</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-forest-950">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-forest-100 bg-forest-50/50 text-forest-950 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-500/10 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-forest-950 hover:bg-forest-900 text-white font-bold text-lg py-5 rounded-xl shadow-xl shadow-forest-950/20 transition-all hover:-translate-y-1"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
