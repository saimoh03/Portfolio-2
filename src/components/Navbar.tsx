import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="/"
          className="font-display text-sm font-semibold tracking-tight"
        >
          <span className="gradient-text">saimoh.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
        >
          Let's talk
        </a>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/60 animate-fade-in">
          <ul className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base text-foreground/90 hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}