"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Navigation() {
  const { locale, setLocale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.work, href: "#work" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "th" ? "en" : "th");

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-700 ${
          scrolled
            ? "max-w-4xl mx-4 sm:mx-auto px-6 py-2.5 glass rounded-2xl shadow-lg shadow-black/20"
            : "max-w-6xl px-6 sm:px-8"
        }`}>
          {/* logo */}
          <a
            href="#hero"
            className="text-heading text-lg sm:text-xl text-white hover:text-accent transition-colors duration-300"
          >
            Rain<span className="text-accent">Cloud</span>
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-slate-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/[0.04] group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-violet opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
              </a>
            ))}

            {/* language toggle */}
            <div className="w-px h-5 bg-white/[0.08] mx-2" />
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors duration-300 px-2.5 py-1.5 rounded-md border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5"
              aria-label="Switch language"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span className="font-medium">{locale === "th" ? "EN" : "TH"}</span>
            </button>

            <a
              href="#contact"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* mobile: language + burger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded border border-white/[0.08] hover:border-accent/30"
              aria-label="Switch language"
            >
              {locale === "th" ? "EN" : "TH"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(5, 10, 16, 0.95)', backdropFilter: 'blur(40px)' }}
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="text-heading text-2xl text-white hover:text-accent transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4"
            >
              {t.nav.contact}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
