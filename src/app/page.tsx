import { ContactForm } from "@/components/ContactForm";
import { ProjectFilter } from "@/components/ProjectFilter";
import { services, site, stack } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(190,242,100,0.12),transparent_38%)]" />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <p className="reveal delay-1 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-lime-300">
            <span className="live-dot h-2 w-2 rounded-full bg-lime-300" />
            {site.availability}
          </p>
          <h1 className="reveal delay-2 mt-5 max-w-4xl font-serif text-4xl leading-[1.08] text-zinc-50 sm:text-5xl md:text-7xl">
            Full-stack developer for businesses that need to sell and run online.
          </h1>
          <p className="reveal delay-3 mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {site.tagline} I design, build, and ship the frontend and the backend.
          </p>
          <div className="reveal delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#work" className="rounded-full bg-lime-300 px-5 py-3 text-center text-sm font-medium text-zinc-950 transition hover:bg-lime-200">
              See selected work
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-center text-sm text-zinc-100 transition hover:border-white/40">
              WhatsApp me
            </a>
          </div>
          <p className="reveal delay-4 mt-8 text-sm text-zinc-500">
            {site.location} · Websites, stores, dashboards, custom tools
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-24">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Work</p>
        <h2 className="mt-2 font-serif text-3xl text-zinc-50 md:text-5xl">
          Projects, filtered by what you need.
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          All, frontend, or full stack. Live links where the work is shipped.
        </p>
        <div className="mt-10">
          <ProjectFilter />
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#101210]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Services</p>
          <h2 className="mt-2 max-w-xl font-serif text-3xl text-zinc-50 md:text-4xl">What I take on.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/8 bg-[#0b0c0b] p-6 transition hover:-translate-y-1 hover:border-lime-300/30">
                <h3 className="text-lg text-zinc-50">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">About</p>
        <h2 className="mt-2 max-w-3xl font-serif text-3xl text-zinc-50 md:text-5xl">
          I ship the interface and the system behind it.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-zinc-400">
          <p>
            I&apos;m Benjamin Osahon, a full-stack developer in Lagos. I build websites, stores, and business tools for owners who need something that works on a phone, not a slide deck.
          </p>
          <p>
            I work across the stack — React and Next.js on the front, Node, Supabase, MongoDB, and MySQL on the back. That means one person can take a brief from layout to database to deploy.
          </p>
          <p>
            Business administration is the other half. I care about checkout, stock, customers, and whether the thing actually helps the business run. If you have a gig, I want a clear scope and a live result.
          </p>
        </div>
      </section>

      <section id="stack" className="border-y border-white/8 bg-[#101210]">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Stack</p>
          <h2 className="mt-2 font-serif text-3xl text-zinc-50 md:text-4xl">Tools I build with.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-lime-300">Frontend</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.frontend.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-lime-300">Backend & data</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.backend.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-lime-300">Product</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.product.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Contact</p>
        <h2 className="mt-2 font-serif text-3xl text-zinc-50 md:text-5xl">Have a project? Let&apos;s talk.</h2>
        <p className="mt-4 max-w-xl text-zinc-400">Fastest path is WhatsApp. Email and the form work too.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <ContactForm />
          <aside className="space-y-5 text-sm">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="block rounded-3xl border border-lime-300/30 bg-lime-300/5 p-5 text-zinc-100">
              WhatsApp
              <span className="mt-1 block text-zinc-400">{site.whatsapp}</span>
            </a>
            <a href={`mailto:${site.email}`} className="block rounded-3xl border border-white/10 p-5 text-zinc-100">
              Email
              <span className="mt-1 block text-zinc-400">{site.email}</span>
            </a>
            <a href={site.phoneHref} className="block rounded-3xl border border-white/10 p-5 text-zinc-100">
              Phone
              <span className="mt-1 block text-zinc-400">{site.phone}</span>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
