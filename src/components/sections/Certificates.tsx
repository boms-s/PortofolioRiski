"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

type Certificate = {
  title: string;
  org: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "CCNA",
    org: "Cisco Networking Academy",
    image: "/certificates/CCNA.jpg",
  },
  {
    title: "Python (Basic)",
    org: "HackerRank",
    image: "/certificates/HackerRank.jpg",
  },
  {
    title: "AI Fundamentals",
    org: "DataCamp",
    image: "/certificates/AIFUNDAMENTAL.jpg",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    org: "Google / Coursera",
    image: "/certificates/Foundations Data, Data, Everywhere.jpg",
  },
  {
    title: "Foundations of Cybersecurity",
    org: "Google / Coursera",
    image: "/certificates/Foundations of Cybersecurity.jpg",
  },
  {
    title: "Foundations of Business Intelligence",
    org: "Google / Coursera",
    image: "/certificates/Foundations of Business Intelligence.jpg",
  },
  {
    title: "Introduction to Data Analytics",
    org: "IBM / Coursera",
    image: "/certificates/Introduction to Data Analytics.jpg",
  },
  {
    title: "Introduction to Software Engineering",
    org: "IBM / Coursera",
    image: "/certificates/Introduction to Software Engineering.jpg",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    org: "DeepLearning.AI / Stanford Online / Coursera",
    image: "/certificates/Supervised Machine Learning Regression and.jpg",
  },
  {
    title: "What is Data Science?",
    org: "IBM / Coursera",
    image: "/certificates/What is Data Science.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  return (
    <motion.section
      id="certificates"
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Certificates
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Certificates and achievements from my learning journey and technical development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.title}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-sm shadow-black/20"
            >
              <div className="p-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(idx)}
                  aria-label={`View ${cert.title} certificate`}
                  className="group w-full text-left"
                >
                  <div className="relative h-44 w-full overflow-hidden rounded-xl bg-zinc-950/80">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} - ${cert.org}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">{cert.org}</p>
                    </div>
                    <div>
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-300 transition group-hover:border-zinc-600">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 sm:px-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpenIndex(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-title"
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
              animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60"
            >
              <div className="flex items-start justify-between border-b border-zinc-800 px-4 py-3">
                <div>
                  <h3 id="certificate-title" className="text-lg font-semibold text-white">
                    {certificates[openIndex].title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{certificates[openIndex].org}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close certificate preview"
                  className="rounded-full border border-zinc-700 bg-zinc-900/90 p-2 text-zinc-200 transition hover:bg-zinc-800"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                <div className="mx-auto max-h-[80vh] w-full overflow-auto">
                  <div className="relative mx-auto w-full max-w-[900px]">
                    <div className="relative w-full" style={{ paddingTop: '70%' }}>
                      <Image
                        src={certificates[openIndex].image}
                        alt={`${certificates[openIndex].title} certificate`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
