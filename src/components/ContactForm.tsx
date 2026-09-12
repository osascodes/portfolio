"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error("Failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/8 bg-[#121412] p-7">
      <input type="hidden" name="access_key" value={site.web3formsKey} />
      <input type="hidden" name="subject" value="New freelance inquiry" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-zinc-400">
          Name
          <input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0c0b] px-4 py-3 text-zinc-100 outline-none focus:border-lime-300" />
        </label>
        <label className="text-sm text-zinc-400">
          Email
          <input type="email" name="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0c0b] px-4 py-3 text-zinc-100 outline-none focus:border-lime-300" />
        </label>
      </div>
      <label className="mt-4 block text-sm text-zinc-400">
        Project type
        <select name="project_type" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0c0b] px-4 py-3 text-zinc-100 outline-none focus:border-lime-300">
          <option>Business website</option>
          <option>Online store</option>
          <option>Full-stack web app</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="mt-4 block text-sm text-zinc-400">
        Message
        <textarea name="message" required rows={6} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0c0b] px-4 py-3 text-zinc-100 outline-none focus:border-lime-300" />
      </label>
      <button type="submit" disabled={status === "sending"} className="mt-6 rounded-full bg-lime-300 px-5 py-3 text-sm font-medium text-zinc-950 disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && <p className="mt-3 text-sm text-lime-300">Got it. I will reply soon.</p>}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">Could not send. Email or WhatsApp me instead.</p>
      )}
    </form>
  );
}
