"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0c0b]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-medium tracking-tight text-zinc-100">
          {site.shortName}
          <span className="text-lime-400">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-zinc-100"
                  : "transition hover:text-zinc-100"
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-lime-300 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-lime-200"
          >
            Hire me
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-zinc-100" />
          <span className="mt-1.5 block h-0.5 w-6 bg-zinc-100" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-zinc-300">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-lime-300 px-4 py-2 text-sm font-medium text-zinc-950"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
