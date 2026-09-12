import type { Metadata } from "next";
import Link from "next/link";
import { site, stack } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-lime-300">About</p>
      <h1 className="mt-3 font-serif text-5xl text-zinc-50 md:text-6xl">
        Full-stack developer for hire.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          I am {site.name}, a full-stack developer in {site.location}. I build
          websites and web products for small businesses, vendors, and operators
          who need something they can actually run.
        </p>
        <p>
          I ship the whole stack: React, Next.js, Node.js, Tailwind, Supabase,
          MongoDB, and MySQL. The work is product work, not tutorial work.
        </p>
        <p>
          A background in business administration still shapes how I build. I
          care about inventory, receipts, customers, and whether the owner can
          use the thing on their phone.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="font-serif text-3xl text-zinc-50">Tools</h2>
        <div className="mt-6 space-y-6">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group}>
              <p className="text-sm capitalize text-lime-300">{group}</p>
              <p className="mt-2 text-zinc-300">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/#contact" className="mt-12 inline-flex rounded-full bg-lime-300 px-5 py-3 text-sm font-medium text-zinc-950">
        Work with me
      </Link>
    </section>
  );
}
