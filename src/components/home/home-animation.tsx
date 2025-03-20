"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { faqs } from "./home-data";
import { PlusIcon } from "lucide-react";

export const FaqQuestions = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  return (
    <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto relative group/parent">
      {faqs.map(({ answer, question }, id) => (
        <motion.div
          onClick={() => {
            if (id === selectedIndex) {
              setSelectedIndex(null);
            } else {
              setSelectedIndex(id);
            }
          }}
          key={id}
          className={cn(
            " bg-lighter rounded-2xl border border-light p-6 cursor-pointer group-hover/parent:[&:not(:hover)]:blured transition-colors duration-500",
            selectedIndex === id && "bg-lightest"
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg text-darker">{question}</h3>
            <PlusIcon
              className={cn(
                "flex-shrink-0 transition duration-300",
                selectedIndex === id && "rotate-45"
              )}
            />
          </div>

          <AnimatePresence mode="wait">
            {selectedIndex === id && (
              <motion.div
                initial={{
                  height: 0,
                  marginTop: 0,
                }}
                animate={{
                  height: "auto",
                  marginTop: 24,
                }}
                exit={{
                  height: 0,
                  marginTop: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="overflow-hidden"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export const EaseInText = ({
  word,
  textColor,
  top = false,
}: {
  word: string;
  textColor: string;
  top?: boolean;
}) => {
  return (
    <>
      {word.split(" ").map((text, id) => (
        <span key={id} className="overflow-hidden inline-block">
          <motion.span
            initial={{
              translateY: top ? "-100%" : "100%",
            }}
            whileInView={{
              translateY: 0,
              transition: {
                duration: top ? 0.6 : 0.3,
                delay: id * 0.1,
              },
            }}
            viewport={{
              once: true,
            }}
            className={cn("inline-block  leading-tight", textColor)}
          >
            {text}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
};

export const Counter = ({
  from = 0,
  to,
  duration = 1,
}: {
  from?: number;
  to: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  // top/right/bottom/left,
  useEffect(() => {
    if (isInView) {
      animate(from, to, {
        duration,
        ease: "circOut",
        onUpdate(value) {
          if (!ref.current) return;
          ref.current.innerText = Math.round(value).toString() + "+";
        },
      });
    }
  }, [isInView]);
  return <span ref={ref} />;
};
