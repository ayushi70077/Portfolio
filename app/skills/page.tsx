"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { skillCategories } from "@/lib/data";

export default function SkillsPage() {
  const categories = ["All", ...skillCategories.map((c) => c.name)];
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const totalSkills = skillCategories.reduce(
    (n, c) => n + c.skills.length,
    0
  );

  const visible = useMemo(() => {
    return skillCategories
      .filter((c) => active === "All" || c.name === active)
      .map((c) => ({
        ...c,
        skills: c.skills.filter((s) =>
          s.name.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((c) => c.skills.length > 0);
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
            Technical arsenal
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">
            {totalSkills}+ technologies, picked with intent.
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl">
            Across front-end, back-end, data, and cloud — focused on what
            actually ships in production.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative md:w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a skill…"
              className="w-full rounded-lg bg-white/[0.04] border border-white/10 pl-9 pr-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400/60 outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
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

        {/* Categories */}
        <div className="mt-12 space-y-12">
          {visible.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  {cat.name}
                </h2>
                <span className="text-sm text-slate-400">
                  {cat.skills.length} skills
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{cat.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.03 }}
                    className="glass glass-hover rounded-xl p-5"
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="text-white font-medium">{s.name}</div>
                      <div className="text-xs text-slate-400">
                        {s.years ? `${s.years}y` : "—"}
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"
                      />
                    </div>
                    <div className="mt-2 text-right text-xs text-slate-500">
                      {s.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="text-center text-slate-400 py-20">
              No skills match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
