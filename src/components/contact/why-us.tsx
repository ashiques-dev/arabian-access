import React from "react";
import { EaseInText } from "../home/home-animation";
import { HoverBorder } from "../about/about-animation";

const whyUs = [
  {
    title: "Personalized Solutions ",
    text: " Every business is different, and we customize our services to fit your needs.",
  },
  {
    title: "Expert Knowledge",
    text: "Our team has years of experience in different industries.",
  },
  {
    title: "Vision-Driven Strategy",
    text: " We align businesses with Saudi Arabia's growing economy.",
  },
  {
    title: "Focus on Results",
    text: " We don't just offer advice; we help you get real results.",
  },
];

const WhyUs = () => {
  return (
    <>
      <section id="Story" className=" width">
        <div className="border-r border-l padding pt-20 md:pt-32 lg:pt-40 py-10 md:py-14 lg:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            <EaseInText
              word="Why Work With Arabian Access?"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>
          <div className="mt-8 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4 group/text">
            {whyUs.map(({ text, title }, id) => (
              <HoverBorder key={id}>
                <p className="text-lg font-semibold text-darkest ">{title} </p>
                <p>{text} </p>
              </HoverBorder>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
