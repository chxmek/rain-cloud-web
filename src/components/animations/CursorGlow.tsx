"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const visible = useRef(false);
  const opacityRef = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible.current) {
        visible.current = true;
        opacityRef.set(1);
      }
    };
    const leave = () => {
      visible.current = false;
      opacityRef.set(0);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, opacityRef]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        opacity: opacityRef,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[80px]" />
    </motion.div>
  );
}
