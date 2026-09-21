import { createFileRoute } from "@tanstack/react-router";
import {
  Armchair,
  Check,
  Facebook,
  Flower2,
  HeartHandshake,
  Instagram,
  Leaf,
  Lightbulb,
  Linkedin,
  Quote,
  Sparkles,
  Users,
  Youtube,
} from "lucide-react";
import advisorHeadshot from "@/assets/advisor-headshot.jpg";
import { LeadForm } from "@/components/lp/LeadForm";
import { StickyMobileCta } from "@/components/lp/StickyMobileCta";
import { HlsVideo } from "@/components/lp/HlsVideo";
import { YouTubeEmbed } from "@/components/lp/YouTubeEmbed";

const HERO_VIDEO_SRC =
  "https://customer-vgdtdepv6dn1f10z.cloudflarestream.com/8543d084481d80b5128520b61b1d9383/manifest/video.m3u8";
// Cloudflare Stream can render a poster frame directly from the video itself
// (time=0s = first frame), so the poster always matches what's about to play.
const HERO_VIDEO_POSTER =
  "https://customer-vgdtdepv6dn1f10z.cloudflarestream.com/8543d084481d80b5128520b61b1d9383/thumbnails/thumbnail.jpg?time=0s&height=900";

const CLIENT_STORIES = [
  { videoId: "aH0uhrRZhXA", name: "Tabatha Barnaby", business: "Julia Grace Salon" },
  { videoId: "j7xJvcIT044", name: "Natalie Crosser", business: "Salon Prism" },
  { videoId: "bgauiEA1gfI", name: "Rosie", business: "The Vault Salon" },
  { videoId: "c94vXqYjj5Y", name: "Kara Archer", business: "Salon Gloss" },
  { videoId: "w8NDQRSSgD0", name: "Mandy", business: "Fix Salon Seattle" },
];

const TITLE =
  "Profit Clarity Analysis for Spa Owners - 50% Off | True Profit Salons";
const DESCRIPTION =
  "A 60-minute one-on-one Comprehensive Analysis of your spa's numbers with a Profit First Certified spa CFO. Normally $500 - now $250 for a limited time.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const PHONE = "+1 385-985-7709";
const EMAIL = "hello@trueprofitsalons.com";


// Real client averages, confirmed from the live site (trueprofitsalons.com).
const stats = [
  { label: "Average Increase in Revenue Per Year", value: "$164K" },
  { label: "Average Increase in Profit", value: "$30K–$50K" },
  { label: "Increased In Cash Reserves", value: "$114K" },
];

const pains = [
  "Money's coming in, but it never seems to stay.",
  "You don't actually know what you pay yourself vs. what the business owes.",
  "Your bookkeeper (or spreadsheet) tells you the past, not what to do next.",
  "You've never gotten a straight answer on pricing, service mix, or margins.",
];

const included = [
  "A full review of your bookkeeping and financial records.",
  "A clear snapshot of current revenue, expenses, and real profit.",
  "Review of owner's pay, cash flow, and overall financial health.",
  "Quick check of pricing, service mix, and margins to spot hidden leaks.",
  "Your top 3–5 opportunities to protect and increase profit.",
  "A simple 90-day action plan you can implement with us, your current accountant, or on your own.",
];

const whoThisIsFor = [
  {
    icon: Flower2,
    text: "Own or lead a spa or a multi-location beauty business",
  },
  { icon: Armchair, text: "Feel like money is coming in but not staying" },
  { icon: Users, text: "Want clarity on your numbers without the overwhelm" },
  {
    icon: Lightbulb,
    text: "Are serious about improving profit and paying yourself properly",
  },
  {
    icon: HeartHandshake,
    text: "Value honest, Profit First inspired guidance from someone who understands the spa industry",
  },
];


const testimonials = [
  {
    quote:
      "Pamela & Alex are the best! They've allowed us to truly scale and live by Profit First.",
    name: "Parlour in the Woods",
    business: "Salon Owner",
  },
  {
    quote:
      "This has been the financial freedom I needed. It has paid for itself. My CFO is the best - easy to work with, always prepared, and goes above and beyond.",
    name: "TLoren",
    business: "Salon Owner",
  },
  {
    quote:
      "Working with this company has sincerely helped me understand my numbers.",
    name: "N Natural Hair Studio",
    business: "Salon Owner",
  },
];

