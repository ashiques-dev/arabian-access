import { Dispatch, SetStateAction } from "react";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
];

export const NavbarVisibilityVariant = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-75%",
  },
};

export const mobileMenucontainer = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.05,
    },
  },
};

export const mobileMenuLinkItem = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
};

export type TMobileNavButton = {
  closeMobileNav: () => void;
  isOpen: boolean;
};

export type TPosition = {
  left: number;
  width: number;
  height: number;
  opacity: number;
};
export type TLinkItem = {
  link: {
    label: string;
    href: string;
  };
  pathname: string;
  setPosition: Dispatch<SetStateAction<TPosition>>;
};
