"use client";

import { FormEvent, useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 20) {
      setStatus("error");
      setError("Please enter a valid name, email, and a message of at least 20 characters.");
      return;
    }

    // Frontend-only: open user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something good."
          description="I’m open to front-end and full-stack opportunities and interesting collaborations."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-hover rounded-xl p-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-violet-600/15 border border-violet-500/30 grid place-items-center text-violet-300">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email</div>
                <div className="text-white">{profile.email}</div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-xl p-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 grid place-items-center text-emerald-300">
                <Linkedin size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-400">LinkedIn</div>
                <div className="text-white">/in/ayushi-yadav-8393b3261</div>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-xl p-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-amber-500/15 border border-amber-500/30 grid place-items-center text-amber-300">
                <Github size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-400">GitHub</div>
                <div className="text-white">View my repositories</div>
              </div>
            </a>

            <div className="text-sm text-slate-400 px-1">
              Based in {profile.location.split(",")[0]}, available remote.
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field
                label="Email address"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the role, project, or idea…"
                className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400/60 focus:bg-white/[0.06] outline-none transition"
              />
            </div>

            {status === "error" && error && (
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <AlertCircle size={16} /> {error}
              </div>
            )}
            {status === "sent" && (
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <CheckCircle2 size={16} /> Opening your email client…
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-slate-500">
                Submits via your default email client. No backend required.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow disabled:opacity-60"
              >
                <Send size={14} /> Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-violet-400/60 focus:bg-white/[0.06] outline-none transition"
      />
    </div>
  );
}
