import profile from "@/assets/dummy-image.webp";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div className="animate-fade-up">

          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <span className="gradient-text">Frontend developer</span>
            <br />
            building thoughtful interfaces.
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm saimoh | a frontend developer focused on accessible, performant
            web experiences. I build with React, TypeScript and a deep care for
            craft.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/saimoh03"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors"
            >
               GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>

        <div className="relative justify-self-start md:justify-self-end animate-fade-in">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-accent)" }}
          />
          <img
            src={profile}
            alt="Portrait of saimoh, frontend developer"
            width={280}
            height={280}
            className="relative h-56 w-56 md:h-72 md:w-72 rounded-full object-cover border border-border/60 shadow-[var(--shadow-card)]"
          />
        </div>
      </div>
    </section>
  );
}
