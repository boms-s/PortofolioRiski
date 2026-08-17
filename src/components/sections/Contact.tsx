import { Globe, Link2, Mail } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "riskibkw@gmail.com",
    href: "mailto:riskibkw@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "boms-s",
    href: "https://github.com/boms-s",
    target: "_blank",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    value: "M Riski Purwanto",
    href: "https://www.linkedin.com/in/m-riski-purwanto-99b929403/",
    target: "_blank",
    icon: Link2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-sm shadow-black/20 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Let&apos;s work together.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Punya pertanyaan, peluang magang, atau ingin terhubung? Jangan ragu untuk menghubungi saya.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Send a Message
            </a>
          </div>

          <div className="space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.target}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="rounded-full border border-sky-500/20 bg-sky-500/10 p-2 text-sky-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-300">{contact.label}</p>
                    <p className="text-sm text-zinc-400">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
