import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group overflow-hidden rounded-3xl border border-white/8 bg-[#121412] transition hover:border-lime-300/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#171917]">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-end bg-[radial-gradient(circle_at_top_right,#d9f99d22,transparent_45%),linear-gradient(180deg,#1a1d19,#101210)] p-6">
            <p className="font-serif text-4xl text-zinc-200">{project.title}</p>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-wider text-zinc-200 backdrop-blur">
          {project.category === "fullstack" ? "Full stack" : "Frontend"}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl text-zinc-50">{project.title}</h3>
          <span className="text-xs text-zinc-500">{project.status}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{project.summary}</p>
        <p className="mt-5 text-sm text-lime-300">View case study →</p>
      </div>
    </Link>
  );
}
