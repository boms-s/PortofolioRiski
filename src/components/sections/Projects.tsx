  "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = {
  label: string;
  src: string;
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  cover: string;
  gallery: GalleryItem[];
};

const projects: Project[] = [
  {
    name: "Kantin Pintar",
    description:
      "Website pemesanan makanan yang dirancang untuk mempermudah pengguna melihat menu dan melakukan pemesanan.",
    technologies: ["Next.js", "MySQL", "Tailwind CSS"],
    cover: "/projects/kantin-pintar/cover.jpg",
    gallery: [
      { label: "Login", src: "/projects/kantin-pintar/login.jpg" },
      { label: "Dashboard", src: "/projects/kantin-pintar/dashboard.jpg" },
      { label: "Menu", src: "/projects/kantin-pintar/menu.jpg" },
      { label: "Checkout", src: "/projects/kantin-pintar/checkout.jpg" },
    ],
  },
  {
    name: "SIM Karyawan",
    description:
      "Aplikasi manajemen data karyawan yang dibuat untuk mengelola informasi karyawan secara terstruktur.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    cover: "/projects/sim-karyawan/coverkar.jpg",
    gallery: [
      { label: "Login", src: "/projects/sim-karyawan/coverkar.jpg" },
      { label: "Data Karyawan", src: "/projects/sim-karyawan/datakar.jpg" },
      { label: "Tambah Karyawan", src: "/projects/sim-karyawan/tambahkar.jpg" },
      { label: "Detail Karyawan", src: "/projects/sim-karyawan/detailkar.jpg" },
      { label: "Edit Karyawan", src: "/projects/sim-karyawan/editkar.jpg" },
    ],
  },
  {
    name: "AI ChatBot",
    description:
      "Aplikasi chatbot berbasis AI yang dibangun menggunakan Python, Streamlit, dan Google Gemini API untuk memberikan percakapan real-time dengan antarmuka yang responsif dan mudah digunakan.",
    technologies: ["Python", "Streamlit", "Google Gemini API", "Generative AI"],
    cover: "/projects/ai.chatbotmahasiswa/chatbot.jpg",
    gallery: [
      { label: "Chatbot Interface", src: "/projects/ai.chatbotmahasiswa/chatbot.jpg" },
    ],
  },
];

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  const activeProject =
    activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  useEffect(() => {
    if (activeProjectIndex === null) {
      setActiveScreenshotIndex(0);
      return;
    }

    setActiveScreenshotIndex(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProjectIndex]);

  const openProjectGallery = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
  };

  const closeGallery = () => {
    setActiveProjectIndex(null);
  };

  return (
    <section id="projects" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Project utama yang mewakili fokus pengembangan saya.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Saat ini saya menampilkan tiga project utama yang mencerminkan pengalaman saya dalam membangun solusi web yang fungsional dan mudah digunakan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-sm shadow-black/20"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-950/80">
                <Image
                  src={project.cover}
                  alt={`${project.name} cover`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent px-5 py-4">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openProjectGallery(index)}
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                  >
                    View Project
                  </button>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 sm:px-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-gallery-title"
            className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60"
          >
            <div className="flex items-start justify-between border-b border-zinc-800 px-6 py-5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Project Gallery</p>
                <h3 id="project-gallery-title" className="mt-2 text-2xl font-semibold text-white">
                  {activeProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close project gallery"
                className="rounded-full border border-zinc-700 bg-zinc-900/90 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 px-6 py-6 lg:grid-cols-[2fr_1fr] lg:px-8 lg:py-8">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                  <div className="relative aspect-[16/10] w-full flex items-center justify-center">
                    <Image
                      src={activeProject.gallery[activeScreenshotIndex].src}
                      alt={`${activeProject.name} ${activeProject.gallery[activeScreenshotIndex].label}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 text-sm text-zinc-300">
                  <p className="font-medium text-white">{activeProject.gallery[activeScreenshotIndex].label}</p>
                  <p className="mt-2 text-zinc-400">
                    Lihat detail tampilan {activeProject.name.toLowerCase()} di layar utama.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
                    Screenshots
                  </p>
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                    {activeProject.gallery.map((item, itemIndex) => {
                      const isActive = itemIndex === activeScreenshotIndex;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setActiveScreenshotIndex(itemIndex)}
                          aria-label={`Tampilkan ${item.label} screenshot`}
                          className={`shrink-0 rounded-3xl border px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isActive
                              ? "border-sky-400 bg-sky-500/10"
                              : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                          }`}
                        >
                          <div className="relative h-24 w-32 overflow-hidden rounded-2xl">
                            <Image
                              src={item.src}
                              alt={item.label}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-2 text-sm text-zinc-300">{item.label}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 text-sm text-zinc-300">
                  <p className="font-medium text-white">Technologies used</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
