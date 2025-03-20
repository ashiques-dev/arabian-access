import React from "react";
import { EaseInText } from "../home/home-animation";
import { Logo } from "../footer";
import LogoSvg from "../ui/logo";
import { HoverBorder } from "./about-animation";
import PlusIcons from "../ui/plus-icons";

const OurLogo = () => {
  return (
    <section id="Logo" className=" width">
      <div className=" border border-b-0 padding py-10 md:py-14 lg:py-16  relative">
        <PlusIcons />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-center ">
          <EaseInText
            word="What our logo Represents"
            textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
          />
        </h1>
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <HoverBorder>
            <Logo className="" />
            <p>Our logo encapsulates our mission and core values</p>
          </HoverBorder>
          <HoverBorder>
            <LogoSvg className="size-16 md:size-20" />
            <p>
              The Wave Symbol represents dynamism, energy, and seamless business
              operations.
            </p>
          </HoverBorder>
          <HoverBorder>
            <div className="h-20 w-40 bg-gradient-to-t from-secondary to-primary"></div>
            <p>
              The Two-Tone Colors symbolize Arabian Access&apos;s strong
              collaboration with clients. Blue represents trust, accountability,
              and loyalty core to our service philosophy.
            </p>
          </HoverBorder>

          <HoverBorder>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold border border-between p-2 rounded w-fit bg-gradient-to-t from-secondary to-primary text-transparent bg-clip-text">
              AB
            </h1>
            <p>
              The Modern, Minimalist Typeface conveys simplicity, clarity, and
              transparency in all of our business interactions.
            </p>
          </HoverBorder>
        </div>
      </div>
    </section>
  );
};

export default OurLogo;
