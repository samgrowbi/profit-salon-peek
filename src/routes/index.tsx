import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpenCheck,
  CalendarCheck,
  ChartColumn,
  Check,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  PieChart,
  Receipt,
  Star,
  Tags,
  Target,
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

// Written reviews from spa & wellness clients, word for word from trueprofitsalons.com/testimonials.
const SPA_REVIEWS = [
  {
    business: "Ivy Med Spa",
    logo: "/brand/client-ivy.webp",
    quote:
      "Erika is nothing short of phenomenal - accurate, proactive, clear, detail-oriented, and incredibly supportive.",
  },
  {
    business: "Bodhi Sanctuary",
    logo: "/brand/client-bodhi.webp",
    quote:
      "Since working with my CFO I have gotten my financials under control and am actively making profit and saving for taxes. I even received a refund thanks to her help.",
  },
  {
    business: "Bon Bini Aesthetics",
    logo: "/brand/client-bonbini.webp",
    quote:
      "Our business is so much better with Erika. We couldn't do it without her. Her spreadsheets keep us organized and we finally understand our numbers.",
  },
  {
    business: "Nature's Touch Healing Center",
    logo: "/brand/client-natures-touch.webp",
    quote:
      "Erika truly understands and cares about our business. She answers questions thoroughly and follows up quickly. We feel supported and confident.",
  },
  {
    business: "Sanctus Spa & Salon",
    logo: "/brand/client-sanctus.webp",
    quote: "I love working with Erika! She has been great and gets my chaos!",
  },
];

// Average client results, as published on trueprofitsalons.com.
const RESULTS = [
  { value: "$164K", label: "Increase in revenue" },
  { value: "$55K", label: "Increase in profit" },
  { value: "$114K", label: "Increase in cash reserves" },
];

const TITLE = "Profit Clarity Analysis for Spa Owners - 50% Off | True Profit Spas";
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
      { name: "theme-color", content: "#003149" },
    ],
  }),
  component: LandingPage,
});

const PHONE = "+1 385-985-7709";
const EMAIL = "hello@trueprofitsalons.com";

// Founders only: real photos (Ross from the client's site, Cari supplied by the client).
const founders = [
  { name: "Ross Loveland", role: "Founder & CEO", photo: "/brand/ross.webp" },
  { name: "Cari Loveland", role: "VP Marketing & Strategic Growth", photo: cariLovelandAsset.url },
];

// Advisors, photos and roles from trueprofitsalons.com/about-us/meet-the-team.
const advisors = [
  { name: "Nicole", role: "Profit Advisor", photo: "/brand/team-nicole.webp" },
  { name: "Patrick", role: "Profit Advisor", photo: "/brand/team-patrick.webp" },
  { name: "Alexandra", role: "Profit Advisor", photo: "/brand/team-alexandra.webp" },
  { name: "Erika", role: "Profit Advisor", photo: "/brand/team-erika.webp" },
  { name: "Mariana", role: "QuickBooks Specialist", photo: "/brand/team-mariana.webp" },
  { name: "Mary", role: "Administrative Director", photo: "/brand/team-mary.webp" },
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
    icon: BookOpenCheck,
    title: "Full Books Review",
    text: "We go through your bookkeeping and financial records to check that your numbers are accurate and up to date.",
  },
  {
    icon: ChartColumn,
    title: "P&L Analysis",
    text: "We take your profit and loss statement and turn it into clear conclusions about where your money is going.",
  },
  {
    icon: Wallet,
    title: "Owner Pay & Cash Flow",
    text: "We look at what you pay yourself, how cash moves through the business, and how healthy it is overall.",
  },
  {
    icon: Tags,
    title: "Pricing & Margins",
    text: "We check your pricing, service mix, and margins to find the services quietly costing you money.",
  },
  {
    icon: Target,
    title: "Where to Improve",
    text: "We point out the 3 to 5 changes that would do the most for your profit.",
  },
  {
    icon: CalendarCheck,
    title: "90-Day Action Plan",
    text: "A simple written plan you can follow with us, with your current accountant, or on your own.",
  },
];

