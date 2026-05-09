"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";

const CATEGORIES = ["All", "Featured", "Full Stack", "Frontend", "Backend"] as const;
type Cat = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchCat =
        active === "All"
          ? true
          : active === "Featured"
          ? !!p.featured
          : p.category === active;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <div className="pt-32 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="mt-6">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400">
            Projects
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Things I’ve designed, built, and shipped.
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl">
            A blend of production work at MAQ Software and personal projects
            that taught me the most.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative md:w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, stacks…"
              className="w-full rounded-lg bg-white/[0.04] border border-white/10 pl-9 pr-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400/60 outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  active === c
                    ? "bg-violet-500/15 border-violet-400/50 text-white"
                    : "border-white/10 text-slate-300 hover:bg-white/[0.04]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p, idx) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-200">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-amber-300">
                    <Star size={12} className="fill-amber-300" /> Featured
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
              <p className="mt-3 text-[15px] text-slate-300 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm">
                {p.links?.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-violet-300 hover:text-white"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                <span className="ml-auto text-xs text-slate-500">{p.period}</span>
              </div>
            </motion.article>
          ))}

          {visible.length === 0 && (
            <div className="md:col-span-2 text-center text-slate-400 py-20">
              No projects match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
