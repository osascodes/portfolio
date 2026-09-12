import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-lime-300">Contact</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl text-zinc-50 md:text-6xl">
        Tell me about the gig.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Website, store, dashboard, or a product you want built end to end.
        WhatsApp is fastest if you want to talk now.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <aside className="h-fit rounded-3xl border border-white/8 bg-[#121412] p-7">
          <h2 className="text-xl text-zinc-50">Direct</h2>
          <ul className="mt-5 space-y-4 text-sm text-zinc-300">
            <li>Email<br /><a href={`mailto:${site.email}`} className="text-lime-300">{site.email}</a></li>
            <li>WhatsApp<br /><a href={site.whatsappHref} className="text-lime-300">{site.whatsapp}</a></li>
            <li>Phone<br /><a href={site.phoneHref} className="text-lime-300">{site.phone}</a></li>
            <li>GitHub<br /><a href={site.github} className="text-lime-300">github.com/osascodes</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
