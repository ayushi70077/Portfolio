"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A mix of production work and personal builds across full-stack and front-end."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((p, idx) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              className="group glass glass-hover rounded-2xl p-6 flex flex-col"
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

              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>

              <p className="mt-4 text-[15px] text-slate-300 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((t) => (
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
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors"
          >
            See all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
