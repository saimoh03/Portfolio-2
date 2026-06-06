export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold gradient-text">
            saimoh.dev
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Frontend developer crafting accessible, performant interfaces.
          </p>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Navigate
          </p>
          <ul className="space-y-2">
            <li><a className="hover:text-foreground text-muted-foreground" href="/">Home</a></li>
            <li><a className="hover:text-foreground text-muted-foreground" href="/#projects">Projects</a></li>
            <li><a className="hover:text-foreground text-muted-foreground" href="/#skills">Skills</a></li>
            <li><a className="hover:text-foreground text-muted-foreground" href="/#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Social
          </p>
          <ul className="space-y-2">
            <li>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href="https://github.com/saimoh03"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-center text-muted-foreground">
          © {year} saimoh | Built with React, Tailwind.
        </p>
      </div>
    </footer>
  );
}
