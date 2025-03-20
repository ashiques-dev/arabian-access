"use client";
import { EaseInText } from "@/components/home/home-animation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="Story" className=" width">
      <div className="border-r border-l padding pt-20 md:pt-32 lg:pt-40 py-10 md:py-14 lg:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
          <EaseInText
            word="Services that we provide"
            textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
          />
        </h1>
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded mix-blend-difference "
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-lighter  block  rounded"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="relative">
                <div className="h-72 bg-light rounded"></div>
                <div className="mt-4 p-2">
                  <p className="text-darkest font-semibold ">Service name</p>
                  <p className="mt-2">
                    small note about this service small note about this service
                  </p>
                  <p className="mt-2 inline-flex items-center justify-center gap-2 text-darker">
                    Read more <ChevronDown className="size-4 " />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
