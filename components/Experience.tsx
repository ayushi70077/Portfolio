"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve been shipping."
          description="Hands-on work across enterprise web apps and React + Electron desktop platforms."
        />

        <ol className="mt-12 relative border-l border-white/10 pl-6 md:pl-8 space-y-10">
          {experiences.map((e, idx) => (
            <motion.li
              key={`${e.company}-${e.start}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[34px] md:-left-[42px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-violet-500 to-emerald-400 ring-4 ring-ink-950" />

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={14} className="text-violet-400" />
                    <span className="text-white font-semibold">{e.role}</span>
                  </span>
                  <span>•</span>
                  <span className="text-slate-200">{e.company}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} /> {e.location}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} /> {e.start} – {e.end}
                  </span>
                </div>

                <div className="mt-2 text-sm text-emerald-300">{e.project}</div>

                <ul className="mt-4 space-y-2 text-slate-300 text-[15px] leading-relaxed">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {e.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
