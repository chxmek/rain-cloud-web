"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const trustIcons = [
  (
    <svg key="quality" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  (
    <svg key="client" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  (
    <svg key="time" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  (
    <svg key="support" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 14.652" />
    </svg>
  ),
];

export default function Trust() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section ref={ref} id="trust" className="relative py-28 sm:py-36 gradient-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label text-accent mb-4 block">
            {t.trust.label}
          </span>
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto">
            {t.trust.headingLine1}
            <br />
            {t.trust.headingLine2}
          </h2>
        </motion.div>

        {/* trust grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.trust.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative text-center p-6 sm:p-8 rounded-2xl hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
            >
              {/* hover spotlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent_70%)]" />

              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-violet/10 text-accent flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] group-hover:from-accent/25 group-hover:to-violet/15 transition-all duration-500"
              >
                {trustIcons[i]}
              </motion.div>
              <h3 className="text-heading text-base sm:text-lg text-white mb-2 relative z-10">
                {item.title}
              </h3>
              <p className="text-body text-slate-400 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* bottom accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-accent/60 to-violet/60 group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* testimonials — interactive carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* navigation dots */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {t.trust.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`relative h-2 rounded-full transition-all duration-500 ${activeTestimonial === i ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* testimonial card */}
          <div className="relative max-w-2xl mx-auto overflow-hidden min-h-[220px]">
            <AnimatePresence mode="wait">
              {t.trust.testimonials.map((testimonial, i) =>
                i === activeTestimonial ? (
                  <motion.blockquote
                    key={i}
                    initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative p-8 sm:p-10 rounded-2xl glass-card text-center"
                  >
                    {/* quote mark */}
                    <motion.svg
                      className="w-8 h-8 text-accent/20 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                    </motion.svg>
                    <p className="text-body text-slate-300 text-base sm:text-lg leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="text-heading text-sm text-white">{testimonial.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{testimonial.role}</p>
                    </footer>
                  </motion.blockquote>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
