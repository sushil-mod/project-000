"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  className?: string;
  viewportAmount?: number;
  delay?: number;
}

export default function ScrollAnimation({
  children,
  variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  className = "",
  viewportAmount = 0.3,
  delay = 0,
}: ScrollAnimationProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewportAmount, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}