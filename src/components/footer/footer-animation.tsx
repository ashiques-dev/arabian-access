"use client";

import { usePathname } from "next/navigation";
import { Links } from ".";

export const FooterBg = () => {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(hsla(var(--lighter)/0.5)_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_10%,#000_70%,transparent_100%)]"></div>
  );
};

export const InPageNavigate = () => {
  const pathname = usePathname();
  let links: { label: string; href: string }[] = [];

  if (pathname === "/about") {
    links = aboutPage;
  } else {
    links = homePage;
  }

  if (links.length === 0) return null;

  return <Links title="Navigations" links={links} />;
};

const homePage = [
  {
    label: "Introduction",
    href: "/#Introduction",
  },
  {
    label: "Services",
    href: "/#Services",
  },
  {
    label: "Info",
    href: "/#Info",
  },
  {
    label: "Faq",
    href: "/#Faqs",
  },
];

const aboutPage = [
  {
    label: "Our Story",
    href: "#Story",
  },
  {
    label: "About Logo",
    href: "#Logo",
  },
  {
    label: "The Value",
    href: "#Value",
  },
  {
    label: "Our Team",
    href: "#Team",
  },
  {
    label: "Hire Us",
    href: "#Invite",
  },
];
