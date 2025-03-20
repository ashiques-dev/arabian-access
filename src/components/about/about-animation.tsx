"use client";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import React, { ReactNode, useEffect, useRef } from "react";

export const HoverBorder = ({ children }: { children: ReactNode }) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(75px 75px at ${offsetX}px ${offsetY}px ,black, transparent)`;
  useEffect(() => {
    const updateMouseMove = (e: MouseEvent) => {
      if (!borderRef.current) return;
      const borderRect = borderRef.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMouseMove);
    return () => {
      window.removeEventListener("mousemove", updateMouseMove);
    };
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto p-4 rounded border relative   hover:shadow-md hover:text-darkest animated group">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-between/50 via-light/50 to-lighter/50 rounded opacity-0 group-hover:opacity-75 animated" />
      <motion.div
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
        ref={borderRef}
        className="absolute -z-10 inset-0 rounded border-[3px] border-primary dark:border-secondary"
      />
      {children}
    </div>
  );
};
