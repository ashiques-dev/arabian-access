import Image from "next/image";
import React from "react";
import { EaseInText } from "../home/home-animation";

const Story = () => {
  return (
    <>
      <section id="Story" className=" width">
        <div className="border-r border-l padding pt-20 md:pt-32 lg:pt-40 py-10 md:py-14 lg:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            <EaseInText
              word="How we started"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>

          <div className="mt-8 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className=" lg:col-span-7 text-pretty">
              <p className="indent-10">
                Every big adventure has a starting point, and ours began with
                Mr. Jouhar, our smart CEO. He found out that many people in
                Saudi Arabia who wanted to start their own businesses needed
                help and advice. To help them, we started the Vision project,
                which has helped create over 20,000 new businesses. But, some of
                these businesses faced problems and needed guidance to do well
                in a fast-changing world.
              </p>
              <p className="mt-3">
                To help these businesses even more, we created Arabian Access.
                With a lot of experience, our CEO and a great team of experts
                made this exciting idea come true. The Vision project not only
                led to Arabian Access but also inspired our mission: to help
                every business reach its full potential and succeed in a place
                filled with opportunities.
              </p>
            </div>
            <div className=" lg:col-span-5 h-72 sm:h-96 md:h-[28rem] rounded-lg overflow-hidden ">
              <Image
                alt="about image"
                src="/about.webp"
                height={640}
                width={480}
                className="size-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
