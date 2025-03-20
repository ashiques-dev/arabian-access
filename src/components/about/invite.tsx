import React from "react";
import { EaseInText } from "../home/home-animation";
import Link from "next/link";
import { linkVariants } from "../home/home-data";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import PlusIcons from "../ui/plus-icons";

const Invite = () => {
  return (
    <>
      <section id="Invite" className=" width">
        <div className=" border border-b-0 padding py-20 md:py-32 lg:py-40  relative">
          <PlusIcons />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-center max-w-4xl mx-auto">
            <EaseInText
              top
              word="Let's work together to build your success!"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>
          <p className="indent-10 max-w-4xl mx-auto mt-8 md:mt-10">
            At Arabian Access, we do more than consult—we become your business
            partner. Whether you&apos;re launching a company, expanding your
            business, or improving operations, we are here to help. 🚀
            Let&apos;s take your business to the next level—together!
          </p>
          <div className="flex items-center gap-4 mt-6 md:mt-8 flex-wrap justify-center">
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
      </section>
    </>
  );
};

export default Invite;
