import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-12 lg:min-h-[80vh] lg:flex-row lg:gap-16">
        <div className="max-w-2xl flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            HAI, SELAMAT DATANG DI PORTOFOLIO SAYA
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Muhamad Riski Purwanto
          </h1>
          <p className="mt-4 text-xl font-medium text-sky-400 sm:text-2xl">
            Frontend Developer
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
            Saya tertarik membangun website yang modern, responsif, dan mudah digunakan. Saya terus mengembangkan kemampuan frontend melalui berbagai project menggunakan teknologi web modern.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Lihat Project
            </a>
            <a
              href="/cv/CV_Muhamad_Riski_Purwanto.pdf"
              download="CV_Muhamad_Riski_Purwanto.pdf"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full max-w-md flex-1 lg:-translate-y-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm shadow-black/20 backdrop-blur-sm">
            <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950/80">
              <Image
                src="/images/profile.jpg"
                alt="Foto profil Muhamad Riski Purwanto"
                width={640}
                height={800}
                className="h-[420px] w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
