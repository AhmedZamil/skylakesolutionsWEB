"use client";

import { FormEvent, useEffect, useRef } from "react";

const sentence =
  "I have seen the team and their experience, along with Ahmed Zamil, Raihana Fardous, and Sabber Ahammed. I liked the team. Please reach me to talk.";

const field = "mt-2 h-11 w-full border border-line-strong bg-transparent px-3 text-sm text-ink outline-none placeholder:text-faint focus:border-cyan";

export function LikeNote({ full = false, inline = false }: { full?: boolean; inline?: boolean }) {
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = form.elements.namedItem("message");
    const reply = form.elements.namedItem("_replyto");
    const next = form.elements.namedItem("_next");
    if (message instanceof HTMLInputElement) {
      message.value = `An employer liked to hire you\n\nName: ${name}\nEmail: ${email}\n\n${sentence}`;
    }
    if (reply instanceof HTMLInputElement) reply.value = email;
    if (next instanceof HTMLInputElement) next.value = `${location.origin}${location.pathname}?reached=1`;
  }

  return (
    <div className={`${inline ? "relative mt-4 max-w-md" : full ? "relative mt-3" : "absolute top-full right-0 z-50 mt-3 w-[min(22rem,calc(100vw-2rem))]"} border border-line bg-card p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}>
      <form action="https://formsubmit.co/ahmedlutfulzamil@gmail.com" method="POST" onSubmit={onSubmit} className="space-y-3">
        <label className="block text-sm font-semibold">
          Name
          <input required name="name" autoComplete="name" maxLength={80} placeholder="Your name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Work email
          <input
            ref={emailRef}
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={120}
            placeholder="you@company.com"
            className={`${field} email-blink`}
          />
        </label>
        <p className="text-xs leading-relaxed text-muted">{sentence}</p>
        <input type="hidden" name="_subject" value="An employer liked to hire you" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_replyto" defaultValue="" />
        <input type="hidden" name="_next" defaultValue="" />
        <input type="hidden" name="message" defaultValue="" />
        <button type="submit" className="h-11 bg-blue px-5 text-sm font-semibold text-white hover:bg-[#3c86f5]">
          Send
        </button>
      </form>
    </div>
  );
}
