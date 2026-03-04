"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    alt: "Community gathering",
    caption: "Community day, Kenya",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "People together",
    caption: "Youth program, India",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Volunteers",
    caption: "Volunteer team",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
    alt: "School children",
    caption: "Education initiative",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    alt: "Hands together",
    caption: "Partnership event",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-forest-700">
            Stories
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-forest-950 sm:text-4xl">
            Impact in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-900/80">
            See the faces and places behind our work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-forest-900 shadow-2xl">
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              fill
              className="object-cover transition duration-500"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority={active === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="font-display text-lg font-semibold">
                {gallery[active].caption}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {gallery.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
                  active === i
                    ? "border-coral ring-2 ring-coral/30"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
