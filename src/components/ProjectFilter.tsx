"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { filterProjects, type ProjectCategory } from "@/data/projects";

const tabs: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full stack" },
];

export function ProjectFilter() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const list = useMemo(() => filterProjects(active), [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={
              active === tab.id
                ? "rounded-full bg-lime-300 px-4 py-2 text-sm font-medium text-zinc-950"
                : "rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/25"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-500">
        {list.length} project{list.length === 1 ? "" : "s"}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
