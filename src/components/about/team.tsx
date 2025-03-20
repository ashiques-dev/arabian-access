import React from "react";
import { EaseInText } from "../home/home-animation";
import Image from "next/image";
import PlusIcons from "../ui/plus-icons";
const teamList = [
  { name: "Jouhar", pos: "Chief Executive Officer", img: "/ceo.png" },
  { name: "Ruby Femin", pos: "Marketing Manager", img: "/mm.png" },
  { name: "Sirajudheen", pos: "Chartered Accountant", img: "/ca.png" },
];

const OurTeam = () => {
  return (
    <>
      <section id="Team" className=" width">
        <div className=" border border-b-0 padding py-10 md:py-14 lg:py-16  relative">
          <PlusIcons />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-center max-w-4xl mx-auto">
            <EaseInText
              top
              word="Meet our team"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>{" "}
          <div className="mt-8 md:mt-10 flex flex-wrap gap-8 justify-center lg:justify-around group/team">
            {teamList.map(({ img, name, pos }, id) => (
              <div
                key={id}
                className="w-full max-w-sm bg-lighter/10 break-all relative overflow-hidden group-hover/team:[&:not(:hover)]:blured group"
              >
                <div className="relative overflow-hidden p-0.5 rounded">
                  <div
                    style={{
                      animationDuration: `${id + 1 * 10}s`,
                      animationDelay: `${id + 0.5 * 1}s`,
                    }}
                    className="absolute inset-0 size-[200%] -left-1/2 -top-1/2 animate-spin bg-[conic-gradient(var(--tw-gradient-stops))] from-secondary/50 via-secondary to-primary dark:from-primary/50 dark:via-primary dark:to-secondary"
                  ></div>
                  <div className="h-96 md:h-[30rem] relative bg-lightest rounded overflow-hidden ">
                    <Image
                      alt={`${name} image`}
                      src={img}
                      height={640}
                      width={480}
                      className="size-full object-center object-cover scale-90 group-hover:scale-100 animated"
                    />
                    <div className="absolute left-2 bottom-2 right-2 rounded  bg-lightest/75 backdrop-blur  px-4 py-2 text-center">
                      <p className="text-xl font-semibold text-darkest">
                        {name}
                      </p>
                      <p className="font-medium text-darker">{pos}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
