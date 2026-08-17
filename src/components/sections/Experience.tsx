"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarRange, BriefcaseBusiness, Building2 } from "lucide-react";

type ExperienceItem = {
  badge: string;
  position: string;
  organization: string;
  period: string;
  description: string;
  image: string;
  imageAlt: string;
};

const experiences: ExperienceItem[] = [
  {
    badge: "👥 Organisasi Mahasiswa",
    position: "Divisi Pengembangan Sumber Daya Manusia (PSDM)",
    organization: "Himpunan Mahasiswa Teknik Informatika (HiMTI)",
    period: "2024 – 2025",
    description:
      "Berperan dalam pengembangan anggota organisasi melalui proses rekrutmen, pelatihan, dan evaluasi. Berkolaborasi dengan pengurus lain dalam menyelenggarakan program kerja serta membangun komunikasi dan kerja sama tim yang baik.",
    image: "/assets/experience/himti.jpg",
    imageAlt: "Himpunan Mahasiswa Teknik Informatika",
  },
  {
    badge: "🏛️ Organisasi Mahasiswa",
    position: "Divisi Pengawasan",
    organization: "Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer (DPM Fasilkom)",
    period: "2025 – Sekarang",
    description:
      "Bertanggung jawab melakukan pengawasan terhadap pelaksanaan program kerja organisasi serta memastikan kegiatan berjalan sesuai aturan yang berlaku. Berkolaborasi dengan berbagai divisi untuk mendukung transparansi, evaluasi, dan tata kelola organisasi yang baik.",
    image: "/assets/experience/dpm.jpg",
    imageAlt: "Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
             EXPERIENCE
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My Experience
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {experiences.map((item, index) => (
            <motion.article
              key={item.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-sm shadow-black/20 transition-all duration-300 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-950/30 sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950/80 p-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/60">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {item.position}
                    </h3>
                    <p className="mt-2 text-base text-zinc-300">{item.organization}</p>
                  </div>
                </div>

                <div className="flex items-center justify-start sm:justify-end">
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                    <BriefcaseBusiness size={14} />
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-300">
                <CalendarRange size={14} className="text-sky-400" />
                <span>{item.period}</span>
              </div>

              <p className="mt-5 text-base leading-8 text-zinc-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
