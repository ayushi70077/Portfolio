"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && next === "") {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-[-2px] bg-violet-400 ml-1 animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          Hi, I’m <span className="text-gradient">Ayushi Yadav</span>.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-slate-300 max-w-3xl"
        >
          {profile.role} <span className="text-slate-500">@</span>{" "}
          <span className="text-white">{profile.company}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-lg sm:text-xl text-slate-400"
        >
          <Typewriter words={profile.taglines} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:shadow-[0_0_60px_-5px_rgba(139,92,246,0.6)] transition-shadow"
          >
            <Sparkles size={16} /> View My Work
          </Link>
          <a
            href="/resume.pdf"
            download="Ayushi-Yadav-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.06] hover:border-violet-400/40 transition"
          >
            <Download size={16} /> Download Resume
          </a>
          <Link
            href="/#contact"
            className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
          >
            or get in touch →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {profile.highlights.map((h) => (
            <div
              key={h.label}
              className="glass glass-hover rounded-xl p-5"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                {h.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-slate-400">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-slate-400 hover:text-white animate-bounce"
          >
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}
