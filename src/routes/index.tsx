import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Facebook,
  ImageIcon,
  Instagram,
  Linkedin,
  PieChart,
  Receipt,
  Star,
  TrendingDown,
  Wallet,
  Youtube,
} from "lucide-react";
import { LeadForm } from "@/components/lp/LeadForm";
import { StickyMobileCta } from "@/components/lp/StickyMobileCta";
import { HlsVideo } from "@/components/lp/HlsVideo";
import { YouTubeEmbed } from "@/components/lp/YouTubeEmbed";
import { ScrollCarousel } from "@/components/lp/ScrollCarousel";
import cariLovelandAsset from "@/assets/cari-loveland.png.asset.json";
import trustedSpasLogosAsset from "@/assets/trusted-spas-smooth.webp.asset.json";
import trueProfitLogoAsset from "@/assets/true-profit-salons-logo.png.asset.json";
import eventPhoto1 from "@/assets/event-photo-1.jpg.asset.json";
import eventPhoto2 from "@/assets/event-photo-2.jpg.asset.json";
import eventPhoto3 from "@/assets/event-photo-3.jpg.asset.json";
import eventPhoto4 from "@/assets/event-photo-4.jpg.asset.json";
import eventPhoto5 from "@/assets/event-photo-5.jpg.asset.json";
import eventPhoto6 from "@/assets/event-photo-6.jpg.asset.json";
import eventPhoto7 from "@/assets/event-photo-7.jpg.asset.json";
import eventPhoto8 from "@/assets/event-photo-8.jpg.asset.json";

const HERO_VIDEO_SRC =
  "https://customer-vgdtdepv6dn1f10z.cloudflarestream.com/8543d084481d80b5128520b61b1d9383/manifest/video.m3u8";

