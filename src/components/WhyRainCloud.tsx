"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const numbers = ["01", "02", "03", "04", "05"];

export default function WhyRainCloud() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="why"
      className="relative py-28 sm:py-36"
    >
      <div className="section-divider mb-28 sm:mb-36" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* left heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-label text-accent mb-4 block">
              {t.why.label}
            </span>
            <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              {t.why.headingLine1}
              <br />
              <span className="text-gradient">{t.why.headingLine2}</span>
            </h2>
            <p className="text-body text-slate-400 text-base max-w-sm">
              {t.why.subtext}
            </p>
          </motion.div>

          {/* right list */}
          <div className="lg:col-span-8 space-y-0">
            {t.why.reasons.map((reason, i) => (
              <motion.div
                key={numbers[i]}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex gap-6 sm:gap-8 py-8 border-b border-white/[0.06] first:pt-0 last:border-0 hover:border-accent/10 transition-colors duration-500"
              >
                {/* animated left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 -translate-x-4 transition-all duration-500" />
                <span className="text-label text-accent/40 mt-1 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all duration-500 shrink-0">
                  {numbers[i]}
                </span>
                <div>
                  <h3 className="text-heading text-lg sm:text-xl text-white mb-2 group-hover:text-accent-light transition-colors duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-body text-slate-400 text-sm sm:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
