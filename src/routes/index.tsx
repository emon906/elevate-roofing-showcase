import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, Play, Star, ShieldCheck, Image as ImageIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "James Bryce Roofing Services | Premium Roofers in Peterborough" },
      {
        name: "description",
        content:
          "Premium roofing in Peterborough, UK. New roofs, repairs, flat roofing and leadwork. 96% recommended from 20 reviews. Free quotes — call +44 7368 245304.",
      },
      { property: "og:title", content: "James Bryce Roofing Services | Peterborough Roofers" },
      {
        property: "og:description",
        content:
          "Craftsman roofing across Peterborough and Cambridgeshire. 96% recommended, 20 reviews. Free no-obligation quotes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Slot({
  label,
  hint,
  className = "",
  icon = "image",
}: {
  label: string;
  hint?: string;
  className?: string;
  icon?: "image" | "video";
}) {
  return (
    <div className={`media-slot rounded-3xl ${className}`}>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-card/80 text-primary shadow-soft">
          {icon === "video" ? (
            <Play className="size-6" strokeWidth={1.5} />
          ) : (
            <ImageIcon className="size-6" strokeWidth={1.5} />
          )}
        </span>
        <p className="font-display text-lg text-primary-deep">{label}</p>
        {hint ? <p className="max-w-xs text-xs tracking-wide text-muted-foreground uppercase">{hint}</p> : null}
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary uppercase">
      {children}
    </span>
  );
}

