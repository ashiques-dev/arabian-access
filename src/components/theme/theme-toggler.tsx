"use client";
import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const themeIcons = [
  { name: "light", icon: <SunIcon /> },
  { name: "dark", icon: <MoonIcon /> },
  { name: "system", icon: <MonitorCogIcon /> },
];

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <>
      <div className="flex gap-2">
        {themeIcons.map(({ icon, name }) => (
          <motion.button
            key={name}
            disabled={theme === name ? true : false}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-light shadow-sm hover:bg-lighter text-dark hover:text-darkest size-8"
            whileHover={{ scale: 1.2 }}
            whileFocus={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setTheme(name);
            }}
          >
            {icon}
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default ThemeToggler;
