"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/lib/data";

export default function SkillsOverview() {
  // Show top 4 categories on home
  const featured = skillCategories.slice(0, 4);

  return (
    <section id="skills-overview" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The toolbelt I build with."
          description="Front-end, back-end, data, and cloud — picked deliberately to ship enterprise features end-to-end."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                <span className="text-xs text-slate-400">
                  {cat.skills.length} skills
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{cat.description}</p>

              <ul className="mt-5 space-y-3">
                {cat.skills.slice(0, 5).map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-200">{s.name}</span>
                      <span className="text-slate-500">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors"
          >
            View all skills <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
