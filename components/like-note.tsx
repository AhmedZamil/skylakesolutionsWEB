"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const sentence =
  "I have seen the team and their experience, along with Ahmed Zamil, Raihana Fardous, and Sabber Ahammed. I liked the team. Please reach me to talk.";

const field = "mt-2 h-11 w-full border border-line-strong bg-transparent px-3 text-sm text-ink outline-none placeholder:text-faint focus:border-cyan";

export function LikeNote({ full = false }: { full?: boolean }) {
  const emailRef = useRef<HTMLInputElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/reach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(payload?.error || "The note could not be delivered.");
        return;
      }
      setSent(true);
    } catch {
      setError("The note could not be delivered.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={`${full ? "relative mt-3" : "absolute top-full right-0 z-50 mt-3 w-[min(22rem,calc(100vw-2rem))]"} border border-line bg-card p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}>
      {sent ? (
        <p role="status" className="text-sm leading-relaxed text-ink">
          Sent. The team has your email.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
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
          <button type="submit" disabled={sending} className="h-11 bg-blue px-5 text-sm font-semibold text-white hover:bg-[#3c86f5] disabled:opacity-60">
            {sending ? "Sending" : "Send"}
          </button>
          {error ? <p className="text-sm text-cyan">{error}</p> : null}
        </form>
      )}
    </div>
  );
}
