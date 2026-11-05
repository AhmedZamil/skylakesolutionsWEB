"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BookPanel } from "@/components/book-panel";
import { industries, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSolutionsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, solutionsOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Sky Lake Solutions home">
          <Image src="/mark.jpg" alt="" width={420} height={320} priority className="h-10 w-auto" />
          <span className="leading-none">
            <span className="block text-[15px] font-semibold tracking-[0.16em] text-ink">SKY LAKE</span>
            <span className="mt-1 block text-[10px] font-medium tracking-[0.32em] text-muted">SOLUTIONS</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-ink/90 lg:flex xl:gap-7 xl:text-[15px]">
          {nav.map((item) => {
            const active =
              item.href === "/work"
                ? pathname.startsWith("/work")
                : item.href === "/solutions"
                  ? pathname.startsWith("/solutions")
                  : pathname === item.href;
            if (item.href === "/solutions") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href="/solutions"
                    aria-current={active ? "page" : undefined}
                    aria-expanded={solutionsOpen}
                    className={`inline-flex items-center gap-1 ${active ? "text-cyan" : "transition-colors hover:text-cyan"}`}
                    onFocus={() => setSolutionsOpen(true)}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      className={`h-3 w-3 transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  {solutionsOpen ? <SolutionsPanel /> : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-cyan" : "transition-colors hover:text-cyan"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/book"
            className="inline-flex h-11 items-center gap-2 border border-line-strong px-4 text-sm font-semibold text-ink transition-colors hover:border-cyan hover:text-cyan"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            Book a call
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center bg-blue px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3c86f5]"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 border-b border-line py-4 text-lg font-medium ${
                    (item.href === "/work" && pathname.startsWith("/work")) ||
                    (item.href === "/solutions" && pathname.startsWith("/solutions"))
                      ? "text-cyan"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.href === "/solutions" ? (
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </Link>
                {item.href === "/solutions" ? (
                  <div className="border-b border-line py-2">
                    {industries.map((industry) => (
                      <Link key={industry.slug} href={`/solutions/${industry.slug}`} className="block py-2 pl-3 text-sm text-muted">
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <Link href="/book" className="mt-5 flex h-12 items-center justify-center gap-2 border border-line-strong text-base font-semibold">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            Book a call
          </Link>
          <Link href="/contact" className="mt-3 flex h-12 items-center justify-center bg-blue text-base font-semibold text-white">
            Start a project
          </Link>
        </div>
      ) : null}
    </header>
  );
}

function SolutionsPanel() {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = panel.current;
    if (!node) return;
    const fit = () => {
      node.style.transform = "translateX(-50%)";
      const rect = node.getBoundingClientRect();
      const margin = 24;
      let delta = 0;
      if (rect.left < margin) delta = margin - rect.left;
      else if (rect.right > window.innerWidth - margin) delta = window.innerWidth - margin - rect.right;
      node.style.transform = `translateX(calc(-50% + ${delta}px))`;
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div ref={panel} className="absolute top-full left-1/2 z-50 w-[min(920px,calc(100vw-3rem))] -translate-x-1/2 pt-3">
      <div className="grid grid-cols-[200px_1fr] gap-3 border border-line bg-card p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="p-3">
          <p className="text-[11px] tracking-[0.18em] text-faint uppercase">By industry</p>
          <ul className="mt-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`/solutions/${industry.slug}`} className="block py-2 text-sm text-ink hover:text-cyan">
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <BookPanel live />
      </div>
    </div>
  );
}
