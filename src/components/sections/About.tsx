export default function About() {
  const highlights = [
    {
      title: "Frontend Development",
      description: "Membangun antarmuka web yang responsif dan modern.",
    },
    {
      title: "Responsive Design",
      description: "Membuat website yang nyaman digunakan di berbagai ukuran layar.",
    },
    {
      title: "UI/UX",
      description: "Memperhatikan struktur, tampilan, dan pengalaman pengguna.",
    },
  ];

  return (
    <section id="about" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            About Me
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Saya adalah mahasiswa yang tertarik membangun pengalaman web yang modern.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Saya adalah mahasiswa yang memiliki ketertarikan di bidang Frontend Development dan pengembangan website modern. Saya menikmati proses mengubah ide dan desain menjadi tampilan web yang responsif, interaktif, dan mudah digunakan.
          </p>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Saya terus mengembangkan kemampuan melalui berbagai project menggunakan HTML, CSS, JavaScript, React, dan Next.js. Selain pengembangan frontend, saya juga memiliki pengalaman menggunakan Figma untuk merancang dan mengembangkan antarmuka pengguna.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm shadow-black/20"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
