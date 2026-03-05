"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Heart, ArrowRight, Lock } from "lucide-react";

const presetAmounts = [25, 50, 100, 250, 500];

export default function DonatePage() {
    const [amount, setAmount] = useState<number | "other">(50);
    const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
    const [otherAmount, setOtherAmount] = useState<string>("");

    return (
        <div className="min-h-screen bg-cream flex flex-col pt-24">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-200/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            </div>

            <main className="flex-1 relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 lg:py-24 gap-12 lg:gap-20">

                {/* Left column - Story/Impact */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-forest-900/10 mb-8 w-max shadow-sm"
                    >
                        <Heart className="w-4 h-4 text-coral animate-pulse-slow font-bold" fill="currentColor" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-900">
                            100% Goes to the Field
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-forest-950 mb-6"
                    >
                        Fund the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-forest-900/80 leading-relaxed font-body mb-10 max-w-lg"
                    >
                        Your contribution directly supports communities building sustainable solutions. A monthly donation maximizes your impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 gap-6 max-w-md"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-forest-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-forest-950 text-sm">Secure Payment</h4>
                                <p className="text-xs text-forest-900/70 mt-1">256-bit SSL encryption</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                                <Heart className="w-5 h-5 text-forest-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-forest-950 text-sm">Tax Deductible</h4>
                                <p className="text-xs text-forest-900/70 mt-1">501(c)(3) registered</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right column - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-xl mx-auto lg:mx-0"
                >
                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-forest-950/5 border border-forest-100 overflow-hidden">
                        {/* Header / Tabs */}
                        <div className="flex p-2 bg-cream/50 border-b border-forest-100">
                            <button
                                onClick={() => setFrequency("monthly")}
                                className={`flex-1 py-4 text-center rounded-xl text-sm font-bold transition-all ${frequency === "monthly"
                                        ? "bg-white text-forest-950 shadow-sm"
                                        : "text-forest-900/60 hover:text-forest-950"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setFrequency("one-time")}
                                className={`flex-1 py-4 text-center rounded-xl text-sm font-bold transition-all ${frequency === "one-time"
                                        ? "bg-white text-forest-950 shadow-sm"
                                        : "text-forest-900/60 hover:text-forest-950"
                                    }`}
                            >
                                One-time
                            </button>
                        </div>

                        <div className="p-8 sm:p-10">
                            <h3 className="font-display font-bold text-2xl text-forest-950 mb-6">
                                Choose your amount
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                {presetAmounts.map((amt) => (
                                    <button
                                        key={amt}
                                        onClick={() => {
                                            setAmount(amt);
                                            setOtherAmount("");
                                        }}
                                        className={`py-4 rounded-2xl text-lg font-bold transition-all border-2 ${amount === amt
                                                ? "border-forest-700 bg-forest-50 text-forest-950"
                                                : "border-forest-100 bg-white text-forest-900/60 hover:border-forest-300"
                                            }`}
                                    >
                                        ${amt}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setAmount("other")}
                                    className={`py-4 rounded-2xl text-lg font-bold transition-all border-2 ${amount === "other"
                                            ? "border-forest-700 bg-forest-50 text-forest-950"
                                            : "border-forest-100 bg-white text-forest-900/60 hover:border-forest-300"
                                        }`}
                                >
                                    Other
                                </button>
                            </div>

                            <AnimatePresence>
                                {amount === "other" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mb-6"
                                    >
                                        <div className="relative">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-forest-950/40">$</span>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                value={otherAmount}
                                                onChange={(e) => setOtherAmount(e.target.value)}
                                                className="w-full pl-12 pr-6 py-5 rounded-2xl border-2 border-forest-200 bg-white text-2xl font-bold text-forest-950 outline-none focus:border-forest-700 transition-colors"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button className="w-full bg-coral hover:bg-coral/90 text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-coral/20 transition-all flex items-center justify-center gap-2 group">
                                <Lock className="w-5 h-5 hidden sm:block opacity-60" />
                                Donate {amount !== "other" ? `$${amount}` : otherAmount ? `$${otherAmount}` : ""} {frequency === "monthly" ? "Monthly" : ""}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <p className="text-center text-xs text-forest-900/50 mt-6 max-w-xs mx-auto">
                                By donating, you agree to our Terms of Service and Privacy Policy. Cancel monthly donations anytime.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
