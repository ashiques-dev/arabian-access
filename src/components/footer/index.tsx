import React from "react";
import ThemeToggler from "../theme/theme-toggler";
import LogoSvg from "../ui/logo";
import PlusIcons from "../ui/plus-icons";
import { scocialLinks, servicesList } from "./footer-data";
import Link from "next/link";
import { navLinks } from "../navbar/navbar-data";
import { cn } from "@/lib/utils";
import { FooterBg, InPageNavigate } from "./footer-animation";

const Footer = () => {
  return (
    <>
      <footer className="width border-t">
        <div className="border-l border-r border-b padding relative py-10 md:py-14 lg:py-16 ">
          <FooterBg />
          <PlusIcons />

          <div className="relative flex flex-col md:flex-row flex-wrap gap-10 md:justify-between xl:justify-around">
            <Logo />
            <Scocial />
            <Links
              title="Quick links"
              links={[
                {
                  label: "Home",
                  href: "/#Home",
                },
                ...navLinks,
              ]}
            />
            <Links title="Services" links={servicesList} />
            <InPageNavigate />
          </div>
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;

export const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={cn("group/logo uppercase flex flex-col", className)}>
        <div className="flex items-center gap-2">
          <div>
            <LogoSvg className="size-16 md:size-20" hover />
          </div>
          <div className=" text-xl md:text-2xl font-semibold  bg-gradient-to-b group-hover/logo:bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">
            <div className="">Arabian</div>
            <div className="">Access</div>
          </div>
        </div>
        <div className="text-xs">Management Consultants</div>
      </div>
    </>
  );
};

const Scocial = () => {
  return (
    <>
      <div className="group/scocial">
        <h4 className="text-base font-medium">Follow Us</h4>
        <div className="flex gap-3 mt-5">
          {scocialLinks.map(({ href, icon }, id) => (
            <Link
              href={href}
              key={id}
              className="inline-flex size-8 fill-dark group-hover/scocial:[&:not(:hover)]:fill-light animated"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
const Copyright = () => {
  return (
    <>
      <div className="relative mt-10 md:mt-16 flex flex-wrap sm:flex-row-reverse gap-y-5 gap-x-10 justify-between items-center">
        <ThemeToggler />
        <p className="flex items-center gap-2 text-sm">
          <span className="size-2.5 bg-darker rounded-full relative">
            <span className="absolute inset-0 rounded-full animate-ping bg-darker"></span>
          </span>
          &copy; {new Date().getFullYear()} Arabian Access. All rights reserved.
        </p>
      </div>
    </>
  );
};

export const Links = ({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) => {
  return (
    <div className="group/text">
      <h4 className="text-base text-darker font-medium">{title}</h4>
      <div className="flex flex-col gap-1 mt-5 ">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="break-all py-2 flex group group-hover/text:[&:not(:hover)]:text-light"
          >
            <span className="group-hover:translate-x-2 group-hover:scale-105  animated">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
