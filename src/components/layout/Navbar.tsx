"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-950/80 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-12 px-4 py-5 sm:px-6 lg:px-8"
      >
        <a href="#home" className="text-xl font-semibold tracking-[0.3em] text-zinc-100">
          MUHAMAD RISKI PURWANTO
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          className="flex items-center justify-center rounded-md border border-zinc-800 p-2 text-zinc-200 transition hover:border-zinc-700 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div id="mobile-nav-menu" className="md:hidden">
        {isMenuOpen && (
          <div className="border-t border-zinc-800/80 bg-zinc-950/95 px-4 py-4 shadow-lg backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
