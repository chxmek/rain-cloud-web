"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const serviceIcons = [
  (
    <svg key="sys" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  (
    <svg key="web" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  (
    <svg key="site" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  ),
  (
    <svg key="ux" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
];

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--spotlight-x", `${x}%`);
    card.style.setProperty("--spotlight-y", `${y}%`);
    // 3D tilt
    const tiltX = ((y - 50) / 50) * -4;
    const tiltY = ((x - 50) / 50) * 4;
    const inner = card.querySelector(".tilt-inner") as HTMLElement;
    if (inner) inner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const inner = e.currentTarget.querySelector(".tilt-inner") as HTMLElement;
    if (inner) inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 sm:py-36 gradient-section"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-label text-accent mb-4 block">{t.services.label}</span>
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl">
            {t.services.headingLine1}
            <br />
            <span className="text-gradient-static">{t.services.headingLine2}</span>
          </h2>
        </motion.div>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.services.items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative p-8 sm:p-10 rounded-2xl glass-card card-spotlight cursor-default"
              style={{ perspective: "1000px" }}
            >
              <div className="relative z-10 tilt-inner transition-transform duration-300 ease-out">
                {/* number */}
                <span className="text-[10px] font-mono text-slate-600 mb-4 block">0{i + 1}</span>

                {/* icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-violet/10 text-accent flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:scale-110 transition-all duration-500"
                >
                  {serviceIcons[i]}
                </motion.div>

                {/* titles */}
                <p className="text-label text-accent/70 mb-2">{service.title}</p>
                <h3 className="text-heading text-xl sm:text-2xl text-white mb-3">
                  {service.subtitle}
                </h3>

                {/* description */}
                <p className="text-body text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* hover corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-accent/30 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-accent/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
