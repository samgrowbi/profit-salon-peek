import { createFileRoute } from "@tanstack/react-router";
import heroSalon from "@/assets/hero-salon.jpg";
import advisorHeadshot from "@/assets/advisor-headshot.jpg";
import { LeadForm } from "@/components/lp/LeadForm";
import { StickyMobileCta } from "@/components/lp/StickyMobileCta";

const TITLE = "Profit Clarity Analysis for Salon Owners - 50% Off | True Profit Salons";
const DESCRIPTION =
  "A 60-minute one-on-one deep dive into your salon's numbers with a Profit First Certified salon CFO. Normally $500 - now $250 for a limited time.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: LandingPage,
});

const PHONE = "+1 385-985-7709";
const EMAIL = "hello@trueprofitsalons.com";
const OFFER_EXPIRES = "December 31"; // PLACEHOLDER - set real expiry date

// Real client averages, confirmed from the live site (trueprofitsalons.com).
const stats = [
  { label: "Increased In Revenue", value: "$164K" },
  { label: "Increased In Profit", value: "$55K" },
  { label: "Increased In Cash Reserves", value: "$114K" },
];

const pains = [
  "Money's coming in, but it never seems to stay.",
  "You don't actually know what you pay yourself vs. what the business owes.",
  "Your bookkeeper (or spreadsheet) tells you the past, not what to do next.",
  "You've never gotten a straight answer on pricing, service mix, or margins.",
];

const included = [
  "A clear snapshot of current revenue, expenses, and real profit.",
  "Review of owner's pay, cash flow, and overall financial health.",
  "Quick check of pricing, service mix, and margins to spot hidden leaks.",
  "Your top 3–5 opportunities to protect and increase profit.",
  "A simple 90-day action plan you can implement with us, your current accountant, or on your own.",
];


const testimonials = [
  {
    quote:
      "I wish everyone had a CFO like Josh. He is so knowledgeable - not just with financials but with business as a whole.",
    name: "Salon Gloss",
    business: "Salon Owner",
  },
  {
    quote:
      "Our business is so much better with Erika. We couldn't do it without her. Her spreadsheets keep us organized and we finally understand our numbers.",
    name: "Bon Bini Aesthetics",
    business: "Salon Owner",
  },
  {
    quote:
      "Since working with my CFO I have gotten my financials under control and am actively making profit and saving for taxes.",
    name: "Bodhi Sanctuary",
    business: "Salon Owner",
  },
];

