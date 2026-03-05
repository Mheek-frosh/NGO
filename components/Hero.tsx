"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-forest-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2913&auto=format&fit=crop"
            alt="Protecting the environment"
            fill
            className="object-cover scale-105 animate-[imagePan_30s_linear_infinite]"
            priority
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-forest-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/40 to-transparent" />
        </div>

        {/* Ambient glowing orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-forest-500/20 blur-[120px] pointer-events-none mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-coral/10 blur-[130px] pointer-events-none mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Global Impact Report 2026 Live
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight"
              >
                Change Starts <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-coral">
                  With Action.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-lg sm:text-xl text-cream/80 max-w-2xl font-body leading-relaxed"
            >
              We stand at the intersection of environmental conservation and human empowerment. Join a global movement dedicated to restoring nature and building sustainable, thriving communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <Link
                href="/donate"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-coral px-8 py-4 font-semibold text-white transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  Donate Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white border border-white/20 backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
              >
                Discover Our Mission
              </Link>
            </motion.div>

            {/* Quick Stats in Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/10 max-w-3xl"
            >
              <div className="flex flex-col gap-1">
                <Leaf className="w-5 h-5 text-forest-400 mb-2" />
                <span className="text-3xl font-display font-bold text-white">12M+</span>
                <span className="text-xs uppercase tracking-wider text-cream/50">Trees Planted</span>
              </div>
              <div className="flex flex-col gap-1">
                <Globe className="w-5 h-5 text-forest-400 mb-2" />
                <span className="text-3xl font-display font-bold text-white">45</span>
                <span className="text-xs uppercase tracking-wider text-cream/50">Countries Active</span>
              </div>
              <div className="flex flex-col gap-1 hidden sm:flex">
                <Users className="w-5 h-5 text-forest-400 mb-2" />
                <span className="text-3xl font-display font-bold text-white">2.5M</span>
                <span className="text-xs uppercase tracking-wider text-cream/50">Lives Impacted</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold rotate-90 mb-4">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-coral"
          />
        </div>
      </motion.div>
    </section>
  );
}
