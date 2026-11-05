import Image from "next/image";

const partners = [
  { name: "MWR Life", href: "https://www.mwrlife.com/" },
  { name: "Binary Quest", href: "https://www.binaryquest.com/" },
  { name: "Premier School Dhaka", href: "https://premierschooldhaka.com/" },
  { name: "Aerotake", href: "https://aerotake.net/" },
  { name: "BongoTex", logo: "/partners/bongotex.jpg", plate: "bg-white" },
  { name: "Flight X BD Aviation", logo: "/partners/flightx.png", plate: "bg-black" },
  { name: "IMEX BD Logistics", href: "https://www.imexbdlogistics.com/" },
] as const;

function Mark({ partner }: { partner: (typeof partners)[number] }) {
  const body = (
    <>
      {"logo" in partner && partner.logo ? (
        <span className={`inline-flex h-10 items-center px-3 ${partner.plate}`}>
          <Image src={partner.logo} alt="" height={32} width={140} className="h-7 w-auto object-contain" />
        </span>
      ) : null}
      <span className="font-display text-2xl text-ink italic sm:text-3xl">{partner.name}</span>
    </>
  );
  const className = "mx-8 inline-flex shrink-0 items-center gap-4 text-ink transition-colors hover:text-cyan";
  if ("href" in partner && partner.href) {
    return (
      <a href={partner.href} target="_blank" rel="noreferrer" className={className}>
        {body}
      </a>
    );
  }
  return <span className={className}>{body}</span>;
}

export function PartnerMarquee() {
  const row = [...partners, ...partners];
  return (
    <section className="partner-marquee overflow-hidden border-b border-line py-6" aria-label="Partners">
      <p className="px-6 text-[11px] tracking-[0.22em] text-faint uppercase sm:px-8">Partners</p>
      <div className="mt-4 overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {row.map((partner, index) => (
            <Mark key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
