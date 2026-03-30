"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const gradients = [
  "from-accent/20 via-accent/5 to-transparent",
  "from-violet/20 via-violet/5 to-transparent",
  "from-cyan-400/20 via-cyan-400/5 to-transparent",
];

const projectIcons = [
  <svg key="web" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  <svg key="app" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  <svg key="ai" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>,
];

export default function SelectedWork() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="work" className="relative py-28 sm:py-36">
      <div className="section-divider mb-28 sm:mb-36" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 gap-6"
        >
          <div>
            <span className="text-label text-accent mb-4 block">
              {t.work.label}
            </span>
            <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-white">
              {t.work.heading}
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body text-slate-400 text-base max-w-sm"
          >
            {t.work.subtext}
          </motion.p>
        </motion.div>

        {/* project cards */}
        <div className="space-y-8">
          {t.work.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} bgY={bgY} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView, bgY }: { project: { title: string; category: string; description: string; metrics: readonly string[] }; index: number; isInView: boolean; bgY: import("framer-motion").MotionValue<string> }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl glass-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* visual placeholder with parallax */}
        <div className="lg:col-span-5 relative h-48 sm:h-56 lg:h-auto min-h-[200px] overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} scale-110`}
            style={{ y: bgY }}
          />

          {/* animated big number */}
          <motion.span
            className="absolute top-4 left-6 text-[6rem] sm:text-[8rem] font-bold text-white/[0.03] leading-none select-none text-display"
            animate={hovered ? { scale: 1.1, opacity: 0.06 } : { scale: 1, opacity: 0.03 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            0{index + 1}
          </motion.span>

          {/* icon with scale entrance and hover rotation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500"
            >
              <motion.div
                className="text-slate-500 group-hover:text-accent/70 transition-colors duration-500"
                animate={hovered ? { rotate: 8, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {projectIcons[index]}
              </motion.div>
            </motion.div>
          </div>

          {/* hover shimmer overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            initial={{ x: "-100%" }}
            animate={hovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* content */}
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
          <motion.p
            className="text-label text-accent/60 mb-3"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 + index * 0.15 }}
          >
            {project.category}
          </motion.p>
          <h3 className="text-heading text-xl sm:text-2xl text-white mb-4 group-hover:text-accent-light transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-body text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* metrics with stagger */}
          <div className="flex flex-wrap gap-3">
            {project.metrics.map((metric, mi) => (
              <motion.span
                key={metric}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + mi * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block px-3 py-1.5 text-xs font-medium text-accent/80 bg-accent/[0.08] rounded-full hover:bg-accent/[0.15] hover:text-accent transition-all duration-300 cursor-default"
              >
                {metric}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom glow on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={hovered ? { background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), rgba(167,139,250,0.4), transparent)" } : { background: "linear-gradient(90deg, transparent, transparent)" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
