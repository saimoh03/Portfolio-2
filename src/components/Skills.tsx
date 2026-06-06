import { SectionHeader } from "./About";

const groups = [
  {
    title: "Core Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Styles",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Design",
    items: ["VS Code", "Figma", "Git"]
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The tools I reach for when building modern, maintainable products."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-5 card-hover"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {g.title}
              </p>
              <ul className="flex flex-col gap-2 w-full">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-left w-full block"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}