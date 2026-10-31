import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <div className="space-y-12">
      {faqs.map((group) => (
        <div key={group.group}>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">{group.group}</h2>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {group.items.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="cursor-pointer list-none py-4 pr-8 text-lg font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span aria-hidden className="mt-1 text-cyan transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="max-w-3xl pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
