'use client';
import { useState } from 'react';

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
    <div className="relative bg-[#2a323d]/70 backdrop-blur-md rounded-full px-4 py-3 flex justify-center gap-4 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => handleNavClick(item)}
          className={
            "relative px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-colors " +
            (active === item ? "bg-white text-black shadow" : "text-white")
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
}