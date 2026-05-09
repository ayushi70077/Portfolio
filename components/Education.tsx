"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Education & Credentials"
          title="The foundation."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-violet-600/15 border border-violet-500/30 grid place-items-center text-violet-300">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <div className="mt-4">
              <div className="text-white font-medium">{education.degree}</div>
              <div className="text-slate-400 text-sm">{education.school}</div>
              <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">
                <span>{education.period}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span className="text-emerald-300">CGPA {education.cgpa}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 grid place-items-center text-emerald-300">
                <Award size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">Certifications</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm">
                  <div className="text-white">{c.name}</div>
                  <div className="text-slate-400">{c.issuer}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