// Quotes are taken word for word from each client's video (filler words like 'um' removed).
const CLIENT_STORIES = [
  {
    videoId: "aH0uhrRZhXA",
    name: "Tabatha Barnaby",
    business: "Julia Grace Salon",
    quote:
      "My profit has gone up, my owner's pay has gone up. I've had more savings and more money, more working capital than I've ever had, and I owe that to True Profit Salons.",
  },
  {
    videoId: "j7xJvcIT044",
    name: "Natalie Crosser",
    business: "Salon Prism",
    quote:
      "It's definitely empowered [me] to pay myself more, which makes the business more rewarding.",
  },
  {
    videoId: "bgauiEA1gfI",
    name: "Rosie",
    business: "The Vault Salon",
    quote:
      "I've actually taken my first profit check ever since doing it with the True Profit Salons method, and that has been a huge win for me.",
  },
  {
    videoId: "c94vXqYjj5Y",
    name: "Kara Archer",
    business: "Salon Gloss",
    quote:
      "My profit grows and grows and grows... it's great to see it on paper, but when the money is actually in my bank account, it's a whole lot better.",
  },
  {
    videoId: "w8NDQRSSgD0",
    name: "Mandy",
    business: "Fix Salon Seattle",
    quote:
      "I am an expert at doing hair. I am not an expert at numbers, and so I came to True Profit Salons to have somebody else help guide me to the success I needed in finances.",
  },
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

// Founders only: real photos (Ross from the client's site, Cari supplied by the client).
const founders = [
  {
    name: "Ross Loveland",
    role: "Founder & CEO",
    photo: "https://trueprofitsalons.com/wp-content/uploads/2026/09/Ross-loveland-6129.jpg",
  },
  {
    name: "Cari Loveland",
    role: "VP Marketing & Strategic Growth",
    photo: cariLovelandAsset.url,
  },
];

// Four main problems, taken from the client's own pain points.
const problems = [
  {
    icon: TrendingDown,
    title: "Money Doesn't Stay",
    text: "You're busy and bringing in revenue, but there's never much left at the end of the month.",
  },
  {
    icon: Wallet,
    title: "Owner Pay",
    text: "Your team gets paid on schedule. Your own paycheck is whatever is left over.",
  },
  {
    icon: PieChart,
    title: "Service Profitability",
    text: "You don't know which services actually make you money and which ones cost you.",
  },
  {
    icon: Receipt,
    title: "Tax Surprises",
    text: "Tax season arrives and you never know what you'll owe or whether the cash is there.",
  },
];

const included = [
  {
    title: "Full Books Review",
    text: "We go through your bookkeeping and financial records to check that your numbers are accurate and up to date.",
  },
  {
    title: "P&L Analysis",
    text: "We take your profit and loss statement and turn it into clear conclusions about where your money is going.",
  },
  {
    title: "Owner Pay & Cash Flow",
    text: "We look at what you pay yourself, how cash moves through the business, and how healthy it is overall.",
  },
  {
    title: "Pricing & Margins",
    text: "We check your pricing, service mix, and margins to find the services quietly costing you money.",
  },
  {
    title: "Where to Improve",
    text: "We point out the 3 to 5 changes that would do the most for your profit.",
  },
  {
    title: "90-Day Action Plan",
    text: "A simple written plan you can follow with us, with your current accountant, or on your own.",
  },
];

const faqs = [
  {
    q: "What is the Comprehensive Analysis?",
    a: "A one-on-one, 60-minute call with a Profit First Certified advisor. We go through your books and numbers with you and give you a written 90-day plan.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Someone from our team will contact you to set up a call. Payment details are shared after that. There is nothing to pay on this page.",
  },
  {
    q: "Do you only work with spas?",
    a: "Yes. We work exclusively with spas and beauty businesses.",
  },
  {
    q: "Do you help with owner pay?",
    a: "Yes. Owner pay strategy is a core part of what we do.",
  },
  {
    q: "Can you help with pricing or my service menu?",
    a: "Yes. We help you price your services so they support healthy margins.",
  },
  {
    q: "Do you work virtually?",
    a: "Yes. Our team is fully remote and supports spas across the U.S.",
  },
];

// Designed cover for the hero video (shown until play is pressed).
function HeroCover({ photo }: { photo: string }) {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-plum via-plum to-ink">
      <img
        src={photo}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 h-full w-[52%] object-cover object-top [-webkit-mask-image:linear-gradient(to_right,transparent,black_40%)] [mask-image:linear-gradient(to_right,transparent,black_40%)]"
      />
      <div className="absolute inset-y-0 left-0 flex w-[58%] flex-col justify-center gap-2 p-4 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
          Profit Clarity Analysis
        </p>
        <p className="font-display text-xl font-bold uppercase leading-[1.05] text-white sm:text-3xl">
          Where is your spa's <span className="text-gold">profit leaking?</span>
        </p>
      </div>
      <div className="absolute bottom-3 right-3 hidden items-center gap-2 rounded-xl bg-card/95 px-3 py-2 shadow-lg sm:flex">
        <span className="flex text-gold" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
        <span className="text-xs font-semibold text-foreground">Trusted by 500+ spas</span>
      </div>
    </div>
  );
}

// Photos from industry events. Each slot shows a placeholder until `src` is set.
// To fill one, add the image file (e.g. under src/assets or via Lovable's upload) and set its src.
const EVENTS_HEADING = "Our Experts at Leading Industry Events";
const eventPhotos: { src: string; alt: string }[] = [
  { src: eventPhoto1.url, alt: "Ross at an industry event" },
  { src: eventPhoto2.url, alt: "Ross at an industry event" },
  { src: eventPhoto3.url, alt: "Ross at an industry event" },
  { src: eventPhoto4.url, alt: "Ross at an industry event" },
  { src: eventPhoto5.url, alt: "Ross at an industry event" },
  { src: eventPhoto6.url, alt: "Ross at an industry event" },
  { src: eventPhoto7.url, alt: "Ross at an industry event" },
  { src: eventPhoto8.url, alt: "Ross at an industry event" },
];

const ctaClass =
  "inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto";

