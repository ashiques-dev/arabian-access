"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LogoSvg from "../ui/logo";
import {
  mobileMenucontainer,
  mobileMenuLinkItem,
  NavbarVisibilityVariant,
  navLinks,
  TLinkItem,
  TMobileNavButton,
  TPosition,
} from "./navbar-data";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { ChevronDownIcon } from "lucide-react";
const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > 50);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = "auto";
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  return (
    <>
      <motion.header
        whileHover="visible"
        onFocusCapture={() => {
          setHidden(false);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
          document.body.style.overflow = "auto";
        }}
        variants={NavbarVisibilityVariant}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed w-full top-0 z-50"
      >
        <div
          className={cn(
            "width border-b py-3 px-4 md:py-5 md:px-6 bg-lightest/50  backdrop-blur",
            isOpen && "h-dvh"
          )}
        >
          <div className="max-w-screen-md mx-auto flex justify-between items-center">
            <div
              className="flex items-center gap-2 group/logo text-xl font-semibold tracking-tight cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
                router.push("/");
              }}
            >
              <LogoSvg />
              <span className="bg-gradient-to-t group-hover/logo:bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">
                Arabian Access
              </span>
            </div>
            <nav
              onMouseLeave={() => {
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }));
              }}
              className="hidden md:flex items-center gap-x-4 relative"
            >
              {navLinks.map((link, id) => (
                <LinkItem
                  key={id}
                  link={link}
                  setPosition={setPosition}
                  pathname={pathname}
                />
              ))}
              <Bubble position={position} />
            </nav>
            <MobileNavButton closeMobileNav={closeMobileNav} isOpen={isOpen} />
          </div>
          <MobileNavMenu
            isOpen={isOpen}
            closeMobileNav={closeMobileNav}
            pathname={pathname}
          />
        </div>

        {!isOpen && hidden && (
          <div
            onClick={() => {
              setHidden(false);
            }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 border rounded p-0.5 bg-lightest text-darkest cursor-grab "
          >
            <ChevronDownIcon />
          </div>
        )}
      </motion.header>
    </>
  );
};

export default NavBar;
const LinkItem = ({ link, setPosition, pathname }: TLinkItem) => {
  const ref = useRef<null | HTMLAnchorElement>(null);

  return (
    <Link
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width, height } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          height,
          opacity: 1,
        });
      }}
      ref={ref}
      href={link.href}
      className={cn(
        "block h-9 px-4 py-2 rounded text-lightest dark:text-darkest z-10 font-medium relative",
        pathname === link.href
          ? " text-red-500 dark:text-red-500  underline decoration-1 underline-offset-2"
          : "mix-blend-difference"
      )}
    >
      {link.label}
    </Link>
  );
};
const Bubble = ({ position }: { position: TPosition }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 rounded bg-darkest"
    />
  );
};
const MobileNavButton = ({ closeMobileNav, isOpen }: TMobileNavButton) => {
  return (
    <div className="md:hidden border rounded p-0.5">
      <button
        className="flex flex-col justify-around items-center p-1 size-8 "
        onClick={closeMobileNav}
      >
        <div
          className={cn(
            "h-[0.15rem] w-1/2 rounded-full bg-darker place-self-end origin-top-right transition-transform duration-300",
            isOpen && "-rotate-45 -translate-x-1"
          )}
        ></div>
        <div
          className={cn(
            "h-[0.15rem] w-full rounded-full bg-darker transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        ></div>
        <div
          className={cn(
            "h-[0.15rem] w-1/2 rounded-full bg-darker place-self-start origin-bottom-left transition-transform duration-300",
            isOpen && "-rotate-45 translate-x-1"
          )}
        ></div>
      </button>
    </div>
  );
};

const MobileNavMenu = ({
  isOpen,
  closeMobileNav,
  pathname,
}: {
  isOpen: boolean;
  closeMobileNav: () => void;
  pathname: string;
}) => {
  const MotionLink = motion.create(Link);
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <motion.nav
            variants={mobileMenucontainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col py-16 group/text"
          >
            {navLinks.map((link, id) => (
              <MotionLink
                variants={mobileMenuLinkItem}
                onClick={closeMobileNav}
                key={id}
                href={link.href}
                className="relative group text-base font-medium  py-4 flex text-darker  group-hover/text:[&:not(:hover)]:text-light"
              >
                <span
                  className={cn(
                    "group-hover:scale-110  group-hover:translate-x-4 transition-all  duration-300 relative ",
                    pathname === link.href
                      ? " text-red-500  underline decoration-1 underline-offset-2"
                      : "after:absolute after:content-[''] after:h-px after:w-full after:left-0 after:bottom-0 after:bg-gradient-to-l after:from-between after:to-darkest after:scale-x-0 group-hover:after:scale-x-100 after:origin-bottom-right group-hover:after:origin-bottom-left after:transition-transform after:duration-500"
                  )}
                >
                  {link.label}
                </span>
              </MotionLink>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