const faqs = [
  {
    q: "How do I get started?",
    a: "Book your session and complete payment via Stripe, fill out a short intake form, then join your 60-minute call.",
  },
  {
    q: "Do you only work with salons?",
    a: "Yes. We work exclusively with salons and beauty businesses.",
  },
  {
    q: "What do I need to prepare?",
    a: "Your most recent profit and loss statement, balance sheet, and a rough sense of your owner pay. If your books are messy, bring them as they are.",
  },
  {
    q: "What if I'm not on QuickBooks?",
    a: "That's fine. Xero, spreadsheets, or nothing at all - we'll work with what you have and tell you what to fix first.",
  },
  {
    q: "Is the $250 refundable?",
    a: "The session is non-refundable once your time slot is confirmed, but it can be rescheduled with at least 24 hours' notice.",
  },
  {
    q: "Is this a sales pitch for ongoing services?",
    a: "No. It's a paid diagnostic with a written deliverable. If ongoing bookkeeping or CFO work is a fit, we'll say so - but the plan is yours either way.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <div className="min-w-0 text-sm">
            <p className="font-display text-base font-semibold text-foreground">
              True Profit Salons
            </p>
            <p className="truncate text-muted-foreground">
              <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="hover:text-primary">
                {PHONE}
              </a>
              <span className="mx-2 hidden sm:inline">•</span>
              <a href={`mailto:${EMAIL}`} className="hidden hover:text-primary sm:inline">
                {EMAIL}
              </a>
            </p>
          </div>
          <a
            href="#claim"
            className="shrink-0 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-6"
          >
            Claim 50% Off
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wider text-accent-foreground uppercase">
                Limited time - 50% off
              </span>
              <h1 className="mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
                Find Out Exactly Where Your Salon's Profit Is Leaking - In 60 Minutes
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                A one-on-one deep dive into your numbers with a Profit First Certified salon CFO.
                Normally $500 - right now 50% off at $250.
              </p>
              <a
                href="#claim"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Claim My 50% Off Deep Dive
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                $500 value, now $250 • 60 minutes • Pay securely via Stripe
              </p>

            </div>

            <div className="relative">
              <img
                src={heroSalon}
                alt="Sunlit modern salon interior with styling chairs and mirrors"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-card/95 p-4 backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
                <p className="text-sm font-semibold text-foreground">Profit Clarity Analysis</p>
                <p className="text-sm text-muted-foreground">
                  60 minutes, one-on-one, with a written 90-day plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results band */}
        <section className="bg-plum text-plum-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-5xl font-bold text-white sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-plum-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-plum-foreground/70">
              Average client results. Individual results may vary.
            </p>
          </div>
        </section>

        {/* Pain */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Sound familiar?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pains.map((pain) => (
              <div
                key={pain}
                className="rounded-2xl border border-border bg-card p-6 text-lg text-foreground shadow-sm"
              >
                {pain}
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">
              What's included in your deep dive
            </h2>
            <p className="mt-3 max-w-2xl text-ink-foreground/70">
              Sixty focused minutes on your numbers - and a plan you can act on the same week.
            </p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink"
                  >
                    ✓
                  </span>
                  <span className="text-base text-ink-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who this is for */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Who this is for</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Own or lead a hair salon, beauty salon, or multi-stylist business",
              "Feel like money is coming in but not staying",
              "Want clarity on your numbers without the overwhelm",
              "Are serious about improving profit and paying yourself properly",
              "Value honest, Profit First inspired guidance from someone who understands the salon industry",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink"
                >
                  ✓
                </span>
                <span className="text-base text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why this - real numbers from real salons */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Real Numbers From Real Salons</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Average client results: $164K increased revenue, $55K increased profit,
            $114K increased cash reserves.
          </p>
          <div className="mt-8 space-y-4">
            <blockquote className="rounded-2xl border border-border bg-card p-6 shadow-sm text-foreground">
              "Since working with my CFO I have gotten my financials under control and
              am actively making profit and saving for taxes."
              <footer className="mt-3 text-sm text-muted-foreground">- Bodhi Sanctuary</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-border bg-card p-6 shadow-sm text-foreground">
              "Our business is so much better with Erika. We finally understand our numbers."
              <footer className="mt-3 text-sm text-muted-foreground">- Bon Bini Aesthetics</footer>
            </blockquote>
          </div>
          <p className="mt-8 text-lg text-foreground">
            This is the same process that got these results - condensed into one 60-minute
            session, at half price.
          </p>
        </section>

        {/* Offer */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-4 py-14 lg:py-20">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-md sm:p-10">
              <div className="grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                <div className="text-center sm:text-left">
                  <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wider text-primary-foreground uppercase">
                    50% off
                  </span>
                  <p className="mt-4 flex items-baseline justify-center gap-3 sm:justify-start">
                    <span className="font-display text-2xl text-muted-foreground line-through">
                      $500
                    </span>
                    <span className="font-display text-5xl font-bold text-foreground">$250</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">One-time, paid upfront</p>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl">The Profit Clarity Analysis</h2>
                  <ol className="mt-4 space-y-3">
                    {[
                      "Book & pay securely online.",
                      "Complete a short intake form.",
                      "Join your 60-minute one-on-one call.",
                    ].map((step, i) => (
                      <li key={step} className="flex gap-3 text-foreground">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <p className="mt-8 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
                We hold a limited number of these sessions each month. This 50% offer ends{" "}
                <strong className="text-foreground">{OFFER_EXPIRES}</strong>.{" "}
                <span className="italic">[PLACEHOLDER date - set before launch.]</span>
              </p>

              <a
                href="#claim"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Claim My 50% Off Deep Dive
              </a>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">What salon owners say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.quote} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <blockquote className="text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> - {t.business}
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-8">
            {[
              "QuickBooks Certified ProAdvisor",
              "Profit First Certified",
              "Advanced Certified PFP",
            ].map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
        </section>

        {/* About the advisor */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-4xl gap-6 px-4 py-14 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center lg:py-20">
            <img
              src={advisorHeadshot}
              alt="Ross Loveland, Advanced Certified Profit First Professional"
              loading="lazy"
              width={683}
              height={1024}
              className="h-32 w-32 rounded-full object-cover shadow-sm sm:h-40 sm:w-40"
            />
            <div>
              <h2 className="text-3xl">Meet The People Behind Your Numbers</h2>
              <p className="mt-3 text-sm font-semibold tracking-wide text-primary uppercase">
                Backed by a team of dedicated Profit Advisors - including Nicole, Patrick,
                Alexandra, and Erika - who work exclusively with salons.
              </p>
              <p className="mt-3 text-muted-foreground">
                Ross Loveland is an Advanced Certified Profit First Professional and Certified Master
                who has helped hundreds of salons increase profit, take home more money, and build
                businesses that feel calm and predictable. You're supported by a warm, knowledgeable
                team who understands the beauty industry inside and out.
              </p>
            </div>
          </div>
        </section>

        {/* Tools we work inside */}
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            We work inside the tools you already use
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {["QuickBooks Online", "ProConnect", "GoHighLevel"].map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Questions, answered</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-foreground">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Condensed results band */}
        <section className="bg-plum text-plum-foreground">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-plum-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-plum-foreground/70">
              Average client results. Individual results may vary.
            </p>
          </div>
        </section>

        {/* Final CTA + form */}
        <section id="claim" className="scroll-mt-24 bg-ink text-ink-foreground">
          <div className="mx-auto max-w-3xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">
              Claim your 50% off Profit Clarity Analysis
            </h2>
            <p className="mt-3 text-ink-foreground/75">
              Tell us a little about your salon. Next you'll pay securely and pick your time.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold text-foreground">
                True Profit Salons
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Bookkeeping, CFO advisory, and tax - built for salon owners.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="hover:text-primary">
                  {PHONE}
                </a>
                <span className="mx-2">•</span>
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-primary">
                  {EMAIL}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fully remote team, based in the U.S. - Mon–Fri, 9am–5pm MST.
              </p>
            </div>
            <nav aria-label="Footer" className="text-sm">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
                <li>
                  <a href="#claim" className="hover:text-primary">
                    Book the analysis
                  </a>
                </li>
                <li>
                  <a href="https://trueprofitsalons.com" className="hover:text-primary">
                    Main site
                  </a>
                </li>
                <li>
                  <a href="https://trueprofitsalons.com/privacy" className="hover:text-primary">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="hover:text-primary">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" className="hover:text-primary">
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
            Average client results. Individual results may vary. © {new Date().getFullYear()} True
            Profit Salons. True Profit Salons is a DBA of Grow Green Financial, LLC.
          </p>
        </div>
      </footer>

      <StickyMobileCta />
    </div>
  );
}
