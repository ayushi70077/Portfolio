"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Code,
    title: "Frontend craft",
    text: "React + TypeScript UIs that are responsive, accessible, and easy to evolve.",
  },
  {
    icon: Database,
    title: "API & data",
    text: "Clean RESTful services on ASP.NET Core with optimized SQL Server objects.",
  },
  {
    icon: Cloud,
    title: "Ship to Azure",
    text: "Azure DevOps CI/CD across multiple repos for zero-downtime releases.",
  },
  {
    icon: Sparkles,
    title: "Quality mindset",
    text: "Reusable components, clear contracts, and steady reductions in UI defects.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A full-stack engineer who actually ships."
          description={profile.summary}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              className="glass glass-hover rounded-xl p-5"
            >
              <div className="h-10 w-10 rounded-lg bg-violet-600/15 border border-violet-500/30 grid place-items-center text-violet-300">
                <p.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
