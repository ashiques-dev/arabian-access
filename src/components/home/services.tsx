import React from "react";
import { linkVariants, servicesData, TService } from "./home-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import PlusIcons from "../ui/plus-icons";
import { EaseInText } from "./home-animation";

const Services = () => {
  return (
    <section
      id="Services"
      className="width [mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_5%,rgba(0,0,0,1)_100%)] group/service"
    >
      <div className="relative pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-14 lg:pb-16 border border-b-0 border-t-0 ">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center ">
          <EaseInText
            word="Our services"
            textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
          />
        </h1>
      </div>
      {servicesData.map((service, id) => (
        <ServiceCard key={id} service={service} />
      ))}
    </section>
  );
};

export default Services;

const ServiceCard = ({ service }: { service: TService }) => {
  return (
    <>
      <div
        className={cn(
          " padding group py-10 md:py-14 lg:py-16 sticky top-2 z-10 bg-lightest border border-b-0 group-hover/service:[&:not(:hover)]:blured",
          service.id == 1 && "border-t-0"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 to-lighter from-lightest transition-all opacity-0 group-hover:opacity-100 duration-300",

            service.id === 4
              ? "bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-lighter via-lightest to-lighter/10 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,#000_70%,transparent_100%)] "
              : service.id % 2 === 0
              ? "bg-gradient-to-bl"
              : "bg-gradient-to-br"
          )}
        />
        {service.id == 4 && (
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsla(var(--lighter)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--lighter)/0.4)_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,#000_70%,transparent_100%)]  "></div>
        )}
        {service.id !== 1 && <PlusIcons />}

        <div className=" grid lg:grid-cols-2 gap-8 items-center relative group">
          <div className={cn(service.id % 2 === 0 && "lg:order-2")}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight lg:text-balance  text-darkest">
              {service.title}
            </h3>
            <p className="mt-5 lg:mt-8 text-balance leading-tight md:text-base ">
              {service.content}
            </p>

            <div className="mt-5 lg:mt-8">
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
          <div
            className={cn(
              "h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-lighter",
              service.id % 2 === 0 && "lg:order-1"
            )}
          >
            <Image
              alt={service.alt}
              src={service.image}
              height={640}
              width={480}
              className="size-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
