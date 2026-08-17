import { Globe, Link2, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
  
];

const socialLinks = [
  { label: "GitHub", href: "#", icon: Globe },
  { label: "LinkedIn", href: "#", icon: Link2 },
  { label: "Email", href: "mailto:your-email@example.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-white">
            MUHAMAD RISKI PURWANTO
          </p>
          <p className="mt-2 text-sm text-zinc-400">Frontend Developer</p>
          <p className="mt-4 text-sm text-zinc-500">
            © 2026 Muhamad Riski Purwanto. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-zinc-500">Built with Next.js & Tailwind CSS</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-zinc-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
