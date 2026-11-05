import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { services, site } from "@/lib/site";

const company = [
  { href: "/work", label: "Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
  { href: "/book", label: "Book a call" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue bg-bg">
      <Image
        src="/mark.jpg"
        alt=""
        width={420}
        height={320}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[min(92vh,820px)] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen"
      />
      <div className="relative grid gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="logo-link inline-block" aria-label="Sky Lake Solutions, back to top">
            <LogoMark variant="logo" className="h-28" />
          </Link>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Software engineering for teams that want clear thinking and dependable delivery, from the first release onward.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink">SERVICES</p>
          <ul className="mt-4 space-y-3 text-[15px] text-muted">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <Link href="/services" className="transition-colors hover:text-cyan">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink">COMPANY</p>
          <ul className="mt-4 space-y-3 text-[15px] text-muted">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink">GET IN TOUCH</p>
          <ul className="mt-4 space-y-3 text-[15px] text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-cyan">
                {site.email}
              </a>
            </li>
            <li>Remote studio. We work where the product is.</li>
            <li>
              <a href={site.domain} className="transition-colors hover:text-cyan">
                skylakesolutions.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-6 text-[13px] text-faint sm:px-8">
        <p>© {new Date().getFullYear()} Sky Lake Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-cyan">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-cyan">
            Terms
          </Link>
          <a href="#top" className="font-semibold text-cyan">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
