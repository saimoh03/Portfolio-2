export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="About" title="Crafted for the web, end to end." />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Saido M, a Front-End Developer student at Noroff. Having recently 
              completed my first year, I'm diving straight into Year 2 equipped with a strong 
              foundation in modern web workflows, semantic layouts, and design-to-code principles.
            </p>
            <p className="mt-4">
              My core focus lies in transforming Figma prototypes into highly responsive, 
              accessible web experiences. I approach building interfaces through structured 
              project methodologies, ensuring code is clean, performant, and maintainable.
            </p>
          </div>
          <ul className="space-y-4">
            {philosophy.map((p) => (
              <li key={p.title} className="glass rounded-xl p-4">
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const philosophy = [
  { 
    title: "Responsive by default", 
    body: "Structuring modern layouts with Flexbox and Grid right from the first tag." 
  },
  { 
    title: "Design to Prototype", 
    body: "Bridging the gap between UI concepts in Figma and pixel-perfect interactive code." 
  },
  { 
    title: "Methodical Workflows", 
    body: "Leveraging structured planning and best practices to write scalable stylesheets." 
  },
];

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}