function CtaButton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 text-center">
      <a href="#claim" className={ctaClass}>
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
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
          <a href="#hero" aria-label="True Profit Salons - back to top" className="shrink-0">
            <img
              src={trueProfitLogoAsset.url}
              alt="True Profit Salons"
              className="h-11 w-auto sm:h-12"
            />
          </a>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          >
            <a href="#problems" className="hover:text-primary">Problems We Solve</a>
            <a href="#included" className="hover:text-primary">What's Included</a>
            <a href="#stories" className="hover:text-primary">Client Stories</a>
            <a href="#who-we-are" className="hover:text-primary">Our Team</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a
            href="#claim"
            className="hidden shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Claim My 50% Off Comprehensive Analysis
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="border-b border-border bg-cream">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-7 lg:grid-cols-2 lg:items-center lg:py-10">
            <div>
              <h1 className="text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.2rem]">
                Find Out Where Your Spa's Profit Is Leaking
                <span className="block text-gold">In 60 Minutes</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                A one-on-one Comprehensive Analysis of your numbers with a Profit First Certified spa CFO.
              </p>

              {/* Offer: price and its supporting points sit together on one line, above the CTA */}
              <div
                className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2"
                aria-label="Normally $500, now $250"
              >
                <div className="flex items-end gap-3">
                  <span className="text-lg text-muted-foreground line-through">$500</span>
                  <span className="font-display text-5xl font-bold leading-none text-gold">$250</span>
                </div>
                <ul className="flex flex-nowrap items-center gap-x-1 text-[9.5px] font-medium text-foreground/80 sm:gap-x-3 sm:text-sm">
                  <li className="inline-flex items-center whitespace-nowrap rounded-full bg-accent px-1.5 py-1 text-[8px] font-semibold uppercase text-accent-foreground sm:px-3 sm:text-xs sm:tracking-wider">
                    Limited Time Offer
                  </li>
                  <li className="inline-flex items-center whitespace-nowrap">
                    <Check aria-hidden="true" className="mr-1 hidden h-3 w-3 shrink-0 text-primary sm:mr-1.5 sm:inline sm:h-4 sm:w-4" />
                    No Payment Required Today
                  </li>
                  <li className="inline-flex items-center whitespace-nowrap">
                    <Check aria-hidden="true" className="mr-1 hidden h-3 w-3 shrink-0 text-primary sm:mr-1.5 sm:inline sm:h-4 sm:w-4" />
                    Trusted By 500+ Spas
                  </li>
                </ul>
              </div>

              <a href="#claim" className={`mt-6 ${ctaClass}`}>
                Claim My 50% Off Comprehensive Analysis
              </a>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-ink shadow-lg">
              <HlsVideo
                src={HERO_VIDEO_SRC}
                ariaLabel="Profit Clarity Analysis explainer video"
                className="aspect-video w-full object-cover"
                cover={<HeroCover photo={founders[0].photo} />}
              />
            </div>
          </div>
        </section>

        {/* Trusted by: logo slider, full width, no label */}
        <section className="border-b border-border bg-background">
          <div className="overflow-hidden py-4 sm:py-6">
            <div className="trusted-logos-track flex w-max">
              <img
                src={trustedSpasLogosAsset.url}
                alt="Logos of spas that trust True Profit Salons"
                loading="lazy"
                className="block h-[clamp(56px,8.83vw,113px)] w-auto max-w-none shrink-0"
              />
              <img
                src={trustedSpasLogosAsset.url}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="block h-[clamp(56px,8.83vw,113px)] w-auto max-w-none shrink-0"
              />
            </div>
          </div>
        </section>

        {/* Who we are + team (single section) */}
        <section id="who-we-are" className="scroll-mt-24 bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:py-20">
            <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-none">
              {founders.map((f) => (
                <figure key={f.name}>
                  <img
                    src={f.photo}
                    alt={f.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-md"
                  />
                  <figcaption className="mt-3">
                    <p className="font-display text-lg font-semibold text-foreground">{f.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{f.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who We Are</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">The Team Behind Your Numbers</h2>
              <p className="mt-4 text-muted-foreground">
                Ross Loveland is an Advanced Certified Profit First Professional and Certified Master
                who has helped hundreds of spas increase profit, take home more money, and build
                businesses that feel calm and predictable.
              </p>
              <p className="mt-4 text-muted-foreground">
                We're a team of Profit First Certified advisors who work exclusively with spas.
                You're supported by Profit Advisors Nicole, Patrick, Alexandra, and Erika,
                QuickBooks Specialist Mariana, and Administrative Director Mary.
              </p>
            </div>
          </div>
        </section>

        {/* Events: our experts at industry events (photos to be added) */}
        <section id="events" className="scroll-mt-24 bg-plum/5">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl sm:text-4xl">{EVENTS_HEADING}</h2>
            <ScrollCarousel
              ariaLabel="Photos from industry events"
              trackClassName="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-color:var(--color-primary)_var(--color-border)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border"
            >
              {eventPhotos.map((photo, i) => (
                <figure key={i} className="w-[62%] shrink-0 snap-start sm:w-[34%] lg:w-[23%]">
                  {photo.src ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-md"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={`Placeholder for event photo ${i + 1}`}
                      className="grid aspect-[3/4] w-full place-items-center rounded-2xl border-2 border-dashed border-border bg-card text-center"
                    >
                      <div className="text-muted-foreground">
                        <ImageIcon aria-hidden="true" className="mx-auto h-8 w-8" />
                        <p className="mt-2 text-sm font-medium">Event photo {i + 1}</p>
                      </div>
                    </div>
                  )}
                </figure>
              ))}
            </ScrollCarousel>
          </div>
        </section>

        {/* Problems */}
        <section id="problems" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">We Find the Problem. Then We Fix It.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Built for spa owners who are busy but can't see where the profit goes.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${
                      i % 2 === 0 ? "bg-gold" : "bg-plum"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Client stories (video testimonials) */}
        <section id="stories" className="scroll-mt-24 bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl sm:text-4xl">Client Stories, In Their Own Words</h2>
            <ScrollCarousel
              ariaLabel="Client story videos"
              trackClassName="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-color:var(--color-primary)_var(--color-border)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border"
            >
              {CLIENT_STORIES.map(({ videoId, name, business, quote }) => (
                <figure key={videoId} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%]">
                  <YouTubeEmbed videoId={videoId} title={`${name}, ${business}`} />
                  <blockquote className="mt-4 font-display text-base italic leading-tight text-foreground">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-foreground">
                    {name} <span className="font-normal text-muted-foreground">- {business}</span>
                  </figcaption>
                </figure>
              ))}
            </ScrollCarousel>
          </div>
        </section>
        <CtaButton />

        {/* What's included */}
        <section id="included" className="scroll-mt-24 bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
            <h2 className="text-3xl text-ink-foreground sm:text-4xl">
              What's Included in Your Comprehensive Analysis
            </h2>
            <p className="mt-3 max-w-2xl text-ink-foreground/70">
              One 60-minute call. A written plan at the end.
            </p>
            <ol className="mt-9 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-foreground/75">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <CtaButton />

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 mx-auto max-w-3xl px-4 py-14 lg:py-20">
          <h2 className="text-3xl sm:text-4xl">Frequently Asked Questions</h2>
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
              Ready to Keep More of What You Earn?
            </h2>
            <p className="mt-3 text-ink-foreground/75">
              Tell us a little about your spa. Our team will reach out to schedule your call.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                True Profit Salons
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Bookkeeping, CFO advisory, and tax - built for spa owners.
              </p>
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

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#problems" className="hover:text-primary">Problems We Solve</a></li>
                <li><a href="#included" className="hover:text-primary">What's Included</a></li>
                <li><a href="#stories" className="hover:text-primary">Client Stories</a></li>
                <li><a href="#who-we-are" className="hover:text-primary">Our Team</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li>
                  <a
                    href="https://trueprofitsalons.com/privacy-policy/"
                    className="hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="hover:text-primary">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="break-all hover:text-primary">
                    {EMAIL}
                  </a>
                </li>
                <li>Fully remote team, based in the U.S. - Mon–Fri, 9am–5pm MST.</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} True Profit Salons. True Profit Salons is a DBA of Grow Green Financial, LLC.
          </p>
        </div>
      </footer>

      <StickyMobileCta />
    </div>
  );
}
