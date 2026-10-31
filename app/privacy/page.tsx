import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Sky Lake Solutions handles messages sent through this website.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Privacy"
        title="What this site"
        italic="does with a message."
        lede="This is a plain-language draft for the studio. Have counsel review it before you rely on it."
      />
      <article className="max-w-3xl space-y-6 border-b border-line px-6 py-16 text-[15px] leading-relaxed text-muted sm:px-8">
        <p>
          The contact form does not store what you type on a Sky Lake server. Sending it opens an email to {site.email} in your own mail app. If you write to us, we use that message to reply and, if we work together, to deliver the project.
        </p>
        <p>
          We do not sell personal information. We keep a correspondence only as long as we need it to answer you, run an engagement, or meet a legal duty.
        </p>
        <p>
          To ask what we hold about you, email {site.email}. We will answer within 30 days.
        </p>
      </article>
    </main>
  );
}