const faqs = [
  {
    q: "What happens after I book?",
    a: "You'll pay securely via Stripe to confirm your spot, complete a short intake form about your spa, and then join your 60-minute call at the time you picked.",
  },
  {
    q: "How is this different from a free consultation?",
    a: "This isn't a sales call. It's a paid, structured 60-minute session built around your actual numbers, and you leave with a written 90-day action plan - not a pitch for more services.",
  },
  {
    q: "Who will I be meeting with?",
    a: "A Profit First Certified spa Profit Advisor from the True Profit Salons team.",
  },
  {
    q: "What if my books are messy or out of date?",
    a: "That's fine. Bring what you have. Part of the session is identifying what needs to be cleaned up and what to prioritize first.",
  },
  {
    q: "Do I need to be on QuickBooks?",
    a: "No. We work with QuickBooks Online, Xero, spreadsheets, or no formal system at all - the intake form asks what you currently use so we can prepare.",
  },
  {
    q: "Is this only for spas already doing well, or can newer businesses book too?",
    a: "This session is built for spa owners who want clarity on their numbers, whatever stage they're at - from those feeling stuck to those ready to scale.",
  },
  {
    q: "Will you try to sell me on ongoing bookkeeping or CFO services afterward?",
    a: "If ongoing support looks like a fit based on what we find, we'll say so - but the 90-day plan is yours to use with us, your current accountant, or on your own either way.",
  },
  {
    q: "Do you only work with spas?",
    a: "Yes. We work exclusively with spas.",
  },
];

