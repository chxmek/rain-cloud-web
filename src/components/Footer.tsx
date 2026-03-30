"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="#hero"
              className="text-heading text-xl text-white hover:text-accent transition-colors duration-300 inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Rain<span className="text-accent">Cloud</span>
            </motion.a>
            <p className="text-body text-slate-500 text-sm max-w-xs leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label text-slate-500 mb-4">{t.footer.servicesLabel}</p>
            <ul className="space-y-2.5">
              {t.services.items.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                    {s.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label text-slate-500 mb-4">{t.footer.contactLabel}</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@raincloud.co"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                  hello@raincloud.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+66812345678"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                  <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  097-129-1752
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/R/ti/p/@raincloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-[#06C755] transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-px bg-[#06C755] group-hover:w-3 transition-all duration-300" />
                  <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#06C755] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  @raincloud
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-300" />
                  {t.footer.startProject}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* bottom bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-slate-600">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {t.footer.terms}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
