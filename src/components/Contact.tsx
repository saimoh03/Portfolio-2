import { Mail } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSent(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Get in touch"
            title="Let's build something."
            description="Open to frontend roles, freelance work and interesting collaborations."
          />
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                href="https://github.com/saimoh03"
                target="_blank"
                rel="noreferrer"
              >
                <Mail className="h-4 w-4" />
                github.com/saimoh03
              </a>
            </li>
          </ul>
        </div>

        <form
          className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full rounded-lg bg-input/40 border border-border/60 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary/60 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className="w-full rounded-lg bg-input/40 border border-border/60 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary/60 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project…"
              className="w-full rounded-lg bg-input/40 border border-border/60 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary/60 outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {sent ? "Thanks, I'll reply soon!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}