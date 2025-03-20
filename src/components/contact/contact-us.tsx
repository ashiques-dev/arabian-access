import React from "react";
import { EaseInText } from "../home/home-animation";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <section id="Story" className=" width">
        <div className="border-r border-l padding  py-10 md:py-14 lg:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            <EaseInText
              word="Contact Us"
              textColor=" bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text"
            />
          </h1>
          <div className="mt-8 md:mt-14">
            <div className="flex flex-wrap gap-10 justify-center group/parent">
              <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                <Contact />
                <Mail />
              </div>
              <Address />
            </div>
            <Maps />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

const Address = () => {
  return (
    <>
      <div className="flex flex-col items-center group relative group-hover/parent:[&:not(:hover)]:text-light">
        <div className="relative p-0.5 md:p-[3px] overflow-hidden rounded group-hover:scale-105 group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-purple-500 animated group-hover:animate-wiggle">
          <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500 via-purple-600 to-yellow-400"></div>
          <div className="bg-lightest relative p-2 rounded ">
            <MapPinIcon className="text-darkest size-4 md:size-6" />
          </div>
        </div>
        <div className="mt-4">
          <div className="">
            <p>Saudi Arabia</p>
            <p> Al Malaz Akaria Building Tower 1, Building No : 6567</p>
            <p>Salah Al Din Ayoubi Rd,Al Zahara 12812,Saudi Arabia</p>
          </div>
          <div className="mt-3">
            <p>India</p>
            <p> First Floor, Dubai Plaza Building</p>
            <p>Edakkara, Malappuram, Kerala, India 679331</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center relative group group-hover/parent:[&:not(:hover)]:text-light">
        <div className="relative p-0.5 md:p-[3px] overflow-hidden  rounded  group-hover:scale-105  group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-red-500 animated group-hover:animate-wiggle w-fit">
          <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500"></div>
          <div className="bg-lightest relative p-2  rounded  ">
            <PhoneIcon className="text-darkest size-4 md:size-6" />
          </div>
        </div>
        <Link href={"/"} className="flex mt-4">
          +966 550049513
        </Link>
        <Link href={"/"} className="flex mt-1">
          +91 8547738979
        </Link>
      </div>
    </>
  );
};

const Mail = () => {
  return (
    <>
      <div className="flex flex-col items-center relative group group-hover/parent:[&:not(:hover)]:text-light">
        <div className="relative p-0.5 md:p-[3px] overflow-hidden rounded group-hover:scale-105 group-hover:shadow-[0px_10px_20px_var(--tw-shadow-colored)] group-hover:shadow-lime-500 animated group-hover:animate-wiggle">
          <div className="absolute size-[150%] -left-1/4 -top-1/4 animate-spin  [animation-duration:3s] bg-[conic-gradient(var(--tw-gradient-stops))] from-green-500 via-lime-600 to-yellow-400"></div>
          <div className="bg-lightest relative p-2 rounded ">
            <MailIcon className="text-darkest size-4 md:size-6" />
          </div>
        </div>
        <Link href={"/"} className="flex mt-4">
          info@arabianaccess.com
        </Link>
        <Link href={"/"} className="flex mt-1">
          jouhar@arabianaccess.com
        </Link>
      </div>
    </>
  );
};

const Maps = () => {
  return (
    <>
      <div className="h-96 lg:h-[30rem] grayscale-[0.7] rounded mt-10 md:mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1047.391467658621!2d46.725296328403054!3d24.684291640792548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f077cde405687%3A0x68af72d3007f8039!2sArabian%20Access!5e0!3m2!1sen!2sin!4v1739806509690!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full rounded"
        />
      </div>
    </>
  );
};
