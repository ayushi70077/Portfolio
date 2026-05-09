import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript & Tailwind.
        </div> */}

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          >
            <Code2 size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="text-sm text-slate-400">
          <Link href="/#contact" className="hover:text-white">
            Let’s build something →
          </Link>
        </div>
      </div>
    </footer>
  );
}
