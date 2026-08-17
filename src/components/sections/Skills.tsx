"use client";

import { useState } from "react";
import {
  Code2,
  FileCode2,
  Database,
  // Github export not available in this lucide-react build; use GitBranch as closest alternative
  // Github,
  GitBranch,
  Laptop,
  PenTool,
  Send,
  Server,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  category: "Frontend" | "Database" | "Tools" | "Learning";
  level: number; // percent
  icon: any;
};

const skills: Skill[] = [
  { name: "HTML", category: "Frontend", level: 90, icon: FileCode2 },
  { name: "CSS", category: "Frontend", level: 90, icon: FileCode2 },
  { name: "JavaScript", category: "Frontend", level: 85, icon: Code2 },
  { name: "React", category: "Frontend", level: 85, icon: Code2 },
  { name: "Next.js", category: "Frontend", level: 85, icon: Code2 },
  { name: "Tailwind CSS", category: "Frontend", level: 90, icon: FileCode2 },

  { name: "MySQL", category: "Database", level: 75, icon: Database },

  { name: "Git", category: "Tools", level: 80, icon: GitBranch },
  { name: "GitHub", category: "Tools", level: 80, icon: GitBranch },
  { name: "VS Code", category: "Tools", level: 95, icon: Laptop },
  { name: "Figma", category: "Tools", level: 75, icon: PenTool },
];

const categories = ["All", "Frontend", "Database", "Tools", "Learning"] as const;

export default function Skills() {
  const [filter, setFilter] = useState<typeof categories[number]>("All");

  const filtered =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            
          </p>
          <h2
            id="skills-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Skills 
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Berikut adalah teknologi, perangkat, dan framework yang saya gunakan untuk membangun aplikasi
            web modern serta terus meningkatkan keterampilan pengembangan frontend saya.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                filter === c
                  ? "bg-sky-500/10 text-sky-300 border border-sky-500"
                  : "bg-zinc-900/50 text-zinc-300 border border-zinc-800 hover:border-sky-600"
              }`}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filtered.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-sm shadow-black/20 focus-within:ring-2 focus-within:ring-sky-500/30"
                tabIndex={0}
                aria-label={`${skill.name} skill card`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-sky-500/10 bg-sky-500/6 p-2 text-sky-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                      <p className="text-xs text-zinc-400">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-300">{skill.level}%</div>
                </div>

                <div className="mt-4">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="absolute left-0 top-0 h-2 rounded-full bg-sky-500"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