function CompactCta() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 border-t border-border px-4 py-7 sm:flex-row sm:items-center">
      <div>
        <p className="font-display text-xl font-semibold text-foreground">Ready to see what your numbers are saying?</p>
        <p className="mt-1 text-sm text-muted-foreground">Get clear priorities and a practical 90-day plan.</p>
      </div>
      <a
        href="#claim"
        className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Claim My 50% Off Comprehensive Analysis
      </a>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:py-3">
          <div className="min-w-0 flex-1 text-sm">
            <p className="whitespace-nowrap font-display text-sm font-semibold text-foreground sm:text-base">
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
            className="shrink-0 whitespace-nowrap rounded-full bg-primary px-3 py-2.5 text-center text-xs font-semibold leading-tight text-primary-foreground transition-opacity hover:opacity-90 sm:px-6 sm:text-sm"
          >
            <span className="sm:hidden">Claim 50% Off</span>
            <span className="hidden sm:inline">Claim 50% Off Comprehensive Analysis</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="border-b border-border bg-cream">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-7 lg:grid-cols-2 lg:items-center lg:py-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wider text-accent-foreground uppercase">
                Limited time - 50% off
              </span>
              <h1 className="mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
                Find Out Exactly Where Your Spa's Profit Is Leaking - In 60 Minutes
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                A one-on-one Comprehensive Analysis of your numbers with a Profit First Certified spa CFO.
              </p>
              <a
                href="#claim"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Claim My 50% Off Comprehensive Analysis
              </a>
              <div className="mt-5 flex items-end gap-3" aria-label="Normally $500, now $250 for 60 minutes">
                <span className="text-lg text-muted-foreground line-through">$500</span>
                <span className="font-display text-5xl font-bold leading-none text-gold">$250</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">60 minutes</span>
                <span aria-hidden="true">•</span>
                <span>Pay securely via Stripe</span>
              </div>

            </div>

            <div className="relative overflow-hidden rounded-3xl bg-ink shadow-lg">
              <HlsVideo
                src={HERO_VIDEO_SRC}
                ariaLabel="Profit Clarity Analysis explainer video"
                className="aspect-video w-full object-cover"
                poster={HERO_VIDEO_POSTER}
              />
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-4 pt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted By 500+ Spas
            </p>
          </div>
          <div className="mt-5 w-full overflow-hidden bg-[#f9d7e6] py-7 sm:py-9">
            <img
              src="https://trueprofitsalons.com/wp-content/uploads/2026/01/True-profit-Logos-v3.gif"
              alt="Logos of spas that trust True Profit Salons"
              loading="lazy"
              className="mx-auto h-24 w-auto sm:h-32"
            />
          </div>
        </section>

        {/* Who we are */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center lg:py-16">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gold text-white shadow-md">
              <Leaf aria-hidden="true" className="h-9 w-9" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who Are We</p>
              <h2 className="mt-2 text-2xl sm:text-3xl">Profit advisors who understand the beauty business.</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                We're a team of Profit First Certified advisors who work exclusively with spas, backed by dedicated specialists who know the numbers behind your chairs, services, retail, and team.
              </p>
            </div>
          </div>
        </section>

        {/* Results band */}
        <section className="bg-plum text-plum-foreground">
          <div className="mx-auto max-w-6xl px-4 py-6 lg:py-8">
            <div className="grid gap-6 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-wider text-plum-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-plum-foreground/70">
              Average client results. Individual results may vary.
            </p>
          </div>
        </section>

        {/* Pain */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Are You Facing These Problems?</h2>
          <ul className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {pains.map((pain) => (
              <li key={pain} className="flex gap-3 text-lg text-foreground">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-white shadow-sm"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </section>
        <CompactCta />

        {/* What's included */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">
              What's Included in Your Comprehensive Analysis
            </h2>
            <p className="mt-3 max-w-2xl text-ink-foreground/70">
              60 focused minutes on your numbers - and a plan you can act on the same week.
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
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl sm:text-4xl">Who this is for</h2>
            <ul className="mt-10 grid gap-x-14 gap-y-9 sm:grid-cols-2">
              {whoThisIsFor.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-white shadow-sm">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="pt-2 text-base text-foreground/90">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why this - real numbers from real spas */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">Real Numbers From Real Spas</h2>
            <p className="mt-4 max-w-2xl text-lg text-gold">
              Average client results: $164K average increase in revenue per year, $30K–$50K average increase in profit,
              and $114K increased in cash reserves.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote aria-hidden="true" className="h-7 w-7 fill-gold text-gold" />
                <p className="mt-3 font-display text-xl italic leading-relaxed text-ink-foreground">Since working with my CFO I have gotten my financials under control and am actively making profit and saving for taxes.</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">Bodhi Sanctuary</footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote aria-hidden="true" className="h-7 w-7 fill-gold text-gold" />
                <p className="mt-3 font-display text-xl italic leading-relaxed text-ink-foreground">Our business is so much better with Erika. We finally understand our numbers.</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">Bon Bini Aesthetics</footer>
              </blockquote>
            </div>
            <p className="mt-8 text-lg text-ink-foreground/90">
              This is the same process that got these results - condensed into one 60-minute
              session, at half price.
            </p>
          </div>
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

              <p className="mt-8 text-sm text-muted-foreground">
                We hold a limited number of these sessions each month.
              </p>

              <a
                href="#claim"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Claim My 50% Off Comprehensive Analysis
              </a>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">What spa owners say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.quote} className="rounded-2xl bg-cream p-6 shadow-sm">
                <span className="mb-5 block h-1 w-10 rounded-full bg-primary" aria-hidden="true" />
                <blockquote className="text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> - {t.business}
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-8">
            {[
              "QuickBooks Certified",
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
        <CompactCta />

        {/* Video testimonials */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl sm:text-4xl">Client Stories, In Their Own Words</h2>
            <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-color:var(--color-primary)_var(--color-border)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border">
              {CLIENT_STORIES.map(({ videoId, name, business }) => (
                <figure key={videoId} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%]">
                  <YouTubeEmbed videoId={videoId} title={`${name}, ${business}`} />
                  <figcaption className="mt-3 text-sm font-semibold text-foreground">
                    {name} <span className="font-normal text-muted-foreground">- {business}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About the advisor */}
        <section>
          <div className="mx-auto max-w-5xl px-4 py-14 lg:py-20">
            <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-md sm:grid-cols-2">
              <img
                src={advisorHeadshot}
                alt="Ross Loveland, Advanced Certified Profit First Professional"
                loading="lazy"
                width={683}
                height={1024}
                className="h-64 w-full object-cover sm:h-full"
              />
              <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
                <h2 className="text-3xl">Meet The People Behind Your Numbers</h2>
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                  Backed by a team of dedicated Profit Advisors - including Nicole, Patrick,
                  Alexandra, and Erika - who work exclusively with spas.
                </p>
                <p className="text-muted-foreground">
                  Ross Loveland is an Advanced Certified Profit First Professional and Certified Master
                  who has helped hundreds of spas increase profit, take home more money, and build
                  businesses that feel calm and predictable. You're supported by a warm, knowledgeable
                  team who understands the beauty industry inside and out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools we use */}
        <section className="bg-gold-soft">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 sm:grid-cols-[minmax(0,1fr)_auto] lg:py-16">
            <div>
              <h2 className="text-2xl sm:text-3xl">Tools We Use</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Your spa is supported with proven, reliable tools like QuickBooks Online,
                ProConnect, and GoHighLevel.
              </p>
              <a
                href="#claim"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Claim My 50% Off Comprehensive Analysis
              </a>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["QuickBooks Online", "ProConnect", "GoHighLevel"].map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-white">
                    <Sparkles aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-foreground">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
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

        {/* Final CTA + form */}
        <section id="claim" className="scroll-mt-24 bg-ink text-ink-foreground">
          <div className="mx-auto max-w-3xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">
              Claim your 50% off Profit Clarity Analysis
            </h2>
            <p className="mt-3 text-ink-foreground/75">
              Tell us a little about your spa. Next you'll pay securely and pick your time.
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
                Bookkeeping, CFO advisory, and tax - built for spa owners.
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
            <div className="text-sm">
              <nav aria-label="Footer" className="text-muted-foreground">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  <li>
                    <a href="#claim" className="hover:text-primary">
                      Book the analysis
                    </a>
                  </li>
                  <li>
                    <a href="https://trueprofitsalons.com/privacy-policy/" className="hover:text-primary">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className="mt-4 flex items-center gap-4 text-muted-foreground">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rossloveland/"
                    aria-label="LinkedIn"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/trueprofitsalons/"
                    aria-label="Instagram"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/TrueProfitSalons/"
                    aria-label="Facebook"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@TrueProfitSalons"
                    aria-label="YouTube"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
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