// Adapted from the "Who This Is For" list on trueprofitsalons.com/profitclarityanalysis.
const goodFit = [
  "You own or lead a spa or med spa",
  "Money is coming in, but it isn't staying",
  "You want clarity on your numbers without the overwhelm",
  "You're serious about improving profit and paying yourself properly",
];

const steps = [
  {
    title: "Tell us about your spa",
    text: "A few quick questions so we can prepare for your numbers.",
  },
  { title: "We schedule your call", text: "Our team reaches out to book your 60-minute session." },
  {
    title: "Get your 90-day plan",
    text: "We review your numbers together and you leave with a written plan.",
  },
];

const faqs = [
  {
    q: "What is the Comprehensive Analysis?",
    a: "A one-on-one, 60-minute call with a Profit First Certified advisor. We go through your books and numbers with you and give you a written 90-day plan.",
  },
  {
    q: "Why is this a paid session when others offer free calls?",
    a: "Because it's a working session, not a sales pitch. An advisor reviews your actual numbers with you, and you leave with a written 90-day plan you can follow with us, with your current accountant, or on your own.",
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
    // Light blush cover so the video stands out against the navy hero.
    <div className="relative h-full w-full bg-gradient-to-br from-blush-soft via-blush to-blush">
      <img
        src={photo}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 h-full w-[52%] object-cover object-top [-webkit-mask-image:linear-gradient(to_right,transparent,black_40%)] [mask-image:linear-gradient(to_right,transparent,black_40%)]"
      />
      {/* Text stays left of the centered play button */}
      <div className="absolute inset-y-0 left-0 flex w-[42%] min-w-0 flex-col justify-center gap-1.5 overflow-hidden py-4 pl-4 sm:gap-2 sm:pl-7">
        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-mauve sm:text-[11px]">
          Profit Clarity Analysis
        </p>
        <p className="min-w-0 font-display text-sm leading-[1.15] text-navy sm:text-xl lg:text-[1.4rem]">
          Where is your spa's <em className="text-pink-deep">profit leaking?</em>
        </p>
      </div>
    </div>
  );
}

// Photos from industry events (in the order the client attached them).
const EVENTS_HEADING = "Our Experts at the World’s Leading Med Spa Events";
const eventPhotos = [
  eventPhoto1,
  eventPhoto2,
  eventPhoto3,
  eventPhoto4,
  eventPhoto5,
  eventPhoto6,
  eventPhoto7,
  eventPhoto8,
].map((p) => ({ src: p.url, alt: "Ross at an industry event" }));

const carouselTrack =
  "-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-color:var(--color-pink)_var(--color-border)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-pink [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border";

const CTA_LABEL = "Claim My 50% Off Comprehensive Analysis";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex text-pink" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

// Illustration of the written plan the client receives (clearly marked as a sample).
const PLAN_BARS = [
  { label: "Revenue", width: "100%", color: "bg-navy" },
  { label: "Expenses", width: "82%", color: "bg-mauve/50" },
  { label: "Owner pay", width: "11%", color: "bg-pink" },
  { label: "Profit", width: "7%", color: "bg-pink-deep" },
];
const PLAN_STEPS = [
  "Reprice low-margin services",
  "Set a fixed owner pay percentage",
  "Open a tax savings account",
];

