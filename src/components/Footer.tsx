import Link from "next/link";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-medium text-zinc-100">
            {site.name}
            <span className="text-lime-400">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
            Full-stack developer in Lagos. Available for websites, stores, and
            custom business tools.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Pages</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} className="hover:text-white">
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={site.github} className="hover:text-white">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.name}. Built for freelance work.
      </div>
    </footer>
  );
}
