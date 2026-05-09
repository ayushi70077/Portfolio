"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const NAV = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Skills", href: "/skills", section: "skills" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Projects", href: "/projects", section: "projects" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Ayushi Yadav — Home" className="group inline-flex items-center">
          <Logo
            size={48}
            className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_8px_22px_rgba(225,29,72,0.5)]"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="/resume.pdf"
              download="Ayushi-Yadav-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-violet-600 to-emerald-500 text-white shadow-glow hover:shadow-[0_0_50px_-5px_rgba(139,92,246,0.6)] transition-shadow"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-slate-200 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl"
          >
            <ul className="px-5 py-4 space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-slate-200 hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download="Ayushi-Yadav-Resume.pdf"
                  className="block text-center mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-violet-600 to-emerald-500 text-white font-medium"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
