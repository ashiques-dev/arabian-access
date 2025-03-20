import React from "react";
import { EaseInText } from "../home/home-animation";
import PlusIcons from "../ui/plus-icons";

const ourValues = [
  "Integrity",
  "Customer-centric ",
  "Results-Oriented",
  "Accountability",
  "Transparency",
  "Trust & Dependability",
];

const OurValue = () => {
  return (
    <>
      <section id="Value" className=" width">
        <div className=" border border-b-0 padding py-20 md:py-32 lg:py-40  relative">
          <PlusIcons />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            <EaseInText
              top
              word="The values that inspire us"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>
          <div className="mt-8 md:mt-14 flex flex-wrap gap-4 justify-center max-w-3xl mx-auto group/text">
            {ourValues.map((ourValue, id) => (
              <div
                key={id}
                className="px-4 py-2 rounded border inline-flex items-center gap-2 relative group hover:scale-105 transition duration-300 hover:bg-lighter shadow-md group-hover/text:[&:not(:hover)]:text-light"
              >
                <span className="bg-gradient-to-tr from-primary to-secondary text-lightest size-6 text-xl rounded-full inline-flex items-center justify-center group-hover:rotate-45  tranistion duration-300">
                  &#10038;
                </span>
                <span className=" group-hover:text-darkest font-medium animated">
                  {ourValue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValue;
