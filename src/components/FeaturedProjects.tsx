import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "./About";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured projects"
          description="A small selection of recent work, each built with intent and shipped end to end."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, i) => (
            <Link
              key={p.id}
              to={`/article/${p.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass card-hover animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {p.shortDescription}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
