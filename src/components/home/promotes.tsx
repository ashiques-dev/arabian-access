import React from "react";
import PlusIcons from "../ui/plus-icons";
import { Counter, EaseInText } from "./home-animation";
import { company, linkVariants } from "./home-data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";

const Promote = () => {
  return (
    <>
      <section id="Info" className="width">
        <div className="border border-b-0 padding relative py-20 md:py-32 lg:py-40 bg-[conic-gradient(var(--tw-gradient-stops))] from-lighter via-lightest to-lighter/10">
          <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,hsla(var(--lighter)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--lighter)/0.4)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
          <PlusIcons />

          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance  text-center  ">
              <EaseInText
                word="Unlock Your Business's Full Potential with Expert Professional Assistance Tailored to Your Needs"
                textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
              />
            </h1>
            <div className="mt-16 flex justify-center items-center gap-10 md:gap-20 lg:gap-28 flex-wrap">
              {company.map(({ number, text }, id) => (
                <div key={id} className="">
                  <h2 className="text-darkest text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                    <Counter to={number} />
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-3">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-10 md:mt-14 flex-wrap justify-center">
              <Link
                href="/#df"
                className={cn(
                  linkVariants({}),
                  "hover:scale-105 active:scale-95"
                )}
              >
                Contact Us
              </Link>
              <Link
                href={"/services"}
                className={cn(
                  linkVariants({ variant: "outline" }),
                  " group/button  group-hover:translate-x-4 group-hover:scale-110 active:scale-95"
                )}
              >
                Know more
                <div className="size-6 overflow-hidden">
                  <div className="w-12 h-6 flex gap-2 -translate-x-1/2 group-hover/button:translate-x-0 transition-transform duration-500">
                    <MoveRightIcon className="size-6" />
                    <MoveRightIcon className="size-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promote;
