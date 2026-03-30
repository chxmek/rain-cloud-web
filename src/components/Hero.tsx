"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import Magnetic from "@/components/animations/Magnetic";

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const y = useTransform(smoothProgress, [0, 1], [0, 150]);
  const scale = useTransform(smoothProgress, [0, 0.8], [1, 0.95]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  /* rain drops animation */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const drops: { x: number; y: number; l: number; s: number; o: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        l: Math.random() * 25 + 5,
        s: Math.random() * 2 + 0.3,
        o: Math.random() * 0.1 + 0.02,
      });
    }

    const particles: { x: number; y: number; r: number; o: number; dx: number; dy: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.25 + 0.05,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.2 - 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((d) => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + 0.5, d.y + d.l);
        ctx.strokeStyle = `rgba(56, 189, 248, ${d.o})`;
        ctx.lineWidth = Math.random() > 0.5 ? 1 : 0.5;
        ctx.lineCap = "round";
        ctx.stroke();
        d.y += d.s;
        if (d.y > canvas.height) {
          d.y = -d.l;
          d.x = Math.random() * canvas.width;
        }
      });
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero noise"
    >
      {/* grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      {/* floating orbs with mouse parallax */}
      <div
        className="absolute top-[-15%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none animate-float-slow"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet/[0.04] blur-[100px] pointer-events-none animate-float"
        style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
      />
      <div
        className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px] pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`, animation: 'float 10s ease-in-out infinite reverse' }}
      />

      {/* morphing blob shapes */}
      <div className="absolute top-[30%] left-[8%] w-48 h-48 bg-accent/[0.03] animate-morph blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[12%] w-36 h-36 bg-violet/[0.04] animate-morph blur-[50px] pointer-events-none" style={{ animationDelay: '-4s', animationDuration: '15s' }} />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center"
      >
        {/* brand mark */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-label text-accent/80 tracking-[0.2em] px-4 py-2 rounded-full border border-accent/10 bg-accent/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            {t.hero.label}
          </span>
        </motion.div>

        {/* brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white mb-6 leading-none"
        >
          Rain<span className="text-gradient">Cloud</span>
        </motion.h1>

        {/* headline */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="text-heading text-xl sm:text-2xl md:text-3xl text-slate-200/90 max-w-3xl mx-auto mb-4 leading-snug"
        >
          {t.hero.headlineLine1}
          <br className="hidden sm:block" />
          <span className="text-slate-400">{t.hero.headlineLine2}</span>
        </motion.p>

        {/* subline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-body text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-10"
        >
          {t.hero.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Magnetic strength={0.2}>
            <a href="#contact" className="btn-primary group">
              {t.hero.ctaPrimary}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Magnetic>
          <a href="#services" className="btn-secondary group">
            {t.hero.ctaSecondary}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700/50 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-accent/60 animate-scroll-hint" />
        </div>
      </motion.div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-[2] pointer-events-none" />
    </section>
  );
}
