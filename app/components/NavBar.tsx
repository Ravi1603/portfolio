'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
  "Home",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Achievements",
  "Contact"
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const handleNavClick = (item: string) => {
    setActive(item);
    const el = document.getElementById(item);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#2a323d] rounded-full px-4 py-3 flex justify-center gap-6 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => handleNavClick(item)}
          className="relative px-5 py-2 rounded-full text-s font-large cursor-pointer"
        >
          {active === item && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-white rounded-full shadow"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span
            className={clsx(
              "relative z-10",
              active === item ? "text-black" : "text-white"
            )}
          >
            {item}
          </span>
        </button>
      ))}
    </div>
  );
}