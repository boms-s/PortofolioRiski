"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const educationItems = [
  {
    icon: MapPin,
    label: "Jakarta, Indonesia",
  },
  {
    icon: Calendar,
    label: "2023 – Sekarang",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
          EDUCATION
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My Education
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="mt-10"
        >
          <motion.article
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-sm shadow-black/20 transition-all duration-300 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-950/30 sm:p-7"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950/80 p-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/60">
                  <Image
                    src="/assets/education/mercu.png"
                    alt="Universitas Mercu Buana"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    S1 Teknik Informatika
                  </h3>
                  <p className="mt-2 text-base text-zinc-300">Universitas Mercu Buana</p>
                </div>
              </div>

              <div className="flex items-center justify-start sm:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                  <GraduationCap size={14} />
                  🎓 Universitas
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-300 sm:flex-row sm:flex-wrap">
              {educationItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2">
                  <Icon size={14} className="text-sky-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Saat ini sedang menempuh pendidikan S1 Teknik Informatika di Universitas Mercu Buana dengan fokus pada pengembangan web, rekayasa perangkat lunak, basis data, dan UI/UX. Aktif mengembangkan kemampuan melalui proyek akademik maupun proyek pribadi untuk menciptakan aplikasi web yang responsif dan mudah digunakan.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
}
