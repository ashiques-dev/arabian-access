import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";
import { linkVariants } from "./home-data";

const Hero = () => {
  return (
    <section
      id="Introduction"
      className="relative bg-[url('/black.png')] dark:bg-[url('/white.png')] [mask-image:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_10%,rgba(0,0,0,0.9)_80%,rgba(0,0,0,0)_100%)] animate-move-bg width overflow-clip "
    >
      <Planets />

      <div className="h-[90vh] min-h-[30rem] max-h-[50rem] flex items-center justify-center relative w-full">
        <div className="padding text-center relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-darkest">
            ARABIAN ACCESS
          </h1>
          <p className="text-base md:text-xl max-w-lg mx-auto font-medium text-balance mt-5 text-darker">
            Empowering your business with precision-driven solutions, where
            expertise meets innovation
          </p>
          <Link
            href="/#df"
            className={cn(
              linkVariants({}),
              "mt-8 hover:scale-105 active:scale-95"
            )}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Planets = () => {
  return (
    <>
      <Orbit className="first-orbit border border-dashed" duration="80s">
        <div className="twelve size-5 bg-gradient-to-t from-violet-400 to-neutral-950" />
        <div className="three size-6 border bg-lightest inline-flex justify-center items-center">
          <div className="size-3 rounded-full bg-dark"></div>
        </div>
        <div className="six size-6 bg-gradient-to-b from-teal-500 to-blue-700" />
        <div className="nine">
          <div className="size-5 bg-gradient-to-l from-darker rounded-full"></div>
          <Orbit className="size-14 animate-rotate-ccw">
            <div className="size-3 nine bg-gradient-to-l from-lighter to-darkest"></div>
          </Orbit>
        </div>
      </Orbit>

      <Orbit duration="40s" className="second-orbit border">
        <div className="three size-6 bg-gradient-to-r from-fuchsia-400 to-amber-800" />
        <div className="nine size-7 bg-gradient-to-l from-darkest to-lightest" />
        <div className="six size-7 bg-darkest inline-flex items-center justify-center">
          <Orbit className="h-1 w-12 bg-dark  rounded-full" />
        </div>
        <div className="twelve  inline-flex items-center justify-center">
          <div className="size-7 bg-darkest rounded-full"></div>
          <Orbit className="h-1 w-12 border bg-between rounded-full animate-rotate-ccw" />
          <Orbit className="size-20">
            <div className="size-3 nine bg-gradient-to-l from-darkest to-lightest"></div>
          </Orbit>
        </div>
      </Orbit>

      <Orbit duration="60s" className="third-orbit border border-dashed">
        <div className="twelve size-8 bg-gradient-to-b from-red-800 via-yellow-600 to-yellow-500" />
        <div className="three size-7 bg-gradient-to-r from-dark  to-indigo-700" />
        <div className="six size-8 bg-gradient-to-b from-emerald-500  to-lighter" />
        <div className="nine size-7 bg-gradient-to-l from-lime-300  to-purple-900" />
      </Orbit>
      <Orbit duration="40s" className="fourth-orbit border">
        <div className="twelve size-9 bg-gradient-to-t from-darker via-purple-900 to-violet-600" />
        <div className="three size-10 bg-gradient-to-l from-pink-800 via-red-500 to-yellow-500" />
        <div className="six size-9 bg-gradient-to-b from-rose-400 to-darker" />
        <div className="nine size-10 bg-gradient-to-l from-lighter to-darker" />
      </Orbit>
    </>
  );
};

const Orbit = ({
  className,
  children,
  duration = "10s",
}: {
  className?: string;
  children?: ReactNode;
  duration?: string;
}) => {
  return (
    <>
      <div
        style={{
          translate: "-50% -50%",
          animationDuration: duration,
        }}
        className={cn("absolute top-1/2 left-1/2 animate-spin", className)}
      >
        {children}{" "}
      </div>
    </>
  );
};