function PlanPreview() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:mr-0">
      <figcaption className="sr-only">Sample of the written 90-day profit plan</figcaption>
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-2xl bg-blush"
      />
      <div
        aria-hidden="true"
        className="relative -rotate-1 rounded-2xl bg-white p-6 shadow-[0_30px_60px_-30px_oklch(0.297_0.065_237/0.45)] ring-1 ring-navy/5 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow !text-[10px]">Profit Clarity Analysis</p>
            <p className="mt-1 font-display text-xl text-navy">Your 90-Day Profit Plan</p>
          </div>
          <span className="rounded-md bg-blush px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
            Sample
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          P&amp;L snapshot
        </p>
        <ul className="mt-3 space-y-2.5">
          {PLAN_BARS.map((b) => (
            <li key={b.label} className="grid grid-cols-[5.5rem_1fr] items-center gap-3 text-xs">
              <span className="text-foreground">{b.label}</span>
              <span className="h-2 rounded-full bg-navy/5">
                <span className={`block h-2 rounded-full ${b.color}`} style={{ width: b.width }} />
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Top opportunities
        </p>
        <ul className="mt-3 space-y-2">
          {PLAN_STEPS.map((step) => (
            <li key={step} className="flex items-center gap-2.5 text-sm text-foreground">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blush text-pink-deep">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[11px] font-medium">
          {["Days 1-30", "Days 31-60", "Days 61-90"].map((d, i) => (
            <span
              key={d}
              className={`rounded-lg py-2 ${i === 0 ? "bg-navy text-white" : "bg-navy/5 text-navy"}`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <p
        aria-hidden="true"
        className="absolute -bottom-6 left-4 hidden items-center gap-2 rounded-full bg-white py-2 pl-2.5 pr-4 text-sm font-medium text-navy shadow-lg ring-1 ring-navy/5 sm:inline-flex"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-deep text-white">
          <FileText className="h-4 w-4" />
        </span>
        Yours to keep
      </p>
    </figure>
  );
}

// CTA repeated at each decision point; `lead` ties it to the section it follows.
function CtaButton({
  lead,
  align = "center",
  className = "mx-auto max-w-6xl px-4 pb-16 sm:pb-20",
}: {
  lead?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {lead && <p className="font-display text-xl text-navy">{lead}</p>}
      <a href="#claim" className="btn-cta w-full px-7 py-4 text-base sm:w-auto">
        {CTA_LABEL}
      </a>
      <p className="text-sm text-muted-foreground">
        <span className="line-through">$500</span>{" "}
        <span className="font-semibold text-navy">$250</span> · No payment required today
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow !text-pink" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl leading-[1.1] sm:text-[2.75rem] ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-2.5">
          <a href="#hero" aria-label="True Profit Spas - back to top" className="shrink-0">
            <img
              src="/brand/true-profit-spas-logo.webp"
              alt="True Profit Spas"
              width={126}
              height={48}
              className="h-11 w-auto sm:h-12"
            />
          </a>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-sm font-medium text-navy/80 lg:flex"
          >
            <a href="#problems" className="transition-colors hover:text-pink-deep">
              Problems We Solve
            </a>
            <a href="#included" className="transition-colors hover:text-pink-deep">
              What's Included
            </a>
            <a href="#stories" className="transition-colors hover:text-pink-deep">
              Client Stories
            </a>
            <a href="#who-we-are" className="transition-colors hover:text-pink-deep">
              Our Team
            </a>
            <a href="#faq" className="transition-colors hover:text-pink-deep">
              FAQ
            </a>
          </nav>
          <a href="#claim" className="btn-cta hidden shrink-0 px-5 py-2.5 text-sm md:inline-flex">
            Claim 50% Off
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="hero" className="navy-glow relative overflow-hidden text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:pb-32 lg:pt-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                Profit Clarity Analysis for spa owners
              </p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.05] !text-white sm:text-6xl lg:text-[4rem]">
                Find out where your spa's profit is leaking{" "}
                <em className="text-pink">in 60 minutes</em>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">
                A one-on-one Comprehensive Analysis of your numbers with a Profit First Certified
                spa CFO.
              </p>

              <div
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
                aria-label="Normally $500, now $250"
              >
                <div className="flex items-end gap-3">
                  <span className="pb-1 text-lg text-white/50 line-through">$500</span>
                  <span className="font-display text-5xl leading-none tabular-nums text-white">
                    $250
                  </span>
                  <span className="mb-1 rounded-full bg-pink px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    50% off
                  </span>
                </div>
                <a href="#claim" className="btn-cta w-full px-6 py-4 text-base sm:w-auto">
                  {CTA_LABEL}
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                {["Limited time offer", "No payment required today", "Written 90-day plan"].map(
                  (t) => (
                    <li key={t} className="inline-flex items-center gap-1.5">
                      <Check aria-hidden="true" className="h-4 w-4 text-pink" />
                      {t}
                    </li>
                  ),
                )}
              </ul>

              {/* Social proof: real spa client logos + rating */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex shrink-0 -space-x-3">
                  {SPA_REVIEWS.slice(0, 4).map((r) => (
                    <img
                      key={r.business}
                      src={r.logo}
                      alt={r.business}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full bg-white object-contain p-1 ring-2 ring-navy"
                    />
                  ))}
                </div>
                <div>
                  <Stars />
                  <p className="mt-1 text-sm text-white/80">
                    Trusted by <span className="font-semibold text-white">500+ spas</span> across
                    the U.S.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-navy-deep shadow-[0_30px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/10">
                <HlsVideo
                  src={HERO_VIDEO_SRC}
                  ariaLabel="Profit Clarity Analysis explainer video"
                  className="aspect-video w-full object-cover"
                  cover={<HeroCover photo={founders[0]!.photo} />}
                />
              </div>
              <img
                src="/brand/pf-advanced.webp"
                alt="Profit First Certified Advanced firm"
                width={96}
                height={96}
                className="absolute -bottom-8 -left-4 h-20 w-20 drop-shadow-xl sm:h-24 sm:w-24 lg:-left-8"
              />
            </div>
          </div>
        </section>

        {/* Results: overlaps the hero */}
        <section
          aria-label="Average client results"
          className="relative z-10 -mt-14 px-4 lg:-mt-16"
        >
          <div className="mx-auto max-w-4xl rounded-2xl bg-white px-3 py-6 sm:py-7 shadow-[0_24px_60px_-24px_oklch(0.297_0.065_237/0.35)] ring-1 ring-border sm:px-10">
            <dl className="grid grid-cols-3 divide-x divide-border text-center">
              {RESULTS.map((r) => (
                <div key={r.label} className="flex flex-col-reverse px-2">
                  <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{r.label}</dt>
                  <dd className="font-display text-[1.65rem] leading-tight tabular-nums text-navy sm:text-5xl">
                    <span className="text-pink-deep">+</span>
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-center text-xs text-muted-foreground">
              Average client results. Individual results may vary.
            </p>
          </div>
        </section>

        {/* Trusted by: logo slider, full width, no label */}
        <section className="bg-background">
          <div className="overflow-hidden py-8 sm:py-10">
            <div className="trusted-logos-track flex w-max">
              <img
                src={trustedSpasLogosAsset.url}
                alt="Logos of spas that trust True Profit Spas"
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

        {/* Problems */}
        <section id="problems" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Sound familiar?"
                title="We Find the Problem. Then We Fix It."
                intro="Built for spa owners who are busy but can't see where the profit goes."
              />
              <CtaButton align="start" className="mt-8 hidden lg:flex" />
            </div>
            <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {problems.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal border-t border-border py-6">
                  <Icon aria-hidden="true" className="h-6 w-6 text-mauve" strokeWidth={1.75} />
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
            <CtaButton lead="Find out which of these is costing you." className="lg:hidden" />
          </div>
        </section>

        {/* What's included: fit + sample plan, then the six deliverables */}
        <section id="included" className="scroll-mt-24 bg-blush-soft">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Your 60-minute session"
                  title="What's Included in Your Comprehensive Analysis"
                  intro="One 60-minute call. A written plan at the end."
                />
                <div className="mt-8 rounded-2xl bg-white p-6 shadow-[0_16px_40px_-24px_oklch(0.297_0.065_237/0.3)] sm:p-7">
                  <h3 className="text-xl">This is a great fit if:</h3>
                  <ul className="mt-4 space-y-3">
                    {goodFit.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blush text-pink-deep">
                          <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <PlanPreview />
            </div>

            <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              {included.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className="reveal group rounded-2xl bg-white p-6 ring-1 ring-navy/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_oklch(0.297_0.065_237/0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-blush text-pink-deep">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl tabular-nums text-navy/15 transition-colors group-hover:text-pink"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>

            <CtaButton lead="All six, in one 60-minute call." className="mt-12" />
          </div>
        </section>

        {/* Client stories (video testimonials + written spa reviews) */}
        <section id="stories" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
            <SectionHeading eyebrow="Client stories" title="Client Stories, In Their Own Words" />
            <ScrollCarousel ariaLabel="Client story videos" trackClassName={carouselTrack}>
              {CLIENT_STORIES.map(({ videoId, name, business, quote }) => (
                <figure key={videoId} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
                  <YouTubeEmbed videoId={videoId} title={`${name}, ${business}`} />
                  <blockquote className="mt-4 font-display text-lg leading-snug text-navy">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-navy">
                    {name} <span className="font-normal text-muted-foreground">- {business}</span>
                  </figcaption>
                </figure>
              ))}
            </ScrollCarousel>

            <h3 className="mt-14 text-2xl">What spa and wellness owners say</h3>
            <div className="mt-6 gap-5 sm:columns-2 lg:columns-3">
              {SPA_REVIEWS.map((r) => (
                <figure
                  key={r.business}
                  className="reveal mb-5 break-inside-avoid rounded-2xl bg-blush-soft p-6"
                >
                  <Stars className="h-3.5 w-3.5" />
                  <blockquote className="mt-3 text-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <img
                      src={r.logo}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-10 w-10 rounded-full bg-white object-contain p-1 ring-1 ring-border"
                    />
                    <span className="text-sm font-semibold text-navy">{r.business}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <CtaButton lead="Ready to see your own numbers this clearly?" />

        {/* Who we are + team */}
        <section id="who-we-are" className="scroll-mt-24 bg-blush-soft">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
              <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-none">
                {founders.map((f, i) => (
                  <figure key={f.name} className={i === 1 ? "mt-10" : ""}>
                    <img
                      src={f.photo}
                      alt={f.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[0_20px_50px_-25px_oklch(0.297_0.065_237/0.45)]"
                    />
                    <figcaption className="mt-3">
                      <p className="font-display text-lg text-navy">{f.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-mauve">
                        {f.role}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div>
                <SectionHeading eyebrow="Who we are" title="The Team Behind Your Numbers" />
                <p className="mt-5 text-lg text-muted-foreground">
                  Ross Loveland is an Advanced Certified Profit First Professional and Certified
                  Master who has helped hundreds of spas increase profit, take home more money, and
                  build businesses that feel calm and predictable.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We're a Profit First Certified Advanced firm. The Profit First method is a proven
                  cash flow system that puts profit and owner's pay first with every dollar that
                  enters your business.
                </p>
                <img
                  src="/brand/badges.webp"
                  alt="Certified QuickBooks Online ProAdvisor, Profit First Certified Professional, Profit First Certified Master"
                  width={900}
                  height={313}
                  loading="lazy"
                  className="mt-8 h-auto w-full max-w-sm"
                />
              </div>
            </div>

            <div className="mt-16 border-t border-navy/10 pt-10">
              <p className="eyebrow">Your support team</p>
              <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6">
                {advisors.map((a) => (
                  <li key={a.name} className="text-center">
                    <img
                      src={a.photo}
                      alt={a.name}
                      width={120}
                      height={120}
                      loading="lazy"
                      className="mx-auto aspect-square w-full max-w-28 rounded-2xl object-cover"
                    />
                    <p className="mt-3 font-display text-base text-navy">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.role}</p>
                  </li>
                ))}
              </ul>
            </div>
            <CtaButton lead="Work 1:1 with a Profit First Certified advisor." className="mt-14" />
          </div>
        </section>

        {/* Events */}
        <section id="events" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
            <SectionHeading eyebrow="In the industry" title={EVENTS_HEADING} />
            <ScrollCarousel ariaLabel="Photos from industry events" trackClassName={carouselTrack}>
              {eventPhotos.map((photo, i) => (
                <figure key={i} className="w-[64%] shrink-0 snap-start sm:w-[34%] lg:w-[23%]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
                  />
                </figure>
              ))}
            </ScrollCarousel>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:py-24">
            <div>
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
              <p className="mt-6 text-muted-foreground">
                Still have a question? Talk to a real person.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-navy">
                <li>
                  <a
                    href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center gap-2 hover:text-pink-deep"
                  >
                    <Phone aria-hidden="true" className="h-4 w-4 text-mauve" />
                    <span dir="ltr">{PHONE}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 break-all hover:text-pink-deep"
                  >
                    <Mail aria-hidden="true" className="h-4 w-4 text-mauve" />
                    {EMAIL}
                  </a>
                </li>
              </ul>
              <CtaButton align="start" className="mt-8 hidden lg:flex" />
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-navy [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blush text-xl leading-none text-pink-deep transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-prose text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + form */}
        <section id="claim" className="navy-glow scroll-mt-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-x-16 lg:gap-y-0 lg:py-24">
            <div className="lg:col-start-1">
              <SectionHeading
                light
                eyebrow="Limited time offer"
                title="Ready to Keep More of What You Earn?"
                intro="Tell us a little about your spa. Our team will reach out to schedule your call."
              />
              <div className="mt-6 flex items-end gap-3">
                <span className="pb-1 text-lg text-white/50 line-through">$500</span>
                <span className="font-display text-5xl leading-none tabular-nums">$250</span>
                <span className="pb-1 text-sm text-white/70">· 60 minutes · No payment today</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
              <LeadForm />
              <p className="mt-4 text-center text-sm text-white/70">
                Takes about a minute · No payment today ·{" "}
                <a
                  href="https://trueprofitsalons.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Privacy policy
                </a>
              </p>
              <img
                src="/brand/badges.webp"
                alt="Certified QuickBooks Online ProAdvisor, Profit First Certified Professional, Profit First Certified Master"
                width={900}
                height={313}
                loading="lazy"
                className="mx-auto mt-8 h-auto w-full max-w-[15rem] opacity-95"
              />
            </div>
            <div className="lg:col-start-1">
              <ol className="space-y-6 lg:mt-10">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 font-display text-pink ring-1 ring-white/15">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.title}</p>
                      <p className="mt-0.5 text-sm text-white/70">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <figure className="mt-10 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <Stars className="h-3.5 w-3.5" />
                <blockquote className="mt-3 font-display text-lg leading-snug text-white">
                  &ldquo;{SPA_REVIEWS[1]!.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-sm text-white/80">
                  <img
                    src={SPA_REVIEWS[1]!.logo}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    className="h-9 w-9 rounded-full bg-white object-contain p-0.5"
                  />
                  {SPA_REVIEWS[1]!.business}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blush">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <img
                src="/brand/true-profit-spas-logo.webp"
                alt="True Profit Spas"
                width={126}
                height={48}
                loading="lazy"
                className="h-12 w-auto"
              />
              <p className="mt-3 max-w-xs text-sm text-navy/75">
                Bookkeeping, CFO advisory, and tax - built for spa owners.
              </p>
              <ul className="mt-5 flex items-center gap-2 text-navy">
                {[
                  {
                    href: "https://www.linkedin.com/in/rossloveland/",
                    label: "LinkedIn",
                    Icon: Linkedin,
                  },
                  {
                    href: "https://www.instagram.com/trueprofitsalons/",
                    label: "Instagram",
                    Icon: Instagram,
                  },
                  {
                    href: "https://www.facebook.com/TrueProfitSalons/",
                    label: "Facebook",
                    Icon: Facebook,
                  },
                  {
                    href: "https://www.youtube.com/@TrueProfitSalons",
                    label: "YouTube",
                    Icon: Youtube,
                  },
                ].map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/70 transition-colors hover:bg-white hover:text-pink-deep"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-navy">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-navy/75">
                <li>
                  <a href="#problems" className="hover:text-pink-deep">
                    Problems We Solve
                  </a>
                </li>
                <li>
                  <a href="#included" className="hover:text-pink-deep">
                    What's Included
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-pink-deep">
                    Client Stories
                  </a>
                </li>
                <li>
                  <a href="#who-we-are" className="hover:text-pink-deep">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-pink-deep">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://trueprofitsalons.com/privacy-policy/"
                    className="hover:text-pink-deep"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-navy">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-navy/75">
                <li>
                  <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`} className="hover:text-pink-deep">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="break-all hover:text-pink-deep">
                    {EMAIL}
                  </a>
                </li>
                <li>Fully remote team, based in the U.S. - Mon–Fri, 9am–5pm MST.</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="bg-navy px-4 py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} True Profit Spas. True Profit Salons is a DBA of Grow Green
          Financial, LLC.
        </p>
      </footer>

      <StickyMobileCta />
    </div>
  );
}