function Index() {
  useReveal();

  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="bg-hero-luxe relative isolate min-h-screen">
        <div
          aria-hidden
          className="absolute top-[-12rem] right-[-10rem] -z-10 size-[36rem] rounded-full bg-primary-soft/60 blur-3xl"
        />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="leading-tight">
            <p className="font-display text-xl text-primary-deep">James Bryce</p>
            <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">Roofing Services</p>
          </div>
          <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-primary" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-primary" href="#gallery">
              Gallery
            </a>
            <a className="transition-colors hover:text-primary" href="#projects">
              Projects
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-green-luxe px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Free Quote
          </a>
        </header>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-10 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
          <div className="reveal">
            <Eyebrow>
              <ShieldCheck className="size-3.5" /> Peterborough · Cambridgeshire
            </Eyebrow>
            <h1 className="text-balance-luxe mt-7 text-5xl leading-[0.95] font-semibold text-primary-deep sm:text-6xl lg:text-7xl">
              Roofs built to
              <span className="block italic text-primary">outlast the weather.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Master-craft roofing for homes and businesses across Peterborough — pitched roofs, flat systems,
              leadwork and storm repairs, finished to a standard you can see from the street.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-green-luxe px-8 py-4 font-semibold text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
              >
                Get your free quote
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+447368245304"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-8 py-4 font-semibold text-primary-deep transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" /> +44 7368 245304
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-10 border-t border-border pt-8">
              <div>
                <p className="font-display text-4xl text-primary-deep">96%</p>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Recommended</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary-deep">20</p>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <Slot
              label="Hero roofing image"
              hint="Add your signature roof photo"
              className="float-slow aspect-4/5 rounded-[2.5rem]"
            />
            <div className="absolute -bottom-8 -left-6 w-56 rounded-3xl bg-card p-5 shadow-luxe">
              <p className="font-display text-lg text-primary-deep">Fully insured</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Guaranteed workmanship on every roof we complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / TRUST */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight font-semibold text-primary-deep sm:text-5xl">
              A local roofing name people pass on to their neighbours.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              James Bryce Roofing Services is a Peterborough-based team built on tidy sites, honest pricing and
              detail work that lasts decades. Every job is quoted in person, delivered by the same craftsmen, and
              finished with a full clean-down.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From a single slipped tile to a full re-roof, you deal directly with James — no call centres, no
              subcontracted guesswork.
            </p>
          </div>
          <div className="reveal grid gap-5 sm:grid-cols-2">
            {[
              { k: "96%", v: "Recommended by customers" },
              { k: "20", v: "Genuine reviews" },
              { k: "10 yr", v: "Workmanship guarantee" },
              { k: "24/7", v: "Storm damage callout" },
            ].map((s) => (
              <div key={s.v} className="rounded-3xl border border-primary/12 bg-card p-8 shadow-soft">
                <p className="font-display text-4xl text-primary">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="bg-secondary/60 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight font-semibold text-primary-deep sm:text-5xl">
              Premium roofing, start to finish.
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-primary/12 bg-primary/10 md:grid-cols-3">
            {[
              {
                t: "New Roofs & Re-roofing",
                d: "Full strip and rebuild in slate, clay or concrete tile with upgraded membranes, battens and ventilation.",
              },
              {
                t: "Flat & EPDM Roofing",
                d: "Seamless rubber and GRP flat roof systems for extensions, garages and commercial units.",
              },
              {
                t: "Leadwork & Detailing",
                d: "Hand-dressed lead valleys, chimney flashings, bays and parapets finished the traditional way.",
              },
              {
                t: "Repairs & Storm Damage",
                d: "Fast leak tracing, tile replacement and emergency make-safe after high winds.",
              },
              {
                t: "Fascias, Soffits & Guttering",
                d: "Crisp uPVC and aluminium rainwater systems that frame the roofline properly.",
              },
              {
                t: "Moss Removal & Maintenance",
                d: "Gentle cleaning, re-pointing and annual roof health checks to extend roof life.",
              },
            ].map((s) => (
              <div key={s.t} className="reveal bg-card p-10">
                <p className="font-display text-2xl text-primary-deep">{s.t}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY PLACEHOLDERS */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight font-semibold text-primary-deep sm:text-5xl">
              Our work, in your own photographs.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Drop your roofing images into these slots — the layout is sized and ready.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-4 md:grid-rows-2">
          <Slot label="Feature image" hint="Wide · 1600×1000" className="md:col-span-2 md:row-span-2 min-h-[26rem]" />
          <Slot label="Image 2" hint="Square" className="min-h-[12.5rem]" />
          <Slot label="Image 3" hint="Square" className="min-h-[12.5rem]" />
          <Slot label="Image 4" hint="Square" className="min-h-[12.5rem]" />
          <Slot label="Image 5" hint="Square" className="min-h-[12.5rem]" />
        </div>
        <div className="reveal mt-5 grid gap-5 md:grid-cols-3">
          <Slot label="Image 6" hint="Landscape" className="min-h-[14rem]" />
          <Slot label="Image 7" hint="Landscape" className="min-h-[14rem]" />
          <Slot label="Image 8" hint="Landscape" className="min-h-[14rem]" />
        </div>
      </section>

      {/* 5. CINEMATIC VIDEO / REELS */}
      <section className="bg-green-luxe py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              Reels
            </span>
            <h2 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
              Watch the craft in motion.
            </h2>
            <p className="mt-5 text-primary-foreground/75">
              A cinematic space for your own site videos and social reels.
            </p>
          </div>
          <div className="reveal mt-14">
            <Slot
              label="Main video placeholder"
              hint="16:9 · your feature film"
              icon="video"
              className="aspect-video rounded-4xl"
            />
          </div>
          <div className="reveal mt-5 grid gap-5 sm:grid-cols-3">
            <Slot label="Reel 1" hint="9:16 vertical" icon="video" className="aspect-9/16" />
            <Slot label="Reel 2" hint="9:16 vertical" icon="video" className="aspect-9/16" />
            <Slot label="Reel 3" hint="9:16 vertical" icon="video" className="aspect-9/16" />
          </div>
        </div>
      </section>

      {/* 6. PROJECT SHOWCASE — MIXED MEDIA */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal max-w-2xl">
          <Eyebrow>Project showcase</Eyebrow>
          <h2 className="mt-6 text-4xl leading-tight font-semibold text-primary-deep sm:text-5xl">
            Selected Peterborough projects.
          </h2>
        </div>

        <div className="reveal mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Slot label="Project image" hint="Before / after shot" className="aspect-4/3" />
          <div>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Project 01</p>
            <h3 className="mt-4 text-3xl font-semibold text-primary-deep">Full slate re-roof, Werrington</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Add your project story here — scope, materials, timescale and the detail you're most proud of.
            </p>
            <Slot label="Project video" hint="Short walkthrough clip" icon="video" className="mt-8 aspect-video" />
          </div>
        </div>

        <div className="reveal mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Project 02</p>
            <h3 className="mt-4 text-3xl font-semibold text-primary-deep">EPDM flat roof & new fascias</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Space for a second case study — describe the problem, the system installed and the finished result.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Slot label="Detail 1" className="aspect-square" />
              <Slot label="Detail 2" className="aspect-square" />
            </div>
          </div>
          <Slot label="Project video" hint="Full-height reel" icon="video" className="aspect-4/5 lg:order-1" />
        </div>
      </section>

      {/* 7. CONTACT / FREE QUOTE */}
      <section id="contact" className="px-6 pb-24">
        <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-4xl border border-primary/15 bg-card p-10 shadow-luxe sm:p-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>Free quote</Eyebrow>
              <h2 className="mt-6 text-4xl leading-tight font-semibold text-primary-deep sm:text-5xl">
                Let's talk about your roof.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Free, no-obligation quotes across Peterborough and surrounding villages. Call or email and James
                will arrange a visit — usually within 48 hours.
              </p>
              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="tel:+447368245304"
                  className="group flex items-center justify-between rounded-2xl bg-secondary px-6 py-5 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-4">
                    <Phone className="size-5 text-primary" />
                    <span className="font-display text-xl text-primary-deep">+44 7368 245304</span>
                  </span>
                  <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="mailto:jamesbryceroofing@yahoo.com"
                  className="group flex items-center justify-between rounded-2xl bg-secondary px-6 py-5 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-4">
                    <Mail className="size-5 text-primary" />
                    <span className="font-display text-lg break-all text-primary-deep">
                      jamesbryceroofing@yahoo.com
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-green-luxe p-8 text-primary-foreground sm:p-10">
              <p className="font-display text-2xl">Request a callback</p>
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/40 focus:outline-none"
                />
                <input
                  required
                  placeholder="Phone or email"
                  className="w-full rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/40 focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="What does your roof need?"
                  className="w-full resize-none rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-primary-foreground/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-card px-6 py-4 font-semibold text-primary-deep transition-transform hover:-translate-y-0.5"
                >
                  Send request
                </button>
              </form>
              <p className="mt-6 text-xs text-primary-foreground/70">
                96% recommended · 20 reviews · Peterborough, UK
              </p>
            </div>
          </div>
        </div>
        <footer className="mx-auto mt-10 max-w-7xl text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} James Bryce Roofing Services · Peterborough, United Kingdom
        </footer>
      </section>
    </main>
  );
}
