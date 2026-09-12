import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <Link href="/#work" className="text-sm text-zinc-400 hover:text-zinc-100">
        ← All projects
      </Link>
      <p className="mt-8 text-xs uppercase tracking-[0.2em] text-lime-300">
        {project.category === "fullstack" ? "Full stack" : "Frontend"} · {project.year} · {project.status}
      </p>
      <h1 className="mt-3 font-serif text-5xl text-zinc-50 md:text-6xl">{project.title}</h1>
      <p className="mt-5 text-lg leading-8 text-zinc-400">{project.summary}</p>
      {project.image && (
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={`${project.title} preview`} className="w-full" />
        </div>
      )}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Problem</h2>
          <p className="mt-3 leading-7 text-zinc-300">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Role</h2>
          <p className="mt-3 leading-7 text-zinc-300">{project.role}</p>
        </section>
        <section className="md:col-span-2">
          <h2 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Outcome</h2>
          <p className="mt-3 leading-7 text-zinc-300">{project.outcome}</p>
        </section>
      </div>
      <section className="mt-10">
        <h2 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-lime-300 px-5 py-3 text-sm font-medium text-zinc-950">
            View live
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm">
            View code
          </a>
        )}
        <Link href="/#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm">
          Hire for something similar
        </Link>
      </div>
    </article>
  );
}
