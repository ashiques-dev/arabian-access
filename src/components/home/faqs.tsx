import React from "react";
import PlusIcons from "../ui/plus-icons";
import { EaseInText, FaqQuestions } from "./home-animation";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Faqs = () => {
  return (
    <section id="Faqs" className="width">
      <div className="border border-b-0 padding relative py-20 md:py-32 lg:py-40">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsla(var(--lighter)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--lighter)/0.5)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="absolute top-0 inset-0  bg-[radial-gradient(hsla(var(--lighter)/0.8)_1px,transparent_1px)] bg-[size:10px_10px]" />

        <PlusIcons />
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-center ">
            <EaseInText
              top
              word="FAQ'S"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>
          <p className="mt-5 text-base md:text-lg lg:text-xl font-medium text-balance text-center">
            Discover solutions to frequently asked questions regarding our
            services and how we can support you.
          </p>
          <FaqQuestions />
          <div className="mt-20 md:mt-24 lg:mt-28 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darker ">
              Still have questions?
            </h2>
            <p className="mt-5 text-base md:text-lg lg:text-xl">
              We&apos;re here to help you with any inquiries.
            </p>
          </div>
          <div className=" mt-12 md:mt-16 flex justify-center gap-10 md:gap-16 flex-wrap group/parent ">
            <div className="flex flex-col items-center group group-hover/parent:[&:not(:hover)]:text-light animated ">
              <div className="relative p-0.5 md:p-[3px] overflow-hidden  rounded  group-hover:scale-105  group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-red-500 animated group-hover:animate-wiggle ">
                <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500"></div>
                <div className="bg-lightest relative p-2  rounded  ">
                  <PhoneIcon className="text-darkest size-4 md:size-6" />
                </div>
              </div>

              <Link href={"/"} className="block mt-4 ">
                +966 550049513
              </Link>
              <Link href={"/"} className="block mt-1">
                +91 8547738979
              </Link>
            </div>

            <div className="flex flex-col items-center group group-hover/parent:[&:not(:hover)]:text-light animated">
              <div className="relative p-0.5 md:p-[3px] overflow-hidden rounded group-hover:scale-105 group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-lime-500 animated group-hover:animate-wiggle">
                <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-green-500 via-lime-600 to-yellow-400"></div>
                <div className="bg-lightest relative p-2 rounded ">
                  <MailIcon className="text-darkest size-4 md:size-6" />
                </div>
              </div>

              <Link href={"/"} className="block mt-4 ">
                info@arabianaccess.com
              </Link>
              <Link href={"/"} className="block mt-1">
                jouhar@arabianaccess.com
              </Link>
            </div>

            <div className="flex flex-col items-center text-balance max-w-lg group group-hover/parent:[&:not(:hover)]:text-light animated">
              <div className="relative p-0.5 md:p-[3px] overflow-hidden rounded group-hover:scale-105 group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-purple-500 animated group-hover:animate-wiggle">
                <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500 via-purple-600 to-yellow-400"></div>
                <div className="bg-lightest relative p-2 rounded ">
                  <MapPinIcon className="text-darkest size-4 md:size-6" />
                </div>
              </div>

              <p className="mt-4 ">
                Al Malaz Akaria Building Tower 1, Building No : 6567
                <br />
                Salah Al Din Ayoubi Rd,Al Zahara 12812,Saudi Arabia
              </p>
              <p className="mt-2">
                First Floor Dubai Plaza Building <br />
                Edakkara (PO), Malappuram, Kerala, India 679331
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
