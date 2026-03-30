"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const numbers = ["01", "02", "03", "04", "05"];

const stepIcons = [
  <svg key="discover" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  <svg key="strategy" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  <svg key="design" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  <svg key="build" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  <svg key="launch" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
];

export default function Process() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative py-28 sm:py-36 gradient-section-alt"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label text-accent mb-4 block">{t.process.label}</span>
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto">
            {t.process.headingLine1}
            <br />
            <span className="text-gradient-static">{t.process.headingLine2}</span>
          </h2>
        </motion.div>

        {/* desktop — horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[0.875rem] left-0 right-0 h-px bg-white/[0.04]" />
          <motion.div
            className="absolute top-[0.875rem] left-0 h-px bg-gradient-to-r from-accent via-violet to-accent"
            style={{ width: lineWidth }}
          />

          <div className="grid grid-cols-5 gap-6">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={numbers[i]}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative text-left"
              >
                <div className="flex items-center justify-start mb-6">
                  <div className="relative">
                    <div className="absolute inset-[-4px] rounded-full bg-accent/20 opacity-0 group-hover:animate-[ripple_1.5s_ease-out_infinite] group-hover:opacity-100" />
                    <div className="w-7 h-7 rounded-full border-2 border-accent/40 flex items-center justify-center bg-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.15)] relative z-10 group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-500">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-9 h-9 rounded-lg bg-accent/[0.06] text-accent/60 flex items-center justify-center mb-4 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-500"
                >
                  {stepIcons[i]}
                </motion.div>

                <p className="text-label text-accent/60 mb-2">{numbers[i]}</p>
                <h3 className="text-heading text-lg text-white mb-1">{step.title}</h3>
                <p className="text-sm text-accent/70 mb-3">{step.subtitle}</p>
                <p className="text-body text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile + tablet — vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute top-0 bottom-0 left-3.5 w-px bg-white/[0.04]" />
          <motion.div
            className="absolute top-0 left-3.5 w-px bg-gradient-to-b from-accent via-violet to-accent"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={numbers[i]}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative pl-12"
              >
                <div className="absolute left-0 top-1">
                  <div className="w-7 h-7 rounded-full border-2 border-accent/40 flex items-center justify-center bg-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/[0.06] text-accent/60 flex items-center justify-center">
                    {stepIcons[i]}
                  </div>
                  <p className="text-label text-accent/60">{numbers[i]}</p>
                </div>
                <h3 className="text-heading text-lg text-white mb-1">{step.title}</h3>
                <p className="text-sm text-accent/70 mb-2">{step.subtitle}</p>
                <p className="text-body text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
