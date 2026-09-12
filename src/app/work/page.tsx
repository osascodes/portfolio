import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";

export const metadata: Metadata = {
  title: "Work",
  description: "Frontend and full-stack projects by Benjamin Osahon — filter by type.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-lime-300">Work</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl text-zinc-50 md:text-6xl">
        Selected projects.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Filter by frontend or full stack. Click any project for the brief, stack, and links.
      </p>
      <div className="mt-10">
        <ProjectFilter />
      </div>
    </section>
  );
}